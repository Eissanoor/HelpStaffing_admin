import React from 'react';
import Sidebard from '../../../component/Sidebar/Sidebard';
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import './Invoice.css';
const drawerWidth = 220;

function Invoice() {
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
                            <div className='bg-white rounded mt-5'>
                                {/* TOP section */}
                                <div className="px-3 py-4">
                                    <p className='INVOICE fontfamilyRoboto'>INVOICE</p>
                                    <p className="prograpINVOICE fontfamilyRoboto">Oronary artery bypass grafting (CABG)</p>
                                    <div className='d-flex lastdeatilsdata'>
                                        <p className=" fontfamilyRoboto me-4">Date Issued: 12-09-2022</p>
                                        <p className=" fontfamilyRoboto me-4">Date Due: 12-12-2022</p>
                                        <p className=" fontfamilyRoboto me-4">Invoice No: #321</p>
                                    </div>
                                    <hr className="line"></hr>
                                </div>
                                <div className='w-100 px-3 py-4 d-flex '>
                                    <table class="table table-borderless">
                                        <thead className=" tableheaderfirst my-1 fontfamilyRoboto">
                                            <tr>
                                                <td className="fontfamilyRoboto">FROM</td>
                                                <td>TO</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                             <tr>
                                                <td className="fontfamilyRoboto">William Mate</td>
                                                <td>AFIC (NIHD)</td>
                                            </tr>
                                            <tr>
                                                <td className="fontfamilyRoboto">Washington, DC </td>
                                                <td>Washington, DC</td>
                                            </tr>
                                            <tr>
                                                <td className="fontfamilyRoboto">abc@gmail.com</td>
                                                <td>abc@gmail.com</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="">
                                    <button className="sandInvoice text-white rounded fontfamilyInter border-0 mt-3 py-2 px-2">Send Invoice</button>
                                    <button className="Download  rounded fontfamilyInter border-0 mt-3 py-2 px-4">Download</button>
                                    </div>
                                </div>

                                {/* Table section */}
                                <div className='w-100 px-3 py-4 '>
                                    <table class="table table-borderless   table-hover">
                                        <thead className="table-light tableheader my-1 fontfamilyRoboto">
                                            <tr>
                                                <td className="fontfamilyRoboto">Service</td>
                                                <td>Rate</td>
                                                <td>Total Hours</td>
                                                <td>Total</td>
                                            </tr>
                                        </thead>
                                        <tbody className="tablebodys fontfamilyRoboto">
                                            <tr className="my-2 fontfamilyRoboto">
                                                <td >Oronary artery bypass grafting (CABG)</td>
                                                <td>$95/ hour</td>
                                                <td>19 Total hours </td>
                                                <td>$2,980</td>
                                            </tr>
                                            <tr className="my-2 fontfamilyRoboto">
                                                <td >Oronary artery bypass grafting (CABG)</td>
                                                <td>$95/ hour</td>
                                                <td>19 Total hours </td>
                                                <td>$2,980</td>
                                            </tr>
                                            <tr className="my-2 fontfamilyRoboto">
                                                <td >Oronary artery bypass grafting (CABG)</td>
                                                <td>$95/ hour </td>
                                                <td>19 Total hours </td>
                                                <td>$2,980</td>
                                            </tr>
                                        </tbody>
                                        <tfoot className="py-3 ">
                                          
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td className="footer1 fontfamilyRoboto">Sub-Total</td>
                                                <td>$8,980</td>
                                            </tr>
                                            <tr>
                                            <th scope="row"></th>
                                            <th scope="row"></th>
                                                <td className="footer1 fontfamilyRoboto">Tax</td>
                                                <td>$200</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td className="footer1 fontfamilyRoboto">Total</td>
                                                <td>$9,180</td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>

                            </div>


                        </Box>
                    </Box>
                </div>
            </div>
        </>
    )
}

export default Invoice;