import {
  DislikeFilled,
  DislikeOutlined,
  LikeFilled,
  LikeOutlined,
} from "@ant-design/icons";
import { Avatar, Comment, Tooltip } from "antd";

import React, { createElement, useState, useEffect } from "react";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import "../Alljob/Alljob.css";
import contract from "../../../../Assets/image/contract.png";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { useNavigate } from "react-router-dom";
import { ArrowRightOutlined } from "@ant-design/icons";
import Morning from "../../../../Assets/image/Moring.png";
import hourlyrate from "../../../../Assets/image/Hourly rate.png";
import time from "../../../../Assets/image/time.png";
import PrivateHospital from "../../../../Assets/image/Private Hospital.png";
import Location from "../../../../Assets/image/Location.png";
import Totaljobs from "../../../../Assets/image/Total job.png";
import HiringRates from "../../../../Assets/image/Hiring Rate.png";
import Lottie from "react-lottie";
import Dataanim from "../../../../Assets/icons/98195-loader.json";
import axios from "axios";
function JobDetailsCard() {
  const navigate = useNavigate();
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
  const [dataget, setdataget] = useState({});
  const apicall = (_id) => {
    const id = sessionStorage.getItem("details");
    // console.log(id);
    axios
      .get(`/admin/job/${id}`, {
        headers: {
          secretKey:
            "rosx.AD-98dBXZnC7rb794a5593PjPQfzDsQgwy.BXF1LNPw4lZLK6BR6Kidf90.@$%hummstaffing???AD",
          Authorization: `Bearer ${localStorage.getItem("access_key")}`,
        },
      })
      .then((res) => {
        setdataget(res.data);
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
  const breadcrumbs = [
    <div
      className="fw-bolder AllUsersBredCrumbs"
      underline="hover"
      key="2"
      color="inherit"
      // onClick={HandleClick}
    >
      <span
        className="forbreadcrumbtext cursor"
        onClick={() => {
          navigate("/Jobs");
        }}
      >
        All Jobs
      </span>
    </div>,
    <Typography key="3" className=" AllUsersBredCrumbs ">
      <span className="forbreadcrumbactive fw-bolder text-black ">
        Job Details
      </span>
    </Typography>,
  ];
  return (
    <>
      {Loading ? (
        <Lottie options={defaultOptions} height={400} width={400} />
      ) : (
        <div>
          <div className="d-flex mt-4 mb-1 justify-content-between mx-3">
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
          {Object.keys(dataget).map((itme, index) => {
            return (
              <div>
                <div className="w-100 p-2 mt-1 bg-white  mainalljob rounded ">
                  <Comment
                    //   actions={actions}
                    author={
                      <div className=" p-2 ">
                        <h6 className="authorname fontfamily text-black">
                          Need a Cardiologist, MBBS, FCPS doctor in our Hospital
                        </h6>
                        <p className="authordetail fontfamily ">
                          {dataget.docs.positionTitle} {dataget.docs.shift}
                        </p>
                        <div className="d-flex">
                          <p className="Cardiologist px-3 py-2 rounded text-black me-2">
                            Cardiologist
                          </p>
                          <p className="Cardiologist px-3 py-2 rounded text-black me-2">
                            MBBS
                          </p>
                          <p className="Cardiologist px-3 py-2 rounded text-black me-2">
                            FCPS
                          </p>
                        </div>
                      </div>
                    }
                    //   avatar={
                    //   <div div className=' py-2 ms-1 '>
                    //   <Avatar  src={imag} alt="img" />
                    //   </div>
                    //   }
                    content={
                      <>
                        <p className="contentprog fontfamily text-black p-2">
                          Description <br />
                          Sapien, tempor ornare iaculis egestas sagittis tellus
                          accumsan. Amet lobortis turpis nulla urna posuere
                          tristique. Eu laoreet arcu vel neque suspendisse etiam
                          arcu odio. At tristique porttitor risus cursus cursus
                          arcu morbi gravida lacinia. Vestibulum pretium,
                          consectetur turpis pulvinar accumsan. Aliquam mattis
                          mauris porta enim lorem non volutpat praesent. Commodo
                          interdum enim porta nisl sagittis est eget in. Diam
                          non posuere egestas vitae pellentesque ornare gravida.
                          Arcu arcu duis pellentesque leo quam aliquam morbi.
                          Habitant diam mi sed risus et amet. Orci, netus semper
                          suspendisse mattis sed tellus non orci lacus. Urna
                          nunc odio enim pulvinar id enim, vestibulum tortor.
                          Eget molestie congue nunc nisi ultricies in. Sed
                          tincidunt cras donec amet. Velit quam malesuada
                          aliquet vitae est.
                        </p>
                      </>
                    }
                  />

                  {/* Top card section */}
                  <div className="row mt-5 bg-white mx-auto">
                    <h6 className="Summary">Summary</h6>
                    <hr className="line"></hr>
                    <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 my-2">
                      <div className="d-flex">
                        <img src={contract} height="30px" />
                        <h6 className="Jobdetailsnumber text-black ms-2">
                          568365
                        </h6>
                      </div>
                      <p className="Jobdetailsheading">Contract ID</p>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 my-2">
                      <div className="d-flex">
                        <img src={Morning} height="30px" />
                        <h6 className="Jobdetailsnumber text-black ms-2">
                          {
                            dataget.docs
.shift}
                        </h6>
                      </div>
                      <p className="Jobdetailsheading">Job Shift</p>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 my-2">
                      <div className="d-flex">
                        <img src={hourlyrate} height="30px" />
                        <h6 className="Jobdetailsnumber text-black ms-2">
                          {
                            dataget.docs
.hourlyRate}
                        </h6>
                      </div>
                      <p className="Jobdetailsheading">Hourly Rate</p>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 my-2">
                      <div className="d-flex">
                        <img src={time} height="30px" />
                        <h6 className="Jobdetailsnumber text-black ms-2">
                          
                          {
                            dataget.docs
.duration.quantity
                          }
                        </h6>
                      </div>
                      <p className="Jobdetailsheading">
                         {
                           dataget.docs
.duration.unit
                         }
                      </p>
                    </div>
                    <hr className="line"></hr>
                    <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 my-2">
                      <div className="d-flex">
                        <img src={contract} height="30px" />
                        <h6 className="Jobdetailsnumber text-black ms-2">
                          02 Months
                        </h6>
                      </div>
                      <p className="Jobdetailsheading">Job Duration</p>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 my-2">
                      <div className="d-flex">
                        <img src={time} height="30px" />
                        <h6 className="Jobdetailsnumber text-black ms-2">
                          132
                        </h6>
                      </div>
                      <p className="Jobdetailsheading">Total Hours</p>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 my-2">
                      <div className="d-flex">
                        <img src={hourlyrate} height="30px" />
                        <h6 className="Jobdetailsnumber text-black ms-2">
                          {
                            dataget.docs.startDate
                          }
                        </h6>
                      </div>
                      <p className="Jobdetailsheading">Starting Date</p>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 my-2">
                      <div className="d-flex">
                        <img src={time} height="30px" />
                        <h6 className="Jobdetailsnumber text-black ms-2">
                          {
                            dataget.docs.endDate
                          }
                        </h6>
                      </div>
                      <p className="Jobdetailsheading">Ending Date</p>
                    </div>
                  </div>
                </div>
                <div className="row mt-3 bg-white p-2 mx-auto">
                  <h6 className="PostedBy">Posted By</h6>
                  <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 my-2">
                    <div className="d-flex">
                      <img src={PrivateHospital} height="30px" />
                      <h6 className="Jobdetailsnumber text-black ms-2">
                        {" "}
                        {
                          dataget.docs
.hospitalId.hospitalName}
                      </h6>
                    </div>
                    <p className="Jobdetailsheading">
                      {" "}
                      {
                        dataget.docs
.hospitalId.type} Hospital
                    </p>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 my-2">
                    <div className="d-flex">
                      <img src={Location} height="30px" />
                      <h6 className="Jobdetailsnumber text-black ms-2">
                        {dataget.docs.hospitalId.address}
                      </h6>
                    </div>
                    <p className="Jobdetailsheading">Location</p>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 my-2">
                    <div className="d-flex">
                      <img src={Totaljobs} height="30px" />
                      <h6 className="Jobdetailsnumber text-black ms-2">142</h6>
                    </div>
                    <p className="Jobdetailsheading">Total Jobs Posted</p>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 my-2">
                    <div className="d-flex">
                      <img src={HiringRates} height="30px" />
                      <h6 className="Jobdetailsnumber text-black ms-2">96%</h6>
                    </div>
                    <p className="Jobdetailsheading">Hiring Rate</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default JobDetailsCard;
