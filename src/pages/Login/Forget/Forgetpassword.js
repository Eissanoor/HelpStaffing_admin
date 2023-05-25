import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Row, Col, Form } from "react-bootstrap";
import logo from '../../../Assets/Logo/helpstafflog.png';
import log from '../../../Assets/Logo/helpstafflog.png';
import './Forget.css';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Forgetpassword() {
  const [email, setemail] = useState("");
  // const [username, setusername] = useState();
  const [Loading, setLoading] = useState(false);


  // console.log(url)
  // Main fuction of the compount
  const apicall = () => {
    console.log(email);
    axios.post(
      `https://gold-courageous-cocoon.cyclic.app/admin/passwordchangeotpSend`,
      
      {
email:email
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
          localStorage.setItem("email", email)
          // navigate("/");
          navigate("/OTP");
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        toast.error(` User Not Found`, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          })
      });
  };

  function loginbutton(e) {
    e.preventDefault();
    setLoading(true);
    apicall();
  }

  const navigate = useNavigate();

  return (
    <>
      <div className='main_div'>

        <div className='from_data rounded w-50 '>

          <center>
            <img src={log} width='150px' />
            <h1 className='headinglogin mt-2'>Forget password</h1>
          </center>

          <form className="modal-content w-100" onSubmit={loginbutton}>
            {/* Email section */}
            <div className='emailsection mb-5 mt-3 d-grid'>
              <label htmlFor='email' className='lablesection mb-1'>Email</label>
              <input types='email' id='email' className='rounded emailinput p-2' value={email} onChange={(e) => { setemail(e.target.value); {/* console.log(email) */ } }} placeholder='example@gmail.com' required ></input>
            </div>

            {/* Button section */}
            <div className='emailsection mt-3 p-1 d-grid'>
              <button className='loginbtn border-0 py-2 rounded text-white'
                //  onClick={() => {
                //   navigate("/OTP");
                // }}
                type="submit"
              >Submit</button>
            </div>

          </form>
        </div>

      </div>
      <ToastContainer />
    </>
  )
}

export default Forgetpassword;