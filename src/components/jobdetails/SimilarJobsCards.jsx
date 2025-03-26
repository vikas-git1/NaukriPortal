import React from "react";
import "../../styles/SimilarJobsCards.css";
import { IoLocationOutline } from "react-icons/io5";
const SimilarJobsCards = (props) => {
  return (
    <div className="JobcardContainer">
      <div
        className="SimilarJobsParentContainer"
        onClick={() => props.clickEvent(props.brand.id)}
      >
        <div className="SimilarJobsMainContainer">
          <div>
            <h3 className="SimilarJobsMainTXT">{props.brand.companyName}</h3>
            <div className="SimilarJobsRatingContainer">
              <p className="WiproTXT">{props.brand.companyName}</p>
              <p className="SimilarJobsRatingTXT">
                ⭐{props.brand.rating} |{props.brand.reviews} 3 reviews
              </p>
            </div>
            <div className="SimilarJobsCityContainer">
              <IoLocationOutline className="LocationSymbol" />
              <span className="MumbaiTXT">{props.brand.location}</span>
            </div>
          </div>
          <div>
            <img src={props.brand.icon} alt="WiproIMg" width={70} />
          </div>
        </div>
        <div className="SimilarJobsFooterContainer">
          <div className="FooterContainerMainTXT">
            <p className="FooterContainerTXT">Service Desk Analysis</p>
            <span className="dot">.</span>
            <p className="FooterContainerTXT">service desk</p>
            <span className="dot">.</span>
            <p className="FooterContainerTXT">MIS</p>
            <span className="dot">.</span>
            <p className="FooterContainerTXT">resolution log management</p>
            <span className="dot">.</span>
            <p className="FooterContainerTXT">Desk Analysis</p>
          </div>
          <div className="FooterContainersecondTXT">
            <p className="FooterContainerPostedTXT">
              Posted {props.brand.postedDay} days ago
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SimilarJobsCards;
