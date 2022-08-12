import Image from 'next/image'
import React from 'react'
import { Container, QuickLinks, Social, Wrapper } from './styles'
import logo from '../../images/Crave.webp'
import twitter from '../../images/twitter.svg'
import facebook from '../../images/square-facebook-brands.svg'
import tiktok from '../../images/tiktok-brands.svg'
import instagram from '../../images/instagram-brands.svg'
import pinterest from '../../images/pinterest-brands.svg'

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <div>
          <Image src={logo} />
        </div>
        <QuickLinks>
          <h4>Quick Links</h4>
          <div>Shop All</div>
          <div>Meet us</div>
          <div>Recipes</div>
          <div>Contact</div>
        </QuickLinks>
        <div>
          <h3>Our mission</h3>
          <div>
            To bring proud, loud Asian flavors to your fingertips any day of the
            week.
          </div>
        </div>
        <Social>
          <Image src={twitter} alt=''/>
          <Image src={facebook} alt=''/>
          <Image src={tiktok} alt=''/>
          <Image src={pinterest} alt=''/>
          <Image src={instagram} alt=''/>
        </Social>
      </Container>
    </Wrapper>
  )
}

export default Footer
