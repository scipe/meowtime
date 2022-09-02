import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { Button, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import FilterButton from './FilterButtons';
import FilterSelect from './FilterSelect';
import FilterSittersList from './FilterSittersList';

const LeftSideFilter = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'row',
        marginTop: 0,
        mx: '0',
        marginBottom: 0,
      }}
    >
      <Box
        sx={{
          marginTop: 20,
          maxWidth: 400,
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'flex-start',
          flexWrap: 'wrap',
        }}
      >
        <Typography>Pet variant</Typography>
        <Box
          sx={{
            maxWidth: 390,
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: '10px',
          }}
        >
          <FilterButton>Cat</FilterButton>
          <FilterButton>Dog</FilterButton>
        </Box>

        <Typography>Pet age</Typography>
        <Box
          sx={{
            maxWidth: 390,
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: '10px',
          }}
        >
          <FilterButton>up to a year</FilterButton>
          <FilterButton>1 - 5</FilterButton>
          <FilterButton>5 - 8</FilterButton>
          <FilterButton>more 8</FilterButton>
        </Box>

        <Typography>Type of service</Typography>
        <Box
          sx={{
            maxWidth: 390,
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: '10px',
          }}
        >
          <FilterButton>Overexposure</FilterButton>
          <FilterButton>Paddock</FilterButton>
        </Box>

        <Typography>Pet size</Typography>
        <Box
          sx={{
            maxWidth: 390,
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: '10px',
          }}
        >
          <FilterButton>up to 5 kg</FilterButton>
          <FilterButton>up to 20 kg</FilterButton>
          <FilterButton>up to 40 kg</FilterButton>
          <FilterButton>40+ kg</FilterButton>
        </Box>

        <Typography>City</Typography>
        <Box
          sx={{
            marginTop: 2,
            maxWidth: 390,
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: '10px',
          }}
        >
          <FilterSelect />
        </Box>
        <Button variant="outlined" startIcon={<SearchIcon />}>
          Find
        </Button>
        <Button variant="contained" endIcon={<RestartAltIcon />}>
          Reset filter
        </Button>
      </Box>
      <FilterSittersList />
    </Container>
  );
};

export default LeftSideFilter;
