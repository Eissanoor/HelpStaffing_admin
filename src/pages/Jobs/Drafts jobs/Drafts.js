import React, { createElement, useState } from 'react';
import Sidebard from '../../../component/Sidebar/Sidebard';
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import filter from '../../../Assets/image/Filter 2.png';
import { AiOutlineArrowUp ,AiOutlineArrowDown} from "react-icons/ai";
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import Alljob from '../Jobs/Alljob/Alljob'
import ReactPaginate from "react-paginate";
import { DislikeFilled, DislikeOutlined, LikeFilled, LikeOutlined } from '@ant-design/icons';
import { Avatar, Comment, Tooltip } from 'antd';
import deleteicon from "../../../Assets/image/delete action.png";
import eye from "../../../Assets/image/eyeaction.png";
import imag from '../../../Assets/image/alljobimg.png'
import { useNavigate } from "react-router-dom";
// import './Alljob.css';
import Delete from '../../../component/Popup/Delete';
import Dropfilter from '../../../component/Popup/Job Type/Dropfilter';

const drawerWidth = 220;
function Drafts() {
    const navigate=useNavigate();
    const menu = (
      <Menu
        items={[
          {
            label:<p onClick={() => { navigate("/Jobs")}}>All Jobs</p>,
            key: '0',
          },
          {
            label:<p onClick={() => { navigate("/Postjob")}}>Posted Jobs</p>,
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
           

              <div className="d-flex justify-content-between forfilterbtn p-2 mt-5  mb-2">
            <h6 className='Provider py-1'>
            <Dropdown overlay={menu} trigger={['click']}>
    <a onClick={e => e.preventDefault()}>
      <Space>
      Draft Jobs
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
            </h6>
            <div classsName=''>
              <Dropfilter/>
            {/* <button className='py-2 px-2 border-0 filterbtn text-white rounded mx-2' ><img src={filter} className='me-1  w-25' width='' />Filter</button> */}
            {/* <button className='py-2 px-2 border-0 addnewbtn text-white rounded'>Add New</button> */}
            </div>
            
          </div>
          {/* Card section */}
          <div className='w-100 px-2 py-2  mainalljob rounded '>
         <Comment
    //   actions={actions}
      author={
        <div className=' py-2  '>
        <h6 className='authorname fontfamily text-black'>AFIC (NIHD)</h6>
        <p className='authordetail fontfamily '>Child Specialist, MBBS, FCPS</p></div>
      }
      avatar={
      <div div className=' py-2 ms-1 '>
      <Avatar  src={imag} alt="img" />
      </div>
      }
      content={
        <>
        <p className='contentprog fontfamily text-black'>
         Quam arcu amet lorem molestie in vel. Risus massa sagittis, leo pretium. Laoreet ullamcorper arcu pellentesque amet ultrices libero neque nulla. Tellus cum sollicitudin elit velit, donec elementum rhoncus. Vulputate mi imperdiet congue urna amet sed convallis pellentesque dolor. Neque bibendum pulvinar tempus, sit mattis dictum eu. Turpis quis odio vel libero adipiscing enim, egestas. Sollicitudin vulputate eget massa leo leo scelerisque id at elit. Placerat orci non....
        </p>
        <div className='d-flex justify-content-between mt-3 me-2'>  
            <span className='fontfamily '><span className='firstsec  text-black bolder' >$95.00 </span>/  hour</span>
            |
            <span className='fontfamily'><span className='firstsec  text-black bolder' >2weeks</span>/ Duration</span>
            |
            <span className='fontfamily '><span className='firstsec  text-black bolder' >124 </span>/ Total hours</span>
            |
            <span className='fontfamily'><span className='firstsec  text-black bolder' >12-10-22 </span>/ Posted on</span>
            |
            <span className='fontfamily'><span className='firstsec  text-black bolder' >Evening </span>/ Shift</span>

            </div>
        </>
      }
      datetime={
        <Tooltip >
          <span>
          <div className='alljobactionimag d-flex justify-content-around py-1 mt-auto w-100 px-2 rounded '>
                    <img  className="cursor px-2" onClick={() => {
                  navigate("/DraftDetails");
                }} src={eye}/>
                    {/* <img  className="cursor px-2" src={deleteicon} /> */}
                    <p className='px-2'><Delete/></p>
                    </div>
          </span>
        </Tooltip>
      }
    />
      
    </div>
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

export default Drafts;