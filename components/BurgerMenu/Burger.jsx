import Link from 'next/link'
import { slide as Menu } from 'react-burger-menu'
import React, { useState } from 'react'
import { menustyles } from './styles'
import { useSession } from 'next-auth/react'
import styled from 'styled-components'

const Item = styled.div`
margin-bottom: 5px;
`

const Burger = () => {
  const { data: session } = useSession()

  const [isOpen, setOpen] = useState(false)

  const handleIsOpen = () => {
    setOpen(!isOpen)
  }

  const closeSideBar = () => {
    setOpen(false)
  }

  return (
    <Menu
      isOpen={isOpen}
      onOpen={handleIsOpen}
      onClose={handleIsOpen}
      styles={menustyles}
    >
      <Link id="home" className="menu-item" href="/">
        <Item onClick={closeSideBar}>Home</Item>
      </Link>
      {session ? <Link href={'/profile'}>
        <Item onClick={closeSideBar}>Profile</Item>
      </Link> : <Link href={'/auth/signin'}>
        <Item onClick={closeSideBar}>Login</Item>
      </Link>}
      <Link id="shop" className="menu-item" href="/meal-starters">
        <Item onClick={closeSideBar}>Shop</Item>
      </Link>
    </Menu>
  )
}

export default Burger
