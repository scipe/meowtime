import React from 'react';
import { useAuth0, User } from '@auth0/auth0-react';
import TextField from '@mui/material/TextField';
import {
  FormControl,
  Select,
  MenuItem,
  Button,
  InputLabel,
} from '@mui/material';
import { Box } from '@mui/system';

const UserAccountInfo = () => {
  const { user, isAuthenticated }: User = useAuth0();
  console.log(user, isAuthenticated);
  return (
    <form>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 3,
          gap: 4,
        }}
      >
        <TextField id="name-input" name="name" label="Name" type="text" />
        <TextField id="name-input" name="surname" label="Surname" type="text" />
        <TextField id="name-input" name="dateOfBirth" label="Date of birth" type="date" />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 3,
        }}
      >
        <TextField id="age-input" name="age" label="Age" type="text" />
        <TextField id="address-input" name="address" label="Address" type="text" />
        <TextField id="address-input" name="city" label="City" type="text" />
      </Box>
      <Box
        sx={{
          marginTop: 3,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: 4,
        }}
      >
        <FormControl
          sx={{
            margin: 0,
            width: 100,
          }}
        >
          <InputLabel id="demo-simple-select-label">Gender</InputLabel>
          <Select
            label="gender"
          >
            <MenuItem>Male</MenuItem>
            <MenuItem>Female</MenuItem>
            <MenuItem>Other</MenuItem>
          </Select>
        </FormControl>
        <TextField id="age-input" name="age" label="Age" type="text" />
        <TextField id="address-input" name="address" label="Address" type="text" />
      </Box>
      <Box
        sx={{
          marginTop: 3,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: 4,
        }}
      >
        <Button variant="contained" color="primary" type="button">
          Change Information
        </Button>
        <Button variant="contained" color="primary" type="submit">
          Update Information
        </Button>
      </Box>
    </form>
  );
};

export default UserAccountInfo;
