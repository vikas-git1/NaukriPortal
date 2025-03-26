import React from "react";
import "../../styles/JobBenefitsBox.css";
const JobBenefitsBox = () => {
  return (
    <div>
      <div className="mainBoxContainer">
        <div className="secondMainBoxContainer">
          <div className="heading">
            <b>Benefits & Perks</b>
            <b className="view-all">View all</b>
          </div>

          <div className="user-info">
            <p>5451 User reported these Benefits</p>
          </div>

          <div className="benefits">
            <div className="benefitsOne">
              <div className="img-Txt-box">
                <img src="images/rocketImg.png" alt="box" className="box" />
                <p className="text">
                  Job/Soft Skill <br />
                  &nbsp;&nbsp;&nbsp; training
                </p>
              </div>
              <div className="img-Txt-box">
                <img src="images/healthImg.png" alt="box" className="box" />
                <p className="text">
                  {" "}
                  &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;Health
                  &nbsp;&nbsp;&nbsp;insurance
                </p>
              </div>
              <div className="img-Txt-box">
                <img src="images/burgerImg.png" alt="box" className="box" />
                <p className="text">&nbsp;&nbsp;&nbsp;Cafeteria</p>
              </div>
            </div>
            <div className="benefitsTwo">
              <div className="img-Txt-box">
                <img src="images/busImg.png" alt="box" className="box" />
                <p className="text">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Office cab/shuttle
                </p>
              </div>
              <div className="img-Txt-box">
                <img src="images/degreeImg.png" alt="box" className="box" />
                <p className="text">
                  Professional &nbsp;&nbsp;&nbsp;&nbsp;degree
                  &nbsp;&nbsp;assistance
                </p>
              </div>
              <div className="img-Txt-box">
                <img src="images/childCareImg.png" alt="box" className="box" />
                <p className="text">child care &nbsp;&nbsp;&nbsp;facility</p>
              </div>
            </div>
          </div>

          <div className="SecondCardFotterContainer">
            <p className="powered-Txt">Powered by </p>
            <img
              src="images/AmbitionBoxImg.png"
              alt="box"
              className="AmbitionBoxImg"
            />
            <p className="AmbitionBox">AmbitionBox</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default JobBenefitsBox;
