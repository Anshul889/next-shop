import { getDoc, doc } from 'firebase/firestore'
import Head from 'next/head'
import React from 'react'
import { db } from '../../firebase'

export async function getServerSideProps({ params: { id } }) {
  const response = await getDoc(doc(db, 'products', `${id}`))
  const product = response.data()
  return {
    props: { product },
  }
}

const Product = ({ product }) => {
  return (
    <div>
      <Head>
        <title>{product.name}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>{product.name}</div>
    </div>
  )
}

export default Product
