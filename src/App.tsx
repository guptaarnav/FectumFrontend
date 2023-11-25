import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AppProvider } from './context/AppContext';
import ProductList from './components/ProductList';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavigationBar';

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
      main: '#E0B547', // Hazard Yellow
    },
    secondary: {
      main: '#000000', // Black
    },
    // You can define other colors as needed
  },
});
const App: React.FC = () => {
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <div style={{ backgroundColor: '#FFFFFF' }}> {/* White background */}
          <NavigationBar />
          <ProductList />
        </div>
      </ThemeProvider>
    </AppProvider>
  );
};

export default App;
