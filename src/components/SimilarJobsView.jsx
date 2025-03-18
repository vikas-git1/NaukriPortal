import React from "react";
import SimilarJobsCards from "../components/SimilarJobsCards";
import jobData, { jobArrayList } from "../constant/jobData";


const SimilarJobsCardsView = () => {
  const onCardClickEvent = (id) => {
    let filteredPeople = jobArrayList.filter((person) => person.id == id);

console.log(filteredPeople[0]); 
  }
  return (
    <div>
      <ul>
        {jobArrayList.map((car) => (
          <SimilarJobsCards brand={car} clickEvent={onCardClickEvent} />
        ))}
      </ul>
    </div>
  );
};
export default SimilarJobsCardsView;
