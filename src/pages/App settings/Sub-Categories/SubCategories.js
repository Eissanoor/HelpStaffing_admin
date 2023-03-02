import React from 'react';
import Sidebard from '../../../component/Sidebar/Sidebard';
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import Stack from "@mui/material/Stack";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { ArrowRightOutlined, RightOutlined, FileZipOutlined } from '@ant-design/icons';
import Typography from "@mui/material/Typography";
import { Progress } from 'antd';
import { useNavigate } from "react-router-dom";
import Paper from '@mui/material/Paper';
import ReactPaginate from "react-paginate";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import { Switch } from 'antd';
import TableRow from '@mui/material/TableRow';
import deletered from "../../../Assets/image/deletered.png";
// import editgreen from "../../../../HeaderAssets/image/editgreen.png";
import Eidappsetting from '../../../component/Popup/App setting/Eidappsetting';
function SubCategories() {
      const navigate = useNavigate();
     // Breadcrumbs
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
          navigate("/Appsettings");
        }}
      >
        App settings
      </span>
    </div>,
    <Typography key="3" className=" AllUsersBredCrumbs ">
      <span className="forbreadcrumbactive fw-bolder ">Categories</span>
    </Typography>,
    <Typography key="3" className=" AllUsersBredCrumbs ">
      <span className="forbreadcrumbactive fw-bolder ">
     Doctors
      </span>
    </Typography>,
  ];
  return (
    <>
     <Paper className="bg-body ">
                {/* Top section */}
                 <div className="d-flex text-black justify-content-between mx-3">
                          <Stack spacing={2} className="my-auto">
                            <Breadcrumbs
                              className="d-flex"
                              separator={<RightOutlined />}
                              aria-label="breadcrumb"
                            >
                              {breadcrumbs}
                             {/* <p>Doctors</p> */}
                              {/* {sessionStorage.setItem("ticketId", itme.ticketId)} */}
                            </Breadcrumbs>
                          </Stack>
                        </div>
                <div className="px-2">
                    <div>
                        <p className='specialitypro pt-3 fontstyle fontfamilyRoboto'>Add a qualifications for Health Provider <span className='text-danger'>*</span></p>
                        <input type='text' id='Assistant' className='rounded  fontfamilyRaleway pe-5  Assistant p-2' placeholder='Enter qualification name' required ></input>
                    </div>
                    <button type="button" className="btn addspecilition mt-3  px-5 text-white fontfamilyInter fontstyle">Add</button>
                </div>
                <Table className="bg-body mt-4" id="data">
                    {/* Header section */}
                    <TableHead>

                        <TableRow classname='appsettingheadertable'>
                            <TableCell numeric className="tablehad appsettingheadertable   fontfamilyRaleway fontstyle">SR.no</TableCell>
                            {/* <TableCell className="tablehad">ID</TableCell> */}
                            <TableCell className=" appsettingheadertable   fontfamilyRaleway fontstyle">Name </TableCell>
                            <TableCell className=" appsettingheadertable   fontfamilyRaleway fontstyle">Status</TableCell>
                            <TableCell className="appsettingheadertable text-end   fontfamilyRaleway fontstyle">Action</TableCell>
                        </TableRow>

                    </TableHead>

                    <TableBody className="   fontfamilyRaleway fontstyle">
                        {/* {rows.map(({ id, name, calories, fat, carbs, protein }) => ( */}
                        <TableRow
                            className="" >
                            <TableCell numeric className="appsettingtablebody   fontfamilyRaleway fontstyle">
                                01
                            </TableCell>
                            <TableCell className="appsettingtablebody   fontfamilyRaleway fontstyle ">
                                MBBS
                            </TableCell>

                            <TableCell className="appsettingtablebody   fontfamilyRaleway fontstyle">
                                {/* <Switch defaultChecked /> */}
                                <div className="form-check form-switch">
                                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"></input>
                                </div>

                            </TableCell>

                            <TableCell numeric className="appsettingtablebody   fontfamilyRaleway fontstyle ">
                                <div className=' d-flex pt-2  w-100 justify-content-end rounded my-auto'>
                                    <p className="me-2 cursor "><Eidappsetting /></p>
                                    <img className="cursor" src={deletered} width="30px" height="30px" />
                                </div>
                            </TableCell>
                        </TableRow>

                        {/* ))} */}
                    </TableBody>
                    {/*  */}
                    <TableBody className="   fontfamilyRaleway fontstyle">
                        {/* {rows.map(({ id, name, calories, fat, carbs, protein }) => ( */}
                        <TableRow
                            className="" >
                            <TableCell numeric className="appsettingtablebody   fontfamilyRaleway fontstyle">
                                02
                            </TableCell>
                            <TableCell className="appsettingtablebody   fontfamilyRaleway fontstyle ">
                                FCPS
                            </TableCell>

                            <TableCell className="appsettingtablebody   fontfamilyRaleway fontstyle">
                                {/* <Switch defaultChecked /> */}
                                <div className="form-check form-switch">
                                    <input className="form-check-input" checked type="checkbox" id="flexSwitchCheckDefault"></input>
                                </div>

                            </TableCell>

                            <TableCell numeric className="appsettingtablebody   fontfamilyRaleway fontstyle ">
                                <div className=' d-flex pt-2  w-100 justify-content-end rounded my-auto'>
                                    <p className="me-2 cursor "><Eidappsetting /></p>
                                    <img className="cursor" src={deletered} width="30px" height="30px" />
                                </div>
                            </TableCell>
                        </TableRow>

                        {/* ))} */}
                    </TableBody>
                    {/*  */}
                    <TableBody className="   fontfamilyRaleway fontstyle">
                        {/* {rows.map(({ id, name, calories, fat, carbs, protein }) => ( */}
                        <TableRow
                            className="" >
                            <TableCell numeric className="appsettingtablebody   fontfamilyRaleway fontstyle">
                                03
                            </TableCell>
                            <TableCell className="appsettingtablebody   fontfamilyRaleway fontstyle ">
                                PFSC
                            </TableCell>

                            <TableCell className="appsettingtablebody   fontfamilyRaleway fontstyle">
                                {/* <Switch defaultChecked /> */}
                                <div className="form-check form-switch">
                                    <input className="form-check-input" type="checkbox" checked id="flexSwitchCheckDefault"></input>
                                </div>

                            </TableCell>

                            <TableCell numeric className="appsettingtablebody   fontfamilyRaleway fontstyle ">
                                <div className=' d-flex pt-2  w-100 justify-content-end rounded my-auto'>
                                    <p className="me-2 cursor "><Eidappsetting /></p>
                                    <img className="cursor" src={deletered} width="30px" height="30px" />
                                </div>
                            </TableCell>
                        </TableRow>

                        {/* ))} */}
                    </TableBody>
                </Table>
            </Paper>
            <div className="d-flex mt-3">
                <p className="appentriess  fontfamilyRoboto fontstyle px-2">
                    Showing&nbsp;30&nbsp;-&nbsp;36542&nbsp;enteries
                </p>
                <div className="ms-auto appentriess  fontfamilyRoboto fontstyle px-3">
                    <ReactPaginate
                        previousLabel={"Next"}
                        nextLabel={"Previous"}
                        // pageCount={pageCount}
                        pageRange={5}
                        marginPagesDisplayed={2}
                        // onPageChange={handlePageChange}
                        containerClassName={"paginationBttns"}
                        previousLinkClassName={"previousBttn"}
                        nextLinkClassName={"nextBttn"}
                        disabledClassName={"paginationDisabled"}
                        activeClassName={"paginationActive"}
                    />
                </div>
            </div>
    </>
  )
}

export default SubCategories