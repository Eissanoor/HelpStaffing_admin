import React, { useState, useEffect } from "react";
import Sidebard from "../../../component/Sidebar/Sidebard";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import { Avatar, Comment, Tooltip } from "antd";
import eye from "../../../Assets/image/eyeaction.png";
import imag from "../../../Assets/image/alljobimg.png";
import { Rate, Progress } from "antd";
import Detailprofile from "../../../Assets/image/Detailprofile.png";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import { Dropdown, Menu, Space, Divider } from "antd";
import Hostprofile from "../../../Assets/image/Hospitalview Hostpial profile.png";
import loactionimg from "../../../Assets/image/loactionimg.png";
import loactionimg2 from "../../../Assets/image/loactionimg2.png";
import contract from "../../../Assets/image/contract.png";
import time from "../../../Assets/image/time.png";
import moring from "../../../Assets/image/Moring.png";
import Hourlyrate from "../../../Assets/image/Hourly rate.png";
import backgroundimg from "../../../Assets/image/Hospital view bg.png";
import "./Hospitalview.css";
import Lottie from "react-lottie";
import Dataanim from "../../../Assets/icons/98195-loader.json";
import axios from "axios";
const drawerWidth = 220;

function Hospitalview() {
  const navigate = useNavigate();
  const [show, setshow] = useState(true);
  const [show2, setshow2] = useState(true);
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
  const [dataget, setdataget] = useState({});
  const [aboutme, setaboutme] = useState({})
  const [category, setcategory] = useState({})
    const [profile, setprofile] = useState({})
     const [Location, setLocation] = useState({})
     const [experience, setexperience] = useState({})
     const [firstname, setfirstname] = useState({})
     const [gender, setgender] = useState({})
     const [qalification, setqalification] = useState({})
      const [speciality, setspeciality] = useState({})
  const apicall = (_id) => {
    const id = localStorage.getItem("detailshosta");
    console.log(id);
    axios.get(`https://gold-courageous-cocoon.cyclic.app/admin/allhospitalprofile/${id}`, {
       headers: {
         autherization: `Bearer ${localStorage.getItem("Tokensss")}`,
       },
      })
      .then((res) => {
        setdataget(res);
        console.log(res);
        setaboutme(res.data.aboutme)
         setprofile(res.data.profile)
         setcategory(res.data.category)
         setLocation(res.data.Location)

          setexperience(res.data.experience)
          setfirstname(res.data.firstname)
          setgender(res.data.gender)
          setspeciality(res.data.speciality)
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

  const menu = (
    <Menu
      items={[
        {
          label: (
            <p
              onClick={() => {
                navigate("/Postjob");
              }}
            >
              Posted
            </p>
          ),
          key: "0",
        },
        {
          label: (
            <p
              onClick={() => {
                navigate("/Drafts");
              }}
            >
              Ongoing
            </p>
          ),
          key: "1",
        },
        {
          label: (
            <p
              onClick={() => {
                navigate("/Expired");
              }}
            >
              Cancelled
            </p>
          ),
          key: "2",
        },
      ]}
    />
  );
  return (
    <div>
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
                <div>
                  {/* {
                  dataget && dataget.map((itme, index) => {
                    return ( */}
                      <div className="mt-5">
                        {/* Top section */}
                        <div className="position-relative my-4 ">
                          <div className="position-absolute">
                            <div className="d-flex topimg">
                              {/* <img
                                className="position- forimg rounded-circle"
                                src = {profile}
                                alt="imge"
                                width="200px"
                                height="200px"
                              /> */}


                              <div className="mt-auto fortext ">
                                <h6 className="typestableHostipal fontfamilyRoboto fontstyle py-3 px-3 ">
                                  {firstname}
                                </h6>
                                <div className="d-flex">
                                  <h6 className="my-auto apprating color7  me-3">
                                    {/* {
                                      itme.totalRatings
                                    } */}
                                  </h6>
                                  {/* <Rate
                                    allowClear={false}
                                    outlined={true}
                                    defaultValue={dataget.docs.totalRatings}
                                    className="my-auto"
                                    width={20}
                                    height={20}
                                  /> */}

                                  <h6 className="my-auto app-review  ms-3">
                                    {/* {dataget.docs.totalReviews} */}
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <img
                            src = {
                              itme.datagetcoverImage
                            }
                            width="100%"
                            height="310px"
                          /> */}
                        </div>

                        <div className="container-fluid p-2 mt-5">
                          {/* Datails section */}
                          <div className="bg-white mt-2 rounded ">
                            <div className="p-3 mt-5">
                              <p className="Hospitalviewtoppro  colorblue fontstyle fontfamilyRoboto">
                                {/* {
                                  dataget.docs.address
                                } */}
                                {/* {dataget.docs.address ? (
                                  <div>{dataget.docs.address}</div>
                                ) : (
                                  <div> Not founded the address</div>
                                )} */}
                              </p>
                              <h6 className="Hospitalviewtoppro fw-bolder colorblue fontstyle mt-5 fontfamilyRoboto">
                                About us
                              </h6>

                              <p className="Hospitalviewtoppro text-break w-100 h-100  fontstyle fontfamilyRoboto">
                             
                                  <div>{aboutme}</div>
                              
                              </p>


                              <div className="d-flex mt-5">
                                <table className="table w-50">
                                  <tr className=" p-2  rounded mx-2">
                                    <td>
                                      <p className="typestableHostipal fontfamilyRoboto fontstyle color mt-2">
                                        Category
                                      </p>
                                    </td>
                                    <td>
                                      <p className="typestableHostipal fontfamilyRoboto fontstyle color4 mt-2">
                                        {category}
                                      </p>
                                    </td>
                                  </tr>
                                  <tr className=" p-2  rounded mx-2">
                                    <td>
                                      <p className="typestableHostipal fontfamilyRoboto fontstyle color mt-2">
                                        Hours
                                      </p>
                                    </td>
                                    <td>
                                      <p className="typestableHostipal fontfamilyRoboto fontstyle colorblue mt-2">
                                        Open 24 hours
                                      </p>
                                    </td>
                                  </tr>
                                  <tr className=" p-2  rounded mx-2">
                                    <td>
                                      <p className="typestableHostipal fontfamilyRoboto fontstyle color mt-2">
                                        Location
                                      </p>
                                    </td>
                                    <td>
                                      <p className="typestableHostipal fontfamilyRoboto fontstyle color4 mt-2">
                                       {Location}
                                      </p>
                                    </td>
                                  </tr>
                                  <tr className=" p-2  rounded mx-2">
                                    <td>
                                      <p className="typestableHostipal fontfamilyRoboto fontstyle color mt-2">
                                        speciality
                                      </p>
                                    </td>
                                    <td>
                                      <p className="typestableHostipal fontfamilyRoboto fontstyle colorblue mt-2">
                                      {speciality}
                                      </p>
                                    </td>
                                  </tr>

                                  <tr className=" p-2  rounded mx-2">
                                    <td>
                                      <p className="typestableHostipal fontfamilyRoboto fontstyle color mt-2">
                                        Experience
                                      </p>
                                    </td>
                                    <td>
                                      <p className="typestableHostipal fontfamilyRoboto fontstyle colorblue mt-2">
                                      {experience}
                                      </p>
                                    </td>
                                  </tr>
                                 

                                </table>

                                <table className="">
                                  <tr>
                                    <td>
                                      <h6 className="loactionheading fontstyle fontfamilyInter">
                                        Location
                                      </h6>
                                      <div class="mapouter">
                                        <div class="gmap_canvas">
                                          <iframe
                                            class="gmap_iframe"
                                            width="100%"
                                            frameborder="0"
                                            scrolling="no"
                                            marginheight="0"
                                            marginwidth="0"
                                            src="https://maps.google.com/maps?width=1120&amp;height=321&amp;hl=en&amp;q=-46.652803 -23.5641014&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                                          ></iframe>
                                          <a href="https://piratebay-proxys.com/">
                                            Piratebay
                                          </a>
                                        </div>
                                      </div>
                                      <img
                                // src={loactionimg}
                                alt='loaction'
                                width='100%'
                              />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="d-flex mt-1">
                                      <div className="d-flex">
                                        {/* {dataget.docs.images.map((ite, i) => {
                                          return ( */}
                                            <div
                                              className="d-flex w-100 overflow-scroll "
                                              // key={i}
                                            >
                                              <img
                                                src={profile}
                                                width="100px"
                                                alt="loaction"
                                                className="me-1"
                                              />
                                            </div>
                                          {/* );
                                        })} */}
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </div>
                            </div>
                          </div>

                        
                          {/* Reviews */}
                          {/* <div className="mt-4">
                            <div className="px-3">
                              <div className="Historyjobmain color5 py-1 d-flex  justify-content-between">
                                <p className="Historyjob color6 fw-bold fontfamilyInter fontstyle me-2">
                                  Reviews
                                </p>
                                <UpOutlined onClick={() => setshow(!show)} />
                              </div>
                            </div>
                          </div> */}
                          {/* {show ? ( */}
                            {/* //    <Results /> */}
                            {/* // <div className="bg-white rounded"> */}
                            {/* //   <div className="py-3 px-2"> */}
                                {/* Reviews */}
                                {/* <div className="forbg-everyone bg rounded p-4 ">
                                  <div className="d-flex">
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
                                </div> */}
                                {/* Detail profile */}
                                {/* <div className="">
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
                                        There’s no other program that walks you
                                        through exactly what you need to know to
                                        start an online store fast, written by
                                        someone who has built several 7-figure
                                        ecommerce businesses from scratch.
                                        What’s more, everything has been broken
                                        down in step-by-step detail with real
                                        action plans including finding your
                                        niche.
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
                                        There’s no other program that walks you
                                        through exactly what you need to know to
                                        start an online store fast, written by
                                        someone who has built several 7-figure
                                        ecommerce businesses from scratch.
                                        What’s more, everything has been broken
                                        down in step-by-step detail with real
                                        action plans including finding your
                                        niche.
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
                                </div> */}
                              {/* </div>
                            </div>
                          ) : null} */}

                          <div className="row mt-3 lastcardHospite bg-white p-2  mx-auto rounded">
                            <div className="col-sm-4 col-md-4 col-lg-3 col-xl-3 my-2">
                              <div className="d-flex">
                                <img src={contract} height="30px" />
                                <h6 className="Jobdetailsnumber text-black ms-2">
                                  $15,220
                                </h6>
                              </div>
                              <p className="Jobdetailsheading">Spent Total</p>
                            </div>
                            <div className="col-sm-4 col-md-4 col-lg-3 col-xl-3 my-2">
                              <div className="d-flex">
                                <img src={speciality} height="30px" />
                                <h6 className="Jobdetailsnumber text-black ms-2">
                                  $3,000
                                </h6>
                              </div>
                              <p className="Jobdetailsheading">
                                Amount in Escrow
                              </p>
                            </div>

                            <div className="col-sm-4 col-md-4 col-lg-3 col-xl-3 my-2">
                              <div className="d-flex">
                                <img src={moring} height="30px" />
                                <h6 className="Jobdetailsnumber text-black ms-2">
                                  13
                                </h6>
                              </div>
                              <p className="Jobdetailsheading">Ongoing Jobs</p>
                            </div>

                            <div className="col-sm-4 col-md-4 col-lg-3 col-xl-3 my-2">
                              <div className="d-flex">
                                <img src={Hourlyrate} height="30px" />
                                <h6 className="Jobdetailsnumber text-black ms-2">
                                  96%
                                </h6>
                              </div>
                              <p className="Jobdetailsheading">Hiring Rate</p>
                            </div>
                          </div>
                        </div>
                      </div>
                  {/* //   );
                  // })} */}
                </div>
              )}
            </Box>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Hospitalview;
