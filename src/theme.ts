import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    // Define your theme here
    typography: {
      fontFamily: [
        'Helvetica', // Your primary font
      ].join(','),
      h1: {
        fontFamily: 'Courier Prime, Courier New, monospace',
        fontWeight: 700 // Bold
      },
      h2: {
        fontFamily: 'Courier Prime, Courier New, monospace',
        fontWeight: 700 // Bold
      }},
    palette: {
      primary: {
        main: '#000000', // Black
      },
      secondary: {
        main: '#E0B547', // Hazard Yellow
      },
      // You can define other colors as needed
    },
  });

export default theme;