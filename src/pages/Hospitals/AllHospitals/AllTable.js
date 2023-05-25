import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";
import Dataanim from "../../../Assets/icons/98195-loader.json";
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
import "../Health Providers/Table.css";
import Filter from "../../../component/Popup/All Hospitals/Filter";
// import Addnew from "../../../../../component/Popup/Addnew";
import { useNavigate } from "react-router-dom";
import AddNewbtn from "../../../component/Popup/All Hospitals/AddNewbtn";
import Deleted from "../../../component/Popup/All Hospitals/Deleted";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function AllTable() {
  const [Loading, setLoading] = useState(true);
const [page, setPage] = React.useState(0);
const [rowsPerPage, setRowsPerPage] = React.useState(10);

const handleChangePage = (event, newPage) => {
  setPage(newPage);
};

const handleChangeRowsPerPage = (event) => {
  setRowsPerPage(+event.target.value);
  setPage(0);
};
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
const [length, setlength] = useState("");
const [currentPage, setCurrentPage] = useState(0);
const [rowss, setRows] = React.useState([])
  const apicall = () => {
    axios
      .get("https://gold-courageous-cocoon.cyclic.app/admin/allHospital", {
        headers: {
          autherization: `Bearer ${localStorage.getItem("Tokensss")}`,
        },
      })
      .then((res) => {
        setdataget(res.data);
        console.log(res.data);
         setRows(res.data);
         setlength(res.data.length);
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

  const navigate = useNavigate();
  return (
    <>
      {Loading ? (
        <Lottie options={defaultOptions} height={400} width={400} />
      ) : (
        <div className="p-2">
          <div className="mt-5">
            <div className="container-fluid ">
              <div className="d-flex justify-content-between my-2">
                {/* forfilterbtn  */}
                <h6 className="Provider my-auto">All Hospitals</h6>
                <div className="d-flex my-auto">
                  {/* <button className='my-auto border-0  text-white rounded mx-2 filterbtn py-1' ><img src={filter} className='' width='25px'/>Filter</button> */}
                  {/* <button className='py-1 px-2 border-0 filterbtn text-white rounded mx-2' ><img src={filter} className='me-1' width='20px'/>Filter</button> */}
                  <Filter />
                  <AddNewbtn />
                </div>
              </div>
              <Paper className="w-100 h-100 overflow-auto">
                 <TableContainer sx={{ maxHeight: 500, height: '450px' } }>
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
                      <TableCell className="tablehad">Type</TableCell>
                      <TableCell className="tablehad">Fields</TableCell>
                      <TableCell className="tablehad">Action</TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody className="fortableposition">
                    {dataget &&
                      dataget.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((itme, index) => {
                        return (
                          <TableRow className="">
                            <TableCell numeric className="fortbbody">
                              {itme._id}
                            </TableCell>
                            <TableCell className="fortbbody ">
                              <img
                                src={itme.profileImage}
                                width="35px"
                                height="35px"
                                className="me-2 rounded-circle"
                                alt=""
                                srcset=""
                              />
                              {itme.name}
                            </TableCell>

                            <TableCell className="fortbbody">
                              {itme.email}
                            </TableCell>
                            <TableCell className="fortbbody">
                              {itme.type}
                            </TableCell>

                            <TableCell className="fortbbody">
                              {itme.fields}
                            </TableCell>
                            <TableCell numeric className="fortbbody ">
                              <div className="actionimag d-flex justify-content-around py-2 rounded w-100">
                                <img
                                  className="cursor my-auto"
                                  height="17px"
                                  src={eye}
                                  onClick={() => {
                                    navigate(`/Hospitalview/${itme._id}`);
                                    sessionStorage.setItem("detailshosta",itme._id);
                                    // navigate("/Hospitalview");
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
                </TableContainer>
              </Paper>
            </div>
          </div>

          <div  className = "d-flex mt-3 justify-content-between" >
            <p className="entriess my-auto px-3">
              Total&nbsp;-&nbsp;{dataget.length}&nbsp;enteries
            </p>
            
            <TablePagination
                                  rowsPerPageOptions={[10, 25, 100]}
                                  component="div"
                                  count={length}
                                  rowsPerPage={rowsPerPage}
                                  page={page}
                                  onPageChange={handleChangePage}
                                  onRowsPerPageChange={handleChangeRowsPerPage}
                              />
          </div>
        </div>
      )}
    </>
  );
}

export default AllTable;
