import React, { useState, useEffect } from "react";
import Sidebard from '../../component/Sidebar/Sidebard'
import Lottie from "react-lottie";
import Dataanim from "../../Assets/icons/98195-loader.json";
import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import ReactPaginate from "react-paginate";
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import Grow from '@mui/material/Grow'
import Popper from '@mui/material/Popper'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'
import Stack from '@mui/material/Stack'
import { ToastContainer, toast } from "react-toastify";
// image section
import { SearchOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css'
import './Certificates.css'
import profile from '../../Assets/image/cerification.png'
import web from '../../Assets/image/web.png'
import deleted from '../../Assets/image/deletered.png'
// import { Select,Checkbox  } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons'
// import type { MenuProps } from 'antd';
// import { Dropdown, Space } from 'antd'
import axios from "axios";
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import Checkinternet from "../../component/Checkinternet";
const drawerWidth = 220

function Certificates () {
  const [open, setOpen] = React.useState(false)
  const anchorRef = React.useRef(null)
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Dataanim,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  // Main fuction of the compount
  const [Loading, setLoading] = useState(true);
  const [dataget, setdataget] = useState([]);
  // const [name, setname] = useState();
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [search, setsearch] = useState("");
  const apicall = () => {
    axios
      .get(`/admin/provider/certification?status=all`, {
        headers: {
          secretKey:
            "rosx.AD-98dBXZnC7rb794a5593PjPQfzDsQgwy.BXF1LNPw4lZLK6BR6Kidf90.@$%hummstaffing???AD",
          Authorization: `Bearer ${localStorage.getItem("access_key")}`,
        },
      })
      .then((res) => {
        setdataget(res.data.docs);
        console.log(res.data);
        setPageCount(Math.ceil(res.data.docs.length / 10));
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
           setLoading(false);
      });
  };
  useEffect(() => {
    apicall();
    setLoading(true);
  }, []);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
    //  setPage(data.selected.length)

  }

  const startIndex = currentPage * 10;
  const endIndex = startIndex + 10;
  const pagePosts = dataget.slice(startIndex, endIndex);



  // Deleted api section
  const Deletedapi = (id) => {
    // console.log(id);
    axios
      .delete(`/admin/provider/certification?id=${id}`, {
        headers: {
          secretKey: "rosx.AD-98dBXZnC7rb794a5593PjPQfzDsQgwy.BXF1LNPw4lZLK6BR6Kidf90.@$%hummstaffing???AD",
          Authorization: `Bearer ${localStorage.getItem("access_key")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        toast.success("Deleted Successfully", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error(`Deleted Error ${err.message}`, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen)
  }

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return
    }

    setOpen(false)
  }

  function handleListKeyDown (event) {
    if (event.key === 'Tab') {
      event.preventDefault()
      setOpen(false)
    } else if (event.key === 'Escape') {
      setOpen(false)
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open)
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus()
    }

    prevOpen.current = open
  }, [open])

  const [opended, setopended] = React.useState(false);
  const anchorRefeded = React.useRef(null);

  const handleToggleed = () => {
    setopended((prevopended) => !prevopended);
  };

  const handleCloseeded = (event) => {
    if (anchorRefeded.current && anchorRefeded.current.contains(event.target)) {
      return;
    }

    setopended(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setopended(false);
    } else if (event.key === 'Escape') {
      setopended(false);
    }
  }

  // return focus to the button when we transitioned from !opended -> opended
  const prevopended = React.useRef(opended);
  React.useEffect(() => {
    if (prevopended.current === true && opended === false) {
      anchorRefeded.current.focus();
    }

    prevopended.current = opended;
  }, [opended]);

  let Numberid=0
  return (
    <>
      {/* <Checkinternet> */}
      <div className='bg'>
        <div className=''>
          <Box sx={{ display: 'flex' }}>
            <Sidebard />
            <AppBar
              className='fortrans'
              position='fixed'
              sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` }
              }}
            ></AppBar>
            <Checkinternet>
            <Box
              className=''
              sx={{
                flexGrow: 1,
                my: 5,
                mx: 1,
                width: { sm: `calc(100% - ${drawerWidth}px)` }
              }}
            >
              {Loading ? (
                <Lottie options={defaultOptions} height={400} width={400} />
              ) : (
              <div className='mt-5'>

                <div className='container-fluid '>
                  <div className='d-flex  justify-content-between w-100'>
                    <div className='w-75 position-relative my-auto'>
                      <p className='position-absolute mt-1  '>
                        <SearchOutlined className='ms-1 ' />
                      </p>
                      <input
                        type='text'
                        placeholder='Search a name '
                            value={search} 
                            onChange={(e) => setsearch(e.target.value)}
                        className='py-1 ps-4 w-50 w-sm-100 rounded inputcertification '
                      ></input>
                    </div>

                    <p className='certificationpro colorblue fontstyle fontfamilyRoboto'>
                          {dataget.length} requests found
                    </p>
                  </div>
                  {/* table section */}
                      <div className='mx-auto  mb-4 mt-3'>
                    {/* <div className=" bg rounded"> */}
                        <Paper className='mt-2 w-100  h-100 overflow-auto text-nowrap'>
                          <Table className='mt-2 text-nowrap' id='data' elevation={0}>
                        {/* Header section */}
                        <TableHead>
                          <TableRow classname='fontfamilyLato Certificationhtableheader fontstyle'>
                            <TableCell
                              numeric
                              className='fontfamilyLato Certificationhtableheader fontstyle '
                            >
                              S.no
                            </TableCell>
                            <TableCell
                              numeric
                              className='fontfamilyLato Certificationhtableheader fontstyle '
                            >
                              Profile
                            </TableCell>
                            {/* <TableCell className="tablehad">ID</TableCell> */}
                            <TableCell className=' fontfamilyLato Certificationhtableheader fontstyle'>
                              Certificate name{' '}
                            </TableCell>
                            <TableCell className=' fontfamilyLato Certificationhtableheader fontstyle'>
                              {' '}
                              Date
                            </TableCell>
                            <TableCell className='fontfamilyLato Certificationhtableheader  fontstyle'>
                              Approval Status{' '}
                            </TableCell>
                            <TableCell className='fontfamilyLato Certificationhtableheader text-center fontstyle'>
                              Actions
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        {/* complate */}
                        <TableBody className='cerificationtablebody fontstyle  fontfamilyInter'>
                              {pagePosts.filter((admin) => {
                                if (search == "") {
                                  return pagePosts;
                                } else if (
                                  admin.status &&
                                  admin.status
                                    .toString()
                                    .toLowerCase()
                                    .includes(search.toString().toLowerCase())
                                ) {
                                  return pagePosts;
                                }
                                else if (
                                  admin.issuingOrg &&
                                  admin.issuingOrg
                                    .toString()
                                    .toLowerCase()
                                    .includes(search.toString().toLowerCase())
                                ) {
                                  return pagePosts;
                                }
                              }).map((itme, index) => {
                            return (
                              <>
                              <TableRow key={itme._id}>
                                
                                
                            <TableCell className='cerificationtablebody fontstyle  fontfamilyInter border-0'>
                              {/* {itme._id} */}
                                    {Numberid+=1}
                            </TableCell>

                            <TableCell
                              numeric
                              className='cerificationtablebody fontstyle text-blackcontract  fontfamilyInter '
                            >
                             <Avatar size="large" src={itme.image} className="me-2"/>
                                  {itme.name}
                            </TableCell>
                            <TableCell className='cerificationtablebody fontstyle  fontfamilyInter '>
                                  {itme.issuingOrg}
                            </TableCell>

                            <TableCell className='cerificationtablebody fontstyle  fontfamilyInter '>
                                  {itme.issuingDate}
                            </TableCell>
                            <TableCell className='cerificationtablebody fontstyle  fontfamilyInter '>
                              <Stack direction='row' spacing={0}>
                                <Paper></Paper>
                                <div>
                                  <Button
                                    ref={anchorRef}
                                    id='composition-button'
                                    aria-controls={
                                      open ? 'composition-menu' : undefined
                                    }
                                    aria-expanded={open ? 'true' : undefined}
                                    aria-haspopup='true'
                                    onClick={handleToggle}
                                    className='awaiting rounded bg-white'
                                  >
                                        {itme.status}
                                    <span className='ms-2 my-auto'>
                                      <CaretDownOutlined />
                                    </span>
                                  </Button>
                                  <Popper
                                    open={open}
                                    anchorEl={anchorRef.current}
                                    role={undefined}
                                    placement='bottom-start'
                                    transition
                                    disablePortal
                                  >
                                    {({ TransitionProps, placement }) => (
                                      <Grow
                                        {...TransitionProps}
                                        style={{
                                          transformOrigin:
                                            placement === 'bottom-start'
                                              ? 'left top'
                                              : 'left bottom'
                                        }}
                                      >
                                        <Paper>
                                          <ClickAwayListener
                                            onClickAway={handleClose}
                                          >
                                            <MenuList
                                              autoFocusItem={open}
                                              id='composition-menu'
                                              aria-labelledby='composition-button'
                                              onKeyDown={handleListKeyDown}
                                            >
                                              <MenuItem>
                                                <FormGroup>
                                                  <FormControlLabel
                                                    className='colorblue fontfamilyRaleway fontstyle fw-bold'
                                                    control={
                                                      <Checkbox
                                                        defaultChecked
                                                      />
                                                    }
                                                        label={itme.status}
                                                  />
                                                  <FormControlLabel
                                                    className='pink fontfamilyRaleway fontstyle fw-bold'
                                                    control={
                                                      <Checkbox
                                                        defaultChecked
                                                      />
                                                    }
                                                        label={itme.status}
                                                  />
                                                  <FormControlLabel
                                                    className='colorblue fontfamilyRaleway fontstyle fw-bold'
                                                    control={
                                                      <Checkbox
                                                        defaultChecked
                                                      />
                                                    }
                                                        label={itme.status}
                                                  />
                                                </FormGroup>
                                              </MenuItem>
                                            </MenuList>
                                          </ClickAwayListener>
                                        </Paper>
                                      </Grow>
                                    )}
                                  </Popper>
                                </div>
                              </Stack>
                            </TableCell>
                            <TableCell
                              numeric
                              className=' fontstyle  fontfamilyLato text-center'
                            >
                              <div className=' d-flex justify-content-around py-2 rounded w-100'>
                                <img
                                  className='cursor my-auto'
                                  src={web}
                                  height='25px'
                                  width="25px"
                                />
                                <img
                                  className='cursor'
                                  src={deleted}
                                      onClick={() => Deletedapi(itme._id)}
                                  width='25px'
                                  height='30px'
                                />
                                {/* <Deleted/> */}
                              </div>
                            </TableCell>
                          </TableRow>
                              </>
                            );
                          })}
                        </TableBody>
                        
                      </Table>
                    </Paper>


                       <div className="d-flex mt-3">
            <p className="appentriess  fontfamilyRoboto fontstyle px-2">
              Showing&nbsp;10&nbsp;-&nbsp;
               {
                 dataget.length
               } &nbsp;
               enteries
            </p>
            <div className="ms-auto appentriess  fontfamilyRoboto fontstyle px-3">
              <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={" Next"}
                // pageCount={pageCount}
                // pageRange={5}
                 pageCount={pageCount}
                  pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                marginPagesDisplayed={2}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                 activeClassName={'active'}
              />
           
            </div>
          </div>
                  </div>
                </div>
              </div>
              )}
            </Box>
            </Checkinternet>
          </Box>
        </div>
        <ToastContainer />
      </div>
      {/* </Checkinternet> */}
    </>
  )
}

export default Certificates
