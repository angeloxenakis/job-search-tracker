import React from "react";
import "../styles/OppRow.css"

export const OppRow = ({ opportunity }) => {
    return(
        <div className="opp-row">
            <div className="">
                <h5>Job Title:</h5>
                <h5>{ opportunity.jobTitle }</h5>
            </div>
            <div>
                <h5>Company:</h5>
                <h5>{ opportunity.company }</h5>
            </div>
            <div>
                <h5>Salary:</h5>
                <h5>{ opportunity.salary }</h5>
            </div>
            <div>
                <h5>Location:</h5>
                <h5>{ opportunity.location }</h5>
            </div>
            <div>
                <h5>Interest:</h5>
                <h5>{ opportunity.interestLevel }</h5>
            </div>
            <div>
                <h5>Date Applied:</h5>
                <h5>{ opportunity.dateApplied }</h5>
            </div>
            <div>
                <h5>Last Contact:</h5>
                <h5>{ opportunity.lastContact }</h5>
            </div>
        </div>
    )
}