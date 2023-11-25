import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';

const RemoveDialog = ({ open, setOpen, name, action }) => {
  const handleClose = () => {
    setOpen(false);
  };

  const handleRemove = () => {
    action();
    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Remove Item</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you want to remove {name} from the cart?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleRemove} autoFocus>
          Remove
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default RemoveDialog;
