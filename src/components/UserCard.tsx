
import React from "react";
import { UserModel } from "../Model/User";



type Props = {
  user: UserModel;
  onAddFriend?: (user:UserModel) => void; 
  isFriend?: boolean;
  currentUser?:UserModel
};

const UserCard = (props: Props) => {
  const { user, onAddFriend, isFriend,currentUser } = props;
  const addFriend = ( )=>{

    if(onAddFriend)
    onAddFriend(user)
    console.log(user)

  }
  return (
    <div className="card">
      <img src={user.image} className="card-img-top" alt={user.firstName} />
      <div className="card-body">
        <h5 className="card-title">{user.firstName}</h5>
        <p className="card-text">{user.email}</p>
        {currentUser && !isFriend && <button className="btn btn-primary" onClick={addFriend }>
          Add Friend
        </button>
}
      </div>
    </div>
  )
}

export default UserCard
