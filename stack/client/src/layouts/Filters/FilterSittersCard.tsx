import React from 'react';
import { Box } from '@mui/system';
import { Typography, Rating } from '@mui/material';

const FilterSittersCard = () => {
  return (
    <Box
      sx={{
        marginTop: 2,
        marginLeft: 2,
        maxWidth: 590,
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'flex-start',
        flexWrap: 'wrap',
        backgroundColor: '#E6E6FA',
      }}
    >
      <Box
        component="img"
        sx={{
          height: 210,
          width: 230,
        }}
        alt="The house from the offer."
        src="../assets/splash/images/find_sitter.svg"
      />
      <Box
        sx={{
          width: 330,
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          backgroundColor: '#E6E6FA',
        }}
      >
        <Typography
          sx={{
            fontSize: 30,
          }}
        >
          Arina
        </Typography>
        <Typography component="legend">Minsk</Typography>
        <Rating name="read-only" value={3} readOnly />
        <Typography sx={{ color: 'red' }}>from 15$ in a day</Typography>
      </Box>
    </Box>
  );
};

export default FilterSittersCard;
