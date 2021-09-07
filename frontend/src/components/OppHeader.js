import React from "react"
import "../styles/OppHeader.css"

export const OppHeader = ({ toggleView }) => {
    return(
        <div>
            <div className="opp-header">
                <h2>Opportunities</h2>
                <div className="opp-header-tools">
                    <div className="opp-header-sort">
                        <h4>Sort by:</h4>
                        <select>
                            <option>Date Applied</option>
                            <option>Date Applied</option>
                        </select>
                    </div>
                    <h4>View: <span onClick={() => toggleView("tile")}>Tile</span> | <span onClick={() => toggleView("list")}>List</span></h4>
                </div>
            </div>
        </div>
    )
}