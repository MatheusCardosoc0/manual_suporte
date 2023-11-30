import bcrypt from 'bcrypt'
import { google } from 'googleapis'
import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'

import { NextResponse } from 'next/server'
import { z } from 'zod'

export async function POST(request: Request) {
    try {
        const body = await request.json()

        const bodySchema = z.object({
            name: z.string(),
            email: z.string(),
            password: z.string(),
        })

        const { email, name, password } = bodySchema.parse(body)

        const hashedPassword = await bcrypt.hash(password, 12)

        const users = await axios.get('http://localhost:3000/api/get')
        const verify = users.data.values.slice(1).find((user: any) => user[2] === email)

        if (verify) {
            throw new Error("User already exist")
        }

        const uniqueID = uuidv4()

        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.NEXT_PUBLIC_EMAIL,
                private_key: process.env.NEXT_PUBLIC_PRIVATE_KEY?.replace(/\\n/g, '\n')
            },
            scopes: [
                "https://www.googleapis.com/auth/drive",
                "https://www.googleapis.com/auth/drive.file",
                "https://www.googleapis.com/auth/spreadsheets"
            ]
        })

        const sheets = google.sheets({
            auth,
            version: 'v4'
        })

        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.NEXT_PUBLIC_SHEET_ID,
            range: 'Users!A:F',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [
                    [uniqueID, name, email, hashedPassword]
                ]
            }
        })

        return NextResponse.json(response.data)
    } catch (error) {
        return new NextResponse(`${error}`, { status: 500 })
    }
}