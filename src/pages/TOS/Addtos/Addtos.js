import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dataanim from "../../../Assets/icons/98195-loader.json";
import axios from "axios";
import Sidebard from "../../../component/Sidebar/Sidebard";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { useNavigate } from "react-router-dom";
import { ArrowRightOutlined } from "@ant-design/icons";
import { styled } from "@mui/material/styles";

const drawerWidth = 220;
function Addtos() {
  const [Loading, setLoading] = useState(true);
  const [dataget, setdataget] = useState([]);
  const [datas, setdatas] = useState([]);
  const [text, settext] = useState();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Dataanim,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  // Main fuction of the compount
  // add api section
  const addcall = () => {
    const fromdata = new URLSearchParams();
    fromdata.append("text", text);
    // console.log(question, answer, faqFor);
    axios.post(
        `/admin/tos`,
        {
          text: text,
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
        if (res.status === 201) {
          navigate("/TOS");
        } else {
          toast(`This is an HTTP error: The status is ${res.status}`);
          //  setError("Invalid Username or Password!");
          throw new Error(
            `This is an HTTP error : The status is ${res.status}`
          );
          toast(`This is an HTTP error: The status is ${res.status}`);
        }
        toast.success("Added Successfully", {
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
        toast.error(`Error is : ${err.response.data.message}`, {
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

  function loginbutton() {
    addcall();
  }

  const navigate = useNavigate();
  const breadcrumbs = [
    <div
      className="fw-bolder AllUsersBredCrumbs"
      underline="hover"
      key="2"
      color="inherit"
      // onClick={HandleClick}
    >
      <span
        className="forbreadcrumbtext fontfamilyInter cursor"
        onClick={() => {
          navigate("/TOS");
        }}
      >
       TOS
      </span>
    </div>,
    <Typography key="3" className=" AllUsersBredCrumbs ">
      <span className="forbreadcrumbactive fontfamilyInter  fw-bolder">
        ADD TOS
      </span>
    </Typography>,
  ];
  return (
    <>
      <div>
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
                <div className="mt-5">
                  <div className="container-fluid">
                    <Stack spacing={2} className="my-auto">
                      <Breadcrumbs
                        className="ms-1 d-flex"
                        separator={
                          <ArrowRightOutlined alt="" className="mx-2" />
                        }
                        aria-label="breadcrumb"
                      >
                        {breadcrumbs}
                      </Breadcrumbs>
                    </Stack>
                    <div className="d-flex flex-column mb-3 ms-1 mt-5">
                      <h6 className="fontfamilyInter FAQsummary my-auto">
                        Frequently TOS 
                      </h6>
                      <small className="forfaqquestionss fontfamilyInter mt-2">
                        Add a TOS that has been asked
                        repeatedly.
                      </small>
                    </div>
                   
                    <textarea
                      className="forcard-bg forfaqtextarea p-4 w-100 mt-4"
                      rows="8"
                      cols="130"
                      required
                      value={text}
                      onChange={(e) => {
                        settext(e.target.value);
                      }}
                      placeholder="Add TOS..."
                    ></textarea>

                    <p className="d-flex justify-content-end fortotalcharacter">
                      20/1000
                    </p>
                   
                    <button
                      type="submit"
                      onClick={loginbutton}
                      className="AddFAQbtn ms-auto fontfamilyInter w-100 rounded bgcolor text-white border-0 px-5 py-2"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </Box>
            </Box>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default Addtos;
