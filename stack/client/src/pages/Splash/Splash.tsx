import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import Header from '../../layouts/Header/Header';
import SectionCapabilities from '../../layouts/splash/SectionCapabilities';
import SectionAbout from '../../layouts/splash/SectionAbout';
import SectionReview from '../../layouts/splash/SectionReview';

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
      <SectionCapabilities />
      <SectionAbout />
      <SectionReview />
    </>
  );
};

export default Splash;
