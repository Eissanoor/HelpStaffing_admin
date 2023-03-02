import React from 'react';
import Sidebard from '../../../component/Sidebar/Sidebard';
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import filter from '../../../Assets/image/Filter 2.png';
import { AiOutlineArrowUp ,AiOutlineArrowDown} from "react-icons/ai";
import { DownOutlined } from '@ant-design/icons';
// import { Dropdown, Menu, Space } from 'antd';
import plus from "../../../Assets/image/plue.png";
import Alljob from '../Jobs/Alljob/Alljob'
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import { Dropdown, Menu, Space } from 'antd';
import Allfilter from '../../../component/Popup/Job Type/Allfilter';
import Addjob from '../../../component/Popup/Addjob';
const drawerWidth = 220;

function Jobs() {
  const navigate = useNavigate();
  const menu = (
    <Menu
      items={[
        {
          label:<p onClick={() => { navigate("/Postjob")}}>Posted Jobs</p>,
          key: '0',
        },
        {
          label:<p onClick={() => { navigate("/Drafts")}}>Draft Jobs</p>,
          key: '1',
        },
        {
          label:<p onClick={() => { navigate("/Expired")}}>Expired Jobs</p>,
          key: '2',
        },
      ]}
    />
  );
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
             <div className="row mt-5 p-2 mx-auto">          
                        <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 my-2">
                          <div className="card forcard-bg Healthcard1 forcardpadding p-3">
                            <h6 className='Healthheading ms-1'>Total Jobs</h6>
                            <h1 className="Healthnumber color2 ms-1">
                            36,254
                            </h1>
                            <div>
                                <span className='Healtharrow ms-1'><span className='me-1 mt-auto'><AiOutlineArrowUp/></span>3,27%</span>
                            <span  className='ranginprog ms-3'>Since last week</span>
                            </div>
                          </div>
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 my-2">
                          <div className="card forcard-bg Healthcard3 forcardpadding p-3">
                            <h6 className='Healthheading ms-1'>Completed Jobs</h6>
                            <h1 className="Healthnumber color1  ms-1">
                            36,121
                            </h1>
                            <div>
                                <span className='Healtharrow ms-1'><span className='me-1 mt-auto'><AiOutlineArrowUp/></span>3,27%</span>
                            <span  className='ranginprog ms-3'>Since last week</span>
                            </div>
                          </div>
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 my-2">
                          <div className="card forcard-bg Healthcard2 forcardpadding p-3">
                            <h6 className='Healthheading ms-1'>Ongoing Jobs</h6>
                            <h1 className="Healthnumber color1  ms-1">
                            36,854
                            </h1>
                            <div>
                                <span className='Healtharrow ms-1'><span className='me-1 mt-auto'><AiOutlineArrowUp/></span>3,27%</span>
                            <span  className='ranginprog ms-3'>Since last week</span>
                            </div>
                          </div>
                        </div>

                        </div>

              <div className="d-flex justify-content-between forfilterbtn p-2  mb-2">
              <h6 className='Provider py-1'>
            <Dropdown overlay={menu} trigger={['click']}>
    <a onClick={e => e.preventDefault()}>
      <Space>
      All Jobs
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
            </h6>

            <div classsName = 'd-flex  my-auto' >
              <Allfilter/>
              {/* < p  className=' filterpopo fontfamilyRoboto px-3 border-0 filterbtn text-white my-auto rounded mx-2' > < Addjob /> </p> */}
              
               <button className=' filterpopo fontfamilyRoboto px-3 border-0 filterbtn text-white my-auto rounded mx-2' 
                                         onClick={() => { {navigate("/Addjob")}}}
                                         ><img src={plus} className='me-2 py-1' width='20px' />Add</button>
                                    
            {/* <button className='py-2 px-2 border-0 filterbtn text-white rounded mx-2' ><img src={filter} className='me-1  w-25' width='' />Filter</button> */}
            {/* <button className='py-2 px-2 border-0 addnewbtn text-white rounded'>Add New</button> */}
            </div>
            
          </div>
          <Alljob/>
          {/* <Alljob/> */}
          </Box>

          </Box>
          
          </div>
          </div>
    </div>
    </>
  )
}

export default Jobs;