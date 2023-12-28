import React, {useEffect, useState} from "react";
import UserList from "../User/UserList";
import { UserModel } from "../../Model/User";




type Props = {handleFriendList: (user:UserModel[]) => void;user:UserModel| undefined}

const Homepage = (props: Props) => {
	const { handleFriendList ,user} = props;
  return (
	<div className="container mt-5">
			<div className="row">
				<UserList handleFriendList={handleFriendList} currentUser={user}/>
			</div>
		</div>
  )
}

export default Homepage
