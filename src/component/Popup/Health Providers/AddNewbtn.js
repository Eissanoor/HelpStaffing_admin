import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import PropTypes from "prop-types";
import { CopyOutlined } from "@ant-design/icons";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
// import './AddNew.css';
import logo from "../../../Assets/Logo/logo.png";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Lottie from "react-lottie";
import Dataanim from "../../../Assets/icons/98195-loader.json";
const emails = ["username@gmail.com", "user02@gmail.com"];
function SimpleDialog(props) {
  const [show, setshow] = React.useState(false);
  const { onClose, selectedValue, open } = props;
const [opens, setOpens] = React.useState(false);
  const [email, setemail] = useState("");
  const [username, setusername] = useState();
  const [Loading, setLoading] = useState(false);
  const [password, setpassword] = useState("");
  const [Usenameerro, setUsenameerro] = useState();
  // Main fuction of the compount
  const apicall = () => {
    console.log(username, email, password);
    axios.post("https://hummstaffing.herokuapp.com/api/admin/signup/provider",
        {
          userName: username,
          email: email,
          password: password,
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
 if (res.status === 200) {
     setOpens(false);
      toast.success("Signed Up Successfully", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
      });
      console.log(res);
 }
else{
    setUsenameerro("Validation Error")
}
 })
      .catch((err) => {
        toast.error(` Error ${err.response.data.message}`, {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        console.log(err);
         setUsenameerro(`Validation Error ${err.response.data.message}`);
      });
  };

  function loginbutton(e) {
    e.preventDefault();
    apicall();
  }

  const navigate = useNavigate();
  const [passwordShown, setPasswordShown] = useState(false);
  // Password toggle handler
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };


  return (
    <Dialog onClose={handleClose} open={open} className="w-100">
      {" "}
      <div className="px-4 py-2 foradddialogbox">
        <List
          sx={{
            pt: 0,
          }}
        >
          {" "}
          <ListItem>
            {" "}
            <div className="">
              <center>
                <img src={logo} className="px-5 w-75 mb-1" />
                <h5 className="addnewheading">Create a new Hospital</h5>
              </center>
              <div>
                <form className=" w-100" onSubmit={loginbutton}>
                  {/* Name */}
                  <div className="w-100 mt-2">
                    <label htmlFor="Name" className="Name my-1 headinglabel">
                      Name <span className="start">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Shalimar Hospital"
                      value={username}
                      onChange={(e) => setusername(e.target.value)}
                      required
                      className="emailinput px-2 py-2 mt-1 rounded-1 w-100"
                      id="Name"
                    />
                     {/* {Usenameerro?<lable className='text-danger text-start'>{Usenameerro}</lable>:null}  */}
                  </div>
                  {/* Email */}
                  <div className="w-100 mt-2">
                    <label htmlFor="email" className="email my-1 headinglabel">
                      Email <span className="start">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="example@gmail.com"
                      value={email}
                      onChange={(e) => {
                        setemail(e.target.value);
                      }}
                      required
                      className=" px-2 py-2 mt-1 emailinput rounded-1 w-100"
                      id="Namemaile"
                    />
                  </div>
                  {/* {/Password*  */}
                  <div className="w-100 position-relative mt-2  d-grid">
                    <label htmlFor="password" className=" my-1 headinglabel">
                      Password <span className="start">*</span>{" "}
                    </label>
                    <input
                      type={passwordShown ? "text" : "password"}
                      id="password"
                      className="rounded mt-2 w-100 emailinput p-2"
                      value={password}
                      onChange={(e) => setpassword(e.target.value)}
                      placeholder="*********"
                      required
                    ></input>
                    <p
                      className="position-absolute text-end showpassicon mt-5 "
                      onClick={togglePassword}
                    >
                      {passwordShown ? <AiFillEye /> : <AiFillEyeInvisible />}
                    </p>
                  </div>
                   {Usenameerro?<lable className='text-danger text-start'>{Usenameerro}</lable>:null} 
                  {/* button */}
                  <div className="w-100 mt-5">
                    <button
                      className="w-100 Create text-white rounded py-2 border-0"
                      type="submit"
                    >
                      Create
                    </button>
                  </div>{" "}
                </form>
              </div>
            </div>
          </ListItem>
          <ListItem
            autoFocus
            button
            onClick={() => handleListItemClick("addAccount")}
          ></ListItem>{" "}
        </List>{" "}
      </div>
    </Dialog>
    // hello
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

function AddNewbtn() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };
  //
  //
  //

  return (
    <>
      <div>
        <div className="addicon" onClick={handleClickOpen}>
          <button className="py-2 px-2 border-0 addnewbtn text-white rounded my-auto">
            Add New
          </button>
        </div>
        <SimpleDialog
          className=""
          selectedValue={selectedValue}
          open={open}
          onClose={handleClose}
        />{" "}

      </div>
      < ToastContainer / >
    </>
  );
}

export default AddNewbtn;
