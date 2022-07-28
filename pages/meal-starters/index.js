import { collection, getDocs, query, where } from 'firebase/firestore'
import Link from 'next/link'
import React from 'react'
import {db} from '../../firebase'

export async function getServerSideProps() {
  const q = query(
    collection(db, 'products'),
    where('category', '==', 'starter')
  )
  const querySnapshot = await getDocs(q)
  const products = []
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    products.push({id: doc.id, ...doc.data()})
  })
  return {
    props: {products}
  }
}

const MealStarters = ({ products }) => {
  return (
    <div>
      {products?.map((product) => {
        return (
          <Link key={product.id} href={`/meal-starters/${product.id}`}>
            <div>{product.name}</div>
          </Link>
        )
      })}
    </div>
  )
}

export default MealStarters
