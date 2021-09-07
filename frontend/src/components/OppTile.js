import React from "react";
import "../styles/OppTile.css"

export const OppTile = ({ opportunity }) => {
    return(
        <div className="opp-tile">
            <div className="opp-card-header">
                <p><span>Edit</span><span>|</span><span>Details</span></p>
            </div>
            <hr></hr>
            <div className="opp-card-hero">
                <h2>{opportunity.jobTitle}</h2>
                <h2>at</h2>
                <h2>{opportunity.company}</h2>
            </div>
            <hr></hr>
            <div className="opp-card-body">
                <h5>Description:</h5>
                <div className="opp-card-body-content"><p>{opportunity.desc}</p></div>

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
                    <p>{opportunity.interestLevel}</p>
                </div>
            </div>
            <hr></hr>
            <div className="opp-card-footer">
                <div>
                    <p>Date opplied:</p>
                    <p>{opportunity.dateopplied}</p>
                </div>
                <div>
                    <p>Last Contact:</p>
                    <p>{opportunity.lastContact}</p>
                </div>
            </div>
        </div>
    )
}