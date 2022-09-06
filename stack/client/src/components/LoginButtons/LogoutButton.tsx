import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';
import { Box } from '@mui/system';

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <Box mr={3}>
      <Button
        onClick={() => logout({ returnTo: window.location.origin })}
        color="inherit"
        variant="outlined"
      >
        Logout
      </Button>
    </Box>
  );
};

export default LogoutButton;
