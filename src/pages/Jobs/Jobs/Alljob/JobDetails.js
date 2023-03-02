import React from 'react';
import Sidebard from '../../../../component/Sidebar/Sidebard';
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import filter from '../../../../Assets/image/Filter 2.png';
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import JobDetailsCard from './JobDetailsCard';
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { useNavigate } from "react-router-dom";
import { ArrowRightOutlined } from '@ant-design/icons';

const drawerWidth = 220;
function JobDetails() {
  const navigate = useNavigate();

  const breadcrumbs = [
    <div
      className="fw-bolder AllUsersBredCrumbs"
      underline="hover"
      key="2"
      color="inherit"
    // onClick={HandleClick}
    >
      <span
        className="forbreadcrumbtext"
        onClick={() => {
          navigate("/Jobs");
        }}
      >
        All Jobs
      </span>
    </div>,
    <Typography key="3" className=" AllUsersBredCrumbs ">
      <span className="forbreadcrumbactive fw-bolder ">
        Job Details
      </span>
    </Typography>,
  ];
  return (
    <div>
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
                <div className="d-flex text-black justify-content-between mx-3">
                  <Stack spacing={2} className="my-auto">
                    <Breadcrumbs
                      className="d-flex"
                      separator={<ArrowRightOutlined />}

                      aria-label="breadcrumb"
                    >
                      {breadcrumbs}
                    </Breadcrumbs>
                  </Stack>
                </div>
                <JobDetailsCard />

              </Box>

            </Box>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobDetails;