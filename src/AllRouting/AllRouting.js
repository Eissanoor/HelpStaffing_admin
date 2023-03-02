import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebard from "../component/Sidebar/Sidebard";
import Dashboard from "../pages/Dashboard/Dashboard";
import Home from "../pages/Home/Home";
import Message from "../pages/Message/Message";
import Rejected from "../pages/Message/Rejected/Rejected";
import HealthProviders from "../pages/Hospitals/Health Providers/HealthProviders";
import AllHospitals from "../pages/Hospitals/AllHospitals/AllHospitals";
import Jobs from "../pages/Jobs/Jobs/Jobs";
import JobDetails from "../pages/Jobs/Jobs/Alljob/JobDetails";
import Forgetpassword from "../pages/Login/Forget/Forgetpassword";
import Login from "../pages/Login/Login/Login";
import OTP from "../pages/Login/Opt/OTP";
import Changepassword from "../pages/Login/Change Password/Changepassword";
import Success from "../pages/Login/Success/Success";
import Postjob from "../pages/Jobs/Post job/Postjob";
import Drafts from "../pages/Jobs/Drafts jobs/Drafts";
import DraftDetails from "../pages/Jobs/Drafts jobs/DraftDetails";
import Expired from "../pages/Jobs/Expired Jobs/Expired";
import Transactions from "../pages/Transactions/Transactions";
import Invoice from "../pages/Hospitals/INVOICE/Invoice";
import Setting from "../pages/Setting/Setting";
import AllContracts from "../pages/Contracts/All Contracts/AllContracts";
import Cancelled from "../pages/Contracts/All Contracts/Cancelled/Cancelled";
import ContractExpired from "../pages/Contracts/All Contracts/Expired/ContractExpired";
import Pending from "../pages/Contracts/All Contracts/Pending/Pending";
import Completed from "../pages/Contracts/All Contracts/Completed/Completed";
import Ongoing from "../pages/Contracts/All Contracts/Ongoing/Ongoing";
import ContractDetails from "../pages/Contracts/Contract Details/ContractDetails";
import FAQ from "../pages/FAQ/FAQ";
import AddNewFaq from "../pages/FAQ/Add New AFQ/AddNewFaq";
import FAQupdata from "../pages/FAQ/FAQ Updata/FAQupdata";
import TOS from "../pages/TOS/TOS";
import TOSEdit from "../pages/TOS/TOS edit/TOSEdit";
import Notifications from "../pages/Notifications/Notifications";
import HealthProvidersDetails from "../pages/Hospitals/Health Providers/HealthProvidersDetails";
import PersonalityTest from "../pages/Personality Test/PersonalityTest";
import AddPersonality from "../pages/Personality Test/AddPersonality";
import SupportRequest from "../pages/Support Request/SupportRequest";
import Supportmessage from "../pages/Support Request/Supportmessage";
import Appsettings from "../pages/App settings/Appsettings";
import Hospitalview from "../pages/Hospitals/Hospital view/Hospitalview";
import Certificates from "../pages/Certificates/Certificates";
import Logoutpop from "../component/Popup/Logout/Logoutpop";
import Singup from "../pages/Login/Singup";
import Categories from "../pages/App settings/Categories";
import Addtos from "../pages/TOS/Addtos/Addtos";
import Addjob from "../pages/Jobs/Jobs/Alljob/Addjob";

