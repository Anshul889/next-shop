import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Details, ItemContainer } from './styles'

const Item = ({product}) => {
  return (
    <ItemContainer>
      <Link key={product.id} href={`/meal-starters/${product.id}`}>
        <Image src={product.imageURL} width="100%" height="100%" layout="responsive" objectFit="cover" alt=""/>
      </Link>
      <Details>
      <Link key={product.id} href={`/meal-starters/${product.id}`}><div>{product.name}</div></Link>
        <div>${product.price}</div>
      </Details>
    </ItemContainer>
  )
}

export default Item