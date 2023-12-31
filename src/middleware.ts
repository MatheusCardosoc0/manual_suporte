import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
    const token = await getToken({
        req: request,
        secret: process.env.NEXTAUTH_SECRET,
    })

    const redirectUrl = new URL('/', request.url)

    const regex = new RegExp('\\b' + 'main' + '\\b', 'i')

    if (!token && regex.test(request.url)) {
        return NextResponse.redirect(redirectUrl)
    }

    if (token && !regex.test(request.url)) {
        return NextResponse.redirect(new URL('/main/informação', request.url))
    }
}

export const config = {
    matcher: ['/main/:path*', '/'],
}