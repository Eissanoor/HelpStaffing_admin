import React, { useState, useEffect } from "react";
import Sidebard from "../../../component/Sidebar/Sidebard";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { useNavigate } from "react-router-dom";
import { ArrowRightOutlined } from "@ant-design/icons";
// import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "./HealthProvider.css";
import Paper from "@mui/material/Paper";
import profile from "../../../Assets/image/rejectprofile1.png";
import {
  FacebookFilled,
  LinkedinFilled,
  TwitterSquareFilled,
} from "@ant-design/icons";
import Hourlyrate from "../../../Assets/image/Hourly rate.png";
import start from "../../../Assets/image/Star 1.png";
import qualifications from "../../../Assets/image/qualifications.png";
import Detailprofile from "../../../Assets/image/Detailprofile.png";
import price from "../../../Assets/image/price.png";
import AnalyticsChart from "./AnalyticsChart";
import { Divider, Steps } from "antd";
// import { StarOutlined  } from "react-dynamic-star";
import { StarOutlined } from "@ant-design/icons";
import { Rate, Progress } from "antd";
import { Line } from "rc-progress";
import HealthLineChart from "./HealthLineChart";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Lottie from "react-lottie";
import Dataanim from "../../../Assets/icons/98195-loader.json";
// //Rating
// import { StarOutlined  } from "react-dynamic-star";
const { Step } = Steps;
const drawerWidth = 220;

