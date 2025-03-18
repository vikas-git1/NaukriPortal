import React from "react";
import "../styles/ListRow.css";

const ListRow = (props) => {
  // console.log("juji",props.brand.name)
  return (
    <>
      <div className="main">
        <div className="header">
          <div className="head">
            <div className="heading">{props.brand.name}</div>
            <div className="reviews">
              <b>Hdfc Bank</b>
              <img
                src="/images/rating_star.png"
                alt=""
                className="ratingStar"
              />
              3.9 <div className="Seprator">|</div> 39761 Reviews
            </div>
          </div>
          <div className="logo">
            <img src={props.brand.icon} alt="" className="companyLogo" />
          </div>
        </div>

        <div className="info">
          <div className="requirement">
            <img src="/images/briefcase.png" alt="" className="icon" />0 Yrs
            <div className="Seprator">|</div>
            <img src="/images/rupee.png" alt="" className="icon" />
            Not disclosed
            <div className="Seprator">|</div>
            <img src="/images/location.png" alt="" className="icon" />
            {props.brand.location}
          </div>
          <div className="description">
            <img src="/images/title.png" alt="" className="icon" />
            <p>
              Graduate fresher with ability to work in 24/7 shifts and handle
              incident loggi...
            </p>
          </div>
        </div>
        <div className="educationExperience">
          <div className="tag">Fresher</div>
          <div className="Seprator">•</div>
          <div className="tag">Graduate Fresher</div>
          <div className="Seprator">•</div>
          <div className="tag">IT Officer</div>
        </div>

        <div className="posted">
          1 Day Ago
          <div className="save">
            <div className="saveicon">
              <img src="/images/save.png" alt="" className="icon" />
              Save
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListRow;
