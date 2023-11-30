import getSession from './getCurrentSection'

const getCurrentUser = async () => {
    try {
        const session = await getSession()

        if (!session?.user?.email) {
            return null
        }

        const response = await fetch(`http://localhost:3000/api/get`, {
            next: { revalidate: 0 }
        })
        const dataOut = await response.json()
        const dataIn = dataOut.values.slice(1)

        const currentUser = dataIn.find((items: any) => items[2] === session.user?.email)

        if (!currentUser) {
            return null
        }

        return {
            name: currentUser[1],
            email: currentUser[2]
        }
    } catch (error: any) {
        return null
    }
}

export default getCurrentUser