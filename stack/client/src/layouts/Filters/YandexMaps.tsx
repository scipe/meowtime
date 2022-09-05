import { Box } from '@mui/system';
import React from 'react';
import { YMaps, Map } from 'react-yandex-maps';

const YandexMaps = () => {
  return (
    <Box
      sx={{
        marginTop: 22,
        marginLeft: 3,
      }}
    >
      <YMaps>
        <Map
          defaultState={{
            center: [55.75, 37.57],
            zoom: 9,
          }}
          width={500}
          height={600}
        />
      </YMaps>
    </Box>
  );
};

export default YandexMaps;
