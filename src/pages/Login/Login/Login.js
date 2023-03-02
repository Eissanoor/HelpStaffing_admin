import React, { useRef, useState, useEffect } from 'react';
import log from '../../../Assets/Logo/helpstafflog.png';
import eye from '../../../Assets/image/eyeaction.png';
import { ToastContainer, toast } from 'react-toastify';
import './Login.css';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Lottie from 'react-lottie';
import Dataanim from '../../../Assets/icons/98195-loader.json';
// import { useHistory } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  // const history = useHistory();
  const [email, setemail] = useState("");
  const [Loading, setLoading] = useState(false)
  const [password, setpassword] = useState("");
  const [error,setError]=useState();

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
  const apicall = () =>{
    // console.log(email,password)
  axios.post('https://gold-courageous-cocoon.cyclic.app/Login', {
      email:email,
      password:password,
      // fcmToken:"tokenasfsf"
    }, {
      // headers: {
      //   secretKey: "rosx.AD-98dBXZnC7rb794a5593PjPQfzDsQgwy.BXF1LNPw4lZLK6BR6Kidf90.@$%hummstaffing???AD"
      //       }
    }).then((res)=>{
      // console.log(resutl)
      localStorage.setItem("access_key",res.headers.bearer)
      // console.log(res.headers.bearer);
      console.log(res);
      // console.log("name",res.data.userInfo.username);
      setLoading(false);
      if (res.status === 200) {
        navigate("/Dashboard");
        {
          sessionStorage.setItem("id", "Dashboard")
        }
      } 
      else {
        setError("Invalid Username or Password!");
        throw new Error(
          `This is an HTTP error : The status is ${res.status}`
        );
        toast(`This is an HTTP error: The status is ${res.status}`);
      };
    }).catch((err)=>{
      // console.log(err);
      setLoading(false);
      setError("Invalid Username or Password!");
     
    })
  }


  function loginbutton(e) {
  //   sessionStorage.setItem("email", email);
    e.preventDefault();
  setLoading(true);
  apicall();
  // console.log("error")
  }

  const [passwordShown, setPasswordShown] = useState(false);
  // Password toggle handler
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <>
      <div className='main_div'>
      <div className='from_data rounded w-50'>
      {
      Loading? <Lottie 
	    options={defaultOptions}
        height={400}
        width={400}
      />:
          <div>

          <center>
            <img src={log} width='150px' />
            <h1 className='headinglogin mt-2'>Log into your Admin Account</h1>
          </center>

          <form className="modal-content w-100  "  onSubmit={loginbutton} >
            {/* Email section */}
            <div className='emailsection d-grid'>
              <label htmlFor='email' className='lablesection mb-1'>Email</label>
              <input types='email' id='email' value={email}   onChange={(e) => {setemail(e.target.value); {/* console.log(email) */} }} className='rounded emailinput p-2' placeholder='example@gmail.com' required ></input>
            </div>
           
            {/* password section */}
            <div className='emailsection position-relative my-2 d-grid'>
              <label htmlFor='password' className='lablesection my-1'>Password</label>
              <input type={passwordShown ? "text" : "password"} id='password' className=' rounded mt-2 w-100 emailinput p-2' placeholder='*********' value={password} onChange={(e) => setpassword(e.target.value)} required ></input>
              <p className='position-absolute text-end showpassicon mt-5 ' onClick={togglePassword}>
                {passwordShown ? <AiFillEye /> : <AiFillEyeInvisible />}
              </p>
                 {/* Error meaage */}
    {error?<lable className='text-danger text-start'>{error}</lable>:null}  
            </div>

            {/* Forgetpassword */}
            <p className='Forgetpassword text-end cursor'
              onClick={() => {
                navigate("/Forgetpassword");
              }}
            >Forget Password?</p>
            {/* Button section */}
            <div className='emailsection mt-3 d-grid'>
              <button className='loginbtn border-0 py-2 rounded text-white' type='submit'
               
              >Login</button>
            </div>

          </form>
          <ToastContainer />
        </div>

}
        </div>
      </div>

    </>
  )
}

export default Login;