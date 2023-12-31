
import React, { useEffect } from "react";
import { UserModel } from "../Model/User";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./../Model/RootState";
import { addFriend } from "../state/redux";



type Props = {
  user: UserModel;
  isFriend?: boolean;
  
};

const UserCard = (props: Props) => {
  const { user, isFriend} = props;
  const authState=useSelector((store:RootState) => store.auth);
  const dispatch=useDispatch();
  const showAddFriendButton = authState.id !== 0 && !isFriend && 
    !authState.friendList.find((friend) => friend.id === user.id);
  
  const addFriendtoFriendList = (user:UserModel )=>{

    dispatch(addFriend(user))

  }


  
  return (
    <div className="card">
      <img src={user.image} className="card-img-top" alt={user.firstName} />
      <div className="card-body">
        <h5 className="card-title">{user.firstName}</h5>
        <p className="card-text">{user.email}</p>
        {showAddFriendButton && <button className="btn btn-primary" onClick={()=>addFriendtoFriendList(user) }>
          Add Friend
        </button>
}
      </div>
    </div>
  )
}

export default UserCard
