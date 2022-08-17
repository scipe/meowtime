import React from 'react';
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
} from '@mui/material';
import { Box, Container } from '@mui/system';
import LoginButton from '../../LoginButtons/LoginButton';
import LogoutButton from '../../LoginButtons/LogoutButton';
import Profile from '../../LoginButtons/Profile';

const Header = () => {
  return (
    <AppBar>
      <Container>
        <Toolbar>
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z"
              fill="#4C51E1"
            />
            <path
              d="M59.8984 43.1875L57.6641 36.2969L53.2266 22.6562C53 21.9531 52.0078 21.9531 51.7812 22.6562L47.3437 36.2969H32.625L28.1875 22.6641C27.9609 21.9609 26.9687 21.9609 26.7422 22.6562L22.3047 36.2969L20.0703 43.1875C19.8672 43.8125 20.0937 44.5 20.625 44.8906L39.9844 58.9531L59.3437 44.8906C59.8828 44.5078 60.1016 43.8203 59.8984 43.1875"
              fill="white"
            />
          </svg>
          <Typography marginLeft={1}>MeowTime</Typography>
          <LogoutButton />
          <LoginButton />
          <Box mr={3}>
            <Button color="inherit" variant="outlined">
              Sign Up
            </Button>
          </Box>
        </Toolbar>
      </Container>
      <Profile />
    </AppBar>
  );
};

export default Header;
