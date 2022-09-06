import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { createTheme, ThemeProvider } from '@mui/material';
import Splash from './pages/Splash/Splash';
import UserCabinet from './pages/UserCabinet/UserCabinet';
import ProtectedRoute from './auth/ProtectedRoute';
import SearchPage from './pages/SearchPage/SearchPage';
import Filters from './pages/Filters/Filters';

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
      domain={process.env.REACT_APP_DOMAIN as string}
      clientId={process.env.REACT_APP_CLIENT_ID as string}
      redirectUri={`${window.location.origin}/cabinet`}
      cacheLocation="localstorage"
    >
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="cabinet" element={<ProtectedRoute component={UserCabinet} />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/filters" element={<Filters />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Auth0Provider>
  );
};

export default App;
