import React from "react";
import SimilarJobsCards from "./SimilarJobsCards";
import { jobs } from "../../constant/jobData";



const SimilarJobsCardsView = () => {
  const onCardClickEvent = (id) => {
    let filteredPeople = jobs.filter((person) => person.id === id);

console.log(filteredPeople[0]); 
  }
  return (
    <div>
      <ul>
        {jobs.map((car) => (
          <SimilarJobsCards brand={car} clickEvent={onCardClickEvent} />
        ))}
      </ul>
    </div>
  );
};
export default SimilarJobsCardsView;
