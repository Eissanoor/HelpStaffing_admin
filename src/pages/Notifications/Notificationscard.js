import React from 'react';
import notifiactioncard from "../../Assets/image/notifiactioncard.png"

function Notificationscard() {
  return (
    <>
    
    <div className="cardmain rounded bg-white py-3  px-2 border">
        <div className="d-flex justify-content-between mx-2">
            {/* Left */}
            <div className="d-flex">
            <img src={notifiactioncard} className="" width="100px"></img>
            {/* Midle */}
         <div className="ms-4 my-auto">
            <p className="carprog fontfamilyRoboto">AFIC (NIHD) <span className="onehago">1h ago</span></p>
            <p className="carddetails fontfamilyRoboto">AFIC (NIHD) hired Dr. Salman Ahmed for a heart surgery at 9AM.</p>
            </div>

            </div>
            {/* right */}
            <div className="my-auto">
                <button className='fontfamilyRoboto border-0 rounded Reviewbtn px-3 py-1 '>Review</button>
            </div>

        </div>
    </div>
    </>
  )
}

export default Notificationscard;