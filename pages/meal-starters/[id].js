import { getDoc, doc, updateDoc } from 'firebase/firestore'
import Head from 'next/head'
import React, { useRef, useState } from 'react'
import { Button } from '../../components/Button/styles'
import { db } from '../../firebase'
import { addToCart } from '../../store/actions/cart.actions'
import { connect } from 'react-redux'
import Carousel from '../../components/Carousel/Carousel'
import {
  Added,
  Container,
  Description,
  Heading,
  Price,
  Select,
} from '../../styles/product'
import Dropdown from '../../components/Dropdown/Dropdown'
import ReviewForm from '../../components/ReviewForm/ReviewForm'
import { objectToArray } from '../../utils/helpers'
import Review from '../../components/Review/Review'
import { useSession } from 'next-auth/react'
import { deleteReview } from '../../store/actions/review.actions'

export async function getServerSideProps({ params: { id } }) {
  const response = await getDoc(doc(db, 'products', `${id}`))
  const product = { ...response.data(), id: response.id }
  return {
    props: { product },
  }
}

const Product = ({ product, addToCart, cart, deleteReview }) => {
  const quantity = useRef(1)
  const { data: session } = useSession()
  const [reviewArray, setReview] = useState(objectToArray(product.reviews))
  const [isDisplayed, setDisplay] = useState(true)
  const addReview = async (id, rating, data) => {
    let newArr = [
      ...reviewArray,
      {
        created: Date.now(),
        imageURL: session.user.image,
        name: session.user.name,
        rating,
        review: data.review,
      },
    ]
    setReview(newArr)
    setDisplay(false)
    try {
      const docRef = doc(db, 'products', id)
      const response = await updateDoc(docRef, {
        [`reviews.${session.user.id}.rating`]: rating,
        [`reviews.${session.user.id}.review`]: data.review,
        [`reviews.${session.user.id}.name`]: session.user.name,
        [`reviews.${session.user.id}.imageURL`]: session.user.image,
        [`reviews.${session.user.id}.created`]: Date.now(),
      })
      console.log('review', response)
    } catch (e) {
      console.log(e)
    }
  }

  const isFound = cart.some((element) => element.id === product.id)

  let completedReview
  if (session && reviewArray) {
    completedReview = reviewArray.some(
      (element) => element.id === session.user.id
    )
  } else {
    completedReview = false
  }
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
            <Button
              full
              onClick={() =>
                addToCart(product, parseInt(quantity.current.value))
              }
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
      <Dropdown
        name={'Ingredients'}
        description={product.ingredients}
        contains={product.contains}
      />
      <Dropdown
        name={'Nutrional Info'}
        servings={product.servings}
        servingsSize={product.servingsSize}
      />
      {!completedReview && isDisplayed && (
        <ReviewForm productId={product.id} addReview={addReview} />
      )}
      {reviewArray &&
        reviewArray.map((review, index) => {
          return (
            <Review
              productId={product.id}
              review={review}
              key={index}
              session={session}
              deleteReview={deleteReview}
            />
          )
        })}
    </div>
  )
}

const mapStateToProps = (state) => ({
  cart: state.cart,
})

const actions = {
  addToCart,
  deleteReview,
}

export default connect(mapStateToProps, actions)(Product)
