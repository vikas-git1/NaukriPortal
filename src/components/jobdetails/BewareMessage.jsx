import React from "react";
import "../../styles/BewareMessage.css"
const BewareMessage = () => {
    return(
        <div className="DescParentContainer" >
            <div className="DescMainContainer">
                <p><b>Beware of imposters! </b></p>
                <p>Naukri.com does not promise a job or an interview in exchange of money. Fraudsters may ask you to pay in the pretext of registration fee, Refundable Fee…<a href="https://www.naukri.com/imposter/report-fake-job-recruiter?UTM_campaign=naukri&utm_medium=desktop&utm_source=jd_warning" className="ReadMoreBtn">Read more</a></p> 
               
            </div>
        </div>
    )
}
export default BewareMessage;