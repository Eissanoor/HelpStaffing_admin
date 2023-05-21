import React, { useState, useEffect } from "react";
import Sidebard from "../../component/Sidebar/Sidebard";
import Lottie from "react-lottie";
import Dataanim from "../../Assets/icons/lf20_hxpynlxn.json";
import AppBar from "@mui/material/AppBar";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import cameraicon from "../../Assets/image/cameraicon.png";
import eyeicon from "../../Assets/image/Eyepass.png";
import log from "../../Assets/image/settingimg.png";
import eyeslash from "../../Assets/image/Eyepass.png";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {
  UserOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
} from "@ant-design/icons";
import axios from "axios";
import "./Setting.css";
import { Upload } from "antd";

const drawerWidth = 220;

function Setting() {
  const [show, setshow] = useState(false);
  const [show1, setshow1] = useState(false);
  const [show2, setshow2] = useState(false);
  const [Loading, setLoading] = useState(true);
  const [uploaded, setuploaded] = useState();
  const [firstName, setfirstName] = useState();
  const [lastName, setlastName] = useState();
  const [phone, setphone] = useState();
  const [address, setaddress] = useState();
  const [city, setcity] = useState();
  const [state, setstate] = useState();
  const [zip, setzip] = useState("");
  const [country, setcountry] = useState();
  const [email, setemail] = useState();
  const [profileImage, setprofileImage] = useState("");
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Dataanim,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const usereditid = () => {
    const fromdata = new URLSearchParams();
    fromdata.append("firstName", firstName);
    fromdata.append("lastName", lastName);
    fromdata.append("phone", phone);
    fromdata.append("address", address);
    fromdata.append("city", city);
    fromdata.append("state", state);
    fromdata.append("zip", zip);
    fromdata.append("country", country);
    fromdata.append("profileImage", profileImage);
    // console.log(question, answer);
    const datafrom = {
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      address: address,
      city: city,
      state: state,
      zip: zip,
      country: country,
      profileImage: profileImage,
      //  status: true
    };
    console.log(datafrom);
    axios
      .put(`/admin/profile`, datafrom, {
        headers: {
          secretKey:
            "rosx.AD-98dBXZnC7rb794a5593PjPQfzDsQgwy.BXF1LNPw4lZLK6BR6Kidf90.@$%hummstaffing???AD",
          Authorization: `Bearer ${localStorage.getItem("access_key")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setfirstName("");
        setlastName("");
        setphone("");
        setaddress("");
        setcity("");
        setstate("");
        setzip("");
        setcountry("");
        setLoading(false);
        toast.success("You hava updata profile Successfully", {
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
        toast.error(`Not updata Your profile ${err.data}`, {
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
  }

  const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 52,
    height: 52,
    // border: `2px solid ${theme.palette.background.paper}`,
  }));

  function handleChange(e) {
    // console.log(e.target.files);
    setuploaded(URL.createObjectURL(e.target.files[0]));
    setprofileImage(e.target.value);
    // console.log(e.target.files[0]);
  }
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
                <h6 className="Settings fontfamilyRoboto p-2 px-3">Settings</h6>
                <div className="container-fluid  bg-white rounded px-2 py-3">
                  <p className="editingprofile fontfamilyRoboto px-3 mt-2">
                    Edit Profile
                  </p>
                  <div className="">
                    <div className="d-flex flex-column justify-content-center">
                      {/* <Stack
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
                            // <SmallAvatar
                            //   className="cursor"
                            //   alt="Remy Sharp"
                            //   src={cameraicon}
                            //   />
                            <div className = "image-upload" >
  <label htmlFor="file-input">
    <img src={cameraicon} />
  </label>

  <input id="file-input" type="file" onChange={handleChange}/>
</div>
                            }
                        >
                          <Avatar
                            alt="Travis Howard"
                            className="Foruploadimgsetting "
                            src={log}
                          />
                        </Badge>
                      </Stack> */}

                      <div className="d-flex justify-content-center">
                        <form onSubmit={loginbutton}>
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
                                // <SmallAvatar
                                //   className="cursor"
                                //   alt="Remy Sharp"
                                //   src={cameraicon}
                                //   />
                                <div className="image-upload">
                                  {/* <Avatar size={64} /> */}
                               {/* <img src={uploaded} className="ms-0 my-4" width="100px"></img> */}
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
                          <div className="row w-50 mx-auto mt-4">
                            <div className="col-lg-6 col-md-12 mt-3 d-grid">
                              <label
                                htmlFor="inputFirst"
                                className="forsettinglabel fontfamilyRaleway"
                              >
                                First name
                              </label>
                              <input
                                type="text"
                                className="forsettinginput fontfamilyRaleway mt-2 py-2 ps-3"
                                id="inputFirst"
                                value={firstName}
                                onChange={(e) => {
                                  setfirstName(e.target.value);
                                }}
                                placeholder="First name"
                                autoComplete="off"
                                required
                              />
                            </div>
                            <div className="col-lg-6 col-md-12 mt-3 d-grid">
                              <label
                                htmlFor="lastName"
                                className="forsettinglabel fontfamilyRaleway"
                              >
                                Last name
                              </label>
                              <input
                                type="text"
                                className="forsettinginput  fontfamilyRaleway mt-2 py-2 ps-3"
                                id="lastName"
                                placeholder=" Last name"
                                autoComplete="off"
                                required
                                value={lastName}
                                onChange={(e) => {
                                  setlastName(e.target.value);
                                }}
                              />
                            </div>
                            <div className="col-12 mt-3  d-grid">
                              <label
                                htmlFor="email"
                                className="forsettinglabel"
                              >
                                Email
                              </label>
                              <input
                                type="email"
                                className="forsettinginput mt-2 py-2 ps-3"
                                id="email"
                                placeholder="Email"
                                autoComplete="off"
                                required
                                value={email}
                                onChange={(e) => {
                                  setemail(e.target.value);
                                }}
                              />
                            </div>
                            <div className="col-12 mt-3  d-grid">
                              <label
                                htmlFor="phone"
                                className="forsettinglabel"
                              >
                                Contact
                              </label>
                              <input
                                type="number"
                                className="forsettinginput mt-2 py-2 ps-3"
                                id="phone"
                                placeholder="Contact"
                                autoComplete="off"
                                required
                                value={phone}
                                onChange={(e) => {
                                  setphone(e.target.value);
                                }}
                              />
                            </div>
                            <div className="col-12 mt-3  d-grid">
                              <label
                                htmlFor="address"
                                className="forsettinglabel"
                              >
                                Address
                              </label>
                              <input
                                type="text"
                                className="forsettinginput mt-2 py-2 ps-3"
                                id="address"
                                placeholder="Address"
                                autoComplete="off"
                                required
                                value={address}
                                onChange={(e) => {
                                  setaddress(e.target.value);
                                }}
                              />
                            </div>
                            <div className="col-lg-6 col-md-12  mt-3  d-grid">
                              <label htmlFor="city" className="forsettinglabel">
                                City
                              </label>
                              <input
                                type="text"
                                className="forsettinginput mt-2 py-2 ps-3"
                                id="city"
                                placeholder="City"
                                autoComplete="off"
                                required
                                value={city}
                                onChange={(e) => {
                                  setcity(e.target.value);
                                }}
                              />
                            </div>
                            <div className="col-lg-6 col-md-12  mt-3  d-grid">
                              <label
                                htmlFor="state"
                                className="forsettinglabel"
                              >
                                State
                              </label>
                              <input
                                type="text"
                                className="forsettinginput mt-2 py-2 ps-3"
                                id="state"
                                placeholder=" State"
                                autoComplete="off"
                                required
                                value={state}
                                onChange={(e) => {
                                  setstate(e.target.value);
                                }}
                              />
                            </div>
                            <div className="col-lg-6 col-md-12  mt-3  d-grid">
                              <label htmlFor="zip" className="forsettinglabel">
                                Zip Code
                              </label>
                              <input
                                type="text"
                                className="forsettinginput mt-2 py-2 ps-3"
                                id="zip"
                                placeholder="Zip Code"
                                autoComplete="off"
                                required
                                value={zip}
                                onChange={(e) => {
                                  setzip(e.target.value);
                                }}
                              />
                            </div>
                            <div className="col-lg-6 col-md-12  mt-3  d-grid">
                              <label
                                htmlFor="country"
                                className="forsettinglabel"
                              >
                                Country
                              </label>
                              <input
                                type="text"
                                className="forsettinginput mt-2 py-2 ps-3"
                                id="country"
                                placeholder="Country"
                                autoComplete="off"
                                required
                                value={country}
                                onChange={(e) => {
                                  setcountry(e.target.value);
                                }}
                              />
                            </div>
                            <p className="forchangepasswordheading mt-3  d-grid">
                              Change Password
                            </p>
                            <div className="col-12 mt-3  d-grid">
                              <div className="position-relative d-grid">
                                <label
                                  htmlFor="inputPassword1"
                                  className="forsettinglabel"
                                >
                                  Current Password
                                </label>
                                <input
                                  type={show ? "text" : "password"}
                                  className=" forsettinginput my-auto py-2 ps-3"
                                  id="inputPassword1"
                                  placeholder="********************"
                                  autoComplete="new-password"
                                  required
                                />
                                <p
                                  className=" position-absolute mt-4 inpassinputicon"
                                  onClick={() => setshow(!show)}
                                >
                                  {show ? (
                                    <EyeInvisibleOutlined />
                                  ) : (
                                    <EyeOutlined />
                                  )}
                                </p>
                              </div>
                            </div>
                            <div className="col-12 mt-3  d-grid">
                              <div className="position-relative d-grid">
                                <label
                                  htmlFor="inputPassword2"
                                  className="forsettinglabel"
                                >
                                  Password
                                </label>
                                <input
                                  type={show1 ? "text" : "password"}
                                  className=" forsettinginput my-auto py-2 ps-3"
                                  id="inputPassword2"
                                  placeholder="********************"
                                  autoComplete="new-password"
                                  required
                                />
                                <p
                                  className=" position-absolute mt-4 inpassinputicon"
                                  onClick={() => setshow1(!show1)}
                                >
                                  {show1 ? (
                                    <EyeInvisibleOutlined />
                                  ) : (
                                    <EyeOutlined />
                                  )}
                                </p>
                              </div>
                            </div>
                            <div className="col-12 mt-3  d-grid">
                              <div className="position-relative d-grid">
                                <label
                                  htmlFor="inputPassword42"
                                  className="forsettinglabel"
                                >
                                  Confirm Password
                                </label>
                                <input
                                  type={show2 ? "text" : "password"}
                                  className=" forsettinginput my-auto py-2 ps-3"
                                  id="inputPassword42"
                                  placeholder="********************"
                                  autoComplete="new-password"
                                  required
                                />
                                <p
                                  className=" position-absolute mt-4 inpassinputicon"
                                  onClick={() => setshow2(!show2)}
                                >
                                  {show2 ? (
                                    <EyeInvisibleOutlined />
                                  ) : (
                                    <EyeOutlined />
                                  )}
                                </p>
                              </div>
                            </div>
                            <button
                              className="forsavesettingbtn fontfamilyCera py-2 my-4 col-12  rounded text-white border-0 mx-auto"
                              type="submit"
                            >
                              Save
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

export default Setting;
