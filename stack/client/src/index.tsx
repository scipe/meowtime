import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Auth0Provider
    domain="meowtime.eu.auth0.com"
    clientId="kifi54TMhcXzodgIzHSHT3S13dpPhBOU"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
);
