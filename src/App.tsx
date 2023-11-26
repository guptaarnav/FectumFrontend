import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { AppProvider } from './context/AppContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ProductList from './components/ProductList';
import NavigationBar from './components/NavigationBar';
import ProductDetails from './components/ProductDetails';
import ShoppingCart from './components/cart/ShoppingCart';
import CheckoutPage from './components/CheckoutPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';

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
const App: React.FC = () => {
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <div style={{ backgroundColor: '#FFFFFF' }}> {/* White background */}
            <NavigationBar />
            <Routes>
              <Route path="/" element={<ProductList />} />
              <Route path="/product/:productId" element={<ProductDetails />} />
              <Route path="/cart" element={<ShoppingCart />} />
              <Route path="/checkout" element={<CheckoutPage/>} />
              <Route path="*" element={<div>404! Page not found</div>} />
              <Route path="/about" element={<div>About Page</div>} />
              <Route path="/blog" element={<div>Blog Page</div>} />
              <Route path="/login" element={<LoginPage/>} />
              <Route path="/register" element={<RegisterPage/>} />
            </Routes>
          </div>
        </Router>

      </ThemeProvider>
    </AppProvider>
  );
};

export default App;
