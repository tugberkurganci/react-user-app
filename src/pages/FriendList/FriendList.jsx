import React from 'react'
import { useLocation } from 'react-router-dom';
import UserCard from '../../components/UserCard';


function FriendList() {
    const location = useLocation();
    const myData = location.state?.myData || null;
  
  return (
    <div className="container mt-5">
    <div className="row">
      {myData && myData.map(user => (
        <div key={user.id} className="col-lg-3 col-md-6 col-12 mb-5">
          <UserCard user={user} isFriend={true} />
        </div>
      ))}
    </div>
  </div>
  )
}

export default FriendList