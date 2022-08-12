import { collection, getDocs, query, where } from 'firebase/firestore'
import Link from 'next/link'
import React, { useState } from 'react'
import { Button } from '../../components/Button/styles'
import Item from '../../components/Item/Item'
import { db } from '../../firebase'
import { Container, Filters, Heading, Wrapper } from '../../styles/products'

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
  const [sortBy, setActiveSort] = useState('none')

  const [filter, setFilter] = useState('none')

  const sortAscPrice = () => {
    let sortedAscPrice = [...products].sort(function (a, b) {
      var x = a.price
      var y = b.price
      if (x > y) {
        return 1
      }
      if (x < y) {
        return -1
      }
      return 0
    })
    setProduct(sortedAscPrice)
    setActiveSort('sortAscPrice')
    setFilter('none')
  }
  
  const sortDscPrice = () => {
    let sortedDscPrice = [...products].sort(function (a, b) {
      var x = a.price
      var y = b.price
      if (x > y) {
        return -1
      }
      if (x < y) {
        return 1
      }
      return 0
    })
    setProduct(sortedDscPrice)
    setActiveSort('sortDscPrice')
    setFilter('none')
  }
  
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
      <Filters>
      {sortBy !== 'sortAscPrice' && sortBy !== 'sortDscPrice' && (
            <Button onClick={() => sortDscPrice()} filters>
              Price
            </Button>
          )}
          {sortBy === 'sortDscPrice' && (
            <Button onClick={() => sortAscPrice()}>Price &#8593;</Button>
          )}
          {sortBy === 'sortAscPrice' && (
            <Button onClick={() => sortDscPrice()}>Price &#8595;</Button>
          )}
      </Filters>
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
