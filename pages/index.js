import { doc, getDoc } from 'firebase/firestore';
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react';
import { db } from '../firebase';

export default function Home() {
  const fetchData = async() => {
    const docRef = doc(db, "counter", "reactcounter");
    const docSnap = await getDoc(docRef);
    console.log(docSnap.data())
  }

  useEffect(() => {
    fetchData();
  },)
  
  return (
   <div>Holla</div>
  )
}
