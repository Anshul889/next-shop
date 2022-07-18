import { doc, getDoc, setDoc } from "firebase/firestore";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import {db}  from '../../../firebase '

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
  secret: process.env.NEXT_AUTH_SECRET,
  callbacks: {
    async session({session, token, user}){
      session.user.uid = token.sub;
      const docRef = doc(db, "users", session.user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
      } else {
        // doc.data() will be undefined in this case
        const response = await setDoc(doc(db, "users", session.user.uid), {
          name: session.user.name,
          email: session.user.email,
          imageURL: session.user.image
        })
        console.log('response:',response)
      }
      return session
    }
  },
});
