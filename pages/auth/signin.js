import React, { useEffect } from 'react'
import { getProviders, signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

const Signin = ({ providers }) => {
  const { status } = useSession()
  const router = useRouter()

  useEffect(() => {
    console.log(status)
    if (status === 'authenticated') {
      router.push('/')
    }
  }, [])

  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  )
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