function HealthProvidersDetails() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Dataanim,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  // main api function
  const [Loading, setLoading] = useState(true);
  const [dataget, setdataget] = useState([]);
  const [specialityes, setspecialityes] = useState();

  const apicall = (_id) => {
    const id = sessionStorage.getItem("detailsprovied");
    // console.log(id);
    axios.get(`/admin/provider/${id}`, {
      headers: {
        secretKey:
          "rosx.AD-98dBXZnC7rb794a5593PjPQfzDsQgwy.BXF1LNPw4lZLK6BR6Kidf90.@$%hummstaffing???AD",
        Authorization: `Bearer ${localStorage.getItem("access_key")}`,
      },
    })
      .then((res) => {
        setdataget(res.data);
        setspecialityes(res.data.docs.speciality)
        console.log(res);
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

  return (
    <>
      <div className="bg ">
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
              {Loading ? (
                <Lottie options={defaultOptions} height={400} width={400} />
              ) : (
                <div className="mt-5">
                  <div className="container-fluid  p-2">
                    {
                      Object.keys(dataget).map((itme, index) => {
                        return (
                          <div className=" bg-white rounded p-2">
                            {/* Top section */}
                            <div className="row mx-auto mt-4 w-100">
                              <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 ps-0">
                                <div className="forbg-everyone bg rounded p-4">
                                  <div className=" forpackagehistory d-flex">
                                    <div className="my-auto">
                                      < img src={
                                        dataget.docs.profileImage
                                      }
                                        width='100%'
                                        height='60px'
                                        className='rounded-circle'
                                      />
                                    </div>
                                    <div className=" ms-3 mt-3">
                                      <p className="namedhealth fontfamilyRoboto">
                                        {
                                          dataget.docs.userName
                                        }
                                        <span>
                                          <img src={Hourlyrate} className='ms-2' />
                                        </span>
                                      </p>
                                      <p className="gander fontfamilyRoboto">
                                        {
                                          dataget.docs.gender
                                        }
                                      </p>
                                      <p className="ratehealth fontfamilyInter">
                                        {
                                          dataget.docs.totalReviews
                                        }
                                        ({
                                          dataget.docs.totalRatings
                                        })
                                        <span>
                                          <img src={start} />
                                        </span>
                                      </p>
                                    </div>
                                  </div>
                                  {/*  */}
                                  <div className="d-flex justify-conent-between mt-2">
                                    <p className="forcontactinfo">Hourly Rate</p>
                                    <h5 className="ms-auto fontfamilyRoboto forcontactinfoa">
                                      {
                                        dataget.docs.hourlyRate
                                      }
                                    </h5>
                                  </div>
                                  <div className="d-flex justify-conent-between mt-2">
                                    <p className="forcontactinfo">Qualification</p>
                                    <h5 className=" ms-auto fontfamilyRoboto forcontactinfoa">
                                      {
                                        dataget.docs.category
                                      }
                                    </h5>
                                  </div>
                                  <div className="d-flex justify-conent-between mt-2">
                                    <p className="forcontactinfo">Expertise</p>
                                    <p className="ms-auto fontfamilyRoboto forcontactinfoa">
                                      Breast Surgeon
                                    </p>
                                  </div>
                                  <div className="d-flex justify-conent-between mt-2">
                                    <p className="forcontactinfo">Experience</p>
                                    <p className="ms-auto fontfamilyRoboto forcontactinfoa">
                                      {
                                        dataget.docs.experience
                                      }
                                    </p>
                                  </div>
                                  <div className="d-flex justify-conent-between mt-2">
                                    <p className="forcontactinfo">Completed shifts</p>
                                    <p className="ms-auto fontfamilyRoboto forcontactinfoa">
                                      120
                                    </p>
                                  </div>
                                  <div className="d-flex justify-conent-between mt-2">
                                    <p className="forcontactinfo">Location</p>
                                    <p className="ms-auto fontfamilyRoboto forcontactinfoa colorblue ">
                                      Washington, DC
                                    </p>
                                  </div>
                                  <div className="d-flex justify-conent-between mt-2">
                                    <p className="forcontactinfo">Availibility</p>
                                    <p className="ms-auto fontfamilyRoboto colorblue forcontactinfoa">

                                      {/* {
                                  dataget.docs.openToWork
                              } */}
                                      {dataget.docs.openToWork === true ? <div> Open to work</div> : <div> Not open  to work</div>}
                                      {/* Open to work */}
                                    </p>
                                  </div>
                                  <div className="d-flex justify-conent-between mt-2">
                                    <p className="forcontactinfo">Social media</p>
                                    <p className="ms-auto fontfamilyRoboto colorblue forcontactinfoa">
                                      <FacebookFilled
                                        twoToneColor="#00629E"
                                        fill="#00629E"
                                        className=" cursor"

                                      />
                                      < LinkedinFilled className="mx-2 cursor"

                                      />
                                      < TwitterSquareFilled className=" cursor"

                                      />
                                    </p>
                                  </div>
                                </div>
                              </div>

                              <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 pe-0">
                                <div className="forbg-everyone bg rounded p-4">
                                  <div>
                                    <h6 className=" forpackagehistory my-2">
                                      About me
                                    </h6>
                                    <p className="mt-2 forpendingdescription">
                                      {
                                        dataget.docs.about
                                      }
                                      {/* {
                                  dataget.docs.about === true ? < div > Open to work </div> : <div> Not open  to work</div >
                                } */}

                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* second section */}
                            <div className="row mx-auto mt-4 h-100 w-100">
                              <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 ps-0">
                                <div className="forbg-everyone bg rounded p-3">
                                  <p className="  forpendingdescription">
                                    <h6 className=" forpackagehistory my-2">
                                      Qualifications
                                    </h6>

                                    {

                                      dataget.docs.qualification.map((ite, i) => {
                                        return (
                                          <div className=" forpackagehistory mt-2 d-flex">
                                            <div className="my-auto">
                                              <img
                                                src={qualifications}
                                                alt="qualifications"
                                                width="90px"
                                              />
                                            </div>
                                            <div className=" ms-3 mt-1">
                                              <p className="qualificationsdetails fontfamilyRoboto">
                                                {
                                                  ite.degreeLevel
                                                }
                                              </p>
                                              <p className=" qualificationsdetails fontfamilyRoboto">
                                                {
                                                  ite.subject
                                                }
                                              </p>
                                              <p className="qualificationsdetails fontfamilyInter">
                                                {
                                                  ite.startDate
                                                } -  {
                                                  ite.endDate
                                                }
                                              </p>
                                            </div>
                                          </div>
                                        )
                                      })
                                    }
                                  </p>
                                </div>
                              </div>
                              {/*                         
  {
dataget.docs.speciality.map((item, i) => {
 return ( */}
                              <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 pe-0">
                                <div className="forbg-everyone bg rounded p-4">
                                  <p className="  forpendingdescription">
                                    <h6 className=" forpackagehistory my-2">
                                      Expertise
                                    </h6>

                                    {
                                      dataget.docs.speciality.map((item, i) => {
                                        return (


                                          <Steps
                                            className="titledascription fontfamilyRoboto"
                                            progressDot
                                            current={4}
                                            direction="vertical"
                                          >
                                            <Step
                                              className="titledascription fontfamilyRoboto"
                                              title={item.speciality}
                                              description={item.experience}
                                            />
                                            <Step

                                            />
                                            {/* <Step
                                  title="General Surgeon"
                                  description=" 2Years"
                                />
                                <Step
                                  title="General Surgeon"
                                  description=" 2Years"
                                /> */}
                                          </Steps>


                                        )
                                      })
                                    }
                                  </p>
                                </div>
                              </div>


                            </div>

                            {/* card section */}
                            <div className="row w-100 mt-4  forbg-everyone bg rounded  mx-auto ">
                              {

                                dataget.docs.certification.map((itee, i) => {
                                  return (
                                    <div className="col-sm-12 col-md-6 col-lg-4  col-xl-4 my-2">

                                      <div className=" bgcardcolor rounded  p-3">
                                        <div className="  d-flex">
                                          <div className="my-auto">
                                            <img
                                              src={qualifications}
                                              alt="qualifications"
                                              width="100px"
                                            />
                                          </div>
                                          <div className=" ms-3 ">
                                            <div className="justify-content-end d-flex" >
                                              <img
                                                src={price}
                                                alt="price"
                                                align="center"
                                                width="30px"
                                              />
                                            </div>
                                            <p className="carssectiondetails1 text-white fontfamilyRoboto">
                                              {itee.name}
                                            </p>
                                            <p className=" carssectiondetails2 text-white fontfamilyRoboto">
                                              {
                                                itee.issuingDate
                                              }
                                            </p>
                                            <p className="carssectiondetails3 text-white fontfamilyRoboto">
                                              {itee.issuingOrg}
                                            </p>
                                          </div>
                                        </div>


                                      </div>
                                    </div>
                                  )
                                })
                              }

                            </div>

                            {/* Reviews */}
                            <div className="forbg-everyone bg rounded p-4 mt-4">
                              <div className="d-flex mt-4">
                                <h6 className="my-auto apprating text-black me-3">
                                  4.0
                                </h6>
                                <Rate
                                  allowClear={false}
                                  outlined={true}
                                  defaultValue={4}
                                  className="my-auto"
                                  width={20}
                                  height={20}
                                />

                                <h6 className="my-auto app-review ms-3">
                                  (55reviews)
                                </h6>
                              </div>
                              <div className="d-flex mt-3 ">
                                <p className="fontfamilyInter my-auto app-star me-4">
                                  5 star
                                </p>

                                <Progress
                                  percent={100}
                                  showInfo={false}
                                  strokeColor="#00629E"
                                  className="slider-range  bg-muted my-auto w-50"
                                />
                                <p className="fontfamilyInter my-auto app-review ms-4">
                                  (55)
                                </p>
                              </div>
                              <div className="d-flex mt-3 ">
                                <p className="fontfamilyInter my-auto app-star me-4">
                                  4 star
                                </p>

                                <Progress
                                  percent={80}
                                  showInfo={false}
                                  strokeColor="#00629E"
                                  className="slider-range rounded-pill bg-muted my-auto w-50"
                                />
                                <p className="fontfamilyInter my-auto app-review ms-4">
                                  (07)
                                </p>
                              </div>
                              <div className="d-flex mt-3 ">
                                <p className="fontfamilyInter my-auto app-star me-4">
                                  3 star
                                </p>

                                <Progress
                                  percent={60}
                                  showInfo={false}
                                  strokeColor="#00629E"
                                  className="slider-range rounded-pill bg-muted my-auto w-50"
                                />
                                <p className="fontfamilyInter my-auto app-review ms-4 ">
                                  (02)
                                </p>
                              </div>
                              <div className="d-flex mt-3 ">
                                <p className="fontfamilyInter my-auto app-star me-4">
                                  2 star
                                </p>
                                <Progress
                                  percent={30}
                                  showInfo={false}
                                  strokeColor="#00629E"
                                  className="slider-range bg-muted my-auto w-50"
                                />
                                <p className="fontfamilyInter my-auto app-review ms-4">
                                  (01)
                                </p>
                              </div>
                              <div className="d-flex mt-3 ">
                                <p className="fontfamilyInter my-auto app-star me-4">
                                  1 star
                                </p>
                                <Progress
                                  percent={10}
                                  showInfo={false}
                                  strokeColor="#00629E"
                                  className="slider-range bg-muted my-auto w-50"
                                />
                                <p className="fontfamilyInter my-auto app-review ms-4">
                                  (00)
                                </p>
                              </div>
                            </div>

                            {/* Detail profile */}
                            <div className="">
                              <div className="forbg-everyone bg rounded p-4 mt-4">
                                <div>
                                  <div className="d-flex">
                                    <img
                                      className="forprofileclients"
                                      src={Detailprofile}
                                      alt="Detailprofile"
                                    />
                                    <div className="ms-3 my-auto">
                                      <p className="forclientnames fontfamilyInter colorblue fontstyle mb-0">
                                        Adrian Harvey
                                      </p>
                                      <p className="forclientemail fontfamilyInter fontstyle ">
                                        @uharvey
                                      </p>
                                    </div>
                                  </div>
                                  <p className="forhostcomment  fontfamilyInter fontstyle mt-3">
                                    There’s no other program that walks you through
                                    exactly what you need to know to start an online
                                    store fast, written by someone who has built
                                    several 7-figure ecommerce businesses from
                                    scratch. What’s more, everything has been broken
                                    down in step-by-step detail with real action plans
                                    including finding your niche.
                                  </p>
                                  <div className="d-flex mt-1">
                                    <h6 className="my-auto forclientemail fontstyle fontfamilyInter ms-auto">
                                      22.03.2021
                                    </h6>
                                  </div>
                                </div>
                              </div>
                              <div className="forbg-everyone bg rounded p-4 mt-4">
                                <div>
                                  <div className="d-flex">
                                    <img
                                      className="forprofileclients"
                                      src={Detailprofile}
                                      alt="Detailprofile"
                                    />
                                    <div className="ms-3 my-auto">
                                      <p className="forclientnames fontfamilyInter colorblue fontstyle mb-0">
                                        Adrian Harvey
                                      </p>
                                      <p className="forclientemail fontfamilyInter fontstyle ">
                                        @uharvey
                                      </p>
                                    </div>
                                  </div>
                                  <p className="forhostcomment  fontfamilyInter fontstyle mt-3">
                                    There’s no other program that walks you through
                                    exactly what you need to know to start an online
                                    store fast, written by someone who has built
                                    several 7-figure ecommerce businesses from
                                    scratch. What’s more, everything has been broken
                                    down in step-by-step detail with real action plans
                                    including finding your niche.
                                  </p>
                                  <div className="d-flex mt-1">
                                    <h6 className="my-auto forclientemail fontstyle fontfamilyInter ms-auto">
                                      22.03.2021
                                    </h6>
                                  </div>
                                </div>
                              </div>
                              <button className="w-100 border-0 rounded py-2 mt-2 text-white bgcolor fontfamilyInter fontstyle seebtn">
                                See All
                              </button>
                            </div>

                            {/* chart section */}
                            <div className="row mx-auto mt-4 w-100 h-auto">
                              <h6 className="Analytics fontstyle fontfamilyRoboto px-4">
                                Analytics
                              </h6>
                              <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 ps-0">
                                <div className="forbg-everyone bg rounded p-4">
                                  <AnalyticsChart />
                                </div>
                              </div>

                              <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 pe-0">
                                <div className="forbg-everyone bg rounded p-3">
                                  <div className="chartbr1 rounded p-2">
                                    <h6 className="Escrow fontfamilyInter fontstyle text-white">
                                      Escrow Amount
                                    </h6>
                                    <h6 className="Escrownum fontfamilyInter fontstyle text-white">
                                      $27,486
                                    </h6>
                                    <HealthLineChart />
                                  </div>
                                  <div className="chartbr2 mt-1 rounded p-2 ">
                                    <h6 className="Escrow fontfamilyInter fontstyle text-white">
                                      Total earnings
                                    </h6>
                                    <h6 className="Escrownum fontfamilyInter fontstyle text-white">
                                      $15,654
                                    </h6>
                                    <HealthLineChart />
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* table section */}
                            <div className="row mx-auto mt-4 mb-4 w-100 ">
                              {/* <div className=" bg rounded"> */}

                              <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 ps-0">
                                <div className="forbg-everyone bg rounded p-4">
                                  <h6 className="jobDetailsss fontstyle fontfamilyRoboto">
                                    Jobs Details
                                  </h6>
                                  <Paper className="tablebg">
                                    <Table className="tablebg mt-4" id="data">
                                      {/* Header section */}
                                      <TableHead>
                                        <TableRow classname="fontfamilyLato healthtableheader fontstyle">
                                          <TableCell
                                            numeric
                                            className="fontfamilyLato healthtableheader fontstyle text-center"
                                          >
                                            Hospital Name
                                          </TableCell>
                                          {/* <TableCell className="tablehad">ID</TableCell> */}
                                          <TableCell className=" fontfamilyLato healthtableheader text-center fontstyle">
                                            Hourly rate{" "}
                                          </TableCell>
                                          <TableCell className=" fontfamilyLato healthtableheader text-center fontstyle">
                                            Total Hours{" "}
                                          </TableCell>
                                          <TableCell className="fontfamilyLato healthtableheader text-center  fontstyle">
                                            Amount{" "}
                                          </TableCell>
                                          <TableCell className="fontfamilyLato healthtableheader text-center fontstyle">
                                            Status
                                          </TableCell>
                                        </TableRow>
                                      </TableHead>
                                      {/* complate */}
                                      <TableBody className="healthtablebody fontstyle  fontfamilyInter">
                                        {/* {rows.map(({ id, name, calories, fat, carbs, protein }) => ( */}
                                        <TableRow className="">
                                          <TableCell
                                            numeric
                                            className="healthtablebody fontstyle text-blackcontract  fontfamilyInter text-center"
                                          >
                                            AFIC (NIHD)
                                          </TableCell>
                                          <TableCell className="healthtablebody fontstyle  fontfamilyInter text-center">
                                            $95/h
                                          </TableCell>

                                          <TableCell className="healthtablebody fontstyle  fontfamilyInter text-center">
                                            73{" "}
                                          </TableCell>
                                          <TableCell className="healthtablebody fontstyle  fontfamilyInter text-center">
                                            $11,828
                                          </TableCell>
                                          <TableCell
                                            numeric
                                            className=" fontstyle  fontfamilyLato text-center"
                                          >
                                            <button className="actionbtncontract w-100 Ongoingbtnt colorpip fontfamilyLato border-0 p-2 rounded">
                                              Completed
                                            </button>
                                          </TableCell>
                                        </TableRow>

                                        {/* ))} */}
                                      </TableBody>
                                      {/* Ongoing */}
                                      <TableBody className="healthtablebody fontstyle  fontfamilyInter">
                                        {/* {rows.map(({ id, name, calories, fat, carbs, protein }) => ( */}
                                        <TableRow className="">
                                          <TableCell
                                            numeric
                                            className="healthtablebody fontstyle text-blackcontract  fontfamilyInter text-center"
                                          >
                                            AFIC (NIHD)
                                          </TableCell>
                                          <TableCell className="healthtablebody fontstyle  fontfamilyInter text-center">
                                            $95/h
                                          </TableCell>

                                          <TableCell className="healthtablebody fontstyle  fontfamilyInter text-center">
                                            73{" "}
                                          </TableCell>
                                          <TableCell className="healthtablebody fontstyle  fontfamilyInter text-center">
                                            $11,828
                                          </TableCell>
                                          <TableCell
                                            numeric
                                            className=" fontstyle  fontfamilyLato text-center"
                                          >
                                            <button className="actionbtncontract w-100 Ongoingbtnt colorred fontfamilyLato border-0 p-2 rounded">
                                              Ongoing
                                            </button>
                                          </TableCell>
                                        </TableRow>

                                        {/* ))} */}
                                      </TableBody>
                                      {/* complate */}
                                      <TableBody className="healthtablebody fontstyle  fontfamilyInter">
                                        {/* {rows.map(({ id, name, calories, fat, carbs, protein }) => ( */}
                                        <TableRow className="">
                                          <TableCell
                                            numeric
                                            className="healthtablebody fontstyle text-blackcontract  fontfamilyInter text-center"
                                          >
                                            AFIC (NIHD)
                                          </TableCell>
                                          <TableCell className="healthtablebody fontstyle  fontfamilyInter text-center">
                                            $95/h
                                          </TableCell>

                                          <TableCell className="healthtablebody fontstyle  fontfamilyInter text-center">
                                            73{" "}
                                          </TableCell>
                                          <TableCell className="healthtablebody fontstyle  fontfamilyInter text-center">
                                            $11,828
                                          </TableCell>
                                          <TableCell
                                            numeric
                                            className=" fontstyle  fontfamilyLato text-center"
                                          >
                                            <button className="actionbtncontract w-100 Ongoingbtnt colorpip fontfamilyLato border-0 p-2 rounded">
                                              Completed
                                            </button>
                                          </TableCell>
                                        </TableRow>

                                        {/* ))} */}
                                      </TableBody>
                                      {/* complate */}
                                      <TableBody className="healthtablebody fontstyle  fontfamilyInter">
                                        {/* {rows.map(({ id, name, calories, fat, carbs, protein }) => ( */}
                                        <TableRow className="">
                                          <TableCell
                                            numeric
                                            className="healthtablebody fontstyle text-blackcontract  fontfamilyInter text-center"
                                          >
                                            AFIC (NIHD)
                                          </TableCell>
                                          <TableCell className="healthtablebody fontstyle  fontfamilyInter text-center">
                                            $95/h
                                          </TableCell>

                                          <TableCell className="healthtablebody fontstyle  fontfamilyInter text-center">
                                            73{" "}
                                          </TableCell>
                                          <TableCell className="healthtablebody fontstyle  fontfamilyInter text-center">
                                            $11,828
                                          </TableCell>
                                          <TableCell
                                            numeric
                                            className=" fontstyle  fontfamilyLato text-center"
                                          >
                                            <button className="actionbtncontract w-100 Ongoingbtnt colorpip fontfamilyLato border-0 p-2 rounded">
                                              Completed
                                            </button>
                                          </TableCell>
                                        </TableRow>

                                        {/* ))} */}
                                      </TableBody>
                                      {/* Ongoing */}
                                      <TableBody className="healthtablebody fontstyle  fontfamilyInter">
                                        {/* {rows.map(({ id, name, calories, fat, carbs, protein }) => ( */}
                                        <TableRow className="">
                                          <TableCell
                                            numeric
                                            className="healthtablebody fontstyle text-blackcontract  fontfamilyInter text-center"
                                          >
                                            AFIC (NIHD)
                                          </TableCell>
                                          <TableCell className="healthtablebody fontstyle  fontfamilyInter text-center">
                                            $95/h
                                          </TableCell>

                                          <TableCell className="healthtablebody fontstyle  fontfamilyInter text-center">
                                            73{" "}
                                          </TableCell>
                                          <TableCell className="healthtablebody fontstyle  fontfamilyInter text-center">
                                            $11,828
                                          </TableCell>
                                          <TableCell
                                            numeric
                                            className=" fontstyle  fontfamilyLato text-center"
                                          >
                                            <button className="actionbtncontract w-100 Ongoingbtnt colorred fontfamilyLato border-0 p-2 rounded">
                                              Ongoing
                                            </button>
                                          </TableCell>
                                        </TableRow>

                                        {/* ))} */}
                                      </TableBody>
                                    </Table>
                                  </Paper>
                                </div>
                              </div>
                              {/* </div> */}

                              <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 pe-0">
                                <div className="forbg-everyone bg rounded p-4">
                                  <div className="chartbr3 rounded p-3">
                                    <h6 className="Escrow fontfamilyInter fontstyle text-white">
                                      {" "}
                                      Cancelled Jobs
                                    </h6>
                                    <h6 className="Escrownum fontfamilyInter fontstyle text-white">
                                      5
                                    </h6>
                                    <HealthLineChart />
                                  </div>

                                  <div className="chartbr4 mt-1 rounded p-3">
                                    <h6 className="Escrow fontfamilyInter fontstyle text-white">
                                      Completed jobs
                                    </h6>
                                    <h6 className="Escrownum fontfamilyInter fontstyle text-white">
                                      95
                                    </h6>
                                    <HealthLineChart />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })
                    }
                  </div>
                </div>
              )}
            </Box>
          </Box>
        </div>
      </div>
    </>
  );
}

export default HealthProvidersDetails;
