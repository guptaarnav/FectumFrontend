import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from '@mui/material/styles';

import { AppProvider } from './context/AppContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import theme from './theme';
import ProductList from './components/ProductList';
import NavigationBar from './components/NavigationBar';
import ProductDetails from './components/ProductDetails';
import ShoppingCart from './components/cart/ShoppingCart';
import CheckoutPage from './components/checkout/CheckoutPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';


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
