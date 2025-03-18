import React from "react";
import "../styles/Wrapper.css";

const Wrapper = () => {
  return (
    <div className="wrapper-container">
      <div className="wrappermain">
        <h2 className="filter">All Fillters</h2>
        <p class="para">Applied (1)</p>
      </div>
      <hr></hr> 
      <div className="experience-container">
        <h2>Experience</h2>
        <select name="experience" id="experience">
        </select>
        <input type="range" />
       
        <pre className="year"> 0 year         30 year</pre>
        <hr></hr>
      </div>
        <div className="Salary-container">
        <select name="salary" id="salary">
            <option value="0"> Salary </option>
            <option value="1">0-3 Lakhs(2)</option>
            <option value="2">6-10 Lakhs(2)</option>
            <option value="3"> 10-15 Lakhs(11)</option>
            <option value="4">15-25 Lakhs(25)</option>
          </select>
          <hr></hr>
        </div>
        <div className="department-container">
          <select name="department" id="department">
            <option value="0"> Department </option>
            <option value="1">Strategic & Top Management (18) </option>
            <option value="2">Production, Manufacturing & Engineering(5)</option>
            <option value="3"> Construction & Site Engineerin(4)</option>
            <option value="4">Healthcare & Life Sciences(4)</option>
          </select>
          <hr></hr>
        </div>
        <div className="company-type-container">
          <select name="company-type" id="company-type">
            <option value="0"> Company type</option>
            <option value="1">Corporate(10) </option>
            <option value="2"> Foreign MN(6)</option>
            <option value="3">Remote(1) </option>
          </select>
          <hr></hr>
        </div>
        <div className="work-mode-container">
          <select name="work-mode" id="work-mode">
            <option value="0">Work mode</option>
            <option value="1">Work from office(56) </option>
            <option value="2">Hybrid(2) </option>
            <option value="3">Remote(1) </option>
          </select>

          <hr></hr>
        </div>
        <div className="top-companies-container">
          <select name="top-compaines" id="top-compaines">
            <option value="0"> Top compaines </option>
            <option value="1">Angelique International(1) </option>
            <option value="2">C&S Electric(1) </option>
          </select>
          <hr></hr>
        </div>
        <div className="industry- container ">
          <select name="industry" id="industry">
            <option value="0">Industry </option>
            <option value="1">Engineering & Construction(8)</option>
            <option value="2"> Medical Services / Hospital(6)</option>
            <option value="3">Textile & Apparel(6)</option>
            <option value="4">Auto Components(6) </option>
          </select>
          <hr></hr>
        </div>
        <div className="role-category-container">
          <select name="role-category" id="role-category">
            <option value="0">Role category </option>
            <option value="1">Top Management(15)</option>
            <option value="2"> Management(4)</option>
            <option value="3"> Construction Engineering(3)</option>
            <option value="4">HR Operations(2) </option>
          </select>
          <hr></hr>
        </div>
        <div className="education-container">
          <select name="education" id="education">
            <option value="0">Education </option>
            <option value="1">Any Postgraduate(16)</option>
            <option value="2">MBA/PGDM(8) </option>
            <option value="3"> B.Tech/B.E.(19)</option>
            <option value="4">Any Graduate(19)</option>
          </select>
          <hr></hr>
        </div>
        <div className="posted-by-container">
          <select name="posted-by" id="posted-by">
            <option value="0">Posted by </option>
            <option value="1">Company Jobs(37)</option>
            <option value="2">Consultant Jobs(22)</option>
          </select>
          <hr></hr>
        </div>
        <div className="freshness-container">
          <h2 className="fressTXT">Freshness</h2>
          <select name="freshness" id="freshness">
            <option className="select" value="dropdown">
              Select
            </option>
            <option value="0">Last 30 days</option>
            <option value="1">Last 15 days</option>
            <option value="2">Last 7 days</option>
            <option value="3">Last 3 days</option>
            <option value="3">Last 1 days</option>checkbox
          </select>
        </div>
        <hr></hr>
        <div className="location-container">
          <select name="location" id="location">
            <option value="0">Location</option>
            <option value="1">Delhi / NCR(59)</option>
            <option value="2">Gurugram(21)</option>
            <option value="3">Noida(12)</option>
            <option value="4">New Delhi(11)</option>
          </select>
       
      </div>
    </div>
  );
};

export default Wrapper;
