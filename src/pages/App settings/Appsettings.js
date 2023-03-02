import React, { useState } from "react";
import Sidebard from "../../component/Sidebar/Sidebard";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import Stack from "@mui/material/Stack";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import {
  ArrowRightOutlined,
  RightOutlined,
  FileZipOutlined,
} from "@ant-design/icons";
import Typography from "@mui/material/Typography";
import { Progress } from "antd";
import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import { Switch } from "antd";
import TableRow from "@mui/material/TableRow";
import deletered from "../../Assets/image/deletered.png";
import editgreen from "../../Assets/image/editgreen.png";
import "./Appsettings.css";
import { Usenavigate } from "react-dom";
import { Collapse } from "antd";
import Speciality from "./Speciality";
import Categories from "./Categories";
import Qualifications from "./Qualifications";
import Certifications from "./Certifications";
import Fields from "./Fields";
import SubCategories from "./Sub-Categories/SubCategories";
import SubCategoriess from "../../pages/App settings/Sub-Categories/SubCategories";
import Degreeslevel from "./Education & Training/Degreeslevel";
import Subjects from "./Education & Training/Subjects";
const drawerWidth = 220;
const { Panel } = Collapse;
function Appsettings() {
  const [value, setvalue] = useState("ParentCategories");
    const [qualificationvalue, setqualificationvalue] = useState("Degreeslevel");
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
                <div className="container-fluid ">
                  <div className="bg-white rounded">
                    <Collapse accordion ghost>
                      {/* Categories */}
                      <Panel header="Categories" key="1">
                        {/* <Categories /> */}
                        <div className="d-flex">
                          <p
                            className={
                              value === "ParentCategories"
                                ? "ActiveUsercolorchage"
                                : "NonActiveUsercolorchage"
                            }
                            onClick={() => setvalue("ParentCategories")}
                          >
                            Parent Categories
                          </p>
                          <p
                            className={
                              value === "SubCategories"
                                ? "ActiveUsercolorchage"
                                : "NonActiveUsercolorchage"
                            }
                            onClick={() => setvalue("SubCategories")}
                          >
                            Sub Categories
                          </p>
                        </div>
                        {value === "ParentCategories" ? (
                          <Categories />
                        ) : (
                          <SubCategoriess />
                        )}
                      </Panel>
                      {/* Speciality */}
                      <Panel header="Speciality" key="2">
                        <Speciality />
                      </Panel>
                      <Panel header="Education & Training" key="3">
                        {/* <Qualifications /> */}
                         <div className="d-flex">
                          <p
                            className={
                              qualificationvalue === "Qualifications"
                                ? "ActiveUsercolorchage"
                                : "NonActiveUsercolorchage"
                            }
                            onClick={() => setqualificationvalue("Qualifications")}
                          >
                           Qualifications
                          </p>
                          <p
                            className={
                              qualificationvalue === "Degreeslevel"
                                ? "ActiveUsercolorchage"
                                : "NonActiveUsercolorchage"
                            }
                            onClick={() => setqualificationvalue("Degreeslevel")}
                          >
                           Degrees level
                          </p>
                           <p
                            className={
                              qualificationvalue === "Subjects"
                                ? "ActiveUsercolorchage"
                                : "NonActiveUsercolorchage"
                            }
                            onClick={() => setqualificationvalue("Subjects")}
                          >
                           Subjects
                          </p>



                        </div>

                        {
                            qualificationvalue === "Subjects" ? (
                         < Subjects / >
                        ): qualificationvalue === "Degreeslevel" ? (
                             <Degreeslevel / >
                            ) : (
                           < Qualifications / >
                        )}


                      </Panel>
                      <Panel header="Certifications" key="4">
                        <Certifications />
                      </Panel>
                      <Panel header="Fields" key="5">
                        <Fields />
                      </Panel>
                      
                    </Collapse>
                  </div>
                </div>
              </div>
            </Box>
          </Box>
        </div>
      </div>
    </>
  );
}

export default Appsettings;
