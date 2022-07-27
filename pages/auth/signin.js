import React, { useEffect } from 'react'
import { getProviders, signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { Button } from '../../components/Button/styles'
import { Container } from '../../styles/profile'

const Signin = ({ providers }) => {
  const { data: session } = useSession()
  const router = useRouter()

  if (session) {
    router.back()
  } else {
    return (
      <Container>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <Button onClick={() => signIn(provider.id)}>
              Sign in with {provider.name}
            </Button>
          </div>
        ))}
      </Container>
    )
  }
}

export async function getServerSideProps(context) {
  const providers = await getProviders()
  return {
    props: {
      providers,
    },
  }
}

export default Signin
