import Image from 'next/image'
import React from 'react'
import { Container, Wrapper } from './styles'

const Carousel = ({ url1, url2, url3, url4 }) => {
  return (
    <Wrapper>
      <Container>
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          <Image src={url1} alt="" layout="fill" priority />
        </div>
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          <Image src={url2} layout="fill" alt="" />
        </div>
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          <Image src={url3} layout="fill" alt="" />
        </div>
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          <Image src={url4} layout="fill" alt="" />
        </div>
      </Container>
    </Wrapper>
  )
}

export default Carousel
