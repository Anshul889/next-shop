import React from 'react'
import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '../components/Button/styles'
import { Container } from '../styles/profile'
import ContactForm from '../components/ContactForm/ContactForm'

const Profile = () => {
  const { data: session } = useSession()
  if (session) {
    return (
      <Container>
        <img src={session.user.image} alt="" />
        <div>{session.user.name}</div>
        <Button onClick={() => signOut()}>Sign Out</Button>
        <ContactForm />
      </Container>
    )
  } else {
    return (
      <div>
        <Link href="/auth/signin">
          <button>Login</button>
        </Link>
      </div>
    )
  }
}

export default Profile
