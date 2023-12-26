// src/pages/UserList.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "../../components/UserCard";


const UserList = ({handleFriendList}) => {
  const [users, setUsers] = useState([]);
  const [friendList,setFriendList]=useState([]);
  
  

  useEffect(() => {
    fetchUsers();
    
  }, []);

  const fetchUsers = async () => {
    let response = await axios.get("https://dummyjson.com/users");
    setUsers(response.data.users);
    
  };

  const handleAddFriend = (user) => {

    setFriendList([...friendList,user])
    

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
            <UserCard user={user} onAddFriend={handleAddFriend} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
