import React from 'react';
import Footer from '../../layouts/Footer/Footer';
import UserBar from '../../layouts/userCabinet/UserBar';
import UserCabinetBody from '../../layouts/userCabinet/UserCabinetBody';

const UserCabinet = () => {
  return (
    <>
      <UserBar />
      <UserCabinetBody />
      <Footer />
    </>
  );
};

export default UserCabinet;
