import * as React from "react";
import { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Logoutpop from "../Popup/Logout/Logoutpop.jsx"
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { MdOutlineLeaderboard } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import logo from '../../Assets/Logo/helpstafflog.png'
import Header from '../Header/Header';
import '../Index.css';
import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
import Dashboard from '../../Assets/image/Das.png';
import HealthProviders from '../../Assets/image/Health providerss.png';
import Hospitals from '../../Assets/image/Hospitalss.png';
import Jobs from '../../Assets/image/Jobss.png';
import Transactions from '../../Assets/image/Transactionss.png';
import Appsettings from '../../Assets/image/App settingss.png';
import Notifications from '../../Assets/image/Notification sidebar.png';
import Certificates from "../../Assets/image/Certificates.png"
import Contracts from '../../Assets/image/Contractss.png';
import Settings from '../../Assets/image/Setting sidebar.png';
import FAQS from '../../Assets/image/FAQSS.png';
import TOS from '../../Assets/image/TOSS.png';
import Support from '../../Assets/image/Support.png';
import Logout from '../../Assets/image/Logouts.png';


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

function Sidebard(stat) {
    // const dispatch = useDispatch();
    const navigate = useNavigate();
    const theme = useTheme();
    const [open, setOpen] = useState(stat == "true" ? true : false);
    const [show, setshow] = useState(true);
  
    const handleDrawerOpen = () => {
      sessionStorage.setItem("open", 1);
      console.log(sessionStorage.getItem("open"));
      setOpen(true);
      setshow(false);
    //   dispatch(formWidth(true));
    };
  
    const handleDrawerClose = () => {
      sessionStorage.setItem("open", open);
      setOpen(false);
      setshow(true);
    //   dispatch(formWidth(false));
    };
  return (
    <>
     <Box className="sidebar" sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar className="Navbar" position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              // marginRight: 1,
              ...(open && { display: "none" }),
            }}
            className="arrowforwardicon"
          >
            <BsFillArrowRightCircleFill className="righticon" />
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="close drawer"
            onClick={handleDrawerClose}
            edge="end"
            sx={{
              // marginRight: 1,
              ...(open == false && { display: "none" }),
            }}
            className="arrowbackicon"
          >
            <BsFillArrowLeftCircleFill className="backicon" />
          </IconButton>

          <Header />
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open}>
        <div className="">
          {theme.direction === "rtl" ? (
            <BsFillArrowLeftCircleFill />
          ) : (
            <div className="d-none">{<BsFillArrowRightCircleFill />}</div>
          )}
        </div>

        <Divider />
        <div className="mx-2">
          {show ? (
            <span className="p-2">
              <center>
                <img className="w-75 mt-1" src={logo} alt="" />
              </center>
            </span>
          ) : (
            <span className="p-1">
              <center>
                <img className="w-75 mx-auto mt-1"   src={logo} alt="" />
              </center>
            </span>
          )}

          <List>
            {/* Dashboard and Health Providers section */}
            {["Dashboard", "Health Providers"].map((text, index) => (
              <ListItem
                key={text}
                className={
                  sessionStorage.getItem("id") &&
                  sessionStorage.getItem("id") === text
                    ? "activeelement "
                    : "Customeelement"
                }
                disablePadding
                sx={{ display: "block" }}
                onClick={() => {
                  text == "Dashboard" ? (
                    <>
                      {navigate("/Dashboard")}
                      {sessionStorage.setItem("id", "Dashboard")}
                    </>
                  ) : (
                    <>
                      {navigate("/HealthProviders")}
                      {sessionStorage.setItem("id", "HealthProviders")}
                    </>
                  );
                }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {index % 2 === 0 ? (
                      sessionStorage.getItem("id") &&
                      sessionStorage.getItem("id") == text ? (
                        <img src={Dashboard} className="sidebariconactive Dashordimg"/>
                      ) : (
                        <img src={Dashboard} className="sidebaricon"/>
                      )
                    ) : sessionStorage.getItem("id") &&
                      sessionStorage.getItem("id") == text ? (
                        // Dashbord
                        <img src={HealthProviders} className="sidebariconactive Dashordimg"/>
                    ) : (
                        <img src={HealthProviders} className="sidebaricon"/>
                    )}

                    {/*  sessionStorage.getItem("id") &&
                sessionStorage.getItem("id") === text
                  ? "activeelement"
                  : null */}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 2 : 0 }} />
                </ListItemButton>
              </ListItem>
            ))}

              {/* Hospitals and Jobs section */}
              {["Hospitals", "Jobs"].map((text, index) => (
              <ListItem
                key={text}
                className={
                  sessionStorage.getItem("id") &&
                  sessionStorage.getItem("id") === text
                    ? "activeelement "
                    : "Customeelement"
                }
                disablePadding
                sx={{ display: "block" }}
                onClick={() => {
                  text == "Hospitals" ? (
                    <>
                      {navigate("/AllHospitals")}
                      {sessionStorage.setItem("id", "Hospitals")}
                    </>
                  ) : (
                    <>
                      {navigate("/Jobs")}
                      {sessionStorage.setItem("id", "Jobs")}
                      {console.log(sessionStorage.getItem("id"))}
                    </>
                  );
                }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {index % 2 === 0 ? (
                      sessionStorage.getItem("id") &&
                      sessionStorage.getItem("id") == text ? (
                        <img src={Hospitals} className="sidebariconactive"/>
                      ) : (
                        <img src={Hospitals} className="sidebaricon"/>
                      )
                    ) : sessionStorage.getItem("id") &&
                      sessionStorage.getItem("id") == text ? (
                        // Jobs
                        <img src={Jobs} className="sidebariconactive jobsside"/>
                    ) : (
                        <img src={Jobs} className="sidebaricon jobsside mx-1"/>
                    )}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 2 : 0 }} />
                </ListItemButton>
              </ListItem>
            ))}

             {/* Personality Test and Transactions section */}
             {["Personality Test", "Transactions"].map((text, index) => (
              <ListItem
                key={text}
                className={
                  sessionStorage.getItem("id") &&
                  sessionStorage.getItem("id") === text
                    ? "activeelement "
                    : "Customeelement"
                }
                disablePadding
                sx={{ display: "block" }}
                onClick={() => {
                  text == "Personality Test" ? (
                    <>
                      {navigate("/Personality")}
                      {sessionStorage.setItem("id", "PersonalityTest")}
                    </>
                  ) : (
                    <>
                      {navigate("/Transactions")}
                      {sessionStorage.setItem("id", "Transactions")}
                      {console.log(sessionStorage.getItem("id"))}
                    </>
                  );
                }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {index % 2 === 0 ? (
                      sessionStorage.getItem("id") &&
                      sessionStorage.getItem("id") == text ? (
                        <img src={Hospitals} className="sidebariconactive"/>
                      ) : (
                        <img src={Hospitals} className="sidebaricon"/>
                      )
                    ) : sessionStorage.getItem("id") &&
                      sessionStorage.getItem("id") == text ? (
                        // Dashbord
                        <img src={Transactions} className="sidebariconactive Transactionsicon"/>
                    ) : (
                        <img src={Transactions} className="sidebaricon Transactionsicon"/>
                    )}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 2 : 0 }} />
                </ListItemButton>
              </ListItem>
            ))}

             {/* App settings and Notifications section */}
             {["App settings", "Notifications"].map((text, index) => (
              <ListItem
                key={text}
                className={
                  sessionStorage.getItem("id") &&
                  sessionStorage.getItem("id") === text
                    ? "activeelement "
                    : "Customeelement"
                }
                disablePadding
                sx={{ display: "block" }}
                onClick={() => {
                  text == "App settings" ? (
                    <>
                      {navigate("/Appsettings")}
                      {sessionStorage.setItem("id", "Appsettings")}
                    </>
                  ) : (
                    <>
                      {navigate("/Notifications")}
                      {sessionStorage.setItem("id", "Notifications")}
                      {console.log(sessionStorage.getItem("id"))}
                    </>
                  );
                }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {index % 2 === 0 ? (
                      sessionStorage.getItem("id") &&
                      sessionStorage.getItem("id") == text ? (
                        <img src={Appsettings} className="sidebariconactive appsettingsidebard"/>
                      ) : (
                        <img src={Appsettings} className="sidebaricon appsettingsidebard"/>
                      )
                    ) : sessionStorage.getItem("id") &&
                      sessionStorage.getItem("id") == text ? (
                        // Dashbord
                        <img src={Notifications} className="sidebariconactive"/>
                    ) : (
                        <img src={Notifications} className="sidebaricon"/>
                    )}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 2 : 0 }} />
                </ListItemButton>
              </ListItem>
            ))}
            {/* Certificates*/} 
             {["Certificates",].map((text, index) => (
              <ListItem
                key={text}
                className={
                  sessionStorage.getItem("id") &&
                  sessionStorage.getItem("id") === text
                    ? "activeelement "
                    : "Customeelement"
                }
                disablePadding
                sx={{ display: "block" }}
                onClick={() => {
                  text == "App settings" ? (
                    <>
                      {navigate("/Certificates")}
                      {sessionStorage.setItem("id", "Certificates")}
                    </>
                  ) : (
                    <>
                      {navigate("/Certificates")}
                      {sessionStorage.setItem("id", "Certificates")}
                      {console.log(sessionStorage.getItem("id"))}
                    </>
                  );
                }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {index % 2 === 0 ? (
                      sessionStorage.getItem("id") &&
                      sessionStorage.getItem("id") == text ? (
                        <img src={Certificates} className="sidebariconactive"/>
                      ) : (
                        <img src={Certificates} className="sidebaricon"/>
                      )
                    ) : sessionStorage.getItem("id") &&
                      sessionStorage.getItem("id") == text ? (
                        // Dashbord
                        <img src={Certificates} className="sidebariconactive"/>
                    ) : (
                        <img src={Certificates} className="sidebaricon"/>
                    )}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 2 : 0 }} />
                </ListItemButton>
              </ListItem>
            ))}
              {/* Contracts and Settings */}
              {["Contracts", "Settings"].map((text, index) => (
              <ListItem
                key={text}
                className={
                  sessionStorage.getItem("id") &&
                  sessionStorage.getItem("id") === text
                    ? "activeelement "
                    : "Customeelement"
                }
                disablePadding
                sx={{ display: "block" }}
                onClick={() => {
                  text == "Contracts" ? (
                    <>
                      {navigate("/Contracts")}
                      {sessionStorage.setItem("id", "Contracts")}
                    </>
                  ) : (
                    <>
                      {navigate("/Setting")}
                      {sessionStorage.setItem("id", "Settings")}
                      {console.log(sessionStorage.getItem("id"))}
                    </>
                  );
                }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {index % 2 === 0 ? (
                      sessionStorage.getItem("id") &&
                      sessionStorage.getItem("id") == text ? (
                        <img src={Contracts} className="sidebariconactive Contractssidebardicon"/>
                      ) : (
                        <img src={Contracts} className="sidebaricon Contractssidebardicon"/>
                      )
                    ) : sessionStorage.getItem("id") &&
                      sessionStorage.getItem("id") == text ? (
                        // Dashbord
                        <img src={Settings} className="sidebariconactive"/>
                    ) : (
                        <img src={Settings} className="sidebaricon"/>
                    )}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 2 : 0 }} />
                </ListItemButton>
              </ListItem>
            ))}
             {/* FAQS and TOS */}
             {["FAQS", "TOS"].map((text, index) => (
              <ListItem
                key={text}
                className={
                  sessionStorage.getItem("id") &&
                  sessionStorage.getItem("id") === text
                    ? "activeelement "
                    : "Customeelement"
                }
                disablePadding
                sx={{ display: "block" }}
                onClick={() => {
                  text == "FAQS" ? (
                    <>
                      {navigate("/FAQ")}
                      {sessionStorage.setItem("id", "FAQS")}
                    </>
                  ) : (
                    <>
                      {navigate("/TOS")}
                      {sessionStorage.setItem("id", "TOS")}
                      {console.log(sessionStorage.getItem("id"))}
                    </>
                  );
                }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {index % 2 === 0 ? (
                      sessionStorage.getItem("id") &&
                      sessionStorage.getItem("id") == text ? (
                        <img src={FAQS} alt="FAQS" className="sidebariconactive faqsidebaricon"/>
                      ) : (
                        <img src={FAQS} alt="FAQS" className="sidebaricon faqsidebaricon"/>
                      )
                    ) : sessionStorage.getItem("id") &&
                      sessionStorage.getItem("id") == text ? (
                        // Dashbord
                        <img src={TOS} alt="TOS" className="sidebariconactive tossidebaricon"/>
                    ) : (
                        <img src={TOS} alt="TOS" className="sidebaricon tossidebaricon"/>
                    )}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 2 : 0 }} />
                </ListItemButton>
              </ListItem>
            ))}

             {/* Support and Settings */}
             {["Support", "Logout"].map((text, index) => (
              <ListItem
                key={text}
                className={
                  sessionStorage.getItem("id") &&
                  sessionStorage.getItem("id") === text
                    ? "activeelement "
                    : "Customeelement"
                }
                disablePadding
                sx={{ display: "block" }}
                onClick={() => {
                  text == "Support" ? (
                    <>
                      {navigate("/Support")}
                      {sessionStorage.setItem("id", "Support")}
                    </>
                  ) : (
                    <>
                      {/* {navigate("/")} */}
                      <Logoutpop/>
                      {sessionStorage.setItem("id", "Logout")}
                      {console.log(sessionStorage.getItem("Logout"))}
                    </>
                  );
                }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {index % 2 === 0 ? (
                      sessionStorage.getItem("id") &&
                      sessionStorage.getItem("id") == text ? (
                        <img src={Support} className="sidebariconactive"/>
                      ) : (
                        <img src={Support} className="sidebaricon"/>
                      )
                    ) : sessionStorage.getItem("id") &&
                      sessionStorage.getItem("id") == text ? (
                        // Dashbord
                        <img src={Logout} className="sidebariconactive"/>
                    ) : (
                        // <img src={Logout} className="sidebaricon"/>
                        <Logoutpop/>
                    )}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 2 : 0 }} />
                </ListItemButton>
              </ListItem>
            ))}

          </List>
        </div>
      </Drawer>
    </Box>
    
    </>
  )
}

export default Sidebard;