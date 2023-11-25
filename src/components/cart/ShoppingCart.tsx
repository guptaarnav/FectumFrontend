import React from 'react';
import { Button, Container, Grid, Typography, Divider, Hidden, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAppContext } from '../../context/AppContext';
import CartItem from './CartItem';

const ShoppingCart = () => {
    const { cart, removeFromCart, updateQuantityInCart } = useAppContext();

    return (
        <Container sx={{ paddingBottom: '64px' }} className='shopping-cart'>
            <Typography variant="h6">
                My Cart ({cart.length} {cart.length === 1 ? 'item' : 'items'})
            </Typography>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={8}>
                    {cart.length ? (
                        cart.map((product, i) => (
                            <CartItem
                                key={product.id}
                                updateQuantity={(newQuantity: number) => updateQuantityInCart(product.id, newQuantity)}
                                remove={() => removeFromCart(product.id)}
                                product={product}
                            />
                        ))
                    ) : (
                        <Typography variant="body1">There are no items in your cart.</Typography>
                    )}
                </Grid>
                {cart.length > 0 && (
                    <Grid item xs={12} sm={4}>
                        <Box sx={{ 
                            backgroundColor: 'grey.200', 
                            borderRadius: 1, 
                            padding: 2,
                            position: { xs: 'fixed', sm: 'static' },
                            bottom: 0,
                            left: 0,
                            width: '100%',
                            zIndex: 10,
                            boxShadow: 'none',
                        }}>
                            <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                                Estimated Total
                            </Typography>
                            <Typography variant="caption">Tax calculated in checkout</Typography>
                            <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                                ${(cart.reduce((a, b) => a + b.quantity * b.price, 0) / 100).toFixed(2)}
                            </Typography>
                            <Hidden xsDown implementation="css">
                                <Divider />
                            </Hidden>
                            <RouterLink to="/checkout">
                                <Button color="primary" variant="contained" sx={{ width: '100%' }}>
                                    Checkout
                                </Button>
                            </RouterLink>
                        </Box>
                    </Grid>
                )}
            </Grid>
        </Container>
    );
};

export default ShoppingCart;
