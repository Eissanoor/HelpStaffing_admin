import React from 'react';
import Sidebard from '../../component/Sidebar/Sidebard';
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import { AiOutlineArrowUp ,AiOutlineArrowDown} from "react-icons/ai";
import TransactionTable from './TransactionTable';
// import './HealthProvider.css'
// import TableHealth from './TableHealth';
const drawerWidth = 220;

function Transactions() {
  return (
   <>
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
             <div className="row mt-5 p-1 mx-auto">          
                        <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 my-2">
                          <div className="card forcard-bg Healthcard1 forcardpadding p-3">
                            <h6 className='Healthheading fontfamilyLato ms-1'>Total Transactions</h6>
                            <h1 className="Healthnumber fontfamilyLato color2 py-2 ms-1">
                            $96,91,649.00
                            </h1>
                          </div>
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 my-2">
                          <div className="card forcard-bg  Healthcard2 forcardpadding p-3">
                            <h6 className='Healthheading fontfamilyLato ms-1'>Escrow Amounts</h6>
                            <h1 className="Healthnumber fontfamilyLato color1 py-2 ms-1">
                            $56,41,245.00
                            </h1>
                        
                          </div>
                        </div>
                        </div>

                        <TransactionTable/>

          </Box>

          </Box>
          </div>
          </div>
   </>
  )
}

export default Transactions