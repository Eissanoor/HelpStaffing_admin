import React from 'react';
import { Detector, Offline } from 'react-detect-offline';
import Lottie from "react-lottie";
import internet from "../Assets/icons/lf20_swqrc2sm.json"
function Checkinternet(props) {
   const defaultOptions = {
     loop: true,
     autoplay: true,
     animationData: internet,
     rendererSettings: {
       preserveAspectRatio: "xMidYMid slice",
     },
   };
  return (
    <>
<Detector
  render={({ online }) => (
   
    online ? (
      props.children
    ):(
<div className = 'text-center justify-content-center mt-4' >
  <Lottie options={defaultOptions} height={400} width={400} />
  <h4 className='my-2'>No Connection</h4>
  <h6>Please check internet Connection</h6>
</div>
    )
  )}
/>
    </>
  )
}

export default Checkinternet