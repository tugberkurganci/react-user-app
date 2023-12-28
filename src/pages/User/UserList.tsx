// src/pages/UserList.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "../../components/UserCard";
import { UserModel } from "../../Model/User";








type Props = {handleFriendList: (user:UserModel[]) => void;currentUser:UserModel | undefined}

const UserList = (props: Props) => {

    const {handleFriendList,currentUser}=props
    const [users, setUsers] = useState<UserModel[]>([]);
    const [friendList,setFriendList]=useState<UserModel[]>([]);
    
    
  
    useEffect(() => {
      fetchUsers();
      
    }, []);
  
    const fetchUsers = async () => {
      let response = await axios.get("https://dummyjson.com/users");
      setUsers(response.data.users);
      
    };
  
    const handleAddFriend = (user:UserModel) => {
  
      setFriendList(friendList?[...friendList,user]:[user])
      
  
    };
  
    useEffect(() => {
      console.log(friendList)
      handleFriendList(friendList);
    }, [friendList])
    
  
    return (
      <div className="container mt-5">
        <div className="row">
          {users.map(user => (
            <div key={user.id} className="col-lg-3 col-md-6 col-12 mb-5">
              <UserCard user={user} currentUser={currentUser}onAddFriend={handleAddFriend} />
            </div>
          ))}
        </div>
      </div>
    );
  };
  


export default UserList


