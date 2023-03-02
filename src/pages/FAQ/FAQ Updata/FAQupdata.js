import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebard from "../../../component/Sidebar/Sidebard";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowRightOutlined } from "@ant-design/icons";
import { styled } from "@mui/material/styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../FAQ.css";
const drawerWidth = 220;
function FAQupdata() {
  const navigate = useNavigate();
  // const [useredit, setuseredit] = useState({
  //   question: "",
  //   answer: "",
  //   faqFor: "",
  // });
  const [user, setuser] = useState(null);
  const [question, setquestion] = useState(sessionStorage.getItem("question"));
  const [answer, setanswer] = useState(sessionStorage.getItem("answer"));
  const [faqFor, setfaqFor] = useState(sessionStorage.getItem("faqFor"));
  const [status, setstatus] = useState(sessionStorage.getItem("status"));
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [textans, setTextans] = useState("");
  const [wordCountans, setWordCountans] = useState(0);

  useEffect(() => {
    // array of words
    const words = text.split("");
    // update word count
    let wordCount = 0;
    let wordCountans = 0;
    words.forEach((word) => {
      if (word.trim() !== "") {
        wordCount++;
      }
    });
    setWordCount(wordCount);
    // update char count (including whitespaces)
    //  setCharCount(text.length);
  }, [text]);

  useEffect(() => {
    // array of words
    const wordsans = textans.split("");
    // update word count
    let wordCountans = 0;
    wordsans.forEach((worda) => {
      if (worda.trim() !== "") {
        wordCountans++;
      }
    });
    setWordCountans(wordCountans);
    // update char count (including whitespaces)
    //  setCharCount(text.length);
  }, [textans]);

  const { _id } = useParams();
  // console.log(_id);
  // useEffect(() => {
  const usereditid = () => {
    const fromdata = new URLSearchParams();
    fromdata.append("question", question);
    fromdata.append("answer", answer);
    fromdata.append("faqFor", faqFor);
    fromdata.append("status", status);
    // console.log(question, answer);
    const datafrom = {
      _id: _id,
      question: question,
      answer: answer,
      faqFor: "provider",
      //  status: true
    };
    console.log(datafrom);
    axios.put(
        `/admin/faqs`,
        {
          _id: _id,
          question: question,
          answer: answer,
          faqFor: faqFor,
          status: true,
        },
        {
          headers: {
            secretKey:
              "rosx.AD-98dBXZnC7rb794a5593PjPQfzDsQgwy.BXF1LNPw4lZLK6BR6Kidf90.@$%hummstaffing???AD",
            Authorization: `Bearer ${localStorage.getItem("access_key")}`,
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          navigate("/FAQ");
        } else {
          toast.error(`Error is ${res.data.message}`, {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
        // console.log(res);
        setquestion(res.data.question);
        setanswer(res.data.answer);
      })
      .catch((err) => {
        // console.log(err);
        toast.error(`Deleted Error ${err.data}`, {
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
  function loginbutton(e) {
    e.preventDefault();
    usereditid();
  }

  const breadcrumbs = [
    <div
      className="fw-bolder AllUsersBredCrumbs"
      underline="hover"
      key="2"
      color="inherit"
      // onClick={HandleClick}
    >
      <span
        className="forbreadcrumbtext fontfamilyInter cursor"
        onClick={() => {
          navigate("/FAQ");
        }}
      >
        FAQ's
      </span>
    </div>,
    <Typography key="3" className=" AllUsersBredCrumbs ">
      <span className="forbreadcrumbactive fontfamilyInter  fw-bolder">
        ADD FAQ's
      </span>
    </Typography>,
  ];

  return (
    <>
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
              <div className="mt-5">
                <div className="container-fluid">
                  <Stack spacing={2} className="my-auto">
                    <Breadcrumbs
                      className="ms-1 d-flex"
                      separator={<ArrowRightOutlined alt="" className="mx-2" />}
                      aria-label="breadcrumb"
                    >
                      {breadcrumbs}
                    </Breadcrumbs>
                  </Stack>
                  <div className="d-flex flex-column mb-3 ms-1 mt-5">
                    <h5 className="fontfamilyInter FAQsummarymy-auto">
                      Frequently Asked Questions
                    </h5>
                    <small className="forfaqquestionss fontfamilyInter mt-2">
                      Have anything to update? Here you can update your FAQS.
                    </small>
                  </div>
                  <textarea
                    className="forcard-bg forfaqtextarea p-4 w-100"
                    rows="5"
                    maxLength={1200}
                    // defaultValue={question}
                    value={question}
                    onChange={(e) => {
                      setquestion(e.target.value);
                      setText(e.target.value);
                    }}
                    cols="130"
                    // placeholder="Add a relevant question..."
                  ></textarea>
                  <p className="d-flex justify-content-end fortotalcharacter">
                    {wordCount}/1000
                  </p>
                  <textarea
                    className="forcard-bg forfaqtextarea p-4 w-100 mt-4"
                    rows="8"
                    value={answer}
                    onChange={(e) => {
                      setanswer(e.target.value);
                      setTextans(e.target.value);
                    }}
                    cols="130"
                    // placeholder="Add answer..."
                  ></textarea>
                  <p className="d-flex justify-content-end fortotalcharacter">
                    {wordCountans}/1000
                  </p>

                  <button
                    button
                    type="submit"
                    onClick={loginbutton}
                    className="AddFAQbtn ms-auto fontfamilyInter w-100 rounded bgcolor text-white border-0 px-5 py-2"
                  >
                    Save
                  </button>
                </div>
              </div>
            </Box>
          </Box>
        </div>
         < ToastContainer / >
      </div>
    </>
  );
}

export default FAQupdata;
