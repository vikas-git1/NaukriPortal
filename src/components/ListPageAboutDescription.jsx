import React from "react";
import "../styles/ListPageAboutDescription.css";
const ListPageAboutDescription = () => {
  return (
    <div className="AboutDescriptionParentContainer">
      <div className="AboutDescriptionMainContainer">
        <div className="AboutDescriptionBoldTxt">
          <b>About company</b>
        </div>
        <div className="AboutDescriptionTxt">
          <p>
            HDFC Bank was incorporated in August 1994 in the name of HDFC Bank
            Limited, with its registered office in Mumbai, India. The bank
            commenced operations as a Scheduled Commercial Bank in January 1995.
          </p>
        </div>
        <div className="AboutDescriptionTxt">
          <p>
            On April 4, 2022 the merger of India€™s largest Housing Finance
            Company, HDFC Limited and the largest private sector bank in India,
            HDFC Bank was announced. HDFC Ltd, over the last 45 years has
            developed one of the best product offerings, making it a leader in
            the housing finance business. HDFC Bank enables seamless delivery of
            home loans as a part of its wide product suite catering to urban,
            semi urban and rural India.
          </p>
        </div>
        <div className="AboutDescriptionTxt">
          <p>
            As of March 31st, 2023, HDFC Bank€™s extensive network comprised of
            7,821 branches and 19,727 ATMs / Cash Deposit & Withdrawal Machines
            (CDMs) across 3,811 cities / towns. HDFC Ltd.€™s distribution
            network comprising 737 outlets, which include 214 offices of HDFC
            Sales Private Limited stands amalgamated into the Bank€™s network.
            The Bank€™s international presence includes branches in 4 countries
            and 3 representative offices in Dubai, London and Singapore offering
            Home Loan products to Non-Resident Indians and Persons of Indian
            Origin
          </p>
        </div>
        <div className="AboutDescriptionBoldTxt">
          <b>Company Info</b>
        </div>
        <div className="AboutDescriptionTxt">
          <p>
            <b>Address:</b> HDFC BANK HOUSE,,,SENAPATI BAPAT MARG,LOWER PAREL , MUMBAI,
            Maharashtra, India
          </p>
        </div>
      </div>
      <div className="AmbiationBoxParentContainer">
        <div className="AmbiationBoxContainer">
          <span>
            <b>Awarded by AmbitionBox</b>
            <p>Winner of ABECA 2024 - AmbitionBox </p>
            <p>Employee Choice Awards</p>
            <button className="buttonLearnMore">Learn more</button>
          </span>
          <div className="AmbiationBoxSideContainer">
            <img src="images/wings.png" alt="error" width={195} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ListPageAboutDescription;
