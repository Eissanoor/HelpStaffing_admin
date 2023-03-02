import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";
import Dataanim from "../../../Assets/icons/98195-loader.json";
import axios from "axios";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Radio } from "antd";
import { useTheme } from "@mui/material/styles";
import { useNavigate, useParams } from "react-router-dom";
import editgreen from "../../../Assets/image/editgreen.png";
import uploaded from "../../../Assets/image/imgupload.png";
import "./editing.css";

function Specialitypopedit() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [Loading, setLoading] = useState(true);
  const [dataget, setdataget] = useState();
  const [icon, seticon] = useState();
  const [name, setname] = useState(sessionStorage.getItem("specialtiyname"));
  const [IDget, setIDget] = useState();
  const [status, setstatus] = useState();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Dataanim,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const { _id } = useParams();
  // Main fuction of the compount
  const apicall = () => {
    const _id = sessionStorage.getItem("specialtiyid");
    // const name = sessionStorage.getItem('specialtiyname');
    const fromdata = new URLSearchParams();
    fromdata.append("name", name);
    fromdata.append("status", status);
    fromdata.append("id", IDget);
    // console.log(name, status, IDget);
    axios.put(
        `/admin/speciality/`,
        {
          _id: sessionStorage.getItem("specialtiyid"),
          name: name,
          status: status,
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
        setdataget(res.data);
        // console.log(_id);
        //  setname(res.data.name);
        console.log(res.data);
        toast.success("Speciality Updated Successfully", {
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
        toast.error(`Updata error ${err}`, {
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
  const Update = () => {
    apicall();
    setOpen(false);
  };
  const changename = (e) => {
    setname(e.target.value);
  };
  // Deleted api section
  const Deletedapi = (id) => {
    //  console.log(id);
    const iddelet = sessionStorage.getItem("specialtiyid");
    axios
      .delete(`/admin/speciality?id=${iddelet}`, {
        headers: {
          secretKey:
            "rosx.AD-98dBXZnC7rb794a5593PjPQfzDsQgwy.BXF1LNPw4lZLK6BR6Kidf90.@$%hummstaffing???AD",
          Authorization: `Bearer ${localStorage.getItem("access_key")}`,
        },
      })
      .then((res) => {
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
        setOpen(false);
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

  return (
    <>
      <div>
        <img
          src={editgreen}
          className="cursor "
          width="30px"
          height="30px"
          onClick={handleClickOpen}
        />
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle
            id="responsive-dialog-title"
            className="appsettingeditingtitle fontstyle fontfamilyRoboto"
          >
            {"Category Names"}
          </DialogTitle>

          <DialogContent>
            <DialogContentText>
              <input
                type="text"
                id="Assistant"
                value={sessionStorage.getItem("specialtiyname")}
                onChange={changename}
                className="rounded mt-2 fontfamilyRaleway w-100 Assistant p-2"
                placeholder="Assistant"
                required
              ></input>
            </DialogContentText>
          </DialogContent>
          <DialogContent>
            <DialogContentText>
              {/* <img src={uploaded} className="ms-0" width='400px'></img> */}
              <input
                type="file"
                className="ms-0 my-4"
                width="400px"
                value={icon}
                onChange={(e) => seticon(e.target.value)}
                //   onChange={handleChange}
                //   value={icon}
              />
            </DialogContentText>
            <Radio.Group
              name="radiogroup"
              defaultValue={"true"}
              value={status}
              //   onChange={(e) => setstatus(e.target.value)}
            >
              <p className="appsettingeditingtitle fontstyle fontfamilyRoboto mt-2">
                Status
              </p>
              <Radio
                value={"true"}
                checked={status === true}
                onChange={(e) => setstatus(e.target.value)}
              >
                true
              </Radio>
              <Radio
                value={"false"}
                checked={status === false}
                onChange={(e) => setstatus(e.target.value)}
              >
                false
              </Radio>
            </Radio.Group>
          </DialogContent>
          <DialogActions className="d-flex justify-content-center mb-3 w-100">
            <button
              type="button"
              className="btn btn-primary px-4 py-2 rounded"
              onClick={Update}
            >
              Update
            </button>
            <button
              type="button"
              className="btn btn-danger rounded  px-4 py-2"
              onClick={Deletedapi}
            >
              Delete
            </button>
          </DialogActions>
        </Dialog>
      </div>
      <ToastContainer />
    </>
  );
}

export default Specialitypopedit;
