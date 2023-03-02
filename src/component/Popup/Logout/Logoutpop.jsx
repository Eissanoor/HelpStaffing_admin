import React,{useEffect,useState} from 'react';

import axios from "axios";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import logout from "../../../Assets/image/logout.png"
import Lottie from 'react-lottie';
import Dataanim from '../../../Assets/icons/68582-log-out.json';
import { useNavigate } from "react-router-dom";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


function Logoutpop() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const [password, setpassword] = useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleopen = () => {
    setOpen(false);
  }
  const handleClose = () => {
    // { navigate("/") }
    setOpen(false);
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Dataanim,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const apicall = () => {
    // console.log(password);
    // console.log(sessionStorage.getItem("access_key"))
    axios.get(
        `https://hummstaffing.herokuapp.com/api/admin/logout`,
        {
          headers: {
            secretKey:
              "rosx.AD-98dBXZnC7rb794a5593PjPQfzDsQgwy.BXF1LNPw4lZLK6BR6Kidf90.@$%hummstaffing???AD",
              Authorization:`Bearer ${localStorage.getItem("access_key")}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        console.log(res.data);
        if (res.status === 200) {
          navigate("/");
        } else {
          throw new Error(
            `This is an HTTP error : The status is ${res.status}`
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function loginbutton(e) {
    e.preventDefault();
    apicall();
    console.log("Error is ");

  }
  return (
    <div>
      <img src={logout} alt="logout" onClick={handleClickOpen} />
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle className='fontfamilyInter'>{"Are you want to logout"}</DialogTitle>
        <Lottie
          options={defaultOptions}
          height={400}
          width={400}
        />
        <div className="text-center d-flex justify-content-evenly mb-3">

          <button type="button" onClick={handleopen} class="btn btn-outline-primary px-4 fontfamilyInter">Cancel</button>

          <button  type="button" class="btn btn-danger px-5 fontfamilyInter"  onClick={loginbutton}>Yes</button>
        </div>
        {/* </DialogActions> */}
      </Dialog></div>
  )
}

export default Logoutpop;