import React from "react";
import CompaniesRolesCard from "../components/jobdetails/CompaniesRolesCard";
import JDApplyCard from "../components/jobdetails/JDApplyCard";
import JobDescription from "../components/jobdetails/JobDescription";
import JDReviewCard from "../components/jobdetails/JDReviewCard";
import CompanyInfo from "../components/jobdetails/CompanyInfo";
import JobBenefitsBox from "../components/jobdetails/JobBenefitsBox";
import BewareMessage from "../components/jobdetails/BewareMessage";
import IntrestedServices from "../components/jobdetails/IntrestedServices";
import SimilarJobsCardsView from "../components/jobdetails/SimilarJobsCardView";
import JobApplyheader from "../components/jobdetails/JobApplyheader";
import { useLocation } from 'react-router-dom';
const JobDetails = () => {
    const location = useLocation(); // Hook to get location data
  const jobDesc = location.state; // Access the passed data
  console.log('**jobDesc***', jobDesc);

    return(
        <>
       
        <div>
            <div>
                
                <div className="listpage-rightpage">
                    <JDApplyCard />
                    <CompaniesRolesCard />
                </div>
                <div className="listpage-rightpagetwo">
                    <JobDescription />
                    <JDReviewCard />

                </div>
                <div className="aboutcontainer">
                    <CompanyInfo />
                    <JobBenefitsBox />
                </div>
                <div className="aboutcontainer">
                    <BewareMessage />
                    <IntrestedServices />
                </div>
                <SimilarJobsCardsView />
            </div>
            <div></div>
            <JobApplyheader />
        </div></>
    )
}
export default JobDetails;