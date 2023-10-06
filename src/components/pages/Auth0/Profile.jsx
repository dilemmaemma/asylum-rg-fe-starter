import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../../../styles/profile.less';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { name, picture, email } = user;

  const firstName = name.split(' ')[0];
  const lastName = name.split(' ')[1];

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  // In this return the user information is displayed on the screen with a picture if available
  return (
    isAuthenticated && (
      <div className="profile-container">
        <h1>{firstName && `${firstName}'s `}Profile:</h1>
        <div className="profile-info">
          {picture && (
            <div className="circle-image">
              <img src={picture} alt={name} />
            </div>
          )}
          <div className="profile-info-text">
            {firstName && (
              <p>
                <strong>First Name:</strong>
                &nbsp;
                {firstName}
              </p>
            )}
            {lastName && (
              <p>
                <strong>Last Name:</strong>
                &nbsp;
                {lastName}
              </p>
            )}
            {!firstName && !lastName && (
              <p>
                <strong>Name:</strong>
                &nbsp;
                {name}
              </p>
            )}
            {email && (
              <p>
                <strong>Email:</strong>
                &nbsp;
                {email}
              </p>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default Profile;
