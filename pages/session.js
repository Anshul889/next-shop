import React from 'react'
import { useSession, signOut } from 'next-auth/react'

const Session = () => {
  const { data: session } = useSession()
  if (session) {
    return (
      <div>
        <div>{session.user.name}</div>
        <div>{session.user.id}</div>
        <button onClick={() => signOut()}>SignOut</button>
      </div>
    )
  } else {
    return <div>youre signed out</div>
  }
}

export default Session
