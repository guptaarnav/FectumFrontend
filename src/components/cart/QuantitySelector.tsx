import React from 'react';
import { Box, IconButton, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const QuantitySelector = ({ value, onChange }) => {
  const handleIncrement = () => {
    onChange(value + 1);
  };

  const handleDecrement = () => {
    if (value > 1) {
      onChange(value - 1);
    }
  };

  const handleChange = (event) => {
    const newValue = parseInt(event.target.value, 10);
    if (!isNaN(newValue) && newValue >= 1) {
      onChange(newValue);
    }
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <IconButton onClick={handleDecrement} size="small">
        <RemoveIcon fontSize="small" />
      </IconButton>
      <TextField
        size="small"
        value={value}
        onChange={handleChange}
        inputProps={{ step: 1, min: 1, type: 'number', 'aria-label': 'Quantity' }}
        sx={{ width: '80px', mx: 1 }}
      />
      <IconButton onClick={handleIncrement} size="small">
        <AddIcon fontSize="small" />
      </IconButton>
    </Box>
  );
};

export default QuantitySelector;