function AllRouting() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* ---------Login Section----------- */}
          {/*  */}
          {/*  */}
          {/* Singup */}
          <Route exact path="/Singup" element={<Singup />} />
          {/*  */}
          {/* ---------Login Section----------- */}
          <Route exact path="/" element={<Login />} />
          {/* ---------Forget------------ */}
          <Route exact path="/Forgetpassword" element={<Forgetpassword />} />
          {/* ---------OTP------------ */}
          <Route exact path="/OTP" element={<OTP />} />
          {/* ---------Changepassword------------ */}
          <Route exact path="/Changepassword" element={<Changepassword />} />
          {/* ---------Success------------ */}
          <Route exact path="/Success" element={<Success />} />
          {/*  */}
          {/*  */}
          {/*  */}
          {/* ---------Home------------ */}
          <Route exact path="/Home" element={<Home />} />
          {/*  */}
          {/*  */}
          {/*  */}
          {/* ---------Dashboard------------ */}
          <Route exact path="/Dashboard" element={<Dashboard />} />
          {/*  */}
          {/*  */}
          {/*  */}
          {/* ---------Hospital section */}
          {/*  */}
          {/* -------AllHospitals--------- */}
          <Route exact path="/AllHospitals" element={<AllHospitals />} />
          {/* ----------Hospitalview-------- */}
          <Route exact path="/Hospitalview/:_id" element={<Hospitalview />} />
          {/* ---------HealthProviders------------ */}
          <Route exact path="/HealthProviders" element={<HealthProviders />} />
          {/* -------------HealthProvidersDetails-------------- */}
          <Route
            exact path="/HealthProviders/Details/:_id" element={<HealthProvidersDetails />}
          />
          {/* -------------------Invoice---------------------------- */}
          <Route exact path="/Invoice" element={<Invoice />} />
          {/*  */}
          {/*  */}
          {/*  */}
          {/* ---------PersonalityTest------------ */}
          <Route exact path="/Personality" element={<PersonalityTest />} />
          {/* ---------AddPersonality-------------- */}
          <Route exact path="/Personality/Add" element={<AddPersonality />} />
          {/*  */}
          {/*  */}
          {/*  */}
          {/* ---------Transactions------------ */}
          <Route exact path="/Transactions" element={<Transactions />} />
          {/*  */}
          {/*  */}
          {/*  */}
          {/* ---------Appsettings------------ */}
          <Route exact path="/Appsettings" element={<Appsettings />} />
          <Route exact path="/Categories" element={<Categories />} />
          {/*  */}
          {/*  */}
          {/*  */}
          {/* ---------Setting------------ */}
          <Route exact path="/Setting" element={<Setting />} />
          {/*  */}
          {/*  */}
          {/*  */}
          {/* ---------AllContracts------------ */}
          <Route exact path="/Contracts" element={<AllContracts />} />
          {/* -------------Cancelled-------------- */}
          <Route exact path="/Cancelled" element={<Cancelled />} />
          {/* ----------------Expired--------------- */}
          <Route
            exact
            path="/Contracts/Expireds"
            element={<ContractExpired />}
          />
          {/* -----------------Pending-------------- */}
          <Route exact path="/Pending" element={<Pending />} />
          {/* -----------------Completed-------------- */}
          <Route exact path="/Completed" element={<Completed />} />
          {/* -----------------Ongoing-------------- */}
          <Route exact path="/Ongoing" element={<Ongoing />} />
          {/* ----------------ContractDetails---------- */}
          <Route exact path="/ContractDetails" element={<ContractDetails />} />
          {/*  */}
          {/*  */}
          {/*  */}
          {/* ---------Jobs section -------- */}
          {/*  */}
          {/* -------Jobs--------- */}
          <Route exact path="/Jobs" element={<Jobs />} />
           {/* -------Add Jobs--------- */}
          <Route exact path="/Addjob" element={<Addjob />} />
          {/* ------------------JobDetails------- */}
          <Route exact path="/JobDetails/:_id" element={<JobDetails />} />
          {/* ------------------Postjob------------- */}
          <Route exact path="/Postjob" element={<Postjob />} />
          {/* -----------------Drafts------------ */}
          <Route exact path="/Drafts" element={<Drafts />} />
          {/* ---------------DraftDetails------------- */}
          <Route exact path="/DraftDetails" element={<DraftDetails />} />
          {/* ---------------Expired--------------- */}
          <Route exact path="/Expired" element={<Expired />} />
          {/*  */}
          {/*  */}
          {/*  */}
          {/* ---------Message------------ */}
          <Route exact path="/Message" element={<Message />} />
          {/* ----------Rejected--------- */}
          <Route exact path="/Rejected" element={<Rejected />} />
          {/*  */}
          {/*  */}
          {/*  */}
          {/* ---------FAQ------------ */}
          <Route exact path="/FAQ" element={<FAQ />} />
          {/* ----------AddNewAfq--------- */}
          <Route exact path="/AddNewFaq" element={<AddNewFaq />} />
          {/* ----------FAQupdata--------- */}
          <Route exact path="/FAQupdata/:_id" element={<FAQupdata />} />
          {/*  */}
          {/*  */}
          {/*  */}
          {/* ---------TOS------------ */}
          <Route exact path="/TOS" element={<TOS />} />
          {/* ---------TOSEdit------------ */}
          <Route exact path="/TOSEdit/:_id" element={<TOSEdit />} />
          {/* ---------TOSEdit------------ */}
          <Route exact path="/Addtos" element={<Addtos />} />
          {/*  */}
          {/*  */}
          {/*  */}
          {/* ---------Notifications------------ */}
          <Route exact path="/Notifications" element={<Notifications />} />
          {/*  */}
          {/*  */}
          {/*  */}
          {/* ---------Certificates------------ */}
          <Route exact path="/Certificates" element={<Certificates />} />
          {/*  */}
          {/*  */}
          {/*  */}
          {/* Logoutpop */}
          <Route path="/Logoutpop" element={<Logoutpop />} />
          {/* ---------SupportRequest------------ */}
          <Route exact path="/Support" element={<SupportRequest />} />
          {/* -----------Supportmessage---------- */}
          <Route exact path="/Support/Meaage/:_id" element={<Supportmessage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AllRouting;
