import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';
import { Box } from '@mui/system';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Box mr={3}>
      <Button
        onClick={() => loginWithRedirect()}
        color="inherit"
        variant="outlined"
      >
        Log In
      </Button>
    </Box>
  );
};

export default LoginButton;
