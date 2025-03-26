import React from "react";
import './../../styles/JobDescription.css';
const JobDescription = () => {
  return (
    <div className="listPageMainContainer">
      <h>
        <b>Jobs Description </b>
      </h>
      <p className="headingContainer">
        <b>Job Purpose</b>
      </p>
      <div className="listPageSecoundContainer">
        <p>
          To facilitate the batch incident requests, as per defined procedure by
          the HDFC Bank, this would help in response & escalation.
        </p>
        <p>
          To perform execution & monitoring of all checklist activities as part
          of DPC Operational activities in 24*7 for all 365 days.
        </p>
        <p>
          To execute the assigned checklist efficiently and effectively and
          adhoc jobs in correct and timely manner on daily basis.
        </p>
      </div>
      <div className="listPageChildcontainer">
        <p>
          
          <b>Role & responsibilities</b>
        </p>
        <li>
          Responsible for executing assigned checklists, special user requests &
          adhoc/bulk Job processing requests in the shift.
        </li>
        <li>
          Responsible for timely execution and monitoring of all backups,
          tracking the same till completion.
        </li>
        <li>Responsible for monitoring of email alerts</li>
        <li>
          Responsible for escalation to Shift in Charge, System Supervisors for
          any discrepancy in the daily executions
        </li>
        <li>Responsible for timely logging of Snow calls for incidents.</li>
        <li>Responsible for adhering to the audit deliverables of DPC</li>
        <li>
          Ready to extend shifts during any emergency and to work in 24*7
          shifts.
        </li>
        <li>
          Responsible for timely escalating unresolved P1and P2 Incidents to
          defined escalation levels as per escalation Matrix.
        </li>
        <li>
          Responsible for reviewing pending incident.tickets for timely closure.
        </li>
      </div>
      <div className="keySkillContainer">
        <p>
          <b>key Skills </b>
        </p>
        <label>Good Communication & Fast Learner</label>
      </div>
      <div className="informationContainer">
        <p>
          <b>Role:</b>IT & Information Security - Other
        </p>
        <p>
          <b>Industry Type:</b>Banking
        </p>
        <p>
          <b>Department:</b>IT & Information Security
        </p>
        <p>
          <b> Employment Type:</b>Full Time, Permanent
        </p>
        <p>
          <b>Role Category:</b>IT & Information Security - Other
        </p>
      </div>
      <div className="educationContainer">
        <label>
          {" "}
          <b>Education </b>
        </label>
        <p>
          <b>UG:</b>Any Graduate
        </p>
      </div>
      <div className="keySkillContainer">
        <p>
          <b>Key Skills</b>
        </p>
        <p>Skills highlighted with ‘✩‘ are preferred keyskills</p>
      </div>
      <div className="buttonContainer">
        <button>✩ IT Service Desk</button>
        <button> ✩ DPC</button>
        <button> ✩ Monitoring</button>
        <button>24X7</button>
        <button>Ticket Management</button>
      </div>
    </div>
  );
};
export default JobDescription;
