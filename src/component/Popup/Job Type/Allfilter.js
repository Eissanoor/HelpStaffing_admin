import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import PropTypes from "prop-types";
import { CopyOutlined } from '@ant-design/icons';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import filter from '../../../Assets/image/Filter 2.png'
import './Jobfilter.css';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import { Rate } from 'antd';
import logo from '../../../Assets/Logo/logo.png'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";
import { SearchOutlined } from '@ant-design/icons';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import 'antd/dist/antd.css';
import Slider, { SliderThumb } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import { DatePicker } from 'antd';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
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

function Allfilter() {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const navigate=useNavigate();
    // onchange
    const onChange = (date, dateString) => {
        console.log(date, dateString);
      };
    const menu = (
      <Menu
        items={[
          {
            label:<p onClick={() => { navigate("/Jobs")}}>All Jobs</p>,
            key: '0',
          },
          {
            label:<p onClick={() => { navigate("/Postjob")}}>Posted Jobs</p>,
            key: '1',
          },
          {
            label:<p onClick={() => { navigate("/Drafts")}}>Draft Jobs</p>,
            key: '2',
          },
        ]}
      />
    );
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
  return (
    <>

    <button onClick={handleClickOpen} className=' filterpopo px-2 border-0 filterbtn text-white my-auto rounded mx-2' ><img src={filter} className='me-1 py-1' width='20px' />Filter</button>

    <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
    >
        <ListItem>
            <div className='w-100 '>
                
                    <div className='py-2 d-flex Typeofjob'>
                        <h6 className='me-2'>Job Type</h6>
                        <span className='ProviderJob'>
                <Dropdown overlay={menu} trigger={['click']}>
    <a className='ProviderJob' onClick={e => e.preventDefault()}>
      <Space>
      All
        <DownOutlined />
      </Space>
    </a>
  </Dropdown></span>
                        </div>
                <form className=" w-100 fromjobdata">
                    {/* Speciality */}
                    <div className='w-100 position-relative mt-2 d-grid'>
                        <label htmlFor='Speciality' className=' my-1 headinglabel'>Hospital Name</label>
                        <input type='text' id='Speciality' className='rounded mt-2 w-100 emailinput p-2' placeholder='AFIC (NIHD)' required ></input>
                        <p className='position-absolute pe-4 showpassiconfilter  mt-5 '>
                            <SearchOutlined />
                        </p>
                    </div>
                    {/* Education */}
                    <div className='w-100  mt-3 '>
                        <div className='Education d-flex mt-2 ' id='Education'>
                            <p className='MBBSfilter text-white px-3 rounded-pill py-2'>AFIC (NIHD)</p>
                            <p className='FCPSfilter ms-2 px-3 rounded-pill py-2'>AFIC (NIHD)</p>
                            <p className='FCPSfilter ms-2 px-3 rounded-pill py-2'>AFIC (NIHD)</p>
                            <p className='FCPSfilter ms-2 px-3 rounded-pill py-2'>AFIC (NIHD)</p>
                        </div>
                    </div>
                    {/* Location */}
                    <div className='w-100 position-relative mt-2 d-grid'>
                        <label htmlFor='Location' className=' my-1 headinglabel'>Location</label>
                        <input type='text' id='Location' className='rounded mt-2 w-100 emailinput p-2' placeholder='Example: Washington DC' required ></input>
                        <p className='position-absolute pe-4 showpassiconfilter  mt-5 '>
                            <SearchOutlined />
                        </p>
                    </div>
                    {/* Field of Job */}
                    <div className='w-100  mt-3 '>
                        <label htmlFor='Education' className='my-1 headinglabel'>Field of Job</label>
                        <div className='Education d-flex mt-2 ' id='Education'>
                            <p className='MBBSfilter text-white px-3 rounded-pill py-2'>MBBS</p>
                            <p className='FCPSfilter ms-2 px-3 rounded-pill py-2'>FCPS</p>
                            <p className='FCPSfilter ms-2 px-3 rounded-pill py-2'>Psychology</p>
                            <p className='FCPSfilter ms-2 px-3 rounded-pill py-2'>Mental behaviour</p>
                            <p className='FCPSfilter ms-2 px-3 rounded-pill py-2'>Mental behaviour</p>
                        </div>
                    </div>
                    {/* Hourly Rates */}
                    <div className="w-100">
                        <Box className="w-100">

                            <Box sx={{ m: 3 }} />
                            <Typography gutterBottom className='mb-4 headinglabel'>Hiring Rate</Typography>
                            <PrettoSlider
                                valueLabelDisplay="on"
                                // aria-label="pretto slider"
                                defaultValue={[20, 40]}
                            />
                        </Box>
                    </div>
                    {/* checkbox */}
                    <div className="form-check mt-3">
                        <input className="form-check-input" type="checkbox" checked value="" id="Availability" />
                        <label className="form-check-label headinglabel" for="Availability">
                            Availability
                        </label>
                    </div>
                    {/* time */}
                    <div className='w-100'>
                    <div className="d-flex justify-content-between ">
            <div className="d-flex flex-column">
              <label htmlFor="from" className="fortimelabel my-2">
                From
              </label>
              <Space direction="vertical">
              <DatePicker onChange={onChange} id='from' className='fortimepicker'/>
              </Space>
            </div>
            <div className="ms-1 d-flex flex-column">
              <label htmlFor="to" className="fortimelabel my-2">
                To
              </label>
              <DatePicker onChange={onChange} id='to' className='fortimepicker'/>
            </div>
          </div>
                    </div>

                    {/* button */}
                    <div className="w-100 mt-5 d-flex justify-content-between  mx-auto">
                        <button className=' Cancelbtn w-50 rounded  py-2 me-1'>Cancel</button>
                        <button className='Create text-white rounded  w-50 py-2 border-0'>Done</button>
                    </div>

                </form>

            </div>
        </ListItem>
    </Dialog>

</>
  )
}

export default Allfilter;