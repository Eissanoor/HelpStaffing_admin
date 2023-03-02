import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import {
  ToastContainer,
  toast
} from "react-toastify";
import Dataanim from "../../../Assets/icons/98195-loader.json";
import editgreen from "../../../Assets/image/editgreen.png";
import uploaded from "../../../Assets/image/imgupload.png";
import "./editing.css";
import axios from "axios";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import cameraicon from "../../../Assets/image/cameraicon.png";
function Addcategories() {
  const [uploaded, setuploaded] = useState();
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const [name, setname] = useState("");
   const [icon, seticon] = useState("");
  const [Loading, setLoading] = useState(false);
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: Dataanim,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
  const token = localStorage.getItem("access_key");
  //    console.log(token);
  //    console.log(name);
  const apicall = () => {
    const fromdata = new FormData();
    fromdata.append("name", name);
    fromdata.append("icon", icon);
    axios.post(`/admin/category`, fromdata, {
        headers: {
          secretKey:
            "rosx.AD-98dBXZnC7rb794a5593PjPQfzDsQgwy.BXF1LNPw4lZLK6BR6Kidf90.@$%hummstaffing???AD",
          Authorization: `Bearer ${localStorage.getItem("access_key")}`,
        },
      })
      .then((res) => {
        console.log(res);
        setname('');
        seticon('')
        setLoading(false);
         toast.success("Add the Categories Successfully", {
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
         toast.error(`Adding Error ${err.message}`, {
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
    // e.preventDefault();
    setOpen(false);
    apicall();
  }

  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  function handleChange(e) {
    // console.log(e.target.files);
    setuploaded(URL.createObjectURL(e.target.files[0]));
    seticon(e.target.files[0]);
    console.log(e.target.files[0]);

  }

  return (
    <>
      <button
        type="button"
        className=" cursor text-white border-0 rounded Addtocategories fontfamilyInter fontstyle py-2"
        onClick={handleClickOpen}
      >
        Add to categories
      </button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        {/* < form onSubmit = {loginbutton} > */}

        <DialogTitle
          id="responsive-dialog-title"
          className="appsettingeditingtitle fontstyle fontfamilyRoboto"
        >
          {"Add a category for Health Provider"}
          <span className="text-danger">*</span>
        </DialogTitle>

        <DialogContent>
          <DialogContentText>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
              id="Assistant"
              className="rounded mt-2 fontfamilyRaleway w-100 Assistant p-2"
              placeholder="Assistant"
              required
            ></input>

            <button
              type="button"
              className="border-0 mt-3 rounded bgcolor text-white cursor Addtocategories fontfamilyInter fontstyle py-2 w-100"
              //  onClick={loginbutton}
            >
              Add
            </button>


                            
                             
                                <div className="image-upload mt-2">
                                  <center>
                                  <label htmlFor="file-input">
                                    <img src={cameraicon} />
                                  </label>
</center>
                                  <input
                                    id="file-input"
                                    type="file"
                                    onChange={handleChange}
                                      // value={icon}
                                  />
                                </div>
                             <img src={uploaded} className="ms-0 my-4" width="400px" ></img> 
                        





          </DialogContentText>

          <DialogActions className=" mb-3 w-100">
            <button
              type="submit"
              onClick={loginbutton}
              className="border-0 rounded bgcolor text-white cursor Addtocategories fontfamilyInter fontstyle py-2 w-100"
            >
              Add
            </button>
          </DialogActions>
        </DialogContent>
        {/* </form> */}
      </Dialog>
        < ToastContainer / >
    </>
  );
}

export default Addcategories;
