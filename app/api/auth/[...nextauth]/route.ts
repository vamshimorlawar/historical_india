import { connectDB } from "@/utils/db";
import User from "@/model/user";
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";
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
    async signIn({ user, account }: { user: AuthUser; account: Account }) {
      if (account?.provider == "credentials") {
        return true;
      }
    },
  },
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
