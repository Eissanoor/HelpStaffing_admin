import React from 'react';
import Sidebard from '../../../component/Sidebar/Sidebard';
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import rejected from '../../../Assets/image/Rejected.png';
import profile from '../../../Assets/image/rejectprofile1.png'
import './Rejected.css';
import CardSection from './CardSection';
const drawerWidth = 220;

function Rejected() {
  return (
    <>
      <div className="bg">
        <div className="">
          <Box sx={{ display: "flex" }}>
            <Sidebard />
            <AppBar
              className="fortrans"
              position="fixed"
              sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` },
              }}
            ></AppBar>
            <Box
              className=""
              sx={{
                flexGrow: 1,
                my: 5,
                mx: 1,
                width: { sm: `calc(100% - ${drawerWidth}px)` },
              }}
            >
              <div className='w-auto p-2 mt-5 mb-2'>
                <center>
                  <img src={rejected} />
                  <h6 className='rejectedname'>Salman Ahmed</h6>
                  <p className='Online'><span className="dot rounded-circle me-1 d-inline-block"></span>Online</p>
                </center>
                <div className='chartsection  flex-row-reverse  d-flex mt-auto'>
                  <img src={rejected} className='' width='50px' height='50px' />
                  <div className='mt-auto  w-50  ms-2'>
                    <h6 className='namerejected   flex-row-reverse  d-flex me-2'>KHM Hospital</h6>
                    <p className='namerejectedpro flex-row-reverse d-flex'>Hi,I would like to invite you to an open  position
                      at Khm Hospital...</p>
                  </div>
                </div>

                <div className='chartsection w-50 d-flex mt-auto'>
                  <img src={profile} width='50px' height='50px' />
                  <div className='mt-auto ms-2'>
                    <h6 className='namerejected'>Salman Ahmed</h6>
                    <p className='namerejectedpro'>Okay, please send me your offer...</p>
                  </div>
                </div>

                <div className='chartsection  flex-row-reverse d-flex mt-auto'>
                  <img src={rejected} className='' width='50px' height='50px' />
                  <div className='mt-auto  w-50  ms-2'>
                    <h6 className='namerejected   flex-row-reverse  d-flex me-2'>KHM Hospital</h6>
                    <p className='namerejectedpro flex-row-reverse d-flex'>You sent a job request:</p>
                  </div>
                </div>

                <CardSection/>

              </div>

            </Box>
          </Box>
        </div>
      </div>
    </>
  )
}

export default Rejected;