import { connectDB } from "@/utils/db";
import User from "@/model/User";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { Account, User as AuthUser } from "next-auth";

export const authOptions: any = {
    providers: [
      CredentialsProvider({
        id: "credentials",
        name: "credentials",
        credentials: {
          email: { label: "Email", type: "text" },
          password: { label: "Password", type: "password" },
        },
        async authorize(credentials: any) {
          await connectDB();
          try {
            const user = await User.findOne({ email: credentials.email });
            if (user) {
              const passwordMatch = await bcrypt.compare(
                credentials.password,
                user.password
              );
              if (passwordMatch) {             
                return user;
              }
            }
          } catch (error: any) {
            throw new Error(error);
          }
        },
      }),
    ],
    callbacks: {
      async jwt({ token, account, user }: { token: any, user: AuthUser; account: Account}) {
        // Persist the OAuth access_token and or the user id to the token right after signin
        if (account) {
          token.accessToken = account.access_token
          token.id = user.id
        }
        return token;
      },  
      async session({ session, token, user }: { session: any, token: any, user: AuthUser}) {
        // Send properties to the client, like an access_token and user id from a provider.
        session.accessToken = token.accessToken
        session.user.id = token.id
        
        return session
      },
      async signIn({ user, account }: { user: AuthUser, account: Account}) {
        if (account?.provider == "credentials") {
          
          return user;
        }
      },
    },
  };