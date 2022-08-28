import Image from 'next/image'
import React from 'react'
import { Container, Wrapper } from './styles'

const Carousel = ({ url1, url2, url3, url4 }) => {
  return (
    <Wrapper>
      <Container>
        <Image src={url1} width="350" height="350" layout="responsive" objectFit="cover" alt=""/>
        <Image src={url2} width="350" height="350" layout="responsive" objectFit="cover" alt=""/>
        <Image src={url3} width="100%" height="100%" layout="responsive" objectFit="cover" alt=""/>
        <Image src={url4} width="100%" height="100%" layout="responsive" objectFit="cover" alt=""/>
      </Container>
    </Wrapper>
  )
}

export default Carousel
