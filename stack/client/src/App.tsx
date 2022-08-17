import React from 'react';
import './App.css';
import { Auth0Provider } from '@auth0/auth0-react';
import { createTheme, ThemeProvider } from '@mui/material';
import Header from './layouts/Header/Header';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightBold: 600,
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Auth0Provider
        domain="meowtime.eu.auth0.com"
        clientId="kifi54TMhcXzodgIzHSHT3S13dpPhBOU"
        redirectUri={window.location.origin}
      >
        <Header />
      </Auth0Provider>
    </ThemeProvider>
  );
};

export default App;
