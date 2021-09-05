import React from "react";
import "../styles/NewRow.css"

export const NewRow = ({ addOpportunity }) => {
    return(
        <div className="new-row">
            <button onClick={addOpportunity} className="row-plus-btn">+</button>
        </div>
    )
}