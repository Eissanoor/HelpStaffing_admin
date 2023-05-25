import React, { useState, useEffect } from "react";
import Sidebard from "../../../../component/Sidebar/Sidebard";
import Lottie from "react-lottie";
import Dataanim from "../../../../Assets/icons/lf20_hxpynlxn.json";
import AppBar from "@mui/material/AppBar";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import cameraicon from "../../../../Assets/image/cameraicon.png";
import eyeicon from "../../../../Assets/image/Eyepass.png";
import log from "../../../../Assets/image/settingimg.png";
import eyeslash from "../../../../Assets/image/Eyepass.png";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-loading-skeleton/dist/skeleton.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useMediaQuery, IconButton } from "@material-ui/core";
import {
  SearchOutlined,
  CalendarOutlined,
  UserOutlined,
  LeftOutlined,
} from "@ant-design/icons";
import axios from "axios";
import "../../../Setting/Setting.css";
import { Upload } from "antd";

const drawerWidth = 220;

function Addjob() {
  const [show, setshow] = useState(false);
  const [show1, setshow1] = useState(false);
  const [show2, setshow2] = useState(false);
  const [Loading, setLoading] = useState(true);
  const [uploaded, setuploaded] = useState();
  const [hospital_Faculty, sethospital_Faculty] = useState();
  const [lastName, setlastName] = useState();
  const [speciality, setspeciality] = useState();
  const [jod_duration, setjod_duration] = useState();
  const [from, setfrom] = useState();
  const [Description, setDescription] = useState();
  const [to, setto] = useState();
  const [hourlyRate, sethourlyRate] = useState("");
  const [shift, setshift] = useState();
  const [positionTitle, setpositionTitle] = useState();
  const [profile, setprofile] = useState("");
  const [startDate, setstartDate] = useState();
  const [endDate, setendDate] = useState();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Dataanim,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const usereditid = () => {
    // const fromdata = new URLSearchParams();
    const fromdata = new FormData();
     fromdata.append("PositionTitle", positionTitle);
    fromdata.append("hospital_Faculty", hospital_Faculty);
    fromdata.append("speciality", speciality);
    fromdata.append("jod_duration", jod_duration);
    // fromdata.append("from", from);
    fromdata.append("Description", Description);
    // fromdata.append("to", to);
    fromdata.append("shift", shift);
    fromdata.append("profile", profile);
    fromdata.append("hourlyRate", hourlyRate);
    fromdata.append("startDate", startDate);
    fromdata.append("endDate", endDate);

    console.log(fromdata);
    axios.post(
      `https://gold-courageous-cocoon.cyclic.app/admin/addjobs`,
      fromdata,
      {
        headers: {
          autherization: `Bearer ${localStorage.getItem("Tokensss")}`,
        },
      }
    )
      .then((res) => {
        console.log(localStorage.getItem("Tokensss"));
        console.log(res.data);
        sethospital_Faculty("");
        setlastName("");
        setspeciality("");
        setjod_duration("");
        setfrom("");
        setDescription("");
        setto("");
        sethourlyRate("");
        setshift("");
        setLoading(false);
        toast.success("You hava to Add job Successfully", {
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
        toast.error(`You hava not to Add job Successfully ${err.data}`, {
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
    usereditid();
    console.log(localStorage.getItem("Tokensss"));
  }

  function handleChange(e) {
    // console.log(e.target.files);
    setuploaded(URL.createObjectURL(e.target.files[0]));
    setprofile(e.target.files[0]);
    console.log(e.target.files[0]);
  }
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

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
              {/* {Loading ? (
                    < Skeleton / >
                ) : ( */}
              <div className="my-5">
                <h6 className="Settings fontfamilyRoboto p-2 px-3">Add Job</h6>
                <div className="container-fluid  bg-white rounded px-2 py-3">
                  <div className="">
                    <div className="d-flex flex-column justify-content-center">
                      <div className="d-flex justify-content-center">
                        <form onSubmit={loginbutton}>
                          {/* <center> */}
                          <Stack
                            direction="row"
                            spacing={2}
                            className="d-flex justify-content-center"
                          >
                            <Badge
                              overlap="circular"
                              anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "right",
                              }}
                              badgeContent={
                                <div className="image-upload">
                                  <label htmlFor="file-input">
                                    <img src={cameraicon} />
                                  </label>

                                  <input
                                    id="file-input"
                                    type="file"
                                    onChange={handleChange}
                                  />
                                </div>
                              }
                            >
                              <Avatar
                                alt="Travis Howard"
                                className="Foruploadimgsetting "
                                src={uploaded}
                              />
                            </Badge>
                          </Stack>
                          {/* </center> */}
                          <div className="row w-75 mx-auto mt-4">
                            {/* hospital_Faculty */}
                            <div className="col-lg-12 col-md-12 mt-3 d-grid">
                              <label
                                htmlFor="hospital_Faculty"
                                className="forsettinglabel fontfamilyRaleway"
                              >
                                Hospital Name
                              </label>
                              <input
                                type="text"
                                className="forsettinginput fontfamilyRaleway mt-2 py-2 ps-3"
                                id="hospital_Faculty"
                                value={hospital_Faculty}
                                onChange={(e) => {
                                  sethospital_Faculty(e.target.value);
                                }}
                                placeholder="hospital Faculty"
                                autoComplete="off"
                                required
                              />
                            </div>
                            {/* positionTitle */}
                            <div className="col-12 mt-3  d-grid">
                              <label
                                htmlFor="positionTitle"
                                className="forsettinglabel"
                              >
                                Position Title
                              </label>
                              <input
                                type="text"
                                className="forsettinginput mt-2 py-2 ps-3"
                                id="positionTitle"
                                placeholder="Position Title"
                                autoComplete="off"
                                required
                                value={positionTitle}
                                onChange={(e) => {
                                  setpositionTitle(e.target.value);
                                }}
                              />
                            </div>
                            {/* Speciality */}
                            <div className="col-12 mt-3  d-grid">
                              <label
                                htmlFor="speciality"
                                className="forsettinglabel"
                              >
                                Speciality
                              </label>
                              <input
                                type="text"
                                className="forsettinginput mt-2 py-2 ps-3"
                                id="speciality"
                                placeholder="Speciality"
                                autoComplete="off"
                                required
                                value={speciality}
                                onChange={(e) => {
                                  setspeciality(e.target.value);
                                }}
                              />
                            </div>
                            {/* jod_duration */}
                            <div className="col-12 mt-3  d-grid">
                              <label
                                htmlFor="jod_duration"
                                className="forsettinglabel"
                              >
                                Jod Duration
                              </label>
                              <input
                                type="text"
                                className="forsettinginput mt-2 py-2 ps-3"
                                id="jod_duration"
                                placeholder="Jod Duration"
                                autoComplete="off"
                                required
                                value={jod_duration}
                                onChange={(e) => {
                                  setjod_duration(e.target.value);
                                }}
                              />
                            </div>

                            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 d-grid mt-3" >
                              <label
                                htmlFor="startdate"
                                className="forsettinglabel"
                              >
                                Start Date
                              </label>{" "}
                              <input
                                type="date"
                                // className=" w-100 py-3 datainput inputsection rounded px-2"
                                className="forsettinginput mt-2 py-3 ps-3 w-100"
                                id="startdate"
                                placeholder="Enter your National President"
                                onChange={(event) => {
                                  setstartDate(event.target.value);
                                }}
                              />
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 d-grid mt-3" >
                              <label
                                htmlFor="endDate"
                                className="forsettinglabel"
                              >
                                End Date
                              </label>{" "}
                              <input
                                type="date"
                                // className=" w-100 py-3 datainput inputsection rounded px-2"
                                className="forsettinginput mt-2 py-3 ps-3 w-100"
                                id="endDate"
                                placeholder="Enter your National President"
                                onChange={(event) => {
                                  setendDate(event.target.value);
                                }}
                              />
                            </div>

                            {/* timefrom */}
                            {/* <div className="col-lg-6 col-md-12  mt-3  d-grid">
                              <label
                                htmlFor="timefrom"
                                className="forsettinglabel"
                              >
                                From
                              </label>
                              <input
                                type="time"
                                className="forsettinginput mt-2 py-2 ps-3"
                                id="timefrom"
                                placeholder="timefrom"
                                autoComplete="off"
                                required
                                value={from}
                                onChange={(e) => {
                                  setfrom(e.target.value);
                                }}
                              />
                            </div> */}
                            {/* timeto */}
                            {/* <div className="col-lg-6 col-md-12  mt-3  d-grid">
                              <label
                                htmlFor="timeto"
                                className="forsettinglabel"
                              >
                                To
                              </label>
                              <input
                                type="time"
                                className="forsettinginput mt-2 py-2 ps-3"
                                id="timeto"
                                placeholder=" timeto"
                                autoComplete="off"
                                required
                                value={to}
                                onChange={(e) => {
                                  setto(e.target.value);
                                }}
                              />
                            </div> */}
                            {/* hourlyRate */}
                            <div className="col-lg-6 col-md-12  mt-3  d-grid">
                              <label
                                htmlFor="hourlyRate"
                                className="forsettinglabel"
                              >
                                Hourly Rate
                              </label>
                              <input
                                type="number"
                                className="forsettinginput mt-2 py-2 ps-3"
                                id="hourlyRate"
                                placeholder=" Hourly Rate"
                                autoComplete="off"
                                required
                                value={hourlyRate}
                                onChange={(e) => {
                                  sethourlyRate(e.target.value);
                                }}
                              />
                            </div>
                            <div className="col-lg-6 col-md-12  mt-3  d-grid">
                              <label
                                htmlFor="shift"
                                className="forsettinglabel"
                              >
                                shift
                              </label>
                              <input
                                type="text"
                                className="forsettinginput mt-2 py-2 ps-3"
                                id="shift"
                                placeholder="shift"
                                autoComplete="off"
                                required
                                value={shift}
                                onChange={(e) => {
                                  setshift(e.target.value);
                                }}
                              />
                            </div>
                            {/* Description */}
                            <div className="col-lg-12 col-md-12  mt-3  d-grid">
                              <label
                                label
                                htmlFor="Description"
                                className="forsettinglabel"
                              >
                                Description
                              </label>
                              <textarea
                                className="forsettinginput mt-2 py-2 ps-3 w-100"
                                rows="5"
                                cols="130"
                                required
                                id="Description"
                                value={Description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Add a description..."
                              ></textarea>
                              <p className="d-flex justify-content-end fortotalcharacter">
                                20/1000
                              </p>
                            </div>
                            <button
                              className="forsavesettingbtn fontfamilyCera py-2 my-4 col-12 rounded text-white border-0 mx-auto"
                              type="submit"
                            >
                              Add
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* )} */}
            </Box>
            <ToastContainer />
          </Box>
        </div>
      </div>
    </>
  );
}

export default Addjob;
