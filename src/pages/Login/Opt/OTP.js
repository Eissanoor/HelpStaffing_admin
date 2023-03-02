import React,{ useState, useEffect } from "react";
import log from '../../../Assets/Logo/logo.png';
import { useNavigate } from "react-router-dom";
import './Opt.css';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

function OTP() {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  // const [username, setusername] = useState();
  const [Loading, setLoading] = useState(false);


  // console.log(url)
  // Main fuction of the compount
  const apicall = () => {
    console.log(email, code.join(""));
    console.log(code)
    axios.post(
        // `https://gold-courageous-cocoon.cyclic.app/emailVrifyOtp/${localStorage.getItem("email")}/${otp.join("")}`,
        `https://gold-courageous-cocoon.cyclic.app/emailVrifyOtp`,
   
        {
          // headers: {
          //   secretKey:
          //     "rosx.AD-98dBXZnC7rb794a5593PjPQfzDsQgwy.BXF1LNPw4lZLK6BR6Kidf90.@$%hummstaffing???AD",
          // },
        }
      )
      .then((res) => {
        // console.log(resutl)
        sessionStorage.setItem("access_key",res.headers.bearer)
        console.log(res);
        console.log(res.data);
        setLoading(false);
        if (res.status === 201) {
          // navigate("/");
          navigate("/Changepassword");
        } else {
          // setError("Weak Password!");
          throw new Error(
            `This is an HTTP error : The status is ${res.status}`
          );
          //   // toast(`This is an HTTP error: The status is ${res.status}`);
          
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        // toast.error('🦄 Wow so easy!', {
        //   position: "top-right",
        //   autoClose: 5000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        //   theme: "light",
        //   });
        // setError("Weak Password!");
        // setUsenameerro("The UserName allready exit")
      });
  };

  function loginbutton(e) {
    e.preventDefault();
    setLoading(true);
    apicall();
    console.log("Error is ");
  }

  // Resand timer section
  const [otptimer, setotptimer] = useState("");
const [minutes, setMinutes] = useState(1);
const [seconds, setSeconds] = useState(30);
useEffect(() => {
  const interval = setInterval(() => {
    if (seconds > 0) {
      setSeconds(seconds - 1);
    }

    if (seconds === 0) {
      if (minutes === 0) {
        clearInterval(interval);
      } else {
        setSeconds(59);
        setMinutes(minutes - 1);
      }
    }
  }, 1000);

  return () => {
    clearInterval(interval);
  };
}, [seconds]);
const resendOTP = () => {
  setMinutes(1);
  setSeconds(20);
};


  const [code, setcode] = useState(new Array(6).fill(""));
  // const [code, setcode] = useState()

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setcode([...code.map((d, idx) => (idx === index ? element.value : d))]);

    //Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };
  const [show, setshow] = useState(false);
  
  return (
    <div className='main_div'>
      <div className='from_data rounded w-50 '>

        <h1 className='headinglogin'>Verify OTP</h1>
        <p className='forOTPpro'>We have sent you one time password to your email.</p>
        <div className="bg-center-form">
          <form className="modal-content w-100" onSubmit={loginbutton}>
            <div className="mt-5 d-flex justify-content-center">
              {
                code.map((data, index) => {
                return (
                  <input
                    className="otp-field colorblue mx-2 text-dark text-center my-4"
                    type="text"
                    name = "code"
                    id="optinput"
                    maxLength="1"
                    key={index}
                    value={data}
                    onChange={(e) => handleChange(e.target, index)}
                    onFocus={(e) => e.target.select()}
                  />
                );
              })}
            </div>

            <button
              className="forlogin_btn rounded border-0 py-2 text-white w-100 mt-5" type="submit"
              // onClick={() => {
              //   navigate("/Changepassword");
              // }}
            >
             Verify OTP
            </button>

            <p className="text-dark d-flex receiveopt justify-content-end mt-2">
              {/* Didn’t Receive OTP?
              <span className="colorblue resand ms-1"> Resend (0:09)</span> */}
               {/* <div className="countdown-text"> */}
      {seconds > 0 || minutes > 0 ? (
        <p>
          {/* Time Remaining: {minutes < 10 ? `0${minutes}` : minutes}: */}
          {/* {seconds < 10 ? `0${seconds}` : seconds} */}
        </p>
      ) : (
        <p>Didn’t Receive OTP?</p>
      )}

      
      <span  disabled={seconds > 0 || minutes > 0}
        style={{
          color: seconds > 0 || minutes > 0 ? "#DFE3E8" : "#FF5630",
        }}
        onClick={resendOTP}
      className="colorblue resand ms-1"> Resend OTP  {minutes < 10 ? `0${minutes}` : minutes}:
      {seconds < 10 ? `0${seconds}` : seconds}</span>
    {/* </div> */}
            </p>
          </form>
        </div>
      <ToastContainer />
      </div>
    </div>
  )
}

export default OTP;