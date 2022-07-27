import { doc, getDoc } from 'firebase/firestore'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { db } from '../firebase'

export default function Home() {
  const [counter, setCounter] = useState('')

  const fetchData = async () => {
    const docRef = doc(db, 'counter', 'reactcounter')
    const docSnap = await getDoc(docRef);
    setCounter(docSnap.data())
  }

  useEffect(() => {
    let start = performance.now();
    fetchData()
    let end = performance.now()
    console.log(end - start)
  }, [])

  return <div>{counter.total}</div>
}
