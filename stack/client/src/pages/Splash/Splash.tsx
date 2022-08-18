import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import Header from '../../layouts/Header/Header';
import Capabilities from '../../layouts/splash/Capabilities/Capabilities';
import SectionAbout from '../../layouts/splash/SectionAbout/SectionAbout';

const Splash = () => {
  return (
    <>
      <Auth0Provider
        domain="meowtime.eu.auth0.com"
        clientId="kifi54TMhcXzodgIzHSHT3S13dpPhBOU"
        redirectUri={window.location.origin}
      >
        <Header />
      </Auth0Provider>
      <Capabilities />
      <SectionAbout />
    </>
  );
};

export default Splash;
