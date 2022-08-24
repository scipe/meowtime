import React from 'react';
import Header from '../../layouts/Header/Header';
import SectionCapabilities from '../../layouts/splash/SectionCapabilities';
import SectionAbout from '../../layouts/splash/SectionAbout';
import SectionReview from '../../layouts/splash/SectionReview';
import SectionPets from '../../layouts/splash/SectionPets';
import Footer from '../../layouts/Footer/Footer';

const Splash = () => {
  return (
    <>
      <Header />
      <SectionCapabilities />
      <SectionAbout />
      <SectionReview />
      <SectionPets />
      <Footer />
    </>
  );
};

export default Splash;
