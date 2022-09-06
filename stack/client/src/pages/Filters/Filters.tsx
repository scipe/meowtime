import { Container } from '@mui/system';
import React from 'react';
import YandexMaps from '../../layouts/Filters/YandexMaps';
import FilterSittersList from '../../layouts/Filters/FilterSittersList';
import LeftSideFilter from '../../layouts/Filters/LeftSideFilter';
import Footer from '../../layouts/Footer/Footer';
import Header from '../../layouts/Header/Header';

const Filters = () => {
  return (
    <>
      <Header />
      <Container
        sx={{
          maxWidth: 1280,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <LeftSideFilter />
        <FilterSittersList />
        <YandexMaps />
      </Container>
      <Footer />
    </>
  );
};

export default Filters;
