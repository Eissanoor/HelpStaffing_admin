import React, { createElement, useState } from 'react';
import Sidebard from '../../../component/Sidebar/Sidebard';
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import filter from '../../../Assets/image/Filter 2.png';
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
// import JobDetailsCard from './JobDetailsCard';
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { useNavigate } from "react-router-dom";
import { ArrowRightOutlined } from '@ant-design/icons';
import { DislikeFilled, DislikeOutlined, LikeFilled, LikeOutlined } from '@ant-design/icons';
import { Avatar, Comment, Tooltip } from 'antd';
// import '../Alljob/Alljob.css';
import contract from '../../../Assets/image/contract.png'
import Morning from '../../../Assets/image/Moring.png';
import hourlyrate from '../../../Assets/image/Hourly rate.png';
import time from '../../../Assets/image/time.png'
import PrivateHospital from '../../../Assets/image/Private Hospital.png'
import Location from '../../../Assets/image/Location.png';
import Totaljobs from '../../../Assets/image/Total job.png'
import HiringRates from '../../../Assets/image/Hiring Rate.png';
import Attachmentsimg from '../../../Assets/image/Attachmentsimg.png';
import pdf from '../../../Assets/image/pdf.png';
const drawerWidth = 220;
function DraftDetails() {
    const navigate = useNavigate();

    const breadcrumbs = [
        <div
            className="fw-bolder AllUsersBredCrumbs"
            underline="hover"
            key="2"
            color="inherit"
        // onClick={HandleClick}
        >
            <span
                className="forbreadcrumbtext cursor"
                onClick={() => {
                    navigate("/Drafts");
                }}
            >
                Drafts
            </span>
        </div>,
        <Typography key="3" className=" AllUsersBredCrumbs ">
            <span className="forbreadcrumbactive fw-bolder ">
                Draft Details
            </span>
        </Typography>,
    ];
    return (
        <div>
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
                            <div className="d-flex text-black justify-content-between mx-3">
                                <Stack spacing={2} className="my-auto">
                                    <Breadcrumbs
                                        className="d-flex"
                                        separator={<ArrowRightOutlined />}

                                        aria-label="breadcrumb"
                                    >
                                        {breadcrumbs}
                                    </Breadcrumbs>
                                </Stack>
                            </div>
                            {/* <JobDetailsCard /> */}
                            <div className="d-flex mt-4 mb-1 justify-content-between mx-3">
                                <Stack spacing={2} className="my-auto">
                                    <Breadcrumbs
                                        className="d-flex"
                                        separator={<ArrowRightOutlined />}
                                        aria-label="breadcrumb"
                                    >
                                        {breadcrumbs}
                                    </Breadcrumbs>
                                </Stack>
                            </div>
                            <div className='w-100 p-2 mt-1 bg-white  mainalljob rounded '>
                                <Comment
                                    //   actions={actions}
                                    author={
                                        <div className=' p-2 '>
                                            <h6 className='authorname fontfamily text-black'>Need a Cardiologist, MBBS, FCPS doctor in our Hospital</h6>
                                            <p className='authordetail fontfamily '>Job Posted Nov 12, 2022</p>
                                            <div className='d-flex'>
                                                <p className='Cardiologist px-3 py-2 rounded text-black me-2'>Cardiologist</p>
                                                <p className='Cardiologist px-3 py-2 rounded text-black me-2'>MBBS</p>
                                                <p className='Cardiologist px-3 py-2 rounded text-black me-2'>FCPS</p>
                                            </div>
                                        </div>
                                    }
                                    //   avatar={
                                    //   <div div className=' py-2 ms-1 '>
                                    //   <Avatar  src={imag} alt="img" />
                                    //   </div>
                                    //   }
                                    content={
                                        <>
                                            <p className='contentprog fontfamily text-black p-2'>
                                                Description <br />
                                                Sapien, tempor ornare iaculis egestas sagittis tellus accumsan. Amet lobortis turpis nulla urna posuere tristique. Eu laoreet arcu vel neque suspendisse etiam arcu odio. At tristique porttitor risus cursus cursus arcu morbi gravida lacinia. Vestibulum pretium, consectetur turpis pulvinar accumsan. Aliquam mattis mauris porta enim lorem non volutpat praesent. Commodo interdum enim porta nisl sagittis est eget in.
                                                Diam non posuere egestas vitae pellentesque ornare gravida. Arcu arcu duis pellentesque leo quam aliquam morbi. Habitant diam mi sed risus et amet. Orci, netus semper suspendisse mattis sed tellus non orci lacus. Urna nunc odio enim pulvinar id enim, vestibulum tortor. Eget molestie congue nunc nisi ultricies in. Sed tincidunt cras donec amet. Velit quam malesuada aliquet vitae est.
                                            </p>

                                        </>
                                    }
                                />
                            </div>
                             {/* Top card section */}
                             <div className="row mt-2 py-2 rounded bg-white mx-auto">
                                    <div className="col-sm-4 col-md-4 col-lg-3 col-xl-3 my-2">
                                        <div className='d-flex'>
                                            <img src={contract} height='30px' />
                                            <h6 className='Jobdetailsnumber text-black ms-2'>568365</h6>

                                        </div>
                                        <p className='Jobdetailsheading'>Contract ID</p>
                                    </div>
                                    <div className="col-sm-4 col-md-4 col-lg-3 col-xl-3 my-2">
                                        <div className='d-flex'>
                                            <img src={Morning} height='30px' />
                                            <h6 className='Jobdetailsnumber text-black ms-2'>Morning</h6>

                                        </div>
                                        <p className='Jobdetailsheading'>Job Shift</p>
                                    </div>
                                    <div className="col-sm-4 col-md-4 col-lg-3 col-xl-3 my-2">
                                        <div className='d-flex'>
                                            <img src={hourlyrate} height='30px' />
                                            <h6 className='Jobdetailsnumber text-black ms-2'>$ 80.00</h6>

                                        </div>
                                        <p className='Jobdetailsheading'>Hourly Rate</p>
                                    </div>
                                    <div className="col-sm-4 col-md-4 col-lg-3 col-xl-3 my-2">
                                        <div className='d-flex'>
                                            <img src={time} height='30px' />
                                            <h6 className='Jobdetailsnumber text-black ms-2'>12</h6>

                                        </div>
                                        <p className='Jobdetailsheading'>Hours/week</p>
                                    </div>
                                </div>
                                {/* image section */}
                                <div className="row mt-2 rounded bg-white p-2 mx-auto">
                                <h6 className='PostedBy'>Attachments</h6>
                                <div className="col-sm-6 col-md-4 col-lg-2 col-xl-2 my-2">
                                    <div className='d-flex'>
                                        <img src={Attachmentsimg}  width='200px'/>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-2 col-xl-2 my-2">
                                    <div className='d-flex'>
                                        <img src={pdf} width='200px'/>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-2 col-xl-2 my-2">
                                    <div className='d-flex'>
                                        <img src={pdf}  width='200px'/>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-2 col-xl-2 my-2">
                                    <div className='d-flex'>
                                        <img src={Attachmentsimg} width='200px'/>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-2 col-xl-2 my-2">
                                    <div className='d-flex'>
                                        <img src={pdf} width='200px'/>
                                    </div>
                                </div>


                            </div>
                            <div className="row mt-2 rounded bg-white p-2 mx-auto">
                                <h6 className='PostedBy'>Posted By</h6>
                                <div className="col-sm-4 col-md-4 col-lg-3 col-xl-3 my-2">
                                    <div className='d-flex'>
                                        <img src={PrivateHospital} height='30px' />
                                        <h6 className='Jobdetailsnumber text-black ms-2'>AFIC (NIHD)</h6>

                                    </div>
                                    <p className='Jobdetailsheading'>Private Hospital</p>
                                </div>
                                <div className="col-sm-4 col-md-4 col-lg-3 col-xl-3 my-2">
                                    <div className='d-flex'>
                                        <img src={Location} height='30px' />
                                        <h6 className='Jobdetailsnumber text-black ms-2'>Washington, DC</h6>

                                    </div>
                                    <p className='Jobdetailsheading'>Location</p>
                                </div>
                                <div className="col-sm-4 col-md-4 col-lg-3 col-xl-3 my-2">
                                    <div className='d-flex'>
                                        <img src={Totaljobs} height='30px' />
                                        <h6 className='Jobdetailsnumber text-black ms-2'>142</h6>

                                    </div>
                                    <p className='Jobdetailsheading'>Total Jobs Posted</p>
                                </div>
                                <div className="col-sm-4 col-md-4 col-lg-3 col-xl-3 my-2">
                                    <div className='d-flex'>
                                        <img src={HiringRates} height='30px' />
                                        <h6 className='Jobdetailsnumber text-black ms-2'>96%</h6>

                                    </div>
                                    <p className='Jobdetailsheading'>Hiring Rate</p>
                                </div>

                            </div>

                        </Box>

                    </Box>
                </div>
            </div>
        </div>
    )
}

export default DraftDetails