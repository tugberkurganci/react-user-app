import React, {useEffect, useState} from "react";
import UserList from "../User/UserList";
import { UserModel } from "../../Model/User";




type Props = {handleFriendList: (user:UserModel[]) => void}

const Homepage = (props: Props) => {
	const { handleFriendList } = props;
  return (
	<div className="container mt-5">
			<div className="row">
				<UserList handleFriendList={handleFriendList}/>
			</div>
		</div>
  )
}

export default Homepage
