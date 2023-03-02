import React, { useState, useEffect } from "react";
import axios from "axios";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useNavigate } from "react-router-dom";
import "../Header/Heading.css";
import {
  DislikeFilled,
  DislikeOutlined,
  LikeFilled,
  LogoutOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";
import { Avatar, Comment, Tooltip } from "antd";
// image
import profile from "../../Assets/image/Profile.png";
import Setting2 from "../../Assets/image/setting2.png";
import Notification from "../../Assets/image/Notification.png";
import tableimag from "../../Assets/image/tableimag.png";
import Logout from "../../Assets/image/Logouts.png";
// import dropdownicon from "../../../Assets/Icons/dropdownicon.svg";
import "antd/dist/antd.css";
import { Select, Radio } from "antd";

const ITEM_HEIGHTDrop = 48;

const ITEM_HEIGHT = 100;

function Header() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorEled, setanchorEled] = React.useState(null);
  const Opend = Boolean(anchorEled);
  const handleClicked = (event) => {
    setanchorEled(event.currentTarget);
  };
  const handleCloseed = () => {
    setanchorEled(null);
  };

  const [anchorEledsetting, setanchorEledsetting] = React.useState(null);
  const opensetting = Boolean(anchorEledsetting);

  const Profilesetting = () => {
    setanchorEledsetting(null);
  };

  // Main fuction of the compount
  const [dataget, setdataget] = useState();
  const apicall = () => {
    axios.get(`/admin/profile`, {
        headers: {
          secretKey:
            "rosx.AD-98dBXZnC7rb794a5593PjPQfzDsQgwy.BXF1LNPw4lZLK6BR6Kidf90.@$%hummstaffing???AD",
          Authorization: `Bearer ${localStorage.getItem("access_key")}`,
        },
      })
      .then((res) => {
        setdataget(res.data.docs.userName);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    apicall();
  }, []);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">


          <Toolbar className="my-auto">
            <Box sx={{ flexGrow: 1 }} />
            {/* <Box className="position-relative me-3"></Box> */}
           
            <Box
              className=""
              // sx={{ display: { xs: "none", md: "flex" } }}
            >
              {/* {
                 Object.keys(dataget).map((itme, index) => {
                return(
                  <div className="d-flex ms-auto me-2">
                <img className="cursor" src={profile} alt="Reload" />
                <p className="mt-auto profileheading my-auto ms-3">
                  {
                    dataget[itme]
                    
                  }
                </p>
              </div>
                )
                })
              } */}

                    <div className="d-flex ms-auto me-2">
                <img className="cursor" src={profile} alt="Reload" />
                <p className="mt-auto profileheading my-auto ms-3">{dataget}</p>
              </div>

            </Box>

            <div>
              <img
                className=" mx-3 cursor"
                id="long-button"
                aria-controls={opensetting ? "long-menu" : undefined}
                aria-expanded={opensetting ? "true" : undefined}
                aria-haspopup="true"
                onClick={(event) => {
                  setanchorEledsetting(event.currentTarget);
                }}
                title="Setting"
                src={Setting2}
                alt="setting"
                //  onClick={() => { { navigate("/Setting") } }}
              />

              <Menu
                id="long-menu"
                MenuListProps={{
                  "aria-labelledby": "long-button",
                }}
                anchorEl={anchorEledsetting}
                open={opensetting}
                onClose={Profilesetting}
                PaperProps={{
                  style: {
                    maxHeight: ITEM_HEIGHTDrop * 4.5,
                    width: "25ch",
                  },
                }}
              >
                <MenuItem onClick={Profilesetting}>
                  <div>
                    <div
                      div
                      className="d-flex ms-auto me-2"
                      onClick={() => {
                        {
                          navigate("/Setting");
                          sessionStorage.setItem("id", "Settings");
                        }
                      }}
                    >
                      <img className="cursor" src={profile} alt="Reload" />
                      <p className="mt-auto profileheading my-auto ms-3">
                        Dan Casey
                      </p>
                    </div>
                  </div>
                </MenuItem>
                <MenuItem onClick={Profilesetting}>
                  <div>
                    <div className="mx-3 mt-3 d-flex justify-content-center">
                      {/* <img src={Logout}/> */}
                      <LogoutOutlined className="my-auto me-2" />
                      <h6
                        className="my-auto"
                        onClick={() => {
                          {
                            navigate("/");
                          }
                        }}
                      >
                        Logout
                      </h6>
                    </div>
                  </div>
                </MenuItem>
              </Menu>

              <img
                className="me-3 cursor"
                aria-label="more"
                id="long-button"
                aria-controls={open ? "long-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-haspopup="true"
                onClick={handleClick}
                src={Notification}
                alt="Notification"
              />

              <Menu
                id="long-menu"
                MenuListProps={{
                  "aria-labelledby": "long-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                  style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    // width: '100%',
                  },
                }}
              >
                <div className="d-flex">
                  <p className="Notificationsmainhead px-1 ms-2 mt-1 colorblue fontfamilyInter fontstyle">
                    Notifications
                  </p>
                  <div>
                    <p
                      aria-label="more"
                      id="long-button"
                      aria-controls={Opend ? "long-menu" : undefined}
                      aria-expanded={Opend ? "true" : undefined}
                      aria-haspopup="true"
                      onClick={handleClicked}
                      className="alldropdounmenu fontfamilyInter my-auto mx-3 mt-1"
                    >
                      {/* <MoreVertIcon /> */}
                      ALl{" "}
                      <span className="ms-2 my-auto">
                        <CaretDownOutlined />
                      </span>
                    </p>
                    <Menu
                      id="long-menu"
                      MenuListProps={{
                        "aria-labelledby": "long-button",
                      }}
                      anchorEl={anchorEled}
                      open={Opend}
                      onClose={handleCloseed}
                      PaperProps={{
                        style: {
                          maxHeight: ITEM_HEIGHTDrop * 4.5,
                          width: "20ch",
                        },
                      }}
                    >
                      <div className="">
                        <div className="form-check ms-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                          <label
                            className="form-check-label"
                            for="flexRadioDefault1"
                          >
                            Unread
                          </label>
                        </div>
                        <div className="form-check ms-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                            checked
                          />
                          <label
                            className="form-check-label"
                            for="flexRadioDefault2"
                          >
                            Recent
                          </label>
                        </div>
                      </div>
                      {/* <MenuItem onClick={handleCloseed}>
          <Radio>Radio</Radio>
          </MenuItem> */}
                    </Menu>
                  </div>
                </div>
                <MenuItem onClick={handleClose}>
                  {/* { */}
                  <Comment
                    // actions={actions}
                    // author={<a>Han Solo</a>}
                    avatar={<Avatar src={tableimag} alt="Han Solo" />}
                    content={
                      <>
                        <p className="headingprog12 fontstyle fontfamilyInter">
                          AFIC (NIHD) started a new Contract with Dr. Johnny
                          Depp
                        </p>
                        <div className="d-flex mt-2">
                          <button className="viewheader fontstyle fontfamilyInter text-white py-1 bgcolor border-0 rounded mx-1">
                            View
                          </button>
                          <button className="Ignoreheader viewheader fontstyle fontfamilyInter py-1 rounded mx-1">
                            Ignore
                          </button>
                        </div>
                        <p className="headertimenotifa fontstyle fontfamilyInter mt-2 mx-2 ">
                          Today at 9:42 AM
                        </p>
                      </>
                    }
                    // datetime={
                    //   <Tooltip title="2016-11-22 11:22:33">
                    //     <span>8 hours ago</span>
                    //   </Tooltip>
                    // }
                  />

                  {/* } */}
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  {/* { */}
                  <Comment
                    // actions={actions}
                    // author={<a>Han Solo</a>}
                    avatar={<Avatar src={tableimag} alt="Han Solo" />}
                    content={
                      <>
                        <p className="headingprog12 fontstyle fontfamilyInter">
                          AFIC (NIHD) started a new Contract with Dr. Johnny
                          Depp
                        </p>
                        <div className="d-flex mt-2">
                          <button className="viewheader fontstyle fontfamilyInter text-white py-1 bgcolor border-0 rounded mx-1">
                            View
                          </button>
                          <button className="Ignoreheader viewheader fontstyle fontfamilyInter py-1 rounded mx-1">
                            Ignore
                          </button>
                        </div>
                        <p className="headertimenotifa fontstyle fontfamilyInter mt-2 mx-2 ">
                          Today at 9:42 AM
                        </p>
                      </>
                    }
                    // datetime={
                    //   <Tooltip title="2016-11-22 11:22:33">
                    //     <span>8 hours ago</span>
                    //   </Tooltip>
                    // }
                  />

                  {/* } */}
                </MenuItem>
              </Menu>
            </div>

          </Toolbar>
 

        </AppBar>
        {/* {renderMobileMenu}
      {renderMenu} */}
      </Box>
    </>
  );
}

export default Header;
