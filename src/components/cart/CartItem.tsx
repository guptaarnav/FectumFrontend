import React, { useState } from 'react';
import { Paper, IconButton, Typography, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import 'bootstrap/dist/css/bootstrap.min.css';
import RemoveDialog from './RemoveDialog';
import QuantitySelector from './QuantitySelector';

export default function CartItem({ updateQuantity, remove, product }) {
  const [open, setOpen] = useState(false);

  // Assuming product.price is in cents and needs to be converted to dollars
  const itemTotalPrice = (product.price / 100 * product.quantity).toFixed(2);

  return (
    <>
      <Paper sx={{
        flex: 1,
        padding: 2,
        mb: 2,
        position: 'relative'
      }} elevation={3}>
        <Box sx={{ display: 'flex', alignItems: 'start' }}>
          <Box sx={{
            marginRight: 2,
            width: { xs: 100, sm: 200 }
          }}>
            <img src={'/assets/' + product.imgFile} alt={product.name} style={{ width: '100%' }} />
          </Box>
          <Box sx={{ flex: 1 }}>
            <a href={`/product/${product.id}`}>
              <Typography variant="subtitle1">{product.name}</Typography>
            </a>
            <Typography sx={{ mr: 0.6 }}>Unit Price: ${(product.price / 100).toFixed(2)}</Typography>
            {product.size && product.size.selected && (
              <Box sx={{ display: 'flex' }}>
                <Typography sx={{ mr: 0.6 }}>Size:</Typography>
                <Typography>{product.size.selected.text}</Typography>
              </Box>
            )}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography>Quantity:</Typography>
              <QuantitySelector
                value={product.quantity}
                onChange={(newQuantity) => updateQuantity(newQuantity)}
              />
            </Box>
          </Box>
        </Box>
        <IconButton sx={{ position: 'absolute', top: 0, right: 0 }} onClick={() => setOpen(true)}>
          <CloseIcon />
        </IconButton>
      </Paper>
      <RemoveDialog
        open={open}
        setOpen={setOpen}
        name={product.name}
        action={remove}
      />
    </>
  );
}
