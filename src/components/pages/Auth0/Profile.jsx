import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { name, picture, email } = user;

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  // In this return the user information is displayed on the screen with a picture if available
  return (
    isAuthenticated && (
      <div>
        <img src={picture} alt={name} />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    )
  );
};

export default Profile;
