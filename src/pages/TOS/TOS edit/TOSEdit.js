import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebard from "../../../component/Sidebar/Sidebard";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { ArrowRightOutlined } from "@ant-design/icons";
import { styled } from "@mui/material/styles";
// Require Editor JS files.
import "froala-editor/js/froala_editor.pkgd.min.js";
import { useNavigate, useParams } from "react-router-dom";
// Require Editor CSS files.
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Require Font Awesome.
//  import 'font-awesome/css/font-awesome.css';

import FroalaEditor from "react-froala-wysiwyg";

const drawerWidth = 220;
function TOSEdit() {
  const [text, settext] = useState(sessionStorage.getItem("idtos"));
  const navigate = useNavigate();
  const {
    _id
  } = useParams();
  // console.log(_id);
  // useEffect(() => {
  const usereditid = () => {
    const fromdata = new URLSearchParams();
    fromdata.append("text", text);
    // console.log(question, answer);
    const datafrom = {
      _id: _id,
      text: text,
    };
    // console.log(datafrom);
    axios.put(
        `/admin/tos`, {
          _id: _id,
          text: text,
        }, {
          headers: {
            secretKey: "rosx.AD-98dBXZnC7rb794a5593PjPQfzDsQgwy.BXF1LNPw4lZLK6BR6Kidf90.@$%hummstaffing???AD",
            Authorization: `Bearer ${localStorage.getItem("access_key")}`,
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          navigate("/TOS");
        } else {
          toast.error(`Error is ${res.data.message}`, {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function loginbutton() {
    usereditid();
  }
function canclebtn() {
  navigate("/TOS")
}
  return (
    <>
      <div className="bg h-100">
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
                  <div className="">
                    <div className="d-flex px-4">
                      <h6 className="FAQsummary fontfamilyInter my-auto">
                        Terms Of Services
                      </h6>
                    </div>
                    <div className="forbg-everyone bg-white rounded p-4 mt-3">
                      <textarea
                        className="forcard-bg forfaqtextarea p-4 w-100"
                        rows="15"
                        value={text}
                        onChange={(e) => {
                          settext(e.target.value);
                        }}
                        cols="130"
                        placeholder="Add a relevant question..."
                      ></textarea>
                      <div className="d-flex mt-5 justify-content-end">
                        <button  className = "TOSCancel fontfamilyRoboto border-0 rounded py-2 px-4 mx-2 "
                        onClick = {
                       canclebtn
                        } >
                          Cancel
                        </button>
                        <button className = "TOSUpdate fontfamilyRoboto bgcolor text-white px-4   border-0 rounded py-2"
                        onClick = {
                          loginbutton
                        } >
                          Update
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Box>
          </Box>
        </div>
      </div>
      < ToastContainer / >
    </>
  );
}

export default TOSEdit;
