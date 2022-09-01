import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const FilterSelect = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 200 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Selected City</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Select city"
          onChange={handleChange}
        >
          <MenuItem value={20}>Minsk</MenuItem>
          <MenuItem value={30}>Grogno</MenuItem>
          <MenuItem value={30}>Brest</MenuItem>
          <MenuItem value={30}>Gomel</MenuItem>
          <MenuItem value={30}>Mogilev</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default FilterSelect;
