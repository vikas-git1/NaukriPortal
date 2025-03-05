import React, { useState } from "react";
import "../styles/NavBar.css";
import { TbSchoolBell } from "react-icons/tb";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import Login from "./Login";
const NavBar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [openLoginBox, setOpenLoginBox] = useState(false);

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const handleUserLogin = () => {
    setOpenLoginBox((prev) => !prev);
  };
  return (
    <>
      {openLoginBox ? <Login /> : ""}

      <nav className={`navBar ${openLoginBox ? "open-login-box" : ""}`}>
        <img src="/images/logo.png" alt="Naukri Logo" className="logo-img" />
        <ul className="listContainer">
          <li
            className="navItem jobNavList"
            onMouseEnter={() => toggleDropdown("jobs")}
            onMouseLeave={() => toggleDropdown(null)}
          >
            Jobs
            {activeDropdown === "jobs" && (
              <ul className="dropdownMenu">
                <li>IT Jobs</li>
                <li>Marketing Jobs</li>
                <li>Finance Jobs</li>
              </ul>
            )}
          </li>
          <li
            className="navItem companiesNavList"
            onMouseEnter={() => toggleDropdown("companies")}
            onMouseLeave={() => toggleDropdown(null)}
          >
            Companies
            {activeDropdown === "companies" && (
              <ul className="dropdownMenu">
                <li>Top Companies</li>
                <li>Startups</li>
                <li>MNCs</li>
              </ul>
            )}
          </li>
          <li
            className="navItem servicesNavList"
            onMouseEnter={() => toggleDropdown("services")}
            onMouseLeave={() => toggleDropdown(null)}
          >
            Services
            {activeDropdown === "services" && (
              <ul className="dropdownMenu">
                <li>Resume Writing</li>
                <li>Career Counseling</li>
                <li>Job Alerts</li>
              </ul>
            )}
          </li>
        </ul>

        <div className="search-container">
          <input type="text" placeholder="Search" className="search-input" />
          <span className="search-icon">
            <FaSearch />
          </span>
        </div>

        <div className="btn-container">
          <button className="naukri-360-btn">
            <span>Naukri</span> 360
          </button>
          <button className="bell-icon-btn">
            <TbSchoolBell />
          </button>
          <button className="profile-btn" onClick={handleUserLogin}>
            <HiMiniBars3CenterLeft /> <FaRegCircleUser />
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
