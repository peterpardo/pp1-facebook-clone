import User from "@/models/user";
import { connectToDb } from "@/utils/database";
import NextAuth, { Profile, Session } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async session({ session }) {
      // store the user id from MongoDB to session
      const sessionUser = await User.findOne({ email: session.user?.email });
      session.user.id = sessionUser._id.toString();

      return session;
    },
    async signIn({ account, profile }) {
      try {
        // connect to db
        await connectToDb();

        console.log("profile", profile);

        // check if user already exists
        const userExists = await User.findOne({ email: profile?.email });

        // create if it doesn't exists
        if (!userExists) {
          await User.create({
            email: profile?.email,
            username: profile?.name?.replace(" ", "").toLowerCase(),
            // @ts-ignore: picture property exist in profile
            image: profile?.picture,
          });
        }

        return true;
      } catch (error) {
        console.log("Error checking if user exists: ", error);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
