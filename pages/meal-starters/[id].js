import { getDoc, doc } from 'firebase/firestore'
import Head from 'next/head'
import React from 'react'
import { Button } from '../../components/Button/styles'
import { db } from '../../firebase'
import { addToCart } from '../../store/actions/cart.actions'
import {connect} from 'react-redux'

export async function getServerSideProps({ params: { id } }) {
  const response = await getDoc(doc(db, 'products', `${id}`))
  const product = response.data()
  return {
    props: { product },
  }
}

const Product = ({ product, addToCart }) => {
  return (
    <div>
      <Head>
        <title>{product.name}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>{product.name}</div>
      <Button onClick={() => addToCart(product)}>Add to Cart</Button>

    </div>
  )
}

const actions = {
  addToCart
}

export default connect(null, actions)(Product)
