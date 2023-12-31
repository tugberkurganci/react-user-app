import React, {useEffect, useState} from "react";
import UserList from "../User/UserList";
import { UserModel } from "../../Model/User";




type Props = {}

const Homepage = (props: Props) => {
	
  return (
	<div className="container mt-5">
			<div className="row">
				<UserList  />
			</div>
		</div>
  )
}

export default Homepage
