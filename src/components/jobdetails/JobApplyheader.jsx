import React from "react";
import "../../styles/JobApplyheader.css";

const JobApplyheader = () => {
  return (
    <>
      <div className="jobheaderMaincontainer">
        <img
          className="ImgjobHeadercontainer"
          src="./images/hdfclogo.png"
          alt=""
        />
        <nav className="miniContainer">
          <p>
            <b>Urgent opening For DPC Service Desk Operator</b>
          </p>
          <p>Hdfc Bank ★ 3.9 / 400957 Reviews</p>
        </nav>
        <nav className="minisecoundContainer">
<a className="linkTXT" href="http://">
Send me jobs like this</a>         
 <button className="Applybutton">Apply</button>
        </nav>
      </div>
    </>
  );
};
export default JobApplyheader;
