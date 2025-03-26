// import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./screens/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Dashboard from "./screens/Dashboard";
import JobDetails from "./screens/JobDetailsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/jobslist" element={<Dashboard />}></Route>
        <Route path="/jobdetails" element={<JobDetails/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
