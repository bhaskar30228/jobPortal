import React, { useContext } from "react";
import { Route,Routes  } from "react-router-dom";
import Home from "./pages/Home";
import Application from "./pages/Application";
import ApplyJobs from "./pages/ApplyJobs";
import RecruitersLogin from "./components/RecruitersLogin";
import { AppContext } from "./context/AppContext";
import Dashboard from "./pages/Dashboard";
import ManageJob from "./pages/ManageJob";
import AddJob from "./pages/AddJob";
import ViewApplications from "./pages/ViewApplications";
import "quill/dist/quill.snow.css";

const App=()=>{
  const {showRecruiterLogin}=useContext(AppContext)
  return(
    <div>
      {showRecruiterLogin && <RecruitersLogin/>}
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/apply-jobs/:id" element={<ApplyJobs/>}/>
      <Route path="/applications" element={<Application/>}/>
      <Route path="/dashboard" element={<Dashboard/>}>
      <Route path="manage-jobs" element={<ManageJob/>}/>
      <Route path="add-jobs" element={<AddJob/>}/>
      <Route path="view-applications" element={<ViewApplications/>}/>
       </Route>
    </Routes>
    </div>
  )
}

export default App