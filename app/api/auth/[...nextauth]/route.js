
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
const login = async (credentials) => {
  const res = await fetch("http://localhost:3009/api/admin/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: credentials.email,
      password: credentials.password,
    }),
  });

  const user = await res.json();

  if (res.ok && user) {
    return {
      id: user.user._id,
      firstname: user.user.firstName,
      username: user.user.username,
      lastname: user.user.lastName,
      email: user.user.email,
      role: user.user.role,
      token: user.token,
    };
  } else {
    console.log('Invalid crea')
    throw new Error("Invalid credentials");
  }
};
const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "your-email@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = await login(credentials)
        return user;
      },
    }),
  ],
  pages: {
    signIn: "/login", // Custom sign-in page
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      // Persist the user info into the token
      if (user) {
        token.username = user.username;
        token.email = user.email;
        token.token = user.token; // Store the token
        token.role = user.role; 
        token.firstname = user.firstname; 
        token.lastname = user.lastname; 
      }
      return token;
    },
    async session({ session, token }) {
      session.username = token.username;
      session.lastname = token.lastname;
      session.firstname = token.firstname;
      session.email = token.email;
      session.token = token.token;
      session.role = token.role;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET, // Ensure you have a secret defined
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

