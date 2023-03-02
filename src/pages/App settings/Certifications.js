import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";
import Dataanim from "../../Assets/icons/98195-loader.json";
import axios from "axios";
import {
  ToastContainer,
  toast
} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebard from "../../component/Sidebar/Sidebard";
import Box from "@mui/material/Box";
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
import TableRow from "@mui/material/TableRow";
import deletered from "../../Assets/image/deletered.png";
import editgreen from "../../Assets/image/editgreen.png";
import Eidappsetting from "../../component/Popup/App setting/Eidappsetting";
import "./Appsettings.css";
import CertificationsEidit from "../../component/Popup/App setting/CertificationsEidit";

function Certifications() {
  let N=0;
  const [currentpage, setcurrentpage] = useState(1);
  const [dataperpage] = useState(10);
  const [name, setname] = useState();
  const [pageCount, setPageCount] = useState(1);
  const [currentPage, setcurrentPage] = useState(0);
  const [query, setQuery] = useState(1);
  const [totalpage, settotalpage] = useState(0);
  const [Loading, setLoading] = useState(true);
  const [dataget, setdataget] = useState([]);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Dataanim,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  // Main fuction of the compount
  const apicall = () => {
    axios.get(`/admin/certification`, {
        headers: {
          secretKey:
            "rosx.AD-98dBXZnC7rb794a5593PjPQfzDsQgwy.BXF1LNPw4lZLK6BR6Kidf90.@$%hummstaffing???AD",
          Authorization: `Bearer ${localStorage.getItem("access_key")}`,
        },
      })
      .then((res) => {
        //   localStorage.setItem("access_key",res.headers.bearer)
        // console.log(res.data.length);
        setdataget(res.data.docs);
        settotalpage(res.data.length);
        console.log(res.data);
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

   // Deleted api section
   const Deletedapi = (id) => {
    //  console.log(id);
     axios
       .delete(`/admin/certification?id=${id}`, {
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

  const indexOfLastPost = currentpage + dataperpage;
  const indexOfFirstPost = indexOfLastPost - dataperpage;
  // add api section
  const addcall = () => {
    const fromdata = new URLSearchParams();
    fromdata.append("name", name);
    console.log(name);
    axios
      .post(
        `/admin/certification`,
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
  }

  function handlePageChange() {
    console.log("click");
  }

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
                  Add a certification for Health Provider{" "}
                  <span className="text-danger">*</span>
                </p>
                <input
                  type="text"
                  id="Assistant"
                  value={name}
                  onChange={(e) => {
                    setname(e.target.value);
                  }}
                  className="rounded  fontfamilyRaleway pe-5  Assistant p-2"
                  placeholder="Enter certification name"
                  required
                ></input>
              </div>
              <button
                type="submit"
                onClick={loginbutton}
                className="border-0 rounded py-2 addspecilition mt-3  px-5 text-white fontfamilyInter fontstyle"
              >
                Add
              </button>
            </div>
            <Table Table className = "bg-body mt-4 "
            id = "data" >
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
                    Certification name{" "}
                  </TableCell>
                  <TableCell className=" appsettingheadertable   fontfamilyRaleway fontstyle">
                    Status
                  </TableCell>
                  <TableCell className="appsettingheadertable text-end   fontfamilyRaleway fontstyle">
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody className="   fontfamilyRaleway fontstyle">
                {dataget.map((itme, index) => {
                  return (
                    <TableRow className="">
                      <TableCell
                        numeric
                        className="appsettingtablebody   fontfamilyRaleway fontstyle"
                      >
                        {/* {itme._id} */}
                         {N+=1}
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
                          < p className = "me-2 cursor "
                          onClick = {
                            () => {
                              sessionStorage.setItem('certificationid', itme._id);
                              sessionStorage.setItem("certificationname", itme.name);
                              // sessionStorage.setItem("icon", itme.icon);
                            }
                          } >
                            < CertificationsEidit / >
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
              Showing&nbsp;30&nbsp;-&nbsp;
              {
                dataget.length
              } &nbsp;
              enteries
            </p>
            <div className="ms-auto appentriess  fontfamilyRoboto fontstyle px-3">
              <ReactPaginate
                previousLabel={"Next"}
                nextLabel={"Previous"}
                // pageCount={pageCount}
                // pageRange={5}
                marginPagesDisplayed={2}
                onPageChange={handlePageChange}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                // nextLinkClassName={"nextBttn"}
                // disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
              />
            </div>
          </div>
          < ToastContainer / >
        </div>
      )}
    </>
  );
}

export default Certifications;
