import {
  DislikeFilled,
  DislikeOutlined,
  LikeFilled,
  LikeOutlined,
} from "@ant-design/icons";
import ReactPaginate from "react-paginate";
import { Avatar, Comment, Tooltip } from "antd";
import React, { createElement, useState, useEffect } from "react";
import Lottie from "react-lottie";
import Dataanim from "../../../../Assets/icons/98195-loader.json";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import deleteicon from "../../../../Assets/image/delete action.png";
import eye from "../../../../Assets/image/eyeaction.png";
import imag from "../../../../Assets/image/alljobimg.png";
import { useNavigate } from "react-router-dom";
import "./Alljob.css";
import Delete from "../../../../component/Popup/Delete";

function Alljob() {
  const navigate = useNavigate();
  const [Loading, setLoading] = useState(true);
  const [dataget, setdataget] = useState({});
  const [status, setstatus] = useState("");

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Dataanim,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  // Main fuction of the compount
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const apicall = () => {
    axios.get(
        `https://gold-courageous-cocoon.cyclic.app/alljob`,
        // {
        //   headers: {
        //     secretKey:
        //       "rosx.AD-98dBXZnC7rb794a5593PjPQfzDsQgwy.BXF1LNPw4lZLK6BR6Kidf90.@$%hummstaffing???AD",
        //     Authorization: `Bearer ${localStorage.getItem("access_key")}`,
        //   },
        // }
      )
      .then((res) => {
        setdataget(res.data);
        // console.log(res.data.docs);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        //    setLoading(false);
      });
  };
  useEffect(() => {
    apicall();
    // setLoading(true);
  }, []);
  return (
    <>
      {Loading ? (
        <Lottie options={defaultOptions} height={400} width={400} />
      ) : (
        <div>
          {dataget.map((itme, index) => {
            return (
              
              <div
                div
                className="w-100 px-2 py-2  mainalljob rounded "
                key={index}
              >
                <Comment
                  //   actions={actions}
                  author={
                    <div className=" py-2  ">
                      <h6 className="authorname fontfamily text-black">
                        
                        {
                          itme.hospital_Faculty
                        }
                      </h6>
                      <p className="authordetail fontfamily ">
                        {
                          itme.speciality
                        } , {
                          itme.positionTitle
                        }
                      </p>
                    </div>
                  }
                  avatar={
                    <div div className=" py-2 ms-1 ">
                      {/* <Avatar src={itme.hospitalId.profileImage} alt="img" /> */}
                       < Avatar 
                       alt = "img" / >
                    </div>
                  }
                  content={
                    <>
                      <p className="contentprog fontfamily text-black">
                        {
                          itme.description
                        }
                      </p>
                      <div className="d-flex mt-3 w-100 fontfamily overflow-auto text-nowrap">
                        <span className="fontfamily me-3 ">
                          <span className="firstsec text-black bolder">
                            {
                              itme.hourlyRate
                            }
                          </span>
                          / hour
                        </span>
                        |
                        <span className="fontfamily mx-3">
                          <span className="firstsec  text-black bolder">
                            {
                              itme.jod_duration
                            }
                          </span>
                          / Duration
                        </span>
                        |
                        <span className="fontfamily mx-3 ">
                          <span className="firstsec  text-black bolder">
                        {
                          itme.totalhours
                        }
                          </span>
                          / Total hours
                        </span>
                        |
                        <span className="fontfamily mx-3">
                          <span className="firstsec  text-black bolder">
                            {
                              itme.from
                            }
                          </span>
                          / Posted on
                        </span>
                        |
                        <span className="fontfamily mx-3">
                          <span className="firstsec  text-black bolder">
                            {
                              itme.shift
                            }
                          </span>
                          / Shift
                        </span>
                      </div>
                    </>
                  }
                  datetime={
                    <Tooltip>
                      <span>
                        <div className="alljobactionimag d-flex justify-content-around  my-1 my-auto w-100 px-2 rounded ">
                          <img
                            className="cursor my-auto px-2"
                            onClick={() => {
                              navigate(`/JobDetails/${itme._id}`);
                              sessionStorage.setItem("details", itme._id);
                            }}
                            src={eye}
                            height="25px"
                          />
                          {/* <img  className="cursor px-2" src={deleteicon} /> */}
                          <p
                            className="px-2 my-auto"
                            onClick={() => {
                              sessionStorage.setItem("deleting", itme._id);
                            }}
                          >
                            <Delete />
                          </p>
                        </div>
                      </span>
                    </Tooltip>
                  }
                />
              </div>
            );
          })}
          
          <div className="d-flex mt-3 ms-5 me-3">
            <p className="entriess my-auto ms-2 mt-0">
              Showing&nbsp;30&nbsp;-&nbsp;{dataget.length}&nbsp; enteries
            </p>{" "}
            <div className="ms-auto  me-1">
              <ReactPaginate
                previousLabel={" Previous"}
                nextLabel={"Next"}
                page={page}
               onChange={handleChange}
                pageRange={5}
                marginPagesDisplayed={2}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
              />{" "}
            </div>{" "}
          </div>

          <ToastContainer />
        </div>
      )}
    </>
  );
}

export default Alljob;
