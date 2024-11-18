import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
         CredentialsProvider({
            name: 'Sign in with...',
            credentials: {
                email: {},
                password: {},
            },
            async authorize(credentials) {
                console.log('credentials::', credentials)
                const user = { id: '1', name: 'MUDAR', email: credentials!.email}
                if (user.email) {
                    return user
                } else {
                    return null
                }
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID || `user`,
            clientSecret: process.env.GOOGLE_SECRET || 'error message'
        })
    ],
})

export { handler as GET, handler as POST }
