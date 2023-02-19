import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UserProfile from './UserProfile';
import { usersAPI } from '../../../api/api';

const UserProfileContainer = () => {
  const [user, setUser] = useState();
  // Get the userId param from the URL.
  const params = useParams();
  
  useEffect(() => {
    usersAPI.chooseUser(params.id)
    .then(response => response.data)
    .then(data => setUser(data))
  }, [params.id])

  return (
    <UserProfile user={user} />
  );
};

export default UserProfileContainer;
