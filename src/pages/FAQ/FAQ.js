import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";
import Dataanim from "../../Assets/icons/98195-loader.json";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebard from "../../component/Sidebar/Sidebard";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import { DownOutlined } from "@ant-design/icons";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { styled } from "@mui/material/styles";
import "./FAQ.css";
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  // border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));
const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<DownOutlined sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#21222D" : "#21222D;",
  flexDirection: "row",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(180deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));
const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid #21222D",
  // border-radius: "5px;
}));
const drawerWidth = 220;
function FAQ() {
  const navigate = useNavigate();
  const [Loading, setLoading] = useState(true);
  const [dataget, setdataget] = useState([]);
  const [datas, setdatas] = useState([]);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Dataanim,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  // Main fuction of the compount
  const apicall = () => {
    axios
      .get(
        "/admin/faqs?faqFor=provider",
        {
          headers: {
            secretKey:
              "rosx.AD-98dBXZnC7rb794a5593PjPQfzDsQgwy.BXF1LNPw4lZLK6BR6Kidf90.@$%hummstaffing???AD",
            Authorization: `Bearer ${localStorage.getItem("access_key")}`,
          },
        }
      )
      .then((res) => {
        setdataget(res.data.docs);
        setdatas(res);
        // console.log(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        //    setLoading(false);
      });
  };
  useEffect(() => {
    apicall();
    setLoading(true);
  }, []);

  // Deleted
  // Deleted api section
  const Deletedapi = (id) => {
    console.log(id);
    axios
      .delete(`https://hummstaffing.herokuapp.com/api/admin/faqs?id=${id}`, {
        headers: {
          secretKey:
            "rosx.AD-98dBXZnC7rb794a5593PjPQfzDsQgwy.BXF1LNPw4lZLK6BR6Kidf90.@$%hummstaffing???AD",
          Authorization: `Bearer ${localStorage.getItem("access_key")}`,
        },
      })
      .then((res) => {
        // console.log(res);
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
        // console.log(err);
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
                {Loading ? (
                  <Lottie options={defaultOptions} height={400} width={400} />
                ) : (
                  <div className="mt-5 ">
                    <div className="container-fluid">
                      <div className="d-flex mb-3">
                        <h6 className=" FAQsummary fontfamilyRoboto my-auto">
                          Frequently Asked Questions
                        </h6>
                        <button
                          className="updatetos fontfamilyRoboto  ms-auto my-auto border-0 px-4 py-1"
                          onClick={() => {
                            // sessionStorage.setItem(
                            //   "description",
                            //   "Auctor donec at ullamcorper semper. Commodo urna dolor   enim odio magna vulputate facilisis aliquam nulla. Aliquam metus, tellus enim adipiscing eget est consectetur eget. Nulla eu consectetur vulputate in enim phasellus cras.Urna sit donec sodales molestie quis quis volutp"
                            // );
                            navigate("/AddNewFaq");
                          }}
                        >
                          Add New
                        </button>
                      </div>

                      {dataget.map((itme, index) => {
                        return (
                          <div className="forcardfaq p-3 bg-white rounded">
                            <Accordion
                              // expanded={expanded === GetAllQue.id}
                              // onChange={handleChange(GetAllQue.id)}
                              key={index}
                            >
                              <AccordionSummary
                                style={{
                                  backgroundColor: "#F7F9FC",
                                  width: "100%",
                                  Color: "#474647",
                                }}
                                className="aalAccordionSummary"
                                aria-controls="panel1d-content"
                                id="panel1d-header"
                              >
                                <div className="d-flex justify-content-between w-100">
                                  <div className="d-flex justify-content-between">
                                    <Typography className="forfaqquestion fontfamilyInter">
                                      {itme.question}
                                    </Typography>
                                    {/* <hr className="line px-3 "></hr> */}
                                  </div>
                                </div>
                              </AccordionSummary>
                              <AccordionDetails className="forbg-faq mb-0">
                                <Typography className="forfaqquestion fontfamilyInter ms-1 mt-2 text-black">
                                  {itme.answer}
                                </Typography>
                                <div className="d-flex mb-0  justify-content-end mt-2">
                                  <p
                                    className="forupdatefaq fontfamilyRoboto my-auto cursor"
                                    onClick = {
                                      () =>{
navigate(`/FAQupdata/${itme._id}`);
sessionStorage.setItem('question', itme.question);
sessionStorage.setItem('answer', itme.answer);
sessionStorage.setItem('faqFor', itme.faqFor);
sessionStorage.setItem('status', itme.status);
                                      } 
                                    }
                                  >
                                    Update
                                  </p>
                                  {/* <link to={`/FAQupdata`}> Update </link> */}
                                  <p
                                    className="fordeletefaq my-auto fontfamilyRoboto cursor ms-4"
                                    // onClick = {loginbutton }
                                    onClick={() => Deletedapi(itme._id)}
                                  >
                                    Delete
                                  </p>
                                </div>
                              </AccordionDetails>
                            </Accordion>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </Box>
            </Box>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default FAQ;
