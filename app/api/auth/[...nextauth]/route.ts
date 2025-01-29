import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";
import { AuthProviderGoogle } from '../../../interfaces/auth';
import {
  authenticateWithGoogle,
  authenticateLogin,
} from '@/app/services/authenticateService';
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
        const initInfoUser = {
          id: null,
          email: credentials!.email,
          password: credentials!.password,
        };
        if (initInfoUser.email && initInfoUser.password) {
          const { user, token } = await authenticateLogin(initInfoUser);
          const cookieStore = await cookies();
          if (token) cookieStore.set('x-access-token', token);
          return {
            id: user.id,
            name: user.name,
            email: user.email,
            image: user.image? user.image : '',
          };
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
