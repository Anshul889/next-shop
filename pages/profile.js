import React from 'react'
import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link';
import Image from 'next/image';

const Profile = () => {
  const { data: session } = useSession()
  if (session) {
    return (
      <div>
        <img src={session.user.image} width={50} height={50} alt=''/>
        <div>{session.user.name}</div>
        <div>{session.user.id}</div>
        <button onClick={() => signOut()}>SignOut</button>
      </div>
    )
  } else {
    return <div><Link href="/auth/signin"><button>Login</button></Link></div>
  }
}

export default Profile
