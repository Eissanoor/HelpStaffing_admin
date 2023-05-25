import React, { useState ,useEffect} from 'react';
import log from '../../../Assets/Logo/logo.png';
import eye from '../../../Assets/image/eyeaction.png'
import './Changepassword.css';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dataanim from '../../../Assets/icons/98195-loader.json';
import Lottie from 'react-lottie';
import PasswordStrengthBar from 'react-password-strength-bar';

function Changepassword() {
    const navigate = useNavigate();
    const [passwordShown, setPasswordShown] = useState(false);
    const [ConfirmPassword, setConfirmPassword] = useState(false);
    const [password, setpassword] = useState("");
    const [cpassword, setcpassword] = useState("");
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [cPasswordClass, setCPasswordClass] = useState('form-control');
    const [isCPasswordDirty, setIsCPasswordDirty] = useState(false);
    const [passwordError, setPasswordErr] = useState("");
    const [labshow, setlabshow] = useState(false);
 //    Password & Confirm Password Matching Functionality

 useEffect(() => {
  if (isCPasswordDirty) {
      if (password === cpassword) {
          setShowErrorMessage(false);
          setCPasswordClass('form-control is-valid');
          
      } else {
          setShowErrorMessage(true)
          setCPasswordClass('form-control is-invalid')
      }
  }
  
}, [cpassword])
    // Loader
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: Dataanim,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };

    // Password toggle handler
    const [Loading, setLoading] = useState(false);
  
  
  // console.log(url)
  // Main fuction of the compount
  const apicall = () => {
    console.log(password);
    console.log(sessionStorage.getItem("access_key"))
    axios.post(
        `https://gold-courageous-cocoon.cyclic.app/admin/changePassword`,
        {
          password:password
        }
        ,
         {
           headers: {
             autherization: `Bearer ${localStorage.getItem("Tokensss")}`
           },
         }
      )
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setLoading(false);
        
        if (res.status === 201) {
          navigate("/Success");
          toast.success(`Password Reset Successfully`, {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            })
      // });
        } else {
          throw new Error(
            `This is an HTTP error : The status is ${res.status}`
          );
          //   // toast(`This is an HTTP error: The status is ${res.status}`);
          
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        toast.error(`This is an HTTP error: The status is ${err.message}`, {
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
    
    console.log("Error is ");

  }

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };
    const ConfirmtogglePassword = () => {
        setConfirmPassword(!ConfirmPassword);
    };
    const strengthpassword=(e)=>{
      setpassword(e.target.value);
      setlabshow(true);
    }
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
                        <h1 className='resetpassword'>Reset password</h1>
                    </center>

                    <form className="modal-content w-100  "  onSubmit={loginbutton}>
                        {/* New Password section */}
                        <div className='emailsection position-relative my-3 d-grid'>
                            <label htmlFor='NewPassword' className='lablesection my-1'>New Password</label>
                            <input type={passwordShown ? "text" : "password"} id='NewPassword' value={password} 
                            // onChange={(e) => setpassword(e.target.value)}
                            onChange={strengthpassword}
                            className=' rounded my-2 w-100 emailinput p-2' placeholder='*********' required ></input>
                            {passwordError}
                            <p className='position-absolute text-end showpassicon mt-5 ' onClick={togglePassword}>
                                {passwordShown ? <AiFillEye /> : <AiFillEyeInvisible />}
                            </p>
                            {
                              labshow?<PasswordStrengthBar isRequired password={password} />: <p className='detailspro'>Password must be atleast 6 characters.</p>
                            }
                            {/* <p className='detailspro'>Password must be atleast 6 characters.</p>
                            <PasswordStrengthBar isRequired password={password} /> */}
                        </div>
                        {/* password section */}
                        <div className='emailsection position-relative my-3 d-grid'>
                            <label htmlFor='ConfirmPassword' className='lablesection my-1'>Confirm Password</label>
                            <input type={ConfirmPassword ? "text" : "password"} id='ConfirmPassword' value={cpassword} onChange={(e) => {setcpassword(e.target.value);setIsCPasswordDirty(true)}} className=' my-2 w-100 rounded emailinput p-2' placeholder='*********' required ></input>
                            <p className='position-absolute text-end showpassicon mt-5 ' onClick={ConfirmtogglePassword}>
                                {ConfirmPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                            </p>
                            {showErrorMessage && isCPasswordDirty ? <div className='text-danger'> Passwords did not match </div> : ''}
                        </div>

                        {/* Button section */}
                        <div className='emailsection mt-3 d-grid'>
                            <button className='Update bgcolor border-0 py-2 rounded text-white'  type='submit'
                                // onClick={() => {
                                //     navigate("/Success");
                                // }}
                            >Update</button>
                        </div>

                    </form>

                    </div>
}
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default Changepassword;