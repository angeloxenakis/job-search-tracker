import React from "react";
import "../styles/OppRow.css"

export const OppRow = ({ opportunity }) => {
    return(
        <div className="opp-row">
            <div className="row-block">
                <h5>Job Title:</h5>
                <h5>{ opportunity.job_title }</h5>
            </div>
            <div className="row-block">
                <h5>Company:</h5>
                <h5>{ opportunity.company }</h5>
            </div>
            <div className="row-block">
                <h5>Salary:</h5>
                <h5>{ opportunity.salary }</h5>
            </div>
            <div className="row-block">
                <h5>Location:</h5>
                <h5>{ opportunity.location }</h5>
            </div>
            <div className="row-block">
                <h5>Interest:</h5>
                <h5>{ opportunity.interest_level }</h5>
            </div>
            <div className="row-block">
                <h5>Date Applied:</h5>
                <h5>{ opportunity.date_applied }</h5>
            </div>
            <div className="row-block">
                <h5>Last Contact:</h5>
                <h5>{ opportunity.last_contact }</h5>
            </div>
        </div>
    )
}