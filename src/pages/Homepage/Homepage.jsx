import React, {useEffect, useState} from "react";
import UserList from "../User/UserList";

export default function Homepage({handleFriendList}) {
	

	return (
		<div className="container mt-5">
			<div className="row">
				<UserList handleFriendList={handleFriendList}/>
			</div>
		</div>
	);
}
