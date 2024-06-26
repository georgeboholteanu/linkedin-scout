import NextAuth from "next-auth";
import LinkedInProvider from "next-auth/providers/linkedin";

export default NextAuth({
  providers: [
    LinkedInProvider({
      clientId: process.env.LINKEDIN_CLIENT_ID as string,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET as string
    })
  ],
  
});