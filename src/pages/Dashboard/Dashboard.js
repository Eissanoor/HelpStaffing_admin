import React from 'react';
import Sidebard from '../../component/Sidebar/Sidebard';
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
// Input Range
import { useState } from "react";
import './Dashboard.css';
import BarChart1 from '../Dashboard/Barchart/BarChart1.jsx'
import DashbordLine from './Dashbord Line Chart/DashbordLine';
import HiringsChart from './Dashbord Line Chart/HiringsChart';
import PaymentsChart from './Dashbord Line Chart/PaymentsChart';
import HealthProvidersChart from './Barchart/HealthProvidersChart';
import NewHospitalsChart from './Barchart/NewHospitalsChart';
import Profile from ".././../Assets/image/alljobimg.png";
import map from "../../Assets/image/map.png";
import start from "../../Assets/image/Star 1.png";

const drawerWidth = 220;

function Dashboard() {
  return (
    <>
      <div className="bg">
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
            {/* Top card section */}
            <div className="forbg-everyone mt-5">
              {/* Chart section 1 */}
              <div className='row  mx-auto p-2 mt-2'>
                {/* Left chart */}
                <div className="col-sm-12 col-md-8 col-lg-8 col-xl-8 h-100">
                  <div className="bg-white p-2">

                    <BarChart1 />
                  </div>
                </div>
                {/* Right chart */}
                <div className="col-sm-12 col-md-4 col-lg-3 col-xl-4 h-100 ">
                  <div className="forbg-everyone bg-white rounded p-3">
                    <div className="chartbr2 mt-1 rounded p-2 ">
                      <h6 className="Escrow fontfamilyInter fontstyle text-white">Total earnings</h6>
                      <h6 className="Escrownum fontfamilyInter fontstyle text-white">$15,654</h6>
                      <DashbordLine />
                    </div>
                    <div className="chartbr1 rounded p-2 mt-1">
                      <h6 className="Escrow fontfamilyInter fontstyle text-white">Escrow Amount</h6>
                      <h6 className="Escrownum fontfamilyInter fontstyle text-white">$27,486</h6>
                      <DashbordLine />
                    </div>

                  </div>
                </div>

              </div>

              {/* Chart section 2 */}
              <div className='row  mx-auto p-2 mt-2'>
                {/* Left chart */}
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                  <div className="bg-white p-2 rounded">
                    <HiringsChart />
                  </div>
                </div>
                {/* Right chart */}
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                  <div className="bg-white p-2 rounded">
                    <PaymentsChart />
                  </div>
                </div>

              </div>

              {/* Card section */}
              <div className="row mt-3 p-2 mx-auto">
                <div className="col-sm-12 col-md-4 col-lg-3 col-xl-3 my-2">
                  <div className="card forcard-bg forcardpadding p-3">
                    <h6 className='totaljob ms-1'>Customers</h6>
                    <h1 className="numberindashord text-black ms-1">
                      36,254
                    </h1>
                    <div>
                      <span className='rangin ms-1'><span className='me-1 mt-auto'><AiOutlineArrowUp /></span>3,27%</span>
                      <span className='ranginprog ms-3'>Since last week</span>
                    </div>
                  </div>
                </div>

                <div className="col-sm-12 col-md-4 col-lg-3 col-xl-3 my-2">
                  <div className="card forcard-bg forcardpadding p-3">
                    <h6 className='totaljob ms-1'>Orders</h6>
                    <h1 className="numberindashord text-black ms-1">
                      5,543
                    </h1>
                    <div>
                      <span className='rangindown ms-1'><span className='me-1 mt-auto'><AiOutlineArrowDown /></span>1,08%</span>
                      <span className='ranginprog ms-3'>Since last week</span>
                    </div>
                  </div>
                </div>

                <div className="col-sm-12 col-md-4 col-lg-3 col-xl-3 my-2">
                  <div className="card forcard-bg forcardpadding p-3">
                    <h6 className='totaljob ms-1'>Revenue </h6>
                    <h1 className="numberindashord text-black ms-1">
                      $23,220
                    </h1>
                    <div>
                      <span className='rangindown ms-1'><span className='me-1 mt-auto'><AiOutlineArrowDown /></span>5,08%</span>
                      <span className='ranginprog ms-3'>Since last week</span>
                    </div>
                  </div>
                </div>

                <div className="col-sm-12 col-md-4 col-lg-3 col-xl-3 my-2">
                  <div className="card forcard-bg forcardpadding p-3">
                    <h6 className='totaljob ms-1'>Average Order Value</h6>
                    <h1 className="numberindashord text-black ms-1">
                      3,964
                    </h1>
                    <div>
                      <span className='rangin ms-1'><span className='me-1 mt-auto'><AiOutlineArrowUp /></span>3,27%</span>
                      <span className='ranginprog ms-3'>Since last week</span>
                    </div>
                  </div>
                </div>

                <div className="col-sm-12 col-md-4 col-lg-3 col-xl-3 my-2">
                  <div className="card forcard-bg forcardpadding p-3">
                    <h6 className='totaljob ms-1'>Total Health Providers</h6>
                    <h1 className="numberindashord text-black ms-1">
                      12,293
                    </h1>
                    <div>
                      <span className='rangin ms-1'><span className='me-1 mt-auto'><AiOutlineArrowUp /></span>3,27%</span>
                      <span className='ranginprog ms-3'>Since last week</span>
                    </div>
                  </div>
                </div>

                <div className="col-sm-12 col-md-4 col-lg-3 col-xl-3 my-2">
                  <div className="card forcard-bg forcardpadding p-3">
                    <h6 className='totaljob ms-1'>Cancelled Jobs</h6>
                    <h1 className="numberindashord text-black ms-1">
                      16
                    </h1>
                    <div>
                      <span className='rangindown ms-1'><span className='me-1 mt-auto'><AiOutlineArrowDown /></span>1,08%</span>
                      <span className='ranginprog ms-3'>Since last week</span>
                    </div>
                  </div>
                </div>

                <div className="col-sm-12 col-md-4 col-lg-3 col-xl-3 my-2">
                  <div className="card forcard-bg forcardpadding p-3">
                    <h6 className='totaljob ms-1'>Expired Jobs </h6>
                    <h1 className="numberindashord text-black ms-1">
                      19
                    </h1>
                    <div>
                      <span className='rangindown ms-1'><span className='me-1 mt-auto'><AiOutlineArrowDown /></span>5,08%</span>
                      <span className='ranginprog ms-3'>Since last week</span>
                    </div>
                  </div>
                </div>

                <div className="col-sm-12 col-md-4 col-lg-3 col-xl-3 my-2">
                  <div className="card forcard-bg forcardpadding p-3">
                    <h6 className='totaljob ms-1'>Completed Jobs </h6>
                    <h1 className="numberindashord text-black ms-1">
                      221
                    </h1>
                    <div>
                      <span className='rangin ms-1'><span className='me-1 mt-auto'><AiOutlineArrowUp /></span>3,27%</span>
                      <span className='ranginprog ms-3'>Since last week</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Chart section 2 */}
              <div className='row  mx-auto p-2 mt-2'>
                {/* Left chart */}
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                  <div className="bg-white p-2 rounded">
                    <HealthProvidersChart />
                  </div>
                </div>
                {/* Right chart */}
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                  <div className="bg-white p-2 rounded">
                    <NewHospitalsChart />
                  </div>
                </div>

              </div>

              {/* Card section */}
              <div className="row w-100 mt-4  forbg-everyone bg rounded  mx-auto ">
                <div className="col-sm-4 col-md-6 col-lg-3  col-xl-3 my-2">
                  <div className=" bgcardcolor rounded  p-3">
                    <div className=" d-flex my-auto">
                      <div className=''>
                        <img src={Profile} alt='Profile' />
                      </div>
                      <div className=' ms-3 my-auto '>
                        <p className='carssectiondetails1 text-white mt-1 fontstyle fontfamilyRoboto'>AFIC (NIHD)</p>
                        <p className=' carssectiondetails2 text-white fontstyle fontfamilyRoboto'>Cardiology . Private</p>
                      </div>
                    </div>
                    <div className="mt-1">
                      <p className=' text-white Hiring fontfamilyRoboto'>Hiring Rate: 95%</p>
                      <div className='LocatinWashingtonmain'><span><img src={map} className="me-1" /></span><span className=" text-white  LocatinWashington fontfamilyRoboto">Washington, DC</span></div>
                      <div className='' ><span><img src={start} className="me-1" /></span><span className=' text-white ratedashbord  fontfamilyLato'>5.0 (456) </span> </div>
                    </div>
                    <div className='justify-content-end my-auto  d-flex'>
                          <p className="text-white LocatinWashington fontfamilyRoboto fontstyle">24/7</p>
                        </div>
                  </div>
                </div>
                <div className="col-sm-4 col-md-6 col-lg-3  col-xl-3 my-2">
                  <div className=" bgcardcolor rounded  p-3">
                    <div className=" d-flex my-auto">
                      <div className=''>
                        <img src={Profile} alt='Profile' />
                      </div>
                      <div className=' ms-3 my-auto '>
                        <p className='carssectiondetails1 text-white mt-1 fontstyle fontfamilyRoboto'>AFIC (NIHD)</p>
                        <p className=' carssectiondetails2 text-white fontstyle fontfamilyRoboto'>Cardiology . Private</p>
                      </div>
                    </div>
                    <div className="mt-1">
                      <p className=' text-white Hiring fontfamilyRoboto'>Hiring Rate: 95%</p>
                      <div className='LocatinWashingtonmain'><span><img src={map} className="me-1" /></span><span className=" text-white  LocatinWashington fontfamilyRoboto">Washington, DC</span></div>
                      <div className='' ><span><img src={start} className="me-1" /></span><span className=' text-white ratedashbord  fontfamilyLato'>5.0 (456) </span> </div>
                    </div>
                    <div className='justify-content-end my-auto  d-flex'>
                          <p className="text-white LocatinWashington fontfamilyRoboto fontstyle">24/7</p>
                        </div>
                  </div>
                </div>
                <div className="col-sm-4 col-md-6 col-lg-3  col-xl-3 my-2">
                  <div className=" bgcardcolor rounded  p-3">
                    <div className=" d-flex my-auto">
                      <div className=''>
                        <img src={Profile} alt='Profile' />
                      </div>
                      <div className=' ms-3 my-auto '>
                        <p className='carssectiondetails1 text-white mt-1 fontstyle fontfamilyRoboto'>AFIC (NIHD)</p>
                        <p className=' carssectiondetails2 text-white fontstyle fontfamilyRoboto'>Cardiology . Private</p>
                      </div>
                    </div>
                    <div className="mt-1">
                      <p className=' text-white Hiring fontfamilyRoboto'>Hiring Rate: 95%</p>
                      <div className='LocatinWashingtonmain'><span><img src={map} className="me-1" /></span><span className=" text-white  LocatinWashington fontfamilyRoboto">Washington, DC</span></div>
                      <div className='' ><span><img src={start} className="me-1" /></span><span className=' text-white ratedashbord  fontfamilyLato'>5.0 (456) </span> </div>
                    </div>
                    <div className='justify-content-end my-auto  d-flex'>
                          <p className="text-white LocatinWashington fontfamilyRoboto fontstyle">24/7</p>
                        </div>
                  </div>
                </div>
                <div className="col-sm-4 col-md-6 col-lg-3  col-xl-3 my-2">
                  <div className=" bgcardcolor rounded  p-3">
                    <div className=" d-flex my-auto">
                      <div className=''>
                        <img src={Profile} alt='Profile' />
                      </div>
                      <div className=' ms-3 my-auto '>
                        <p className='carssectiondetails1 text-white mt-1 fontstyle fontfamilyRoboto'>AFIC (NIHD)</p>
                        <p className=' carssectiondetails2 text-white fontstyle fontfamilyRoboto'>Cardiology . Private</p>
                      </div>
                    </div>
                    <div className="mt-1">
                      <p className=' text-white Hiring fontfamilyRoboto'>Hiring Rate: 95%</p>
                      <div className='LocatinWashingtonmain'><span><img src={map} className="me-1" /></span><span className=" text-white  LocatinWashington fontfamilyRoboto">Washington, DC</span></div>
                      <div className='' ><span><img src={start} className="me-1" /></span><span className=' text-white ratedashbord  fontfamilyLato'>5.0 (456) </span> </div>
                    </div>
                    <div className='justify-content-end my-auto  d-flex'>
                          <p className="text-white LocatinWashington fontfamilyRoboto fontstyle">24/7</p>
                        </div>
                  </div>
                </div>
              
              </div>

            </div>
          </Box>
        </Box>
      </div>
    </>
  )
}

export default Dashboard;