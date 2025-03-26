import React, {useState} from "react";
import ListRow from "../components/ListRow";
import { jobs } from "../constant/jobData";
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

  const navigate = useNavigate(); // Hook for navigation
  // Click handler for <ul>
  const handleItemClick  = (value) => {
    const item = value;
    navigate('/jobdetails', { state: item }); 
  };
  return (<div>
    <ul>
      {jobs.map((job) => (
         <li key={job.id} onClick={() => handleItemClick(job)}>
          <ListRow  data={job} />
         </li> 
        
      ))}
    </ul>
  </div>)
};

export default Dashboard;
