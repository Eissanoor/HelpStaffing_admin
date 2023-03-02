import React from 'react';
import Sidebard from '../../component/Sidebar/Sidebard';
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import { DownOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { styled } from "@mui/material/styles";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { PlusOutlined } from '@ant-design/icons';
import deletblack from "../../Assets/image/deletblack.png";
import editblack from "../../Assets/image/editblack.png";
import plus from "../../Assets/image/plue.png";
import "./PersonalityText.css";
const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    // border: `1px solid ${theme.palette.divider}`,
    "&:not(:last-child)": {
        borderBottom: 0,
    },
    "&:before": {
        display: "none",
    },
}));
const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<DownOutlined sx={{ fontSize: "0.9rem" }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#21222D" : "#21222D;",
    flexDirection: "row",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
        transform: "rotate(180deg)",
    },
    "& .MuiAccordionSummary-content": {
        marginLeft: theme.spacing(1),
    },
}));
const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: "1px solid #21222D",
    // border-radius: "5px;
}));
const drawerWidth = 220;
function PersonalityTest() {

    const navigate = useNavigate();
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
                            <div className="mt-5 ">
                                <div className="container-fluid">
                                    {/* Top card section */}
                                    <div className="row  ">
                                        <h6 className="text-center Personalitytext fontfamilyInter mt-3">Personality Test</h6>
                                        <div className="col-sm-4 col-md-6 col-lg-3 col-xl-3 my-2">
                                            <div className="card forcard-bg Healthcard1 forcardpadding p-3">
                                                <h6 className='Healthheading ms-1'>Total Marks</h6>
                                                <h1 className="Healthnumber color2 ms-1 mt-1">
                                                    10
                                                </h1>
                                            </div>
                                        </div>

                                        <div className="col-sm-4 col-md-6 col-lg-3 col-xl-3 my-2">
                                            <div className="card forcard-bg Healthcard3 forcardpadding p-3">
                                                <h6 className='Healthheading ms-1'>Added Questions Marks </h6>
                                                <h1 className="Postednumber color1 mt-1 ms-1">
                                                    08
                                                </h1>
                                            </div>
                                        </div>

                                        <div className="col-sm-4 col-md-6 col-lg-3 col-xl-3 my-2">
                                            <div className="card forcard-bg Healthcard2 forcardpadding p-3">
                                                <h6 className='Healthheading ms-1'>Remaining Marks </h6>
                                                <h1 className="Healthnumber color1 mt-1 ms-1">
                                                    02
                                                </h1>
                                            </div>
                                        </div>


                                    </div>
                                    {/*  */}
                                    <div className="d-flex mt-3 mb-2 justify-content-between">
                                        <h6 className=" AddQuestions fontfamilyRoboto my-auto">
                                            Add Minimum 05 Questions
                                        </h6>
                                        <button className=' filterpopo fontfamilyRoboto px-3 border-0 filterbtn text-white my-auto rounded mx-2' 
                                         onClick={() => { {navigate("/Personality/Add")}}}><img src={plus} className='me-2 py-1' width='20px' />Add</button>
                                    </div>
                                    <div className=" p-4 bg-white rounded">
                                        <div className="d-flex justify-content-between">
                                            <Accordion>
                                                <AccordionSummary
                                                    style={{
                                                        backgroundColor: "#F7F9FC",
                                                        width: "100%",
                                                        borderRadius: '20px',
                                                        Color: "#000000",
                                                    }}
                                                    className="aalAccordionSummary rounded"
                                                    aria-controls="panel1d-content"
                                                    id="panel1d-header"
                                                >
                                                    <div className="d-flex justify-content-between ">
                                                        <div className="d-flex  justify-content-between">
                                                            <Typography className="PersonalsFAQ fontfamilyInter">
                                                                What's the ideal medical specialty for your personality?   </Typography>
                                                            {/* <hr className="line px-3 "></hr> */}
                                                        </div>
                                                    </div>
                                                </AccordionSummary>

                                                <AccordionDetails className="forbg-faq w-100 mb-0">
                                                    <Typography className="PersonalsFAQ fontfamilyInter ms-1 mt-2 text-black">
                                                        Risus quis pretium scelerisque duis interdum nunc. Gravida diam lectus phasellus eu sit neque?
                                                    </Typography>
                                                    <div className="d-flex mb-0  justify-content-end mt-2">
                                                        <p
                                                            className="forupdatefaq fontfamilyRoboto my-auto cursor"
                                                            onClick={() => navigate("/FAQupdata")}
                                                        >
                                                            Update
                                                        </p>
                                                        <p className="fordeletefaq my-auto fontfamilyRoboto cursor ms-4">Delete</p>
                                                    </div>
                                                </AccordionDetails>

                                            </Accordion>

                                            <div className="personalibtn rounded my-auto py-1 px-2">
                                                {/* <button className='border-0 my-auto editingbtn'><EditOutlined className='editingbtn' /></button> */}
                                                <img className='border-0 my-auto me-2 editingbtn' src={editblack} width="30px"/>
                                                <img src={deletblack} width="25px"/>

                                            </div>
                                        </div>
                                        <div className="d-flex mt-2 justify-content-between">
                                            <Accordion>
                                                <AccordionSummary
                                                    style={{
                                                        backgroundColor: "#F7F9FC",
                                                        width: "100%",
                                                        borderRadius: '20px',
                                                        Color: "#000000",
                                                    }}
                                                    className="aalAccordionSummary rounded"
                                                    aria-controls="panel1d-content"
                                                    id="panel1d-header"
                                                >
                                                    <div className="d-flex justify-content-between ">
                                                        <div className="d-flex  justify-content-between">
                                                            <Typography className="PersonalsFAQ fontfamilyInter">
                                                                What's the ideal medical specialty for your personality?   </Typography>
                                                            {/* <hr className="line px-3 "></hr> */}
                                                        </div>
                                                    </div>
                                                </AccordionSummary>

                                                <AccordionDetails className="forbg-faq w-100 mb-0">
                                                    <Typography className="PersonalsFAQ fontfamilyInter ms-1 mt-2 text-black">
                                                        Risus quis pretium scelerisque duis interdum nunc. Gravida diam lectus phasellus eu sit neque?
                                                    </Typography>
                                                    <div className="d-flex mb-0  justify-content-end mt-2">
                                                        <p
                                                            className="forupdatefaq fontfamilyRoboto my-auto cursor"
                                                            onClick={() => navigate("/FAQupdata")}
                                                        >
                                                            Update
                                                        </p>
                                                        <p className="fordeletefaq my-auto fontfamilyRoboto cursor ms-4">Delete</p>
                                                    </div>
                                                </AccordionDetails>

                                            </Accordion>

                                            <div className="personalibtn rounded my-auto py-1 px-2">
                                                {/* <button className='border-0 my-auto editingbtn'><EditOutlined className='editingbtn' /></button> */}
                                                <img className='border-0 my-auto me-2 editingbtn' src={editblack} width="30px"/>
                                                <img src={deletblack} width="25px"/>

                                            </div>
                                        </div>
                                        <div className="d-flex mt-2 justify-content-between">
                                            <Accordion>
                                                <AccordionSummary
                                                    style={{
                                                        backgroundColor: "#F7F9FC",
                                                        width: "100%",
                                                        borderRadius: '20px',
                                                        Color: "#000000",
                                                    }}
                                                    className="aalAccordionSummary rounded"
                                                    aria-controls="panel1d-content"
                                                    id="panel1d-header"
                                                >
                                                    <div className="d-flex justify-content-between ">
                                                        <div className="d-flex  justify-content-between">
                                                            <Typography className="PersonalsFAQ fontfamilyInter">
                                                                What's the ideal medical specialty for your personality?   </Typography>
                                                            {/* <hr className="line px-3 "></hr> */}
                                                        </div>
                                                    </div>
                                                </AccordionSummary>

                                                <AccordionDetails className="forbg-faq w-100 mb-0">
                                                    <Typography className="PersonalsFAQ fontfamilyInter ms-1 mt-2 text-black">
                                                        Risus quis pretium scelerisque duis interdum nunc. Gravida diam lectus phasellus eu sit neque?
                                                    </Typography>
                                                    <div className="d-flex mb-0  justify-content-end mt-2">
                                                        <p
                                                            className="forupdatefaq fontfamilyRoboto my-auto cursor"
                                                            onClick={() => navigate("/FAQupdata")}
                                                        >
                                                            Update
                                                        </p>
                                                        <p className="fordeletefaq my-auto fontfamilyRoboto cursor ms-4">Delete</p>
                                                    </div>
                                                </AccordionDetails>

                                            </Accordion>

                                            <div className="personalibtn rounded my-auto py-1 px-2">
                                                {/* <button className='border-0 my-auto editingbtn'><EditOutlined className='editingbtn' /></button> */}
                                                <img className='border-0 my-auto me-2 editingbtn' src={editblack} width="30px"/>
                                                <img src={deletblack} width="25px"/>

                                            </div>
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

export default PersonalityTest