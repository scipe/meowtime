import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { createTheme, ThemeProvider } from '@mui/material';
import Splash from './pages/Splash/Splash';
import UserCabinet from './pages/UserCabinet/UserCabinet';
import ProtectedRoute from './auth/ProtectedRoute';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightBold: 600,
  },
});

const App: React.FC = () => {
  return (
    <Auth0Provider
      domain="meowtime.eu.auth0.com"
      clientId="kifi54TMhcXzodgIzHSHT3S13dpPhBOU"
      redirectUri={`${window.location.origin}/cabinet`}
      cacheLocation="localstorage"
    >
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="cabinet" element={<ProtectedRoute component={UserCabinet} />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Auth0Provider>
  );
};

export default App;
