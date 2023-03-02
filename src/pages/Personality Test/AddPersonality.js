import React ,{useState}from 'react';
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
import { Switch } from 'antd';

import "./PersonalityText.css"
const drawerWidth = 220;
function AddPersonality() {
const [showtext, setshowtext] = useState(false);
const [showtext2, setshowtext2] = useState(false);
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
                                <div className="container-fluid mt-5">
                                    <div className=" p-4 bg-white rounded mt-5">
                                        {/* Top section */}
                                        <div className="">
                                            <h6 className=" Personalitytext fontfamilyInter fontstyle mt-3">Personality Test</h6>
                                            <p className="addpersonalpro fontfamilyInter fontstyle">You have not yet added any question, Add atleast 5 questions to test Providers personality</p>
                                            <textarea
                                                className="textareaforaddpersonal mt-4 rounded border-0 bg fontfamilyInter forfaqtextarea p-4 w-100"
                                                rows="5"
                                                cols="130"
                                                placeholder="Add a relevant question..."
                                            ></textarea>


                                        </div>
                                        <div className="w-100 mt-5">
                                            <div className="row w-100">
                                                <div className="col-9">
                                                <input type="text" className="py-2  px-3 addoption rounded fontstyle fontfamilyInter w-100" placeholder="Add option no1"></input>
                                               
                                                </div>
                                                <div className="col-3 my-auto d-flex">
                                                <Switch   onClick={()=> setshowtext(!showtext)}/>
                                            {
                                                showtext? <h6 className='my-auto ms-3 correctanswer colorblue fontfamilyRoboto fontstyle'>Correct Answer</h6>
                                               :null
                                            }
                                                </div>
                                            </div>
                                            <div className="row w-100 mt-3">
                                                <div className="col-9">
                                                <input type="text" className="py-2  px-3 addoption rounded fontstyle fontfamilyInter w-100" placeholder="Add option no2"></input>
                                               
                                                </div>
                                                <div className="col-3 my-auto d-flex">
                                                <Switch  onClick={()=> setshowtext2(true)}/>
                                            {
                                                showtext2? <h6 className='my-auto ms-3 correctanswer colorblue fontfamilyRoboto fontstyle'>Correct Answer</h6>
                                               :null
                                            }
                                                </div>
                                            </div>
                                            {/* Button  */}
                                            <div className="d-flex mt-4  w-auto">
                                                <button  className="personialbtss colorblue fontfamilyInter fontstyle borderse1 p-2">2.0 </button>
                                                <button className="personialbtss p-2  bgcolor fontfamilyInter fontstyle borderse2 text-white">out of 10</button>
                                            </div>
                                            {/* Sava btn */}
                                            <div className="text-end mt-1">
                                            <button className="personialbtss py-2 px-3  bgcolor rounded  fontfamilyRoboto fontstyle  text-white">save</button>
                                           
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

export default AddPersonality