import React from "react";
import "../styles/AppTile.css"

export const OppTile = ({ opportunity }) => {
    return(
        <div className="app-tile">
            <div className="app-card-header">
                <p><span>Edit</span><span>|</span><span>Details</span></p>
            </div>
            <hr></hr>
            <div className="app-card-hero">
                <h2>{opportunity.jobTitle}</h2>
                <h2>at</h2>
                <h2>{opportunity.company}</h2>
            </div>
            <hr></hr>
            <div className="app-card-body">
                <h5>Description:</h5>
                <div className="app-card-body-content"><p>{opportunity.desc}</p></div>

            </div>
            <hr></hr>
            <div className="app-card-details">
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
                    <p>{opportunity.interestLevel}</p>
                </div>
            </div>
            <hr></hr>
            <div className="app-card-footer">
                <div>
                    <p>Date Applied:</p>
                    <p>{opportunity.dateApplied}</p>
                </div>
                <div>
                    <p>Last Contact:</p>
                    <p>{opportunity.lastContact}</p>
                </div>
            </div>
        </div>
    )
}