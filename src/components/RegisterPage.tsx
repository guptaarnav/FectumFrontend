// RegisterPage.tsx
import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const RegisterPage = () => {
  const navigate = useNavigate();
  const { loginUser } = useAppContext();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: '',
    phone: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: '',
    phone: ''
  });

  const validate = () => {
    let tempErrors = { ...errors };
    tempErrors.name = formData.name ? '' : 'Name is required';
    tempErrors.email = (/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/).test(formData.email) ? '' : 'Email is not valid';
    tempErrors.password = formData.password.length > 5 ? '' : 'Password must be at least 6 characters long';
    tempErrors.confirmPassword = formData.confirmPassword === formData.password ? '' : 'Passwords do not match';
    tempErrors.address = formData.address ? '' : 'Address is required';
    tempErrors.phone = (/^\d{10}$/).test(formData.phone) ? '' : 'Phone number is invalid';
    setErrors(tempErrors);

    return Object.values(tempErrors).every(x => x === '');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Placeholder for form submission logic
      console.log('Form is valid. Implement submission logic here.');
      
      // TODO: Submit form logic here and login user
      loginUser(); 
      // Redirect or show success message
      navigate('/');
    }
  };

  return (
    <Box sx={{ maxWidth: 500, m: 'auto', p: 3 }}>
      <Typography variant="h6">Register</Typography>
      <form noValidate onSubmit={handleSubmit}>
        {/* Form fields with validation */}
        {/* Name */}
        <TextField
          fullWidth
          margin="normal"
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          error={!!errors.name}
          helperText={errors.name}
        />
        {/* Email */}
        <TextField
          fullWidth
          margin="normal"
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          error={!!errors.email}
          helperText={errors.email}
        />
        {/* Password */}
        <TextField
          fullWidth
          margin="normal"
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleInputChange}
          error={!!errors.password}
          helperText={errors.password}
        />
        {/* Confirm Password */}
        <TextField
          fullWidth
          margin="normal"
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword}
        />
        {/* Address */}
        <TextField
          fullWidth
          margin="normal"
          label="Address"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          error={!!errors.address}
          helperText={errors.address}
        />
        {/* Phone Number */}
        <TextField
          fullWidth
          margin="normal"
          label="Phone Number (only numbers)"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          error={!!errors.phone}
          helperText={errors.phone}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Register
        </Button>
      </form>
    </Box>
  );
};

export default RegisterPage;
