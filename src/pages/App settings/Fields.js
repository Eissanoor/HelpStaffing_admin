import React, { useState, useEffect } from "react";
import Sidebard from "../../component/Sidebar/Sidebard";
import Box from "@mui/material/Box";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppBar from "@mui/material/AppBar";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import Stack from "@mui/material/Stack";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import {
  ArrowRightOutlined,
  RightOutlined,
  FileZipOutlined,
} from "@ant-design/icons";
import Typography from "@mui/material/Typography";
import { Progress } from "antd";
import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import ReactPaginate from "react-paginate";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import { Switch } from "antd";
import Lottie from "react-lottie";
import Dataanim from "../../Assets/icons/98195-loader.json";
import axios from "axios";
import TableRow from "@mui/material/TableRow";
import deletered from "../../Assets/image/deletered.png";
import editgreen from "../../Assets/image/editgreen.png";
import Eidappsetting from "../../component/Popup/App setting/Eidappsetting";
import "./Appsettings.css";
import Fielededit from "../../component/Popup/App setting/Fielededit";

function Fields() {
  const [Loading, setLoading] = useState(true);
  const [dataget, setdataget] = useState([]);
  const [name, setname] = useState();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Dataanim,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  // Main fuction of the compount
  const pageNumberLimit = 10;
  // const [currentPage, setCurrentPage] = useState(1);
  const [maxPageLimit, setMaxPageLimit] = useState(10);
  const [minPageLimit, setMinPageLimit] = useState(0);
   const [page, setPage] = useState();
     const [pageCount, setPageCount] = useState(0);
     const [currentPage, setCurrentPage] = useState(0);


  const apicall = () => {
    axios
      .get(`/admin/fields`, {
        headers: {
          secretKey:
            "rosx.AD-98dBXZnC7rb794a5593PjPQfzDsQgwy.BXF1LNPw4lZLK6BR6Kidf90.@$%hummstaffing???AD",
          Authorization: `Bearer ${localStorage.getItem("access_key")}`,
        },
      })
      .then((res) => {
        setdataget(res.data.docs);
        console.log(res.data.docs);
        setPageCount(Math.ceil(res.data.docs.length / 10));
        
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

 const handlePageClick = (data) => {
   setCurrentPage(data.selected);
  //  setPage(data.selected.length)
  
 }

 const startIndex = currentPage * 10;
 const endIndex = startIndex + 10;
 const pagePosts = dataget.slice(startIndex, endIndex);

 let N = 0;


  // add api
  // add api section
  const addcall = () => {
    const fromdata = new URLSearchParams();
    fromdata.append("name", name);
    // console.log(name);
    axios.post(
        `/admin/fields`,
        {
          name: name,
        },
        {
          headers: {
            secretKey:
              "rosx.AD-98dBXZnC7rb794a5593PjPQfzDsQgwy.BXF1LNPw4lZLK6BR6Kidf90.@$%hummstaffing???AD",
            Authorization: `Bearer ${localStorage.getItem("access_key")}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        setname('')
        toast.success('Added Successfully', {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error(`Already Exist ${err.message}`, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  function loginbutton(e) {
    e.preventDefault();
    addcall();
     apicall();
  }

   // Deleted api section
   const Deletedapi = (id) => {
    //  console.log(id);
     axios
       .delete(`/admin/fields?id=${id}`, {
         headers: {
           secretKey: "rosx.AD-98dBXZnC7rb794a5593PjPQfzDsQgwy.BXF1LNPw4lZLK6BR6Kidf90.@$%hummstaffing???AD",
           Authorization: `Bearer ${localStorage.getItem("access_key")}`,
         },
       })
       .then((res) => {
         console.log(res);
          apicall();
         toast.success("Deleted Successfully", {
           position: "bottom-center",
           autoClose: 5000,
           hideProgressBar: false,
           closeOnClick: true,
           pauseOnHover: true,
           draggable: true,
           progress: undefined,
           theme: "light",
         });
       })
       .catch((err) => {
         console.log(err);
         toast.error(`Deleted Error ${err.message}`, {
           position: "bottom-center",
           autoClose: 5000,
           hideProgressBar: false,
           closeOnClick: true,
           pauseOnHover: true,
           draggable: true,
           progress: undefined,
           theme: "light",
         });
       });
   };

  
  return (
    <>
      {Loading ? (
        <Lottie options={defaultOptions} height={400} width={400} />
      ) : (
        <div>
          < Paper className = "bg-body w-100 h-100 overflow-auto text-nowrap" >
            {/* Top section */}
            <div className="px-2 ms-3">
              <div>
                <p className="specialitypro pt-3 fontstyle fontfamilyRoboto">
                  Add a Fields for Health Provider
                  <span className="text-danger">*</span>
                </p>
                <input
                  type="text"
                  id="Assistant"
                  className="rounded fontfamilyRaleway pe-5 Assistant p-2"
                  placeholder="Enter Fields name"
                  value={name}
                  onChange={(e) => {
                    setname(e.target.value);
                  }}
                  required
                ></input>
              </div>
              <button
                type="submit"
                onClick={loginbutton}
                className="border-0 rounded py-2  addspecilition mt-3  px-5 text-white fontfamilyInter fontstyle"
              >
                Add
              </button>
            </div>
            <Table className="bg-body mt-4" id="data">
              {/* Header section */}
              <TableHead>
                <TableRow classname="appsettingheadertable">
                  <TableCell
                    numeric
                    className="tablehad appsettingheadertable   fontfamilyRaleway fontstyle"
                  >
                    SR.no
                  </TableCell>
                  {/* <TableCell className="tablehad">ID</TableCell> */}
                  <TableCell className=" appsettingheadertable   fontfamilyRaleway fontstyle">
                    Fields name{" "}
                  </TableCell>
                  <TableCell className=" appsettingheadertable   fontfamilyRaleway fontstyle">
                    Status
                  </TableCell>
                  <TableCell className="appsettingheadertable text-end   fontfamilyRaleway fontstyle">
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody className="fontfamilyRaleway fontstyle">
                {
                  pagePosts.map((itme, index) => {
                  return (
                    <TableRow className="" key='index'>
                      <TableCell
                        numeric
                        className="appsettingtablebody   fontfamilyRaleway fontstyle"
                      >
                        {
N += 1
                        }
                      </TableCell>
                      <TableCell className="appsettingtablebody   fontfamilyRaleway fontstyle ">
                        {itme.name}
                      </TableCell>

                      <TableCell className="appsettingtablebody   fontfamilyRaleway fontstyle">
                        {/* <Switch defaultChecked /> */}
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            checked={`{itme.status }`}
                            id="flexSwitchCheckDefault"
                          ></input>
                        </div>
                      </TableCell>

                      <TableCell
                        numeric
                        className="appsettingtablebody   fontfamilyRaleway fontstyle "
                      >
                        <div className=" d-flex pt-2  w-100 justify-content-end rounded my-auto">
                          <p className="me-2 cursor "
                          onClick={()=>{
                              sessionStorage.setItem('filededitid', itme._id);
                              sessionStorage.setItem("filededitname", itme.name);
                              // sessionStorage.setItem("icon", itme.icon);
                          }}>
                            < Fielededit / >
                          </p>
                          <img
                            className="cursor"
                            src={deletered}
                             onClick = {
                               () => Deletedapi(itme._id)
                             }
                            width="30px"
                            height="30px"
                          />
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Paper>
          <div className="d-flex mt-3">
            <p className="appentriess  fontfamilyRoboto fontstyle px-2">
              Showing&nbsp;10&nbsp;-&nbsp;
               {
                 dataget.length
               } &nbsp;
               enteries
            </p>
            <div className="ms-auto appentriess  fontfamilyRoboto fontstyle px-3">
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
          < ToastContainer / >
        </div>
     )}
    </>
  );
}

export default Fields;
