import React from "react";
import "../styles/OppTile.css"

export const OppTile = ({ opportunity, toggleDetailModal }) => {
    return(
        <div className="opp-tile">
            <div className="opp-card-header">
                <p><span>Edit</span><span>|</span><span onClick={() => toggleDetailModal(opportunity)}>Details</span></p>
            </div>
            <hr></hr>
            <div className="opp-card-hero">
                <h2>{opportunity.job_title}</h2>
                <h2>at</h2>
                <h2>{opportunity.company}</h2>
            </div>
            <hr></hr>
            <div className="opp-card-body">
                <h5>Description:</h5>
                <div className="opp-card-body-content"><p>{opportunity.description}</p></div>

            </div>
            <hr></hr>
            <div className="opp-card-details">
                <div>
                    <h5>Salary:</h5>
                    <p>{opportunity.salary}</p>
                </div>
                <div>
                    <h5>Location:</h5>
                    <p>{opportunity.location}</p>
                </div>
                <div>
                    <h5>Interest:</h5>
                    <p>{opportunity.interest_level}</p>
                </div>
            </div>
            <hr></hr>
            <div className="opp-card-footer">
                <div>
                    <p>Date Applied:</p>
                    <p>{opportunity.date_applied}</p>
                </div>
                <div>
                    <p>Last Contact:</p>
                    <p>{opportunity.last_contact}</p>
                </div>
            </div>
        </div>
    )
}