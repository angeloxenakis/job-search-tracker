import React from "react";
import "../styles/NewRow.css"

export const NewRow = ({ toggleModal }) => {
    return(
        <div className="new-row">
            <button onClick={toggleModal} className="row-plus-btn">+</button>
        </div>
    )
}