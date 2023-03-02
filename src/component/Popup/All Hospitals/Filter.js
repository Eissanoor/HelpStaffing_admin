import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import PropTypes from "prop-types";
import { CopyOutlined } from '@ant-design/icons';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import filter from '../../../Assets/image/Filter 2.png'
import './AddNew.css';
import logo from '../../../Assets/Logo/logo.png'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";
import { SearchOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import Slider, { SliderThumb } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';


function ValueLabelComponent(props) {
    const { children, value } = props;
  
    return (
      <Tooltip enterTouchDelay={0} placement="top" title={value}>
        {children}
      </Tooltip>
    );
  }
  
  ValueLabelComponent.propTypes = {
    children: PropTypes.element.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  const PrettoSlider = styled(Slider)({
    color: '#52af77',
    height: 8,
    '& .MuiSlider-track': {
      border: 'none',
    },
    '& .MuiSlider-thumb': {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
        boxShadow: 'inherit',
      },
      '&:before': {
        display: 'none',
      },
    },
    '& .MuiSlider-valueLabel': {
      lineHeight: 1.2,
      fontSize: 12,
      background: 'unset',
      padding: 0,
      width: 32,
      height: 32,
      borderRadius: '50% 50% 50% 0',
      backgroundColor: '#52af77',
      transformOrigin: 'bottom left',
      transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
      '&:before': { display: 'none' },
      '&.MuiSlider-valueLabelOpen': {
        transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
      },
      '& > *': {
        transform: 'rotate(45deg)',
      },
    },
  });
  
  function AirbnbThumbComponent(props) {
    const { children, ...other } = props;
    return (
      <SliderThumb {...other}>
        {children}
        <span className="airbnb-bar" />
        <span className="airbnb-bar" />
        <span className="airbnb-bar" />
      </SliderThumb>
    );
  }
  
  AirbnbThumbComponent.propTypes = {
    children: PropTypes.node,
  };

function SimpleDialog(props) {
    const { onClose, selectedValue, open } = props;
    const navigate = useNavigate();

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value) => {
        onClose(value);
    };

    return (
        <Dialog onClose={handleClose} open={open} className="w-100">
            <div className="px-4 py-2 foradddialogbox">
                <List
                    sx={{
                        pt: 0,
                    }}
                >
                    <ListItem>
                        <div className='w-100'>
                            <form className=" w-100">

                                {/* {/Address*  */}
                                <div className='w-100 position-relative mt-2 d-grid'>
                                    <label htmlFor='Address' className=' my-1 headinglabel'>Address</label>
                                    <input type='text' id='Address' className='rounded mt-2 w-100 emailinput p-2' placeholder='Example: Washington DC' required ></input>
                                    <p className='position-absolute pe-4 showpassiconfilter  mt-5 '>
                                        <SearchOutlined />
                                    </p>
                                </div>
                               <div className="w-100">
                               <Box sx={{ width: 320 }}>
      
      <Box sx={{ m: 3 }} />
      <Typography gutterBottom className='mb-4 headinglabel'>Hiring Rate</Typography>
      <PrettoSlider
       valueLabelDisplay="on"
        // aria-label="pretto slider"
        defaultValue={[20, 40]}
        
      />
    </Box>
                               </div>
                                {/* button */}
                                <div className="w-100 mt-5 d-flex justify-content-between  mx-auto">
                                    <button className=' Cancelbtn w-50 rounded  py-2 me-1'>Cancel</button>
                                    <button className='Create text-white rounded  w-50 py-2 border-0'>Create</button>
                                </div>

                            </form>
                        </div>
                    </ListItem>
                </List>
            </div>
        </Dialog >
    );
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    // selectedValue: PropTypes.string.isRequired,
};


function Filter() {
    const [open, setOpen] = React.useState(false);
    // const [selectedValue, setSelectedValue] = React.useState(emails[1]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
        // setSelectedValue(value);
    };
    //
    //
    //
    return (
        <div>
            <div className=" w-100" onClick={handleClickOpen}>
                {/* <button className='py-2 px-2 border-0 addnewbtn text-white rounded my-auto'>Add New</button> */}
                <button className=' filterpopo px-2 border-0 filterbtn text-white my-auto rounded mx-2' ><img src={filter} className='me-1 py-1' width='20px' />Filter</button>

            </div>
            <SimpleDialog
                className="w-100"
                // selectedValue={selectedValue}
                open={open}
                onClose={handleClose}
            />
        </div>
    )
}

export default Filter;