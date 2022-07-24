import { doc, getDoc } from 'firebase/firestore'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { db } from '../firebase'

export default function Home() {
  const fetchData = async () => {
    const docRef = doc(db, 'counter', 'reactcounter')
    const docSnap = await getDoc(docRef)
  }

  useEffect(() => {
    let start = performance.now();
    fetchData()
    let end = performance.now()
    console.log(end - start)
  })

  return <div>Holla</div>
}
