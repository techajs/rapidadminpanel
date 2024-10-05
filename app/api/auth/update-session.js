import { getToken } from 'next-auth/jwt';
import NextAuth from 'next-auth';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { token } = req.body; // Get the new token from the request body

    // Get the current session token
    const currentSession = await getToken({ req });
    console.log(token)
    // if (currentSession) {
    //   // Update the session token
    //   currentSession.token = token; // Update only the token
    //   return res.status(200).json({ success: true });
    // } else {
    //   return res.status(401).json({ message: 'Unauthorized' });
    // }
  }

  // Handle any other HTTP method
  res.setHeader('Allow', ['POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
