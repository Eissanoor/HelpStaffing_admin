import React, { useState, useEffect } from "react";
// import MuiTableCell from "@material-ui/core/TableCell";
// import { withStyles } from "@material-ui/core/styles";
import deleteicon from "../../../Assets/image/Delate.png";
import eye from "../../../Assets/image/eye.png";
import { BsStarFill } from "react-icons/bs";
import { Progress } from "antd";
import ReactPaginate from "react-paginate";
import { Dropdown } from "react-bootstrap";
import Paper from "@mui/material/Paper";
import profilte from "../../../Assets/image/tableimag.png";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import filter from "../../../Assets/image/Filter 2.png";
import "./Table.css";
import { useNavigate } from "react-router-dom";
import AddNewbtn from "../../../component/Popup/Health Providers/AddNewbtn";
import Deleted from "../../../component/Popup/All Hospitals/Deleted";
import Filters from "../../../component/Popup/Health Providers/Filters";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Lottie from "react-lottie";
import Dataanim from "../../../Assets/icons/98195-loader.json";
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
function TableHealth() {
  const [Loading, setLoading] = useState(true);
  
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Dataanim,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  // Main API fuction of the compount
  const [dataget, setdataget] = useState();
 const [pageCount, setPageCount] = useState(0);
 const [currentPage, setCurrentPage] = useState(0);
  const apicall = () => {
    axios
      .get(`https://gold-courageous-cocoon.cyclic.app/allProvider`,
       {
        // headers: {
        //   secretKey:
        //     "rosx.AD-98dBXZnC7rb794a5593PjPQfzDsQgwy.BXF1LNPw4lZLK6BR6Kidf90.@$%hummstaffing???AD",
        //   Authorization: `Bearer ${localStorage.getItem("access_key")}`,
        // },
      })
      .then((res) => {
        setdataget(res.data);
        console.log(res.data);
        // setPageCount(Math.ceil(res.data.docs.length / 10));
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        //    setLoading(false);
      });
  };
  useEffect(() => {
    apicall();
    setLoading(true);
  }, []);
const startIndex = currentPage * 10;
const endIndex = startIndex + 10;
// const pagePosts = dataget.slice(startIndex, endIndex);
  const navigate = useNavigate();
  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
    //  setPage(data.selected.length)

  }
let N=0;
  return (
    <>
      {Loading ? (
        <Lottie options={defaultOptions} height={400} width={400} />
      ) : (
        <div>
          <div className="mt-2">
            <div className="container-fluid ">
              <div className="d-flex justify-content-between my-2 p-1">
                {/* forfilterbtn  */}
                <h6 className="Provider my-auto">All Provider</h6>
                <div className="d-flex my-auto">
                  {/* <button className='my-auto border-0  text-white rounded mx-2 filterbtn py-1' ><img src={filter} className='' width='25px'/>Filter</button> */}
                  {/* <button className='py-1 px-2 border-0 filterbtn text-white rounded mx-2' ><img src={filter} className='me-1 py-1' width='20px'/>Filter</button> */}
                  <Filters />
                  <AddNewbtn />
                </div>
              </div>

              <Paper className="overflow-auto h-100 w-100">
                <Table className="tablebg " id="data">
                  {/* Header section */}
                  <TableHead>
                    <TableRow>
                      <TableCell numeric className="tablehad">
                        ID
                      </TableCell>
                      {/* <TableCell className="tablehad">ID</TableCell> */}
                      <TableCell className="tablehad">Provider Name</TableCell>
                      <TableCell className="tablehad">Email</TableCell>
                      <TableCell className="tablehad">Phone number</TableCell>

                      <TableCell className="tablehad">Expertise</TableCell>
                      <TableCell className="tablehad">Test Taken</TableCell>
                      <TableCell className="tablehad">Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody className="fortableposition">
                    {
                      dataget.map((itme, index) => {
                        return (
                          <TableRow className="">
                            <TableCell numeric className="fortbbody">
                              {/* {itme._id} */}
                              {N+=1}
                            </TableCell>
                            <TableCell className = "fortbbody rounded-circle" >
                              {/* <img
                                src = {
                                    itme.profileImage
}
                                className = "me-2 rounded-circle"
                                alt=""
                                width='50px'
                                height='50px'
                                srcset=""
                              /> */}
                               <Avatar   src = {itme.profileImage} className="me-2"  />
                             {
                               itme.fullname
}
                            </TableCell>

                            <TableCell className="fortbbody">
                             {
                               itme.email
}
                            </TableCell>
                            <TableCell className="fortbbody">
                              +92311234567
                            </TableCell>

                            <TableCell className="fortbbody">
                                {itme.category}
                            </TableCell>
                            <TableCell className="fortbbody ">
                              <Progress
                                percent={30}
                                className="progresswidth w-100"
                              />
                            </TableCell>

                            <TableCell className="fortbbody ">
                              <div className="actionimag d-flex justify-content-around py-2 rounded w-100">
                                <img
                                  className="cursor my-auto"
                                  height="17px"
                                  src={eye}
                                  onClick={() => {
                                    // navigate("/HealthProviders/Details");
                                    navigate(`/HealthProviders/Details/${itme._id}`);
                                    sessionStorage.setItem("detailsprovied", itme._id);
                                  }}
                                />
                                {/* <img  className="cursor" src={deleteicon}/> */}
                                <Deleted />
                              </div>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
              </Paper>
            </div>
          </div>
          <div className="d-flex mt-3">
            <p className="entriess my-auto px-3">
              Showing&nbsp;10&nbsp;-&nbsp;{dataget.length}&nbsp;enteries
            </p>
            <div className="ms-auto px-3">
              <ReactPaginate
               previousLabel={"Previous"}
                nextLabel={" Next"}
                // pageCount={pageCount}
                // pageRange={5}
                 pageCount={pageCount}
                  pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                marginPagesDisplayed={2}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                 activeClassName={'active'}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TableHealth;
