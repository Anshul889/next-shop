import { getDoc, doc } from 'firebase/firestore'
import Head from 'next/head'
import React, { useRef } from 'react'
import { Button } from '../../components/Button/styles'
import { db } from '../../firebase'
import { addToCart } from '../../store/actions/cart.actions'
import { connect } from 'react-redux'
import Carousel from '../../components/Carousel/Carousel'

export async function getServerSideProps({ params: { id } }) {
  const response = await getDoc(doc(db, 'products', `${id}`))
  const product = { ...response.data(), id: response.id }
  return {
    props: { product },
  }
}

const Product = ({ product, addToCart, cart }) => {
  console.log('cart', product)
  const quantity = useRef(1)
  const isFound = cart.some((element) => element.id === product.id)

  return (
    
    <div>
      <Head>
        <title>{product.name}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <>
      <Carousel
        url1={product.imageURL}
        url2={product.imageURL2}
        url3={product.imageURL3}
        url4={product.imageURL4}
      />
      <div>{product.name}</div>
      {!isFound && (
        <div>
          <form>
            <select id="count" name="count" ref={quantity}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </form>
          <Button
            onClick={() => addToCart(product, parseInt(quantity.current.value))}
          >
            Add to Cart
          </Button>
        </div>
      )}
      {isFound && <div>Item Added To cart!</div>}
      </>
    </div>
  )
}

const mapStateToProps = (state) => ({
  cart: state.cart,
})

const actions = {
  addToCart,
}

export default connect(mapStateToProps, actions)(Product)
