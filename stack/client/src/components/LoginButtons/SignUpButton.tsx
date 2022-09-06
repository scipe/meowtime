import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';
import { Box } from '@mui/system';

const SignUpButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Box mr={3}>
      <Button onClick={() => loginWithRedirect({ screen_hint: 'signup' })} color="inherit" variant="outlined">
        Sign Up
      </Button>
    </Box>
  );
};

export default SignUpButton;
