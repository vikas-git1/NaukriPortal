import React from "react";
import "../styles/ListPageRightSecondCard.css";
const ListPageRightSecondCard = () => {
  return (
    <div className="SecondCardParentContainer">
      <div className="SecondcardMainContainer">
        <div className="SecondCardHeadTxtContainer">
          <b>Reviews</b>
          <b className="Readallreviews">Read all 39930 reviews</b>
        </div>
        <div className="mainTxtContainer">
          <b className="mainFirstText">Senior Relationship Manager for 8 months in New De...</b>
          <p><span className="Anonymous">Anonymous </span>
          <span className="seprator">|</span> 12 Mar 2025</p>
        </div>
        <div className="Imagecontainer">
        <img src="images/reviewrating.png" alt="star" width={90} />
        </div>
        <div className="LikesContainer">
          <b>Likes</b>
          <p>
          Nothing !!! it's a dead company, only politics and completely disorganised.
          Undue work pressure no cooperation.
          Worse than a sarkari babu attitude.
          </p>
        </div>
        <div className="ParentYellowContainer">
          <div className="MainYellowContainer">
            <div className="yellowTxtcontainer">
              <p>
                Follow <b>HDFC Bank</b> to receive the latest job postings and
                alerts
              </p>
            </div>
            <div className="FollowButtonContainer">
              <button id="FollowBtn">+ Follow</button>
              <p className="FollowersTxt">158.0k followers</p>
              {/* <p>158.0k followers </p> */}
            </div>
          </div>
        </div>
        <div className="SecondCardFotterContainer">
          <p>Powered by </p>
          <img
            src="images/ambitionBoxImg.png"
            alt="box"
            className="box"
          />
          <p className="AmbitionBox">AmbitionBox</p>
        </div>
      </div>
    </div>
  );
};
export default ListPageRightSecondCard;
