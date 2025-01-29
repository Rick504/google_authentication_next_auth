import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";
import { AuthProviderGoogle } from '../../../interfaces/auth';
import {
  authenticateWithGoogle,
  authenticateLogin,
} from '@/app/services/authGoogleService';
import { cookies } from 'next/headers';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Sign in with...',
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const user = {
          id: '1',
          name: 'MUDAR',
          email: credentials!.email,
          password: credentials!.password,
        };
        if (user.email && user.password) {
          const { token } = await authenticateLogin(user);
          const cookieStore = await cookies();
          if (token) cookieStore.set('x-access-token', token);
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
      const credentialsType = 'credentials';
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
        const { token } = await authenticateWithGoogle(authProviderGoogle);
        const cookieStore = await cookies();
        if (token) cookieStore.set('x-access-token', token);
        return true;
      }

      if (account?.type === credentialsType)
        return true;
      return false;
    },
  },
});

export { handler as GET, handler as POST }
