import React from 'react';
import Sidebard from '../../../component/Sidebar/Sidebard';
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import { AiOutlineArrowUp ,AiOutlineArrowDown} from "react-icons/ai";
// import './HealthProvider.css'
import AllTable from './AllTable';
import './AllHostpital.css'
const drawerWidth = 220;

function AllHospitals() {
  return (
    <>
    <div>
         <div className="bg">
      <div className="">
        <Box sx={{ display: "flex" }}>
          <Sidebard />
          <AppBar
            className="fortrans"
            position="fixed"
            sx={{
              width: { sm: `calc(100% - ${drawerWidth}px)` },
              ml: { sm: `${drawerWidth}px` },
            }}
          ></AppBar>
          <Box
            className=""
            sx={{
              flexGrow: 1,
              my: 5,
              mx: 1,
              width: { sm: `calc(100% - ${drawerWidth}px)` },
            }}
          >
             {/* Top card section */}
             <div className="row mt-3 p-2 mx-auto">          
                        <div className="col-sm-4 col-md-6 col-lg-3 col-xl-3 my-2">
                          <div className="card forcard-bg Healthcard1 forcardpadding p-3">
                            <h6 className='Healthheading ms-1'>Health Providers</h6>
                            <h1 className="Healthnumber color2 ms-1">
                            36,254
                            </h1>
                            <div>
                                <span className='Healtharrow ms-1'><span className='me-1 mt-auto'><AiOutlineArrowUp/></span>3,27%</span>
                            <span  className='ranginprog ms-3'>Since last week</span>
                            </div>
                          </div>
                        </div>

                        <div className="col-sm-4 col-md-6 col-lg-3 col-xl-3 my-2">
                          <div className="card forcard-bg Healthcard2 forcardpadding p-3">
                            <h6 className='Healthheading ms-1'>Test Takens</h6>
                            <h1 className="Healthnumber color1  ms-1">
                            36,854
                            </h1>
                            <div>
                                <span className='Healtharrow ms-1'><span className='me-1 mt-auto'><AiOutlineArrowUp/></span>3,27%</span>
                            <span  className='ranginprog ms-3'>Since last week</span>
                            </div>
                          </div>
                        </div>

                        <div className="col-sm-4 col-md-6 col-lg-3 col-xl-3 my-2">
                          <div className="card forcard-bg Healthcard3 forcardpadding p-3">
                            <h6 className='Healthheading ms-1'>Posted Jobs</h6>
                            <h1 className="Postednumber color1  ms-1">
                            36,121
                            </h1>
                            <div>
                                <span className='Healtharrow ms-1'><span className='me-1 mt-auto'><AiOutlineArrowUp/></span>3,27%</span>
                            <span  className='ranginprog ms-3'>Since last week</span>
                            </div>
                          </div>
                        </div>

                        <div className="col-sm-4 col-md-6 col-lg-3 col-xl-3 my-2">
                          <div className="card forcard-bg Healthcard4 forcardpadding p-3">
                            <h6 className='Healthheading ms-1'>Completed jobs</h6>
                            <h1 className="Completedjobnumber color1  ms-1">
                            36,121
                            </h1>
                            <div>
                                <span className='Healtharrow ms-1'><span className='me-1 mt-auto'><AiOutlineArrowUp/></span>3,27%</span>
                            <span  className='ranginprog ms-3'>Since last week</span>
                            </div>
                          </div>
                        </div>
                        </div>
                        {/* Table section */}
        <AllTable/>

          </Box>

          </Box>
          </div>
          </div>
    </div>
    </>
  )
}

export default AllHospitals;