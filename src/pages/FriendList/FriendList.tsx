import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import UserCard from '../../components/UserCard';
import { UserModel } from '../../Model/User';




type Props = {}

function FriendList({}: Props) {
  
  const location = useLocation();
    const myData:UserModel[]  = location.state?.myData || null;

    useEffect(() => {
      console.log(myData)
    }, [myData])
    
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