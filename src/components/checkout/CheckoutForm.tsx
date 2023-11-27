import React from 'react';
import { TextField, Button, Grid, Paper, Typography } from '@mui/material';
import { CardElement } from '@stripe/react-stripe-js';
import 'bootstrap/dist/css/bootstrap.min.css';

const CheckoutForm = () => {
    return (
      <Paper style={{ padding: 20, marginTop: 20 }}>
        <Typography variant="h6" gutterBottom>
          Shipping Address
        </Typography>
        <form>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField required fullWidth label="First Name" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField required fullWidth label="Last Name" />
            </Grid>
            <Grid item xs={12}>
              <TextField required fullWidth label="Address Line 1" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Address Line 2" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField required fullWidth label="City" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField required fullWidth label="Zip / Postal code" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField required fullWidth label="Country" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField required fullWidth label="Phone Number" />
            </Grid>
          </Grid>
  
          <Typography style={{ margin: '20px 0' }} variant="h6" gutterBottom>
            Payment Details
          </Typography>
  
          <CardElement />
  
          <Button 
            type="submit" 
            variant="contained" 
            color="primary" 
            style={{ marginTop: 20 }}
          >
            Place Order
          </Button>
        </form>
      </Paper>
    );
  };
  
  export default CheckoutForm;