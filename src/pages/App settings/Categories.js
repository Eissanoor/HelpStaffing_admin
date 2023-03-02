import React, { useState, useEffect } from "react";
import Sidebard from "../../component/Sidebar/Sidebard";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import Stack from "@mui/material/Stack";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import {
  ArrowRightOutlined,
  RightOutlined,
  FileZipOutlined,
} from "@ant-design/icons";
import Typography from "@mui/material/Typography";
import { Progress } from "antd";
import { useNavigate ,Link} from "react-router-dom";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import Lottie from "react-lottie";
import Dataanim from "../../Assets/icons/98195-loader.json";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Switch } from "antd";
import TableRow from "@mui/material/TableRow";
import deletered from "../../Assets/image/deletered.png";
import editgreen from "../../Assets/image/editgreen.png";
import ReactPaginate from "react-paginate";
import Eidappsetting from "../../component/Popup/App setting/Eidappsetting";
import Addcategories from "../../component/Popup/App setting/Addcategories";
import SubCategories from "../../component/Popup/App setting/SubCategories";
import SubCategoriess from "../../pages/App settings/Sub-Categories/SubCategories"
// import Item from "antd/lib/list/Item";

function Categories() {
  let N = 0;
  const navigate = useNavigate();
  const [Loading, setLoading] = useState(true);
  const [dataget, setdataget] = useState([]);
 const [pageCount, setPageCount] = useState(0);
 const [currentPage, setCurrentPage] = useState(0);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Dataanim,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
 
  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    console.log("nex");
  };
  // Main fuction of the compount
  const apicall = () => {
    axios.get(`/admin/category`, {
        headers: {
          secretKey:
            "rosx.AD-98dBXZnC7rb794a5593PjPQfzDsQgwy.BXF1LNPw4lZLK6BR6Kidf90.@$%hummstaffing???AD",
          Authorization: `Bearer ${localStorage.getItem("access_key")}`,
        },
      })
      .then((res) => {
        //   localStorage.setItem("access_key",res.headers.bearer)
        //   console.log(res.data);
        setdataget(res.data.docs);
        console.log(res);
        setLoading(false);
         setPageCount(Math.ceil(res.data.docs.length / 10));
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

  const handleNextClick = () => {
    console.log("click");
    setCurrentPage((page) => page + 1);
  };

  // Deleted api section
  const Deletedapi = (id) => {
    // console.log(id);
    axios.delete(
        `/admin/category?id=${id}`,
        {
          headers: {
            secretKey:
              "rosx.AD-98dBXZnC7rb794a5593PjPQfzDsQgwy.BXF1LNPw4lZLK6BR6Kidf90.@$%hummstaffing???AD",
            Authorization: `Bearer ${localStorage.getItem("access_key")}`,
          },
        }
      )
      .then((res) => {
         apicall();
        console.log(res);
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
        console.log(err.data.message);
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
  
  const movesubcater = ((id) => {
console.log(id);
// navigate( < SubCategoriess / > )
  })
  const startIndex = currentPage * 10;
  const endIndex = startIndex + 10;
  const pagePosts = dataget.slice(startIndex, endIndex);
  return (
    <>
      {Loading ? (
        <Lottie options={defaultOptions} height={400} width={400} />
      ) : (
        <div>
          <div className="d-flex justify-content-end">
            <p className="mx-1">
              <Addcategories />
            </p>
            <p className="mx-1">
              <SubCategories />
            </p>
          </div>

                  {/* <p
                    className={
                      value === "ParentCategories" ? "ActiveUser" : "NonActiveUser"
                    }
                    onClick = {
                      () => setvalue("ParentCategories")
                    }
                  >
                  Parent Categories
                  </p>
                    <p
                    className={
                      value === "SubCategories" ? "ActiveUser" : "NonActiveUser"
                    }
                    onClick = {
                      () => setvalue("SubCategories")
                    }
                  >
                  Sub Categories
                  </p>
{
  value === "ParentCategories"?(
    < SubCategories/>
  ): < SubCategoriess / >
} */}
          <Paper
            Paper
            className="bg-body w-100 h-100 overflow-auto text-nowrap"
          >
            <Table className="bg-body" id="data">
              {/* Header section */}
              <TableHead>
                <TableRow classname="appsettingheadertable">
                  <TableCell
                    numeric
                    className="tablehad appsettingheadertable fontfamilyRaleway fontstyle"
                  >
                    SR.no
                  </TableCell>
                  {/* <TableCell className="tablehad">ID</TableCell> */}
                  <TableCell className="appsettingheadertable fontfamilyRaleway fontstyle">
                    Category name
                  </TableCell>
                  <TableCell className="appsettingheadertable fontfamilyRaleway fontstyle">
                    Status
                  </TableCell>
                  <TableCell className="appsettingheadertable text-end fontfamilyRaleway fontstyle">
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              {/* ------------ */}
              {/* ROw 1 */}

              <TableBody className="fontfamilyRaleway fontstyle">
                {
                  pagePosts.map((itme, index) => {
                  return (
                    <TableRow key={index} className="">
                      <TableCell
                        numeric
                        className="appsettingtablebody fontfamilyRaleway fontstyle"
                      >
                        {/* { sessionStorage.setItem('idget', itme._id)} */}
                        {/* {itme._id} */}
                         {N+=1}
                      </TableCell>
                      <TableCell  className = "appsettingtablebody fontfamilyRaleway fontstyle  cursor" onClick={movesubcater}>
                      <Avatar src={itme.icon} className='me-2'/>
                        {itme.name}
                      </TableCell>

                      <TableCell className="appsettingtablebody fontfamilyRaleway fontstyle">
                        {/* <Switch defaultChecked /> */}
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                            checked={`{itme.status }`}
                          ></input>
                        </div>
                      </TableCell>

                      <TableCell
                        numeric
                        className="appsettingtablebody fontfamilyRaleway fontstyle "
                      >
                        <div className=" d-flex pt-2  w-100 justify-content-end rounded my-auto">
                          <p  className = "me-2 cursor "
                          onClick = {
                            (e) => {
                              sessionStorage.setItem('idget', itme._id);
                              sessionStorage.setItem("name", itme.name);
                              sessionStorage.setItem("icon", itme.icon);
                            }
                          }
                          >

                            <Eidappsetting />
                          </p>
                          <img
                            className="cursor"
                            src={deletered}
                            onClick={() => Deletedapi(itme._id)}
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
            <ToastContainer />
          </Paper>

          <div className="d-flex mt-3">
            <p className="appentriess fontfamilyRoboto fontstyle px-2">
              Showing&nbsp;10&nbsp;- &nbsp;
              {dataget.length}
              &nbsp;enteries
            </p>
            <div className="ms-auto appentriess fontfamilyRoboto fontstyle px-3">
              <ReactPaginate
                previousLabel={"Next"}
                nextLabel={"Previous"}
                // pageCount={pageCount}
                 pageCount={pageCount}
                  pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                pageRange={10}
                marginPagesDisplayed={2}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
                renderOnZeroPageCount={null}
              />
             
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Categories;
