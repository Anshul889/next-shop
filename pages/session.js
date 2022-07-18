import React from "react";
import { useSession, signOut } from "next-auth/react";

const Session = () => {
  const { data: session } = useSession()
	console.log(session)
	if(session){
  return <button onClick={() => signOut()}>SignOut</button>;
	} else {
		<div>youre signed out</div>
	}
};

export default Session;
