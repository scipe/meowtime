import React from 'react';
import { Box } from '@mui/system';
import FilterSittersCard from './FilterSittersCard';

const FilterSittersList = () => {
  return (
    <Box
      sx={{
        marginTop: 20,
        maxWidth: 600,
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'flex-start',
        flexWrap: 'wrap',
      }}
    >
      <FilterSittersCard />
      <FilterSittersCard />
      <FilterSittersCard />
    </Box>
  );
};

export default FilterSittersList;
