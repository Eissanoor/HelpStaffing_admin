import React from 'react';
import Sidebard from '../../component/Sidebar/Sidebard';
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { useNavigate } from "react-router-dom";
import { ArrowRightOutlined } from '@ant-design/icons';
import { styled } from "@mui/material/styles";
import "./Notifications.css";
import Notificationscard from './Notificationscard';

const drawerWidth = 220;
function Notifications() {
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

<div className="mt-5">
                                <div className="container-fluid p-2">
                                    {/* Top section */}
                                    <div className="d-flex justify-content-between">
                                        <div className="my-auto ">
                                            <h6 className="Notificationsheading fontfamilyRoboto">Notifications</h6>
                                            <p className="Notificationspropg fontfamilyRoboto">You’ve 06 recommendations to solve</p>
                                        </div>
                                        <div className="my-auto ">  <button className=" px-3 py-2 border-0 rounded fontfamilyRoboto Notificationsbtn">Mark all as read</button></div>
                                      
                                    </div>
                                    <hr className="line"></hr>
                                    {/* Card section today */}
                                    <div className="">
                                        <h6 className="todayheading my-2 fontfamilyRoboto">Today</h6>
                                        <Notificationscard/>
                                       <div className='mt-2'>
                                       <Notificationscard/>
                                        </div> 
                                        <div className='mt-2'>
                                       <Notificationscard/>
                                        </div>
                                    </div>
                                    <div className="mt-5">
                                        <h6 className="todayheading my-2  fontfamilyRoboto">Yesterday</h6>
                                        <Notificationscard/>
                                        {/* <Notificationscard/> */}
                                        <div className='mt-2'>
                                       <Notificationscard/>
                                        </div>
                                        <div className='mt-2'>
                                       <Notificationscard/>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </Box>
                    </Box>
                </div>
            </div>
    </>
  )
}

export default Notifications;