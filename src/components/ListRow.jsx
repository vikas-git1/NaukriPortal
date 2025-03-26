import React from "react";
import "../styles/ListRow.css";
import { FaCircle } from "react-icons/fa6";

const ListRow = (props) => {
  return (
    <>
      <div className="main">
        <div className="header">
          <div className="head">
            <div className="heading">{props.data.companyName}</div>
            <div className="reviews">
              <b> {props.data.companyName} </b>
              <img
                src="/images/rating_star.png"
                alt=""
                className="ratingStar"
              />
              {props.data.rating}
              <div className="Seprator">|</div>
              {props.data.reviews} Reviews
            </div>
          </div>
          <div className="logo">
            <img src={props.data.icon} alt="" className="companyLogo" />
          </div>
        </div>

        <div className="info">
          <div className="requirement">
            <img src="/images/briefcase.png" alt="" className="icon" />
            {props.data.experience} Yrs
            <div className="Seprator">|</div>
            <img src="/images/rupee.png" alt="" className="icon" />
            {props.data.salary}
            <div className="Seprator">|</div>
            <img src="/images/location.png" alt="" className="icon" />
            {props.data.location}
          </div>
          <div className="description">
            <img src="/images/title.png" alt="" className="icon" />
            <p>
              {props.data.jobDescription}
            </p>
          </div>
        </div>
        <div >
        <ul style={{display:'flex', flexDirection: 'row'}}>
           {props.data.educationExperience.map((education) => (
                    <li style={{margin: 5}}> <div style={{display:'flex', flexDirection: 'row', margin: 5, color: 'rgb(73, 73, 73)'}}><FaCircle style={{margin: '5', height:'4', marginTop:'10',}}/>{education}</div></li>
                  ))}
        </ul>  
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
