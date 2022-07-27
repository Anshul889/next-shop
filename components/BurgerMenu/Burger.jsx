import Link from 'next/link'
import { slide as Menu } from 'react-burger-menu'
import React, { useState } from 'react'
import { menustyles } from './styles'
import { useSession } from 'next-auth/react'

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
        <div onClick={closeSideBar}>Home</div>
      </Link>
      {session ? <Link href={'/profile'}>
        <div onClick={closeSideBar}>Profile</div>
      </Link> : <Link href={'/auth/signin'}>
        <div onClick={closeSideBar}>Login</div>
      </Link>}
    </Menu>
  )
}

export default Burger
