import React from "react";

const SideCard = () => {
  return (
    <div className="border-2 border-gray-300 h-[350px] w-[280px] p-5 rounded-md flex flex-col justify-between">
      <div className="h-[150px]">
        <img src="/images/cardImg.png" alt="" className="h-full" />
      </div>
      <p className="font-bold text-lg text-center">On Registering you can</p>
      <div>
        <p className="text-sm mt-1 flex items-start">
          <img src="/images/Vector.png" alt="" className="inline-block mr-2" />{" "}
          Build Your profile and let recruiters find your
        </p>
        <p className="text-sm mt-1 flex items-start">
          <img src="/images/Vector.png" alt="" className="inline-block mr-2" />{" "}
          Get job postings delivered right to your email
        </p>
        <p className="text-sm mt-1 flex items-start">
          <img src="/images/Vector.png" alt="" className="mr-2" />
          Find a job and grow your career
        </p>
      </div>
    </div>
  );
};

export default SideCard;
