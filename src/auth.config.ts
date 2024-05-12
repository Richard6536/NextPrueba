import type { NextAuthConfig } from 'next-auth';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import logIn from '@/api/auth/logInService'
import { z } from 'zod';
 
export const authConfig: NextAuthConfig = {
  pages: {
    signIn: '/auth/login',
    newUser: '/auth/register'
  },
  providers: [
    Credentials({
        async authorize(credentials) {
          const parsedCredentials = z
            .object({ email: z.string().email(), password: z.string().min(6) })
            .safeParse(credentials);
            
            if( !parsedCredentials.success ) return null;
            
            const { email, password } = parsedCredentials.data;
            
            try {

                const user = await logIn(email, password);

                if( !user.response.success )
                  return null;

                console.log(user);
                return user;

              } catch (error) {

                console.error(error);
                return null;
              }
        },
      }),
  ]
};

export const { signIn, signOut, auth, handlers } = NextAuth( authConfig )