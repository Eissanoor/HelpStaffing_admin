import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";
import Dataanim from "../../../Assets/icons/98195-loader.json";
import axios from "axios";
import Sidebard from "../../../component/Sidebar/Sidebard";
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
import deletered from "../../../Assets/image/deletered.png";
import editgreen from "../../../Assets/image/editgreen.png";
import Eidappsetting from "../../../component/Popup/App setting/Eidappsetting";
import { ToastContainer, toast } from "react-toastify";
import "../Appsettings.css";
import Collegeedit from "../../../component/Popup/App setting/Collegeedit";
import Degreeleveledit from "../../../component/Popup/App setting/Degreeleveledit";
import Subjectedit from "../../../component/Popup/App setting/Subjectedit";

function Subjects() {
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
//   
// 
// Main fuction of the compount
  const apicall = () => {
    axios
      .get(`/admin/subject?page=1&limit=10`, {
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
// 
// 
// add api section
  const addcall = () => {
    const fromdata = new URLSearchParams();
    fromdata.append("name", name);
    // console.log(name);
    axios
      .post(
        `/admin/subject`,
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
// 
// 
 // Deleted api section
   const Deletedapi = (_id) => {
     console.log(_id);
     axios
       .delete(`/admin/subject?id=${_id}`, {
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


  let NumberId = 0;
  return (
    <>
{Loading ? (
        <Lottie options={defaultOptions} height={400} width={400} />
      ) : (
      <div>
        <Paper className="bg-body ">
          {/* Top section */}
          <div className="px-2">
            <div>
              <p className="specialitypro pt-3 fontstyle fontfamilyRoboto">
                Add a Subject name{" "}
                <span className="text-danger">*</span>
              </p>
              <input
                type="text"
                id="Assistant"
                className="rounded  fontfamilyRaleway pe-5  Assistant p-2"
                placeholder="Enter qualification name"
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
              className="border-0 rounded py-2 addspecilition mt-3  px-5 text-white fontfamilyInter fontstyle"
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
                  Subjects name{" "}
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
              {/* {rows.map(({ id, name, calories, fat, carbs, protein }) => ( */}
              {Object.keys(dataget).map((itme, index) => {
                return (
                  <TableRow className="" key="index">
                    <TableCell
                      numeric
                      className="appsettingtablebody   fontfamilyRaleway fontstyle"
                    >
                      {(NumberId += 1)}
                      
                    </TableCell>
                    <TableCell className="appsettingtablebody   fontfamilyRaleway fontstyle ">
                      {dataget[itme].name}
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
                                sessionStorage.setItem('Subjectid', dataget[itme]._id);
                                sessionStorage.setItem("Subjectname", dataget[itme].name);
                                // sessionStorage.setItem("icon", itme.icon);
                            }
                        } >
                          < Subjectedit / >
                        </p>
                        <img
                          className="cursor"
                          src={deletered}
                          onClick = {
                               () => 
                                Deletedapi(dataget[itme]._id)
                             }
                          width="30px"
                          height="30px"
                        />
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
              {/* ))} */}
            </TableBody>
          </Table>
        </Paper>
        <div className="d-flex mt-3">
          <p className="appentriess  fontfamilyRoboto fontstyle px-2">
            Showing&nbsp;30&nbsp;-&nbsp;{dataget.length}&nbsp;enteries
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
      </div>
      
)}
 < ToastContainer / >
    </>
  );
}

export default Subjects;
