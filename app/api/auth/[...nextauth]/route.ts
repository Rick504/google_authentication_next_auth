import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";
import { AuthProviderGoogle } from '../../../interfaces/auth';
import { authService } from '@/app/services/authGoogleService';


const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Sign in with...',
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        // console.log('credentials::', credentials);
        const user = {
          id: '1',
          name: 'MUDAR',
          email: credentials!.email,
          qualquercoisa: 'qualquercoisa',
        };
        if (user.email) {
          return user;
        } else {
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || `user`,
      clientSecret: process.env.GOOGLE_SECRET || 'error message',
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      const accounTypeProvider = 'oauth';
      if (account?.type === accounTypeProvider) {
        const authProviderGoogle: AuthProviderGoogle = {
          provider: 'google',
          idTokenGoogle: process.env.GOOGLE_ID || '',
          user: {
            name: user.name || '',
            email: user.email || '',
            image: user.image || '',
          },
        };
        const response = await authService.authenticateWithGoogle(
          authProviderGoogle
        );
        return response;
      }
      return false;
    },
  },
});

export { handler as GET, handler as POST }
