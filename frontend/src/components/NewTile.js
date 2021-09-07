import React from "react";
import "../styles/NewTile.css"

export const NewTile = ({ addOpportunity }) => {
    return(
        <div className="new-tile">
            <button onClick={addOpportunity} className="plus-btn">+</button>
        </div>
    )
}