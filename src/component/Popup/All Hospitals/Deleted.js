import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import deleting from '../../../Assets/image/deleting.png';
import deleteicon from "../../../Assets/image/Delate.png";

function Deleted() {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
  return (
    <>
      <div>
    <img  className="cursor mt-auto" onClick={handleClickOpen} src={deleteicon} />
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title" className='deletingheading'>
        {"Are You sure to delete this Job?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
            <center>
          <img src={deleting} width='200px'/>
          </center>
        </DialogContentText>
      </DialogContent>
      <DialogActions className='d-flex justify-content-center mb-3'>
        <Button className='nobtn px-5 py-2 rounded' onClick={handleClose}>
        No
        </Button>
        <Button className='yesbtn rounded px-5 py-2 ' onClick={handleClose}>
        Yes
        </Button>
      </DialogActions>
    </Dialog>
  </div>
    </>
  )
}

export default Deleted