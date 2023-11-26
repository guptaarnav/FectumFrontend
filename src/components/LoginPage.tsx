// Login.tsx
import React, { useState, useContext } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { useAppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: ''
  });

  const { loginUser } = useAppContext();

  const validate = () => {
    let tempErrors = { name: '', email: '', password: '' };
    tempErrors.name = formData.name ? '' : 'Name is required';
    tempErrors.email = (/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/).test(formData.email) ? '' : 'Email is not valid';
    tempErrors.password = formData.password.length > 5 ? '' : 'Password must be at least 6 characters long';
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
      // TODO: Submit form logic here
      loginUser() // Call the loginUser function from context TODO: (placeholder)
      navigate('/'); // Redirect to home page
    }
  };

  return (
    <Box sx={{ maxWidth: 400, m: 'auto', p: 3 }}>
      <Typography variant="h6">Login</Typography>
      <form noValidate onSubmit={handleSubmit}>
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
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
      </form>
    </Box>
  );
};

export default LoginPage;
