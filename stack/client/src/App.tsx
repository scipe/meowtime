import React from 'react';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material';
import Splash from './pages/Splash/Splash';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightBold: 600,
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Splash />
    </ThemeProvider>
  );
};

export default App;
