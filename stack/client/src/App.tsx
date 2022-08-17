import React from 'react';
import './App.css';
import { Auth0Provider } from '@auth0/auth0-react';
import Header from './components/layouts/Header/Header';

function App() {
  return (
    <Auth0Provider
      domain="meowtime.eu.auth0.com"
      clientId="kifi54TMhcXzodgIzHSHT3S13dpPhBOU"
      redirectUri={window.location.origin}
    >
      <Header />
    </Auth0Provider>
  );
}

export default App;
