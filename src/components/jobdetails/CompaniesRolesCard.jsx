import React from "react";
import "../../styles/CompaniesRolesCard.css";
import { GoBriefcase } from "react-icons/go";
import { MdInfoOutline } from "react-icons/md";
import { LuIndianRupee } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
const CompaniesRolesCard = () => {
  return (
    <>
      <div className="roleJobMAincontainer">
        <p className="roleJobMAinLebelTXT">
          <img src="images/planeimg.png" alt="plane" width={30} />
          <b> Roles from top companies </b>
          <MdInfoOutline className="infoImage" />
        </p>
        <div className="roleJoblittleFristcontainer">
          <div className="miniContainerrolejobCard">
            <p className="miniContainerparaTXT">
              <b> Service Desk Specialist</b>
            </p>
            <p>Large IT Services & Consulting Firm</p>
            <div className="Personalditails">
              <p>
                <GoBriefcase className="icons" />
              </p>
              <p> 2-6 Yrs </p>
              <p>|</p>
              <p>
                <LuIndianRupee className="icons" />
              </p>
              <p>2-7 Lacs P.A. </p>
              <p>|</p>
              <p>
                <IoLocationOutline className="icons" />
              </p>
              <p>Mumbai</p>
            </div>
            <p className="lastparaContainer">
              Hiring for one of these companies
            </p>

            <div className="imgMaincontainer">
              <img className="Imgcontainer" src="images/nessimg.png" alt="" />
              <img
                className="Imgcontainer"
                src="images/orangecircleimg.png"
                alt=""
              />
              <img
                className="Imgcontainer"
                src="images/carpateImg.png"
                alt=""
              />
              <img className="Imgcontainer" src="images/iImg.png" alt="" />
              <img className="Imgcontainer" src="images/teamImg.png" alt="" />
              <img
                className="Imgcontainer"
                src="images/orangecircleimg.png"
                alt=""
              />
              <img
                className="Imgcontainer"
                src="images/carpateImg.png"
                alt=""
              />
            </div>
          </div>
          <hr />

          <div className="miniContainerrolejobCard">
            <p className="miniContainerparaTXT">
              <b> Desktop Support Engineer</b>
            </p>
            <p>Large IT Services & Consulting Firm </p>
            <div className="Personalditails">
              <p>
                <GoBriefcase className="icons" />
              </p>
              <p>2-6 Yrs</p>
              <p>|</p>
              <p>
                <LuIndianRupee className="icons" />
              </p>
              <p>2-7 Lacs P.A.</p>
              <p>|</p>
              <p>
                <IoLocationOutline className="icons" />
              </p>
              <p>Mumbai</p>
            </div>
            <p className="lastparaContainer">
              Hiring for one of these companies
            </p>

            <div className="imgMaincontainer">
              <img className="Imgcontainer" src="images/nessimg.png" alt="" />
              <img
                className="Imgcontainer"
                src="images/orangecircleimg.png"
                alt=""
              />
              <img
                className="Imgcontainer"
                src="images/carpateImg.png"
                alt=""
              />
              <img className="Imgcontainer" src="images/iImg.png" alt="" />
              <img className="Imgcontainer" src="images/teamImg.png" alt="" />
              <img
                className="Imgcontainer"
                src="images/orangecircleimg.png"
                alt=""
              />
              <img
                className="Imgcontainer"
                src="images/carpateImg.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <button className="roleJobbuttonTXT">Register to unlock</button>
      
      </div>
    
    </>
  );
};
export default CompaniesRolesCard;
