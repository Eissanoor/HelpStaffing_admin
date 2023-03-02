import React, { createElement, useState, useEffect } from "react";
import Lottie from "react-lottie";
import Dataanim from "../../Assets/icons/98195-loader.json";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Sidebard from "../../component/Sidebar/Sidebard";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { Progress } from "antd";
import { useNavigate } from "react-router-dom";
import { Avatar, Comment, Tooltip } from "antd";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import suppportrequest from "../../Assets/image/supportre.png";
import "./SupportRequest.css";
import Checkinternet from "../../component/Checkinternet";
const drawerWidth = 220;

function SupportRequest() {
  let idnumber = 0;
  const navigate = useNavigate();
  const [Loading, setLoading] = useState(true);
  const [dataget, setdataget] = useState({});
  const [ticketID, seticketID] = useState({});
  const [status, setstatus] = useState("");

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
    console.log(localStorage.getItem("access_key"));
    const tok = localStorage.getItem("access_key");
    if (tok == null) {
      setTimeout(() => {
        navigate("/");
      });
    }
    axios
      .get(`/admin/ticket?page=1&limit=10`, {
        headers: {
          secretKey:
            "rosx.AD-98dBXZnC7rb794a5593PjPQfzDsQgwy.BXF1LNPw4lZLK6BR6Kidf90.@$%hummstaffing???AD",
          Authorization: `Bearer ${localStorage.getItem("access_key")}`,
        },
      })
      .then((res) => {
        setdataget(res.data.docs);
        console.log(res.data.docs);
        console.log("ssssss", res.data.docs.message);
        seticketID(res.data.docs);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        //    setLoading(false);
      });
  };
  useEffect(() => {
    apicall();
    // setLoading(true);
  }, []);

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
            <Checkinternet>
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
                    <div className="container-fluid ">
                      {/* Top section */}
                      <div className="">
                        <h6 className="Supportheading  fontfamilyInter fontstyle">
                          Support Request
                        </h6>
                        <p className="Supportheadprog  fontfamilyInter fontstyle">
                          You have new {dataget.length} support request, check
                          these out and help them sove the issue.
                        </p>
                      </div>
                      <Paper className="w-100 h-100 overflow-auto mt-3 ">
                        <Table className="tablebg h-100" id="data">
                          {/* Header section */}
                          <TableHead>
                            <TableRow>
                              <TableCell
                                numeric
                                className="tablehadsupport  fontfamilyInter fontstyle"
                              >
                                ID
                              </TableCell>
                              {/* <TableCell className="tablehad">ID</TableCell> */}
                              <TableCell className="tablehadsupport  fontfamilyInter fontstyle">
                                Name
                              </TableCell>
                              <TableCell className="tablehadsupport  fontfamilyInter fontstyle">
                                Subject
                              </TableCell>
                              <TableCell className="tablehadsupport  fontfamilyInter text-end fontstyle">
                                Action
                              </TableCell>
                            </TableRow>
                          </TableHead>

                          <TableBody className="fortableposition">
                            {dataget.map((itme, index) => {
                              return (
                                <TableRow className="" key={index}>
                                  <TableCell
                                    numeric
                                    className="fortbbodysupportID fontfamilyInter fontstyle"
                                  >
                                    {/* {itme._id} */}
                                    {(idnumber += 1)}
                                    {dataget.map((itmmess, indexs) => {
                                      // console.log(itmmess.ticketId);
                                      sessionStorage.setItem(
                                        "IDticke",
                                        itmmess.ticketId
                                      );
                                    })}
                                  </TableCell>
                                  <TableCell className="fortbbodysupportname fontfamilyInter text-black fontstyle d-flex my-auto">
                                    <div className=" py-2 ms-1 my-auto me-2">
                                      <Avatar
                                        src={itme.userId.profileImage}
                                        alt="img"
                                      />
                                      {sessionStorage.setItem(
                                        "profileImag",
                                        itme.userId.coverImage
                                      )}
                                      {console.log(
                                        sessionStorage.getItem("profileImag")
                                      )}
                                    </div>
                                    <span className="my-auto">
                                      {" "}
                                      Salman Ahmed
                                    </span>
                                  </TableCell>

                                  <TableCell
                                    TableCell
                                    className="fortbbodysupportname colorblue fontfamilyInter fontstyle cursor "
                                    onClick={() => {
                                      navigate(`/Support/Meaage/${itme._id}`);
                                      sessionStorage.setItem(
                                        "Supportdetails",
                                        itme._id
                                      );
                                    }}
                                  >
                                    {itme.subject}
                                  </TableCell>

                                  <TableCell
                                    numeric
                                    className="fortbbodysupportsolved fontfamilyInter fontstyle text-end"
                                  >
                                    {itme.status}
                                  </TableCell>
                                </TableRow>
                              );
                            })}
                          </TableBody>
                        </Table>
                      </Paper>
                    </div>
                  </div>
                )}
              </Box>
            </Checkinternet>
          </Box>
        </div>
      </div>
    </>
  );
}

export default SupportRequest;
