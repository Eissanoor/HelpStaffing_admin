import React from 'react';
import Sidebard from '../../../component/Sidebar/Sidebard';
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import filter from '../../../Assets/image/Filter 2.png';
import { AiOutlineArrowUp ,AiOutlineArrowDown} from "react-icons/ai";
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import Alljob from '../Jobs/Alljob/Alljob'
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";

const drawerWidth = 220;
function Postjob() {
  const navigate = useNavigate();
    const menu = (
        <Menu
          items={[
            {
              label:<p onClick={() => { navigate("/Jobs")}}>All Jobs</p>,
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
             <div className="row mt-5 py-2 mx-auto">          
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
                        </div>

              <div className="d-flex justify-content-between forfilterbtn p-2  mb-2">
            <h6 className='Provider py-1'>
            <Dropdown overlay={menu} trigger={['click']}>
    <a onClick={e => e.preventDefault()}>
      <Space>
      Post job
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
            </h6>
            <div classsName=''>
            <button className='py-2 px-2 border-0 filterbtn text-white rounded mx-2' ><img src={filter} className='me-1  w-25' width='' />Filter</button>
            {/* <button className='py-2 px-2 border-0 addnewbtn text-white rounded'>Add New</button> */}
            </div>
            
          </div>
          <Alljob/>
          <Alljob/>
          </Box>

          </Box>
          <div className="d-flex mt-3 ms-4 p-3">
        <p className="entriess my-auto ms-5 mt-0">
          Showing&nbsp;30&nbsp;-&nbsp;36542&nbsp;enteries
        </p>
        <div className="ms-auto me-2 ">
          <ReactPaginate
            previousLabel={"Next"}
            nextLabel={"Previous"}
            // pageCount={pageCount}
            pageRange={5}
            marginPagesDisplayed={2}
            // onPageChange={handlePageChange}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        </div>
      </div>
          </div>
          </div>
    </div>
    </>
  )
}

export default Postjob;