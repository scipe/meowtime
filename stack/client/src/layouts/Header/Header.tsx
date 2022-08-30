import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../../components/LoginButtons/LoginButton';
import LogoutButton from '../../components/LoginButtons/LogoutButton';
import SignUpButton from '../../components/LoginButtons/SignUpButton';
import Logo from '../../components/Logo/Logo';

const Header = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <AppBar sx={{ background: '#FFF', color: '#4C51E1' }}>
      <Container>
        <Toolbar sx={{ height: 100 }}>
          <Logo />
          <Typography fontFamily="Poppins" fontSize="36px" sx={{ color: 'black' }} marginLeft={1.2}>
            MeowTime
          </Typography>
          {isAuthenticated && <LogoutButton />}
          {!isAuthenticated && <LoginButton />}
          {!isAuthenticated && <SignUpButton />}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
