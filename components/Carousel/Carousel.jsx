import Image from 'next/image'
import React from 'react'
import { Container, Wrapper } from './styles'

const Carousel = ({ url1, url2, url3, url4 }) => {
  return (
    <Wrapper>
      <Container>
        <div style={{display: 'block', position:'relative'}}>
        <Image src={url1} width="350" height="350"  alt="" layout='fill' priority/>
        </div>
        <div style={{display: 'block', position:'relative'}}>
        <Image src={url2} width="350" height="350" layout="fill" alt=""/>
        </div>
        <div style={{display: 'block', position:'relative'}}>
        <Image src={url3} width="350" height="350" layout="fill"  alt=""/>
        </div>
        <div style={{display: 'block', position:'relative'}}>
        <Image src={url4} width="350" height="350" layout="responsive" alt=""/>
        </div>
      </Container>
    </Wrapper>
  )
}

export default Carousel
