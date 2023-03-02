import React from 'react';
import success from '../../../Assets/image/Success.png';
import { useNavigate } from "react-router-dom";
function Success() {
    const navigate = useNavigate();
  return (
    <>
     <div className='main_div'>

<div className='from_data rounded w-50'>
    <center>
    <img src={success}/>
    <p className='Successfully my-2 p-2'> Password Changed Successfully</p>
     {/* Button section */}
     <div className='emailsection  p-2'>
       <button className='Update bgcolor border-0 px-4 py-2 rounded text-white'
        onClick={() => {
            navigate("/");
          }}
       >Back to Login</button>
       </div>
    </center>
</div>

</div>
    </>
  )
}

export default Success