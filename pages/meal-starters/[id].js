import { getDoc, doc } from 'firebase/firestore'
import Head from 'next/head'
import React, { useRef } from 'react'
import { Button } from '../../components/Button/styles'
import { db } from '../../firebase'
import { addToCart } from '../../store/actions/cart.actions'
import { connect } from 'react-redux'
import Carousel from '../../components/Carousel/Carousel'
import styled from 'styled-components'
import { Added, Container, Description, Heading, Price, Select } from '../../styles/product'
import Dropdown from '../../components/Dropdown/Dropdown'


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
      <Heading>{product.name}</Heading>
      <Price>${product.price}.00</Price>
      {!isFound && (
        <Container>
          <form>
            <Select id="count" name="count" ref={quantity}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </Select>
          </form>
          <Button full
            onClick={() => addToCart(product, parseInt(quantity.current.value))}
          >
            Add to Cart
          </Button>
        </Container>
      )}
      {isFound && <Added>Item Added To cart!</Added>}
      </>
      <Description>
        <div>{product.description1}</div>
        <div>{product.description2}</div>
      </Description>
      <Dropdown name={'Ingredients'} description={product.ingredients} contains={product.contains}/>
      <Dropdown name={'Nutrional Info'} servings={product.servings} servingsSize={product.servingsSize}/>
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
