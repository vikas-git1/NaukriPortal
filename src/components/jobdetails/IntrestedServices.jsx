import React from "react";
import "../../styles/IntrestedServices.css"
const IntrestedServices = () => {
    return(
        <div className="FourthCardParentContainer">
            <div className="FourthCardMainContainer">
                <div className="FourthCardHeadderTxt">
                    <span className="HeadderTxt">
                <p className="CardTxt" ><b>Services you might be
                interested in</b></p>
                </span>
                <a href="https://resume.naukri.com/resume-display?fftid=desk_jd_rd"target="blank" className="KnowMoreBtn">Know more</a>
                </div>
                <div className="FourthCardMiddleTxt">
                <p className="MiddleTxt">Resume Display</p>
                <p className="CardTxt" ><b>Increase your profile visibility to recruiters upto 3 times</b></p>
                <p className="MiddleTxt">Get a Featured Profile, Stand out and get noticed in recruiter eye</p>
                </div>
                <hr />
                <div className="FourthCardFooterTxt">
                <img src="images/naukritxtimg.png" alt="naukritxt" width={110}/>
                <span className="FooterTxt" >*May include paid services</span>
                </div>
            </div>
        </div>
    )
}
export default IntrestedServices;