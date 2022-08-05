import { collection, getDocs, query, where } from 'firebase/firestore'
import Link from 'next/link'
import React from 'react'
import Item from '../../components/Item/Item'
import { db } from '../../firebase'
import { Container, Wrapper } from '../../styles/products'

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
  return (
    <Wrapper>
      <Container>
        {products?.map((product, index) => {
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
