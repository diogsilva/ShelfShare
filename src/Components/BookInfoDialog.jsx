import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import BookDescription from './BookDescriptionGrid';

export default function BookInfoDialog({open,setOpen,bookInfo}) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
      sx={{fontFamily: 'Poppins'}}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        maxWidth={'md'}
      >
        <DialogTitle id="alert-dialog-title">
          {"Book Information"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <BookDescription author={bookInfo.author}country={bookInfo.country} year={bookInfo.year} source={bookInfo.source} title={bookInfo.title}/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button variant='contained' color='success' onClick={handleClose} autoFocus>
            Make an Offer
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}