import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UserProfile from './UserProfile';

const UserProfileContainer = () => {
  const [user, setUser] = useState();
  // Get the userId param from the URL.
  const params = useParams();
  
  useEffect(() => {
    fetch(`https://social-network.samuraijs.com/api/1.0/profile/${params.id}`)
    .then(response => response.json())
    .then(response => setUser(response))
  }, [params.id])

  return (
    <UserProfile user={user} />
  );
};

export default UserProfileContainer;
