import React, { useEffect, useState } from 'react';
import {
  Autocomplete,
  Box,
  Button,
  Container,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material'; // eslint-disable-line
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useNavigate } from 'react-router';

// interface IState {
//   petSpice: string;
//   serviceType: string;
//   dateFrom: Date | null;
//   dateTo: Date | undefined;
//   city: string | undefined;
//   sizeTo: string | undefined;
// }

interface IState {
  petSpice: string;
  serviceType: string;
  dateFrom: Dayjs | null;
  dateTo: Dayjs | null;
  city: string;
  sizeTo: string;
}
const defaultValues: IState = {
  petSpice: 'dog',
  serviceType: 'walk',
  dateFrom: null,
  dateTo: null,
  city: '',
  sizeTo: '',
};

const SearchForm = () => {
  const [formValues, setFormValues] = useState(defaultValues);
  const [cities, setCities] = useState<string[]>([]);

  const handleChange = (event: React.MouseEvent<HTMLElement>, newSpice: string) => {
    setFormValues({ ...formValues, petSpice: newSpice });
  };
  const handleServiceChange = (event: React.MouseEvent<HTMLElement>, newService: string) => {
    setFormValues({ ...formValues, serviceType: newService });
  };

  useEffect(() => {
    // request example:
    // fetch('http://localhost:5000/api/breeds')
    //   .then((response) => response.json())
    //   .then((data) => setCities(data));
    setCities(['Moscow', 'Minsk', 'Voronezh']);
  }, []);

  const navigate = useNavigate();

  const submitHandler = () => {
    const obj: { [index: string]: string } = {};

    Object.keys(formValues).forEach((key) => {
      const value = formValues[key as keyof IState];
      if (value !== null && value !== '') {
        if (key === 'dateFrom' || key === 'dateTo') {
          obj[key] = (value as Dayjs).format('D-M-YYYY') as string;
        } else {
          obj[key] = value?.toString() as string;
        }
      }
    });

    const url = new URLSearchParams(obj).toString();
    console.log(url);
    navigate(`/search?${url}`);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Container maxWidth="md" sx={{ paddingTop: '100px' }}>
        <Box width="100%" margin="10px 0">
          <Typography variant="h6" color="primary" gutterBottom>
            Choose your pet
          </Typography>
          <ToggleButtonGroup
            color="primary"
            value={formValues.petSpice}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
            sx={{
              width: '40%',
            }}
          >
            <ToggleButton value="dog" sx={{ width: '50%' }}>
              dog
            </ToggleButton>
            <ToggleButton value="cat" sx={{ width: '50%' }}>
              cat
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
        <Box width="100%" margin="10px 0">
          <Typography variant="h6" color="primary" gutterBottom>
            Service type
          </Typography>
          <ToggleButtonGroup
            color="primary"
            value={formValues.serviceType}
            exclusive
            onChange={handleServiceChange}
            aria-label="Platform"
            sx={{
              width: '40%',
            }}

            // {...register('petSpice')}
          >
            <ToggleButton value="walk" sx={{ width: '50%' }}>
              walk
            </ToggleButton>
            <ToggleButton value="sit" sx={{ width: '50%' }}>
              sit
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
        <Box width="40%" margin="10px 0">
          <Typography variant="h6" color="primary" gutterBottom>
            Pet size
          </Typography>
          <ToggleButtonGroup
            color="primary"
            value={formValues.sizeTo}
            exclusive
            onChange={handleServiceChange}
            aria-label="Platform"
            sx={{
              width: '100%',
            }}

            // {...register('petSpice')}
          >
            <ToggleButton value="walk" sx={{ width: '33.3%' }}>
              up to 5 kg
            </ToggleButton>
            <ToggleButton value="sit" sx={{ width: '33.3%' }}>
              5-20 kg
            </ToggleButton>
            <ToggleButton value="sit" sx={{ width: '33.3%' }}>
              20+ kg
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>

        <Box width="40%" margin="10px 0">
          <Typography variant="h6" color="primary" gutterBottom>
            Date
          </Typography>
          <Box display="flex" justifyContent="space-between" width="100%">
            <DatePicker
              label="From"
              value={formValues.dateFrom || null}
              onChange={(newValue) => {
                if (newValue) {
                  setFormValues({
                    ...formValues,
                    dateFrom: newValue,
                  });
                }
              }}
              renderInput={(params) => <TextField {...params} sx={{ width: '45%' }} />}
            />

            <DatePicker
              label="to"
              value={formValues.dateTo || null}
              onChange={(newValue) => {
                if (newValue) {
                  setFormValues({
                    ...formValues,
                    dateTo: newValue,
                  });
                }
              }}
              renderInput={(params) => <TextField {...params} sx={{ width: '45%' }} />}
            />
          </Box>
        </Box>
        <Box width="40%" margin="10px 0">
          <Typography variant="h6" color="primary" gutterBottom>
            Location
          </Typography>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={cities.map((city) => ({ label: city }))}
            sx={{ width: 300 }}
            onChange={(event, value) => setFormValues({ ...formValues, city: value?.label || '' })}
            renderInput={(params) => <TextField {...params} label="City" sx={{ width: '100%' }} />}
          />
        </Box>
        <Button onClick={submitHandler} variant="contained">
          Search
        </Button>
      </Container>
    </LocalizationProvider>
  );
};

export default SearchForm;
