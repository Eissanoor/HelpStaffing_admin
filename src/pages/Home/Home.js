import React from 'react';
import Sidebard from '../../component/Sidebar/Sidebard';
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
// Input Range
import { useState } from "react";
import './Home.css'
import Addjob from '../../component/Popup/Addjob';
// image section
import Doctors from '../../Assets/image/Doctors.png';
import Cardiologist from '../../Assets/image/Cardiologist.png';
import Assistant from '../../Assets/image/Assistant.png';
import Nurses from '../../Assets/image/Nurses.png';
import DoctorsAvailable from '../../Assets/image/DoctorsAvailable.png';
import map from '../../Assets/image/map.png';
import start from '../../Assets/image/Star 1.png'
import filter from '../../Assets/image/filter.png'
import 'antd/dist/antd.css';
import { Pagination } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';
const drawerWidth = 220;

function Home() {
    const [current, setCurrent] = useState(30);

    const onChange = (page) => {
      console.log(page);
      setCurrent(page);
    };
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
            {/* Top section */}
            <div className="d-flex justify-content-between mt-5 px-2  mx-auto">
                    <div className="d-flex">
                   <input type="text" placeholder='Try “Doctors”' className=' px-2 rounded-1 w-100' id='homeseract'/>
                   <div className='filters bg-white  rounded-1 ms-1'>
                    <img src={filter} className='p-1' width='40px'/></div>
                    </div>
                    <button className='bgcolor jobbtn text-white fontfamily border-0 rounded-1 mt-auto py-2 px-4'><Addjob/></button>
                    
                  </div>
            {/* Top card section */}
                    <div className="forbg-everyone ">
                      <div className="row mt-3 mx-auto">
                        <div className='toperCategories d-flex justify-content-between mx-auto'>
                      <p className="ByCategories mt-auto">By Categories</p>
                      <p className="ViewallCategories mt-auto">View All Categories</p>
                      </div>
                        
                        <div className="col-sm-4 col-md-2 col-lg-2 col-xl-2 my-1">
                          <div className="card forcard-bg forcardpadding">
                            <img src={Doctors}/>
                            <h1 className="forenvelophead text-center">
                            Doctors
                            </h1>
                          </div>
                        </div>

                        <div className="col-sm-4 col-md-2 col-lg-2 col-xl-2 my-1">
                          <div className="card forcard-bg forcardpadding">
                            <img src={Cardiologist}/>
                            <h1 className="forenvelophead text-center">
                            Cardiologist
                            </h1>
                          </div>
                        </div>

                        <div className="col-sm-4 col-md-2 col-lg-2 col-xl-2 my-1">
                          <div className="card forcard-bg forcardpadding">
                            <img src={Assistant}/>
                            <h1 className="forenvelophead text-center">
                            Assistant
                            </h1>
                          </div>
                        </div>

                        <div className="col-sm-4 col-md-2 col-lg-2 col-xl-2 my-1">
                          <div className="card forcard-bg forcardpadding">
                            <img src={Nurses}/>
                            <h1 className="forenvelophead text-center">
                            Nurses
                            </h1>
                          </div>
                        </div>

                        <div className="col-sm-4 col-md-2 col-lg-2 col-xl-2 my-1">
                          <div className="card forcard-bg forcardpadding">
                            <img src={Doctors}/>
                            <h1 className="forenvelophead text-center">
                            Doctors
                            </h1>
                          </div>
                        </div>

                        <div className="col-sm-4 col-md-2 col-lg-2 col-xl-2 my-1">
                          <div className="card forcard-bg forcardpadding">
                            <img src={Assistant}/>
                            <h1 className="forenvelophead text-center">
                            Assistant
                            </h1>
                          </div>
                        </div>


                       
                      </div>
                </div>
                {/*  */}
                {/*  */}
                {/* last card section */}
                <div className="forbg-everyone mt-4">
                        
                      <div className="row mt-1 mx-auto">
                      <p className="DoctorsAvailable mt-auto">54,625 Doctors Available</p>
{/* first card */}
                        <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 my-1">
                          <div className="card DoctorsAvailable-bg forcardpadding">
                            <center>
                            <img src={DoctorsAvailable} className='25'/>
                            </center>
                            <h6 className="MikeWilson fontfamily text-white text-center">
                            Mike Wilson
                            </h6>
                            <p className="MBBS fontfamily text-white text-center">
                            Breast Surgeon.MBBS
                            </p>
                            <p className="experience fontfamily text-white text-center">
                            4 years experience
                            </p>
                            <p className="map text-white text-center">
                         <img src={map}/> <span className='ms-1'>Washington, DC</span> 
                            </p>
                            <p className="start text-white text-center">
                         <img src={start}/> <span className='ms-1'>5.0 (456)</span> 
                            </p>

                          </div>
                        </div>
{/* second card */}
                        <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 my-1">
                          <div className="card DoctorsAvailable-bg forcardpadding">
                            <center>
                            <img src={DoctorsAvailable} className='25'/>
                            </center>
                            <h6 className="MikeWilson fontfamily text-white text-center">
                            Mike Wilson
                            </h6>
                            <p className="MBBS fontfamily text-white text-center">
                            Breast Surgeon.MBBS
                            </p>
                            <p className="experience fontfamily text-white text-center">
                            4 years experience
                            </p>
                            <p className="map text-white text-center">
                         <img src={map}/> <span className='ms-1'>Washington, DC</span> 
                            </p>
                            <p className="start text-white text-center">
                         <img src={start}/> <span className='ms-1'>5.0 (456)</span> 
                            </p>

                          </div>
                        </div>
 {/* 3rd card */}
                        <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 my-1">
                          <div className="card DoctorsAvailable-bg forcardpadding">
                            <center>
                            <img src={DoctorsAvailable} className='25'/>
                            </center>
                            <h6 className="MikeWilson fontfamily text-white text-center">
                            Mike Wilson
                            </h6>
                            <p className="MBBS fontfamily text-white text-center">
                            Breast Surgeon.MBBS
                            </p>
                            <p className="experience fontfamily text-white text-center">
                            4 years experience
                            </p>
                            <p className="map text-white text-center">
                         <img src={map}/> <span className='ms-1'>Washington, DC</span> 
                            </p>
                            <p className="start text-white text-center">
                         <img src={start}/> <span className='ms-1'>5.0 (456)</span> 
                            </p>

                          </div>
                        </div>
 {/* 4th card */}
                        <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 my-1">
                          <div className="card DoctorsAvailable-bg forcardpadding">
                            <center>
                            <img src={DoctorsAvailable} className='25'/>
                            </center>
                            <h6 className="MikeWilson fontfamily text-white text-center">
                            Mike Wilson
                            </h6>
                            <p className="MBBS fontfamily text-white text-center">
                            Breast Surgeon.MBBS
                            </p>
                            <p className="experience fontfamily text-white text-center">
                            4 years experience
                            </p>
                            <p className="map text-white text-center">
                         <img src={map}/> <span className='ms-1'>Washington, DC</span> 
                            </p>
                            <p className="start text-white text-center">
                         <img src={start}/> <span className='ms-1'>5.0 (456)</span> 
                            </p>

                          </div>
                        </div>
 {/* 5th card */}
                        <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 my-1">
                          <div className="card DoctorsAvailable-bg forcardpadding">
                            <center>
                            <img src={DoctorsAvailable} className='25'/>
                            </center>
                            <h6 className="MikeWilson fontfamily text-white text-center">
                            Mike Wilson
                            </h6>
                            <p className="MBBS fontfamily text-white text-center">
                            Breast Surgeon.MBBS
                            </p>
                            <p className="experience fontfamily text-white text-center">
                            4 years experience
                            </p>
                            <p className="map text-white text-center">
                         <img src={map}/> <span className='ms-1'>Washington, DC</span> 
                            </p>
                            <p className="start text-white text-center">
                         <img src={start}/> <span className='ms-1'>5.0 (456)</span> 
                            </p>

                          </div>
                        </div>
{/* 6th card */}
                        <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 my-1">
                          <div className="card DoctorsAvailable-bg forcardpadding">
                            <center>
                            <img src={DoctorsAvailable} className='25'/>
                            </center>
                            <h6 className="MikeWilson fontfamily text-white text-center">
                            Mike Wilson
                            </h6>
                            <p className="MBBS fontfamily text-white text-center">
                            Breast Surgeon.MBBS
                            </p>
                            <p className="experience fontfamily text-white text-center">
                            4 years experience
                            </p>
                            <p className="map text-white text-center">
                         <img src={map}/> <span className='ms-1'>Washington, DC</span> 
                            </p>
                            <p className="start text-white text-center">
                         <img src={start}/> <span className='ms-1'>5.0 (456)</span> 
                            </p>

                          </div>
                        </div>
 {/* 7th card */}
                        <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 my-1">
                          <div className="card DoctorsAvailable-bg forcardpadding">
                            <center>
                            <img src={DoctorsAvailable} className='25'/>
                            </center>
                            <h6 className="MikeWilson fontfamily text-white text-center">
                            Mike Wilson
                            </h6>
                            <p className="MBBS fontfamily text-white text-center">
                            Breast Surgeon.MBBS
                            </p>
                            <p className="experience fontfamily text-white text-center">
                            4 years experience
                            </p>
                            <p className="map text-white text-center">
                         <img src={map}/> <span className='ms-1'>Washington, DC</span> 
                            </p>
                            <p className="start text-white text-center">
                         <img src={start}/> <span className='ms-1'>5.0 (456)</span> 
                            </p>

                          </div>
                        </div>
 {/* 8th card */}
                        <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 my-1">
                          <div className="card DoctorsAvailable-bg forcardpadding">
                            <center>
                            <img src={DoctorsAvailable} className='25'/>
                            </center>
                            <h6 className="MikeWilson fontfamily text-white text-center">
                            Mike Wilson
                            </h6>
                            <p className="MBBS fontfamily text-white text-center">
                            Breast Surgeon.MBBS
                            </p>
                            <p className="experience fontfamily text-white text-center">
                            4 years experience
                            </p>
                            <p className="map text-white text-center">
                         <img src={map}/> <span className='ms-1'>Washington, DC</span> 
                            </p>
                            <p className="start text-white text-center">
                         <img src={start}/> <span className='ms-1'>5.0 (456)</span> 
                            </p>

                          </div>
                        </div>
 {/* 9th card */}
                         <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 my-1">
                          <div className="card DoctorsAvailable-bg forcardpadding">
                            <center>
                            <img src={DoctorsAvailable} className='25'/>
                            </center>
                            <h6 className="MikeWilson fontfamily text-white text-center">
                            Mike Wilson
                            </h6>
                            <p className="MBBS fontfamily text-white text-center">
                            Breast Surgeon.MBBS
                            </p>
                            <p className="experience fontfamily text-white text-center">
                            4 years experience
                            </p>
                            <p className="map text-white text-center">
                         <img src={map}/> <span className='ms-1'>Washington, DC</span> 
                            </p>
                            <p className="start text-white text-center">
                         <img src={start}/> <span className='ms-1'>5.0 (456)</span> 
                            </p>

                          </div>
                        </div>



                       
                      </div>
                </div>

                {/* Pagination */}
                <center>
                {/* <Pagination className='mt-3' /> */}
                <Pagination className='mt-3' current={current} onChange={onChange} total={50} />;
                
                </center>

          </Box>
        </Box>
      </div>
    </div>
    </>
  )
}

export default Home;