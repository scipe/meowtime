import React from 'react';
import { useAuth0, User } from '@auth0/auth0-react';

function Profile() {
  const { user, isAuthenticated, isLoading }: User = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
}

export default Profile;
