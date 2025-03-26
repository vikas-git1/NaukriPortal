import React from "react";
import "../../styles/JDApplyCard.css";
import { GoBriefcase } from "react-icons/go";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { IoLocationOutline } from "react-icons/io5";

const JDApplyCard = () => {
  return (
    <div className="ParentContainer">
      <div className="MainContainer">
        <div className="ListpageContainer">
          <h1 className="ListPageMainTxt">
            Urgent opening For DPC Service Desk Operator
          </h1>
          <div className="ListPageRatinContainer">
            <p>Hdfc Bank</p>
            <div className="RatingTxt">
              <img src="images/ratingstar.png"></img>
            </div>{" "}
            <p className="reviewTxt"> 3.9 </p>
            <div className="starSeprator">|</div>
            <p className="reviewTxt"> 39763 Reviews</p>
            <div className="WingContainer">
              <img
                src="/images/leftwing.png"
                alt="wing"
                className="leftWingImg"
                width={7}
                height={5}
              />
              <span className="EmployeesTxt">Employees' choice</span>
              <img
                src="/images/rightwing.png"
                alt="wing"
                className="rightWingImg"
                width={7}
                height={5}
              />
            </div>
          </div>
          <div className="PageTextFirstContainer">
            <GoBriefcase className="bag" />
            <p className="ContainerTxt">0 - 2 years</p>
            <div className="starSeprator">|</div>

            <LiaRupeeSignSolid className="notDisTxt" />
            <p>Not Disclosed</p>
          </div>
          <div className="pageTextSecondContainer">
            <IoLocationOutline className="location" />
            <p className="ContainerTxt">Mumbai</p>
          </div>
        </div>
        <div>
          <img src="/images/hdfclogo.png" alt="HDFC" id="HDFClogo" width={65} />
          <a href="" id="LinkBTN" target="blank">
            Send me jobs like this
          </a>
        </div>
      </div>
      <hr />
      <div className="ListPageFooterContainer">
        <div className="FooterTextContainer">
          <div className="FooterContainerText">
            <p>Posted:</p>
            <h4 className="hFourTXT">2 Days ago</h4>
          </div>

          <div className="starSeprator">|</div>
          <div className="FooterContainerText">
            <p>Openings:</p>
            <h4 className="hFourTXT">1</h4>
          </div>

          <div className="starSeprator">|</div>
          <div className="FooterContainerText">
            <p>Applicants:</p>
            <h4 className="hFourTXT">207</h4>
          </div>
        </div>
        <div className="ButtonContainer">
          <button className="RegisterContainerBTN" type="submit">
            Register to apply
          </button>
          <button className="LoginContainerBTN" type="submit">
            Login to apply
          </button>
        </div>
      </div>
    </div>
  );
};
export default JDApplyCard;
