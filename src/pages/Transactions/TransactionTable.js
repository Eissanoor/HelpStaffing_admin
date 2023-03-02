import React, { useState } from "react";
import deleteicon from "../../Assets/image/delete action.png";
import eye from "../../Assets/image/eyeaction.png";
import { BsStarFill } from "react-icons/bs";
import { Progress } from 'antd';
import ReactPaginate from "react-paginate";
import { Dropdown } from "react-bootstrap";
import Paper from '@mui/material/Paper';
import profilte from '../../Assets/image/tableimag.png'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import { useNavigate } from "react-router-dom";
import './Transaction.css'
import AddNewbtn from "../../component/Popup/Health Providers/AddNewbtn";
import Filters from "../../component/Popup/Health Providers/Filters";
import Delete from '../../component/Popup/Delete';
import { SearchOutlined } from '@ant-design/icons';

function TransactionTable() {
    const navigate = useNavigate();
  return (
    <div>
          <div className="mt-2">
        <div className="container-fluid ">
        <div className="d-flex justify-content-between my-2 p-1">
        {/* forfilterbtn  */}
        <div className='my-auto d-flex'>
            <h6 className='Provider my-auto me-2 fw-bolder'>Transactions</h6>
            <div className='w-100 position-relative my-auto'>
                        <p className='position-absolute mt-1  '>
                            <SearchOutlined className='ms-2 ' />
                        </p>
                        <input type='text' id='Speciality' className='bg-transparent rounded mt-1 px-4 w-100 emailinput ' placeholder='Search' required ></input>
                    </div>

            </div>
            <div className="d-flex my-auto">          
             <Filters/>
            </div>
          </div>

          <Paper className="w-100 h-100 overflow-auto ">
            <Table className="tablebg " id="data">
              {/* Header section */}
              <TableHead>
              
              <TableRow classname='headertablesection'>
                <TableCell numeric className="tablehad headertablesection">#</TableCell>
                {/* <TableCell className="tablehad">ID</TableCell> */}
                <TableCell className=" headertablesection">From</TableCell>
                <TableCell className=" headertablesection">TO</TableCell>
                <TableCell className="headertablesection">Paid On</TableCell>
                <TableCell className="headertablesection">Transaction ID</TableCell>
                <TableCell className="headertablesection">Amount</TableCell>
                <TableCell className="headertablesection text-center">Action</TableCell>
              </TableRow>

            </TableHead>
              
              <TableBody className="fortableposition">
                {/* {rows.map(({ id, name, calories, fat, carbs, protein }) => ( */}
                <TableRow
                  className="" >
                  <TableCell numeric className="fortablebody">
                    #1
                  </TableCell>
                  <TableCell className="fortablebody ">
                    {/* <img src={profilte} className='me-2' alt="" srcset="" /> */}
                    AFIC (NIHD)
                  </TableCell>

                  <TableCell className="fortablebody">Mike wilson</TableCell>
                  <TableCell className="fortablebody">09-05-2022</TableCell>

                  <TableCell className="fortablebody">
                  TID534645657
                  </TableCell>
                  <TableCell className="fortablebody">  $20,000.00</TableCell>
                  <TableCell numeric className="fortablebody ">
                    <div className='tableiconbtn d-flex justify-content-around py-1  rounded w-100'>
                    {/* <img  className="cursor my-auto" height="17px" src={eye}  onClick={() => {navigate("/Hospitalview")}}/> */}
                    {/* <img  className="cursor" src={deleteicon}/> */}
                    {/* <Deleted/> */}
                    <img  className="cursor " onClick={() => {
                //   navigate("/JobDetails");
                }} src={eye} width="25px"/>
                  <p className='my-auto'><Delete/></p>
                    </div>
                  </TableCell>
                </TableRow>
                
                {/* ))} */}
              </TableBody>
               
              <TableBody className="fortableposition">
                {/* {rows.map(({ id, name, calories, fat, carbs, protein }) => ( */}
                <TableRow
                  className="" >
                  <TableCell numeric className="fortablebody">
                    #1
                  </TableCell>
                  <TableCell className="fortablebody ">
                    {/* <img src={profilte} className='me-2' alt="" srcset="" /> */}
                    AFIC (NIHD)
                  </TableCell>

                  <TableCell className="fortablebody">Mike wilson</TableCell>
                  <TableCell className="fortablebody">09-05-2022</TableCell>

                  <TableCell className="fortablebody">
                  TID534645657
                  </TableCell>
                  <TableCell className="fortablebody">  $20,000.00</TableCell>
                  <TableCell numeric className="fortablebody ">
                    <div className='tableiconbtn d-flex justify-content-around py-1  rounded w-100'>
                    {/* <img  className="cursor my-auto" height="17px" src={eye}  onClick={() => {navigate("/Hospitalview")}}/> */}
                    {/* <img  className="cursor" src={deleteicon}/> */}
                    {/* <Deleted/> */}
                    <img  className="cursor " onClick={() => {
                //   navigate("/JobDetails");
                }} src={eye} width="25px"/>
                  <p className='my-auto'><Delete/></p>
                    </div>
                  </TableCell>
                </TableRow>
                
                {/* ))} */}
              </TableBody>

              <TableBody className="fortableposition">
                {/* {rows.map(({ id, name, calories, fat, carbs, protein }) => ( */}
                <TableRow
                  className="" >
                  <TableCell numeric className="fortablebody">
                    #1
                  </TableCell>
                  <TableCell className="fortablebody ">
                    {/* <img src={profilte} className='me-2' alt="" srcset="" /> */}
                    AFIC (NIHD)
                  </TableCell>

                  <TableCell className="fortablebody">Mike wilson</TableCell>
                  <TableCell className="fortablebody">09-05-2022</TableCell>

                  <TableCell className="fortablebody">
                  TID534645657
                  </TableCell>
                  <TableCell className="fortablebody">  $20,000.00</TableCell>
                  <TableCell numeric className="fortablebody ">
                    <div className='tableiconbtn d-flex justify-content-around py-1  rounded w-100'>
                    {/* <img  className="cursor my-auto" height="17px" src={eye}  onClick={() => {navigate("/Hospitalview")}}/> */}
                    {/* <img  className="cursor" src={deleteicon}/> */}
                    {/* <Deleted/> */}
                    <img  className="cursor " onClick={() => {
                //   navigate("/JobDetails");
                }} src={eye} width="25px"/>
                  <p className='my-auto'><Delete/></p>
                    </div>
                  </TableCell>
                </TableRow>
                
                {/* ))} */}
              </TableBody>

              </Table>
          </Paper>

        </div>
      </div>
      <div className="d-flex mt-3">
        <p className="entriess my-auto px-3">
          Showing&nbsp;30&nbsp;-&nbsp;36542&nbsp;enteries
        </p>
        <div className="ms-auto px-3">
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
    </div>
  )
}

export default TransactionTable