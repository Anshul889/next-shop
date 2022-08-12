import { collection, getDocs, query, where } from 'firebase/firestore'
import Link from 'next/link'
import React, { useState } from 'react'
import Item from '../../components/Item/Item'
import { db } from '../../firebase'
import { Container, Heading, Wrapper } from '../../styles/products'

export async function getServerSideProps() {
  const q = query(
    collection(db, 'products'),
    where('category', '==', 'starter')
  )
  const querySnapshot = await getDocs(q)
  const products = []
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    products.push({ id: doc.id, ...doc.data() })
  })
  return {
    props: { products },
  }
}

const MealStarters = ({ products }) => {
  const [productState, setProduct] = useState(products)
  return (
    <Wrapper>
      <Heading>
        <h1>Meal Starters</h1>
        <p>
          A meal starter is a pantry shortcut, with all the sauces, aromatics,
          and seasonings you need. Just bring your own protein + veg to the
          party!
        </p>
      </Heading>
      <Container>
        {productState?.map((product, index) => {
          return (
            // <Link key={product.id} href={`/meal-starters/${product.id}`}>
            //   <div>{product.name}</div>
            // </Link>
            <Item product={product} key={index} />
          )
        })}
      </Container>
    </Wrapper>
  )
}

export default MealStarters
