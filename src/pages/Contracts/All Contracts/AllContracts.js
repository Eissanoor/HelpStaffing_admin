import React, { useState } from 'react';
import Sidebard from '../../../component/Sidebar/Sidebard';
import AppBar from "@mui/material/AppBar";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import deleteicon from "../../../Assets/image/delete action.png";
import eye from "../../../Assets/image/eyeaction.png";
import Paper from '@mui/material/Paper';
import Badge from "@mui/material/Badge";
import { DownOutlined } from '@ant-design/icons';
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import { Dropdown, Menu, Space } from 'antd';
import './Contract.css'

const drawerWidth = 220;
function AllContracts() {
    const navigate = useNavigate();
    const menu = (
        <Menu
            items={[
                {
                    label: <p onClick={() => { navigate("/Ongoing") }}>Recently Added </p>,
                    key: '0',
                },
                {
                    label: <p onClick={() => { navigate("/Completed") }}>Completed</p>,
                    key: '1',
                },
                {
                    label: <p onClick={() => { navigate("/Pending") }}>Pending</p>,
                    key: '2',
                },
                {
                    label: <p onClick={() => { navigate("/Cancelled") }}>Cancelled</p>,
                    key: '3',
                },
                {
                    label: <p onClick={() => { navigate("/Contracts/Expireds") }}>Expired</p>,
                    key: '4',
                },
            ]}
        />
    );
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
                            <div className="mt-5 p-2 mx-2">

                                <div className="toperse">
                                    <p className="headingContracts fontfamilyRoboto">Contracts</p>
                                    <p className="detatialContracts fontfamilyRoboto">You’ve 06 recommendations to view in contracts.</p>
                                </div>

                                {/* Dropdown menu */}
                                <h6 className='contractdropdown fontfamilyRoboto text-black py-1'>
                                    <Dropdown overlay={menu} trigger={['click']}>
                                        <a onClick={e => e.preventDefault()}>
                                            <Space>
                                                All Contracts
                                                <DownOutlined />
                                            </Space>
                                        </a>
                                    </Dropdown>
                                </h6>
                                {/* Table section */}
                                <Paper className="w-100 h-100 overflow-auto">
                                    <Table className="tablebg mt-4" id="data">
                                        {/* Header section */}
                                        <TableHead>

                                            <TableRow classname='fontfamilyRoboto contracttableheader'>
                                                <TableCell numeric className="fontfamilyRoboto contracttableheader text-center">Contract no.</TableCell>
                                                {/* <TableCell className="tablehad">ID</TableCell> */}
                                                <TableCell className=" fontfamilyRoboto contracttableheader text-center">Hospital </TableCell>
                                                <TableCell className=" fontfamilyRoboto contracttableheader text-center">Health Provider</TableCell>
                                                <TableCell className="fontfamilyRoboto contracttableheader text-center">Total Hours</TableCell>
                                                <TableCell className="fontfamilyRoboto contracttableheader text-center">Starting Date </TableCell>
                                                <TableCell className="fontfamilyRoboto contracttableheader text-center">Ending Date</TableCell>
                                                <TableCell className="fontfamilyRoboto contracttableheader text-center">Status</TableCell>
                                            </TableRow>

                                        </TableHead>
                                        {/* Ongoing */}
                                        <TableBody className="fortablebodycontract text-black fontfamilyInter">
                                            {/* {rows.map(({ id, name, calories, fat, carbs, protein }) => ( */}
                                            <TableRow
                                                className="" >
                                                <TableCell numeric className="fortablebodycontract text-blackcontract text-black fontfamilyInter text-center">
                                                    BW13377
                                                </TableCell>
                                                <TableCell className="fortablebodycontract text-black fontfamilyInter text-center">
                                                    AFIC (NIHD)
                                                </TableCell>

                                                <TableCell className="fortablebodycontract text-black fontfamilyInter text-center">Salman Ahmed</TableCell>
                                                <TableCell className="fortablebodycontract text-black fontfamilyInter text-center">146</TableCell>

                                                <TableCell className="fortablebodycontract text-black fontfamilyInter text-center">
                                                    12-07-2022
                                                </TableCell>
                                                <TableCell className="fortablebodycontract text-black fontfamilyInter text-center">12-07-2022</TableCell>
                                                <TableCell numeric className="fortablebodycontract text-black fontfamilyInter text-center">
                                                <button className='actionbtncontract w-100 ongoing fontfamilyRoboto border-0 p-2 rounded'>Ongoing</button>

                                                </TableCell>
                                            </TableRow>

                                            {/* ))} */}
                                        </TableBody>
                                        {/* Cancelled */}
                                        <TableBody className="fortablebodycontract text-black fontfamilyInter">
                                            {/* {rows.map(({ id, name, calories, fat, carbs, protein }) => ( */}
                                            <TableRow
                                                className="" >
                                                <TableCell numeric className="fortablebodycontract text-blackcontract text-black fontfamilyInter text-center">
                                                    BW13377
                                                </TableCell>
                                                <TableCell className="fortablebodycontract text-black fontfamilyInter text-center">
                                                    AFIC (NIHD)
                                                </TableCell>

                                                <TableCell className="fortablebodycontract text-black fontfamilyInter text-center">Salman Ahmed</TableCell>
                                                <TableCell className="fortablebodycontract text-black fontfamilyInter text-center">146</TableCell>

                                                <TableCell className="fortablebodycontract text-black fontfamilyInter text-center">
                                                    12-07-2022
                                                </TableCell>
                                                <TableCell className="fortablebodycontract text-black fontfamilyInter text-center">12-07-2022</TableCell>
                                                <TableCell numeric className="fortablebodycontract text-black fontfamilyInter text-center">
                                                    <button className='actionbtncontract Cancelled w-100 fontfamilyRoboto border-0 p-2 rounded'>Cancelled</button>

                                                </TableCell>
                                            </TableRow>

                                            {/* ))} */}
                                        </TableBody>
                                        {/* Pending */}
                                        <TableBody className="fortablebodycontract text-black fontfamilyInter">
                                            {/* {rows.map(({ id, name, calories, fat, carbs, protein }) => ( */}
                                            <TableRow
                                                className="" >
                                                <TableCell numeric className="fortablebodycontract text-blackcontract text-black fontfamilyInter text-center">
                                                    BW13377
                                                </TableCell>
                                                <TableCell className="fortablebodycontract text-black fontfamilyInter text-center">
                                                    AFIC (NIHD)
                                                </TableCell>

                                                <TableCell className="fortablebodycontract text-black fontfamilyInter text-center">Salman Ahmed</TableCell>
                                                <TableCell className="fortablebodycontract text-black fontfamilyInter text-center">146</TableCell>

                                                <TableCell className="fortablebodycontract text-black fontfamilyInter text-center">
                                                    12-07-2022
                                                </TableCell>
                                                <TableCell className="fortablebodycontract text-black fontfamilyInter text-center">12-07-2022</TableCell>
                                                <TableCell numeric className="fortablebodycontract text-black fontfamilyInter text-center">
                                                    <button className='actionbtncontract w-100 Pending fontfamilyRoboto border-0 p-2 rounded'>Pending</button>

                                                </TableCell>
                                            </TableRow>

                                            {/* ))} */}
                                        </TableBody>
                                        {/* Expired */}
                                        <TableBody className="fortablebodycontract text-black fontfamilyInter">
                                            {/* {rows.map(({ id, name, calories, fat, carbs, protein }) => ( */}
                                            <TableRow
                                                className="" >
                                                <TableCell numeric className="fortablebodycontract text-blackcontract text-black fontfamilyInter text-center">
                                                    BW13377
                                                </TableCell>
                                                <TableCell className="fortablebodycontract text-black fontfamilyInter text-center">
                                                    AFIC (NIHD)
                                                </TableCell>

                                                <TableCell className="fortablebodycontract text-black fontfamilyInter text-center">Salman Ahmed</TableCell>
                                                <TableCell className="fortablebodycontract text-black fontfamilyInter text-center">146</TableCell>

                                                <TableCell className="fortablebodycontract text-black fontfamilyInter text-center">
                                                    12-07-2022
                                                </TableCell>
                                                <TableCell className="fortablebodycontract text-black fontfamilyInter text-center">12-07-2022</TableCell>
                                                <TableCell numeric className="fortablebodycontract text-black fontfamilyInter text-center">
                                                    <button className='actionbtncontract Expired w-100 fontfamilyRoboto border-0 p-2 rounded'>Expired</button>

                                                </TableCell>
                                            </TableRow>

                                            {/* ))} */}
                                        </TableBody>
                                        {/* Completed */}
                                        <TableBody className="fortablebodycontract text-black fontfamilyInter">
                                            {/* {rows.map(({ id, name, calories, fat, carbs, protein }) => ( */}
                                            <TableRow
                                                className="" >
                                                <TableCell numeric className="fortablebodycontract text-blackcontract text-black fontfamilyInter text-center">
                                                    BW13377
                                                </TableCell>
                                                <TableCell className="fortablebodycontract text-black fontfamilyInter text-center">
                                                    AFIC (NIHD)
                                                </TableCell>

                                                <TableCell className="fortablebodycontract text-black fontfamilyInter text-center">Salman Ahmed</TableCell>
                                                <TableCell className="fortablebodycontract text-black fontfamilyInter text-center">146</TableCell>

                                                <TableCell className="fortablebodycontract text-black fontfamilyInter text-center">
                                                    12-07-2022
                                                </TableCell>
                                                <TableCell className="fortablebodycontract text-black fontfamilyInter text-center">12-07-2022</TableCell>
                                                <TableCell numeric className="fortablebodycontract text-black fontfamilyInter text-center">
                                                    <button className='actionbtncontract Completed w-100 fontfamilyRoboto border-0 p-2 rounded'>Completed</button>

                                                </TableCell>
                                            </TableRow>

                                            {/* ))} */}
                                        </TableBody>
                                        


                                    </Table>
                                </Paper>
                            </div>
                        </Box>
                    </Box>
                </div>
            </div>
        </>
    )
}

export default AllContracts;