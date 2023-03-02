import React, { useRef, useState, useEffect } from "react";
import log from "../../Assets/Logo/helpstafflog.png";
import eye from "../../Assets/image/eyeaction.png";
// import './Login.css';
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Lottie from 'react-lottie';
import Dataanim from '../../Assets/icons/98195-loader.json';

import { ToastContainer, toast } from 'react-toastify';

function Singup() {
  const navigate = useNavigate();

  const userRef = useRef();
  const errRef = useRef();
  // const history = useHistory();
  const [email, setemail] = useState("");
  const [fullname, setfullname] = useState();
  const [Loading, setLoading] = useState(false);
  const [password, setpassword] = useState("");
  const [error, setError] = useState();
  const [Usenameerro,setUsenameerro]=useState();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Dataanim,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  // console.log(url)
  // Main fuction of the compount
  const apicall = () => {
    console.log(fullname, email, password);
    axios.post(
        "https://gold-courageous-cocoon.cyclic.app/signUp",
        {
          fullname: fullname,
          email: email,
          password: password,
        },
        {
          // headers: {
          //   secretKey:
          //     "rosx.AD-98dBXZnC7rb794a5593PjPQfzDsQgwy.BXF1LNPw4lZLK6BR6Kidf90.@$%hummstaffing???AD",
          // },
        }
      )
      .then((res) => {
        // console.log(resutl)
        console.log(res);
        console.log(res.data);
        setLoading(false);
        if (res.status === 201) {
          navigate("/");
        } else {
          setError("Weak Password!");
          setUsenameerro("The UserName allready exit")
          throw new Error(
            `This is an HTTP error : The status is ${res.status}`
          );
          //   // toast(`This is an HTTP error: The status is ${res.status}`);
          
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError("Weak Password!");
        setUsenameerro("The UserName allready exit")
      });
  };

  function loginbutton(e) {
    e.preventDefault();
    setLoading(true);
    apicall();
    console.log("error");
  }

  const [passwordShown, setPasswordShown] = useState(false);
  // Password toggle handler
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  return (
    <>
      <div className="main_div">
        <div className="from_data rounded w-50">
        {
      Loading? <Lottie 
	    options={defaultOptions}
        height={400}
        width={400}
      />:
<div>
          <center>
            <img src={log} width="150px" />
            <h1 className="headinglogin">SingUp into your Admin Account</h1>
          </center>
          <form className="modal-content w-100  " onSubmit={loginbutton}>
            {/* Username section */}
            <div className="emailsection d-grid">
              <label htmlFor="username" className="lablesection mb-1">
                UserName
              </label>
              <input
                type="text"
                id="username"
                className="rounded emailinput p-2"
                placeholder="Username"
                      value={fullname}
                      onChange={(e) => setfullname(e.target.value)}
                required
              />
               {Usenameerro?<lable className='text-danger text-start'>{Usenameerro}</lable>:null}  
            </div>
            {/* Email section */}
            <div className="emailsection d-grid">
              <label htmlFor="email" className="lablesection mb-1">
                Email
              </label>
              <input
                types="email"
                id="email"
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                className="rounded emailinput p-2"
                placeholder="example@gmail.com"
                required
              ></input>
            </div>

            {/* password section */}
            <div className="emailsection position-relative my-2 d-grid">
              <label htmlFor="password" className="lablesection my-1">
                Password
              </label>
              <input
                type={passwordShown ? "text" : "password"}
                id="password"
                className=" rounded mt-2 w-100 emailinput p-2"
                placeholder="*********"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                required
              ></input>
              <p
                className="position-absolute text-end showpassicon mt-5 "
                onClick={togglePassword}
              >
                {passwordShown ? <AiFillEye /> : <AiFillEyeInvisible />}
              </p>
              {/* Error meaage */}
              {error?<lable className='text-danger text-start'>{error}</lable>:null}  
            </div>

            {/* Forgetpassword */}
            <p
              className="Forgetpassword text-end cursor"
              onClick={() => {
                navigate("/");
              }}
            >
              Login
            </p>
            {/* Button section */}
            <div className="emailsection mt-3 d-grid">
              <button
                className="loginbtn border-0 py-2 rounded text-white"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
          <ToastContainer />
          </div>
}
        </div>
      </div>
    </>
  );
}

export default Singup;
