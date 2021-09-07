import React from "react";
import "../styles/NewTile.css"

export const NewTile = ({ toggleModal }) => {
    return(
        <div className="new-tile">
            <button onClick={toggleModal} className="plus-btn">+</button>
        </div>
    )
}