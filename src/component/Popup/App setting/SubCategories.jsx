import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import editgreen from "../../../Assets/image/editgreen.png";
import uploaded from "../../../Assets/image/Add subcategory.png"
import "./editing.css";

function SubCategories() {
    
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
    <div>
          <>
            <button type="button" className=" cursor  border-0 rounded Addtosubcategories fontfamilyInter fontstyle py-2" onClick={handleClickOpen}>Add SubCategory</button>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                {/* <DialogTitle id="responsive-dialog-title" className='appsettingeditingtitle fontstyle fontfamilyRoboto'>
                    {"Add a category for Health Provider"}<span className='text-danger'>*</span>
                </DialogTitle> */}
                
                <DialogContent>
                    <DialogContentText>
                      <label className='selectlable fontfamilyCera fontstyle' htmlFor='Cardiologist'>Select a category</label>
                    <input type='text' id='Cardiologist' className='rounded mt-2 fontfamilyRaleway w-100 Assistant p-2' placeholder='Cardiologist' required ></input>
                    
                    <label className='selectlable fontfamilyCera fontstyle mt-3' htmlFor='subcategory'>Add subcategory</label>
                    <input type='text' id='subcategory' className='rounded mt-2 fontfamilyRaleway w-100 Assistant p-2' placeholder='Add subcategory' required ></input>
                    
                   <img src={uploaded} className="ms-0 my-4" width='400px'></img>
                    </DialogContentText>

                <DialogActions className=' mb-3 w-100'>
                    <button type="button" className="border-0 rounded bgcolor text-white  Addtocategories fontfamilyInter fontstyle py-2 w-100" >Add</button>
                </DialogActions>
                </DialogContent>
            </Dialog>
        </>
    </div>
  )
}

export default SubCategories;