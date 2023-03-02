import React, { createElement, useState, useEffect } from "react";
import Lottie from "react-lottie";
import Dataanim from "../../Assets/icons/98195-loader.json";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
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
  FileOutlined,
} from "@ant-design/icons";
import Typography from "@mui/material/Typography";
import { Progress } from "antd";
import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import { Avatar, Comment, Tooltip } from "antd";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import { useParams } from "react-router-dom";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import suppportrequest from "../../Assets/image/supportre.png";
import { Usenavigate } from "react-dom";
import logomesssage from "../../Assets/image/message12.png";
import pdf from "../../Assets/image/pdf1.png";
import sand from "../../Assets/image/sand.png";
import "antd/dist/antd.css";
import { UploadOutlined } from "@ant-design/icons";
import { Button, message, Upload } from "antd";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import "./SupportRequest.css";
const drawerWidth = 220;

function Supportmessage() {
  const navigate = useNavigate();
  const [Loading, setLoading] = useState(true);
  const [dataget, setdataget] = useState({});
  const [status, setstatus] = useState("");
  const [profiling, setprofiling] = useState()

  const WAITTIME = 5000;
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Dataanim,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  // Main fuction of the compount
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  const apicall = () => {
    const date = new Date();
    const showTime = date.getMinutes() + ":" + date.getSeconds();
    const id = sessionStorage.getItem("Supportdetails");
    axios
      .get(`/admin/ticket/message?ticketId=${id}&page=1&limit=10`, {
        headers: {
          secretKey:
            "rosx.AD-98dBXZnC7rb794a5593PjPQfzDsQgwy.BXF1LNPw4lZLK6BR6Kidf90.@$%hummstaffing???AD",
          Authorization: `Bearer ${localStorage.getItem("access_key")}`,
        },
      })
      .then((res) => {
        setdataget(res.data.docs);
        console.log(res.data.docs);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        //    setLoading(false);
      });
  };

  useEffect(() => {
    apicall();
  }, []);

  const [message, setmessage] = useState("");
  const [attachment, setattachment] = useState();
  const [image, setimage] = useState();
  const [ticketId, setticketId] = useState();
  const [replayapis, setreplayapis] = useState(false);
  const WAIT_TIME = 5000;
  const replayapi = (id) => {
    //   let idticket = sessionStorage.getItem("Supportdetails");

    let idticket = sessionStorage.getItem("ticketId");
    // console.log(idticket);
    const fromdata = new FormData();
    fromdata.append("ticketId", idticket);
    fromdata.append("message", message);
    fromdata.append("attachment", attachment);
    console.log(idticket);
    axios
      .post(`admin/ticket/message`, fromdata, {
        headers: {
          secretKey:
            "rosx.AD-98dBXZnC7rb794a5593PjPQfzDsQgwy.BXF1LNPw4lZLK6BR6Kidf90.@$%hummstaffing???AD",
          Authorization: `Bearer ${localStorage.getItem("access_key")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
       
        setmessage("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleimag = (e) => {
    setattachment(e.target.files[0]);
    console.log(e.target.files[0]);
  };
  useEffect(() => {
    replayapi();
    apicall();
  }, [replayapis]);

  // Updata api
  const { _id } = useParams();
  // console.log(_id);
  // useEffect(() => {
  const usereditid = () => {
     let idticketupdata = sessionStorage.getItem("ticketId");
    const fromdata = new URLSearchParams();
    // console.log(question, answer);
    const datafrom = {
      ticketId: idticketupdata,
      //  status: solved
    };
    console.log(datafrom);
    axios.put(
        `/admin/ticket`,
        {
         ticketId: sessionStorage.getItem("ticketId"),
           status: 'solved'
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
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function loginbutton(e) {
    e.preventDefault();
    console.log(sessionStorage.getItem("ticketId"));
    usereditid();
  }

  // file uploaded
  const props = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    progress: {
      strokeColor: {
        "0%": "#108ee9",
        "100%": "#87d068",
      },
      strokeWidth: 3,
      format: (percent) => percent && `${parseFloat(percent.toFixed(2))}%`,
    },
  };
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
          navigate("/Support");
        }}
      >
        Support
      </span>
    </div>,
    <Typography key="3" className=" AllUsersBredCrumbs ">
      <span className="forbreadcrumbactive fw-bolder ">Request</span>
    </Typography>,
    <Typography key="3" className=" AllUsersBredCrumbs ">
      <span className="forbreadcrumbactive fw-bolder ">
        {sessionStorage.getItem("ticketId")}
      </span>
    </Typography>,
  ];
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
              {Loading ? (
                <Lottie options={defaultOptions} height={400} width={400} />
              ) : (
                <div className="mt-5">
                  {dataget.map((itme, index) => {
                    return (
                      <div className="container-fluid " key={index}>
                        <div className="d-flex text-black justify-content-between mx-3">
                          <Stack spacing={2} className="my-auto">
                            <Breadcrumbs
                              className="d-flex"
                              separator={<RightOutlined />}
                              aria-label="breadcrumb"
                            >
                              {breadcrumbs}
                              {dataget.map((itmesss, indess) => {
                                sessionStorage.setItem(
                                  "ticketId",
                                  itmesss.ticketId
                                );
                                // console.log(sessionStorage.getItem("ticketId"));
                              })}
                              {/* {sessionStorage.setItem("ticketId", itme.ticketId)} */}
                            </Breadcrumbs>
                          </Stack>
                        </div>
                        <h6 className="SupportheadingError mx-2 mt-3 fontfamilyInter fontstyle">
                          Error while continuing with the payments...
                        </h6>

                        {/* message section */}
                        <div className=" p-4 bg-white rounded">
                          <div className=" message">
                            {dataget
                              .sort((a, b) =>
                                a.createdAt > b.createdAt ? -1 : 1
                              )
                              .reverse()
                              .map((itme, index) => {
                                return (
                                  <div key={index}>
                                    <div className="d-flex">
                                      {/* Left side */}
                                      <div className="">
                                        <Avatar
                                          src={
                                          sessionStorage.getItem("profileImag")
                                          }
                                          alt="img"
                                        />
                                       
                                        {/* <img src={logomesssage} /> */}
                                      </div>
                                      {/* right side */}
                                      <div className="mx-2 w-75">
                                        <div className="d-flex justify-content-between">
                                          <h6 className="namemessage fontstyle fontfamilyInter text-black fw-bolder">
                                            {itme.sender}
                                          </h6>
                                          <p className="datamessage fontstyle fontfamilyInter ">
                                            {itme.createdAt}
                                          </p>
                                        </div>
                                        <p className="promessage fontstyle fontfamilyRoboto ">
                                          {itme.message}
                                        </p>
                                      </div>
                                    </div>
                                    {dataget.map((itmesimg, indeximg) => {
                                      return (
                                        <div className="d-flex">
                                          {
                                            itmesimg.attachment.length > 0 ? (
                                              <img
                                                src={itmesimg.attachment}
                                                width="50%"
                                                height="150px"
                                              />
                                            ) : null

                                            // <img
                                            //   src={itmesimg.attachment.length > 0}
                                            //   width="50%"
                                            //   height="150px"
                                            // />
                                          }
                                        </div>
                                      );
                                    })}

                                    <div className="d-flex mt-2 flex-row-reverse">
                                      {/* Left side */}
                                      <div className="">
                                        <img src={logomesssage} />
                                      </div>
                                      {/* right side */}
                                      <div className="mx-2 w-75">
                                        <div className="d-flex justify-content-between flex-row-reverse">
                                          <h6 className="namemessage fontstyle fontfamilyInter text-black fw-bolder">
                                            {itme.sender}
                                          </h6>
                                          <p className="datamessage fontstyle fontfamilyInter ">
                                            {itme.createdAt}
                                          </p>
                                        </div>
                                        <p className="promessage fontstyle fontfamilyRoboto ">
                                          {itme.message}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}

                            <div className="d-flex mt-2 flex-row-reverse">
                              {/* Left side */}
                              {/* <div className="">
                                                    <img src={logomesssage} />
                                                </div> */}
                              {/* right side */}
                              {/* <div className="mx-2 w-75">
                                                    <div className="d-flex justify-content-between flex-row-reverse">
                                                        <h6 className="namemessage fontstyle fontfamilyInter text-black fw-bolder">Salman khan</h6>
                                                        <p className="datamessage fontstyle fontfamilyInter ">06:39 PM</p>
                                                    </div>
                                                    <p className="promessage fontstyle fontfamilyRoboto ">Curabitur dictum mattis massa tortor risus. Enim posuere posuere amet, ante auctor tellus est. Duis scelerisque ornare elit orci</p>
                                                    <img src={pdf} />
                                                </div> */}
                            </div>
                          </div>

                          <hr className=""></hr>

                          <div className="w-100  position-relative">
                            <p className="position-absolute colorblue lh-5">
                              {/* <Upload {...props}>
                                <FileZipOutlined
                                  twoToneColor="#eb2f96"
                                  className="mt-1"
                                />
                              </Upload> */}
                              <div className="image-upload">
                                <label htmlFor="file-input">
                                  {/* <img src={sand}/> */}
                                  <FileOutlined />
                                </label>

                                <input
                                  id="file-input"
                                  type="file"
                                  style={{ display: "none" }}
                                  value={""}
                                  onChange={handleimag}
                                />
                              </div>
                            </p>
                            <p className="position-absolute mt-1 icon ">@</p>
                            <p className="position-absolute mt-1 sandicon cursor ps-2">
                              <img
                                src={sand}
                                width="20px"
                                // onClick={replayapi}
                                onClick={() => setreplayapis(!replayapis)}
                              />
                            </p>
                            <input
                              type="text"
                              value={message}
                              onChange={(e) => setmessage(e.target.value)}
                              id="message"
                              className="border-0 w-100 py-2 ps-4 pe-5 messageforplaceholder"
                              placeholder="Start typing..."
                            />
                          </div>
                        </div>

                        {/* Button */}
                        <div className="text-end">
                          <button button className = "solvedmark fontfamilyRoboto fontstyle border-0 px-3 py-2 mt-3 rounded bgcolor text-white"
                          onClick = {
                           loginbutton
                          } >
                            Mark as Solved
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </Box>
          </Box>
        </div>
      </div>
    </>
  );
}

export default Supportmessage;
