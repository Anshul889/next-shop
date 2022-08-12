import Image from 'next/image'
import React from 'react'
import { Button } from '../Button/styles'
import { Background, Content, Wrapper } from './styles'

const Hero = () => {
  return (
    <Wrapper>
      <Background>
        <Image
          src={
            'https://cdn.shopify.com/s/files/1/0611/7244/9514/files/OMSOM_EastAsia_17_2_1_2400x_300a3201-6891-4949-b9db-b281a95cffa4_1500x.jpg?v=1642033056'
          }
          width="100%"
          height="100%"
          layout="responsive"
          objectFit="cover"
          alt=""
          priority={true}
          style={{zIndex: "-1"}}
        />
      </Background>
      <Content>
          <h2>Meet your new favorite pantry staple!</h2>
          <p>Cook restaurant-quality Asian dishes in under 30 minutes with our meal starters.</p>
          <Button>Shop Now</Button>
        </Content>
    </Wrapper>
  )
}

export default Hero
