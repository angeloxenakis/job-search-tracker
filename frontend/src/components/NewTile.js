import React from "react";
import "../styles/NewTile.css"

export const NewTile = ({ addOpportunity, toggleModal }) => {
    return(
        <div className="new-tile">
            <button onClick={toggleModal} className="plus-btn">+</button>
        </div>
    )
}