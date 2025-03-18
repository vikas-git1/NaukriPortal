import React from "react";
import "../styles/SimilarJobsCards.css";
import { IoLocationOutline } from "react-icons/io5";
const SimilarJobsCards = (props) => {
  return (
    
    <div className="SimilarJobsParentContainer" onClick={()=>props.clickEvent(props.brand.id)}>
      
      <div className="SimilarJobsMainContainer">
      
        <div>
          <h3 className="SimilarJobsMainTXT">{props.brand.name}</h3>
          <div className="SimilarJobsRatingContainer">
            <p className="WiproTXT">Wipro</p>
            <p className="SimilarJobsRatingTXT">⭐3.7 | 53302 Reviews</p>
          </div>
          <div className="SimilarJobsCityContainer">
            <IoLocationOutline />
            <span className="MumbaiTXT">{props.brand.location}</span>
          </div>
        </div>
        <div>
          <img src={props.brand.icon} alt="WiproIMg" width={50} />
        </div>
      </div>
      <div className="SimilarJobsFooterContainer">
        <div className="FooterContainerMainTXT">
          <p className="FooterContainerTXT">Service Desk Analysis</p>.
          <p className="FooterContainerTXT">service desk</p>.
          <p className="FooterContainerTXT">MIS</p>.
          <p className="FooterContainerTXT">resolution log management</p>.
          <p className="FooterContainerTXT">Desk Analysis</p>
        </div>
        <div className="FooterContainersecondTXT">
          <p className="FooterContainerPostedTXT">Posted 13 days ago</p>
        </div>
      </div>
    </div>
  );
};
export default SimilarJobsCards;
