import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth";

// Validate required environment variables
if (!process.env.NEXTAUTH_SECRET) {
  console.error("⚠️  NEXTAUTH_SECRET is not set. Authentication will not work.");
}

if (!process.env.DATABASE_URL) {
  console.error("⚠️  DATABASE_URL is not set. Database operations will fail.");
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

