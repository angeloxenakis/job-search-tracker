import React from "react"
import "../styles/OppHeader.css"

export const OppHeader = ({ toggleView, filterOpps, sortOpps, toggleModal }) => {

    const handleSearchInput = (e) => {
        filterOpps(e.target.value)
    }

    const handleSortSelection = (e) => {
        sortOpps(e.target.value)
    }

    return(
        <div>
            <div className="opp-header">
                <h2>Opportunities</h2>
                <div className="opp-header-tools">
                    <div className="opp-header-search">
                        Search: <input type="text" placeholder="Title, Company, or Location" onChange={(e) => handleSearchInput(e)}></input>
                    </div>
                    <div className="opp-header-sort">
                        Sort by:
                        <select onChange={(e) => handleSortSelection(e)}>
                            <option value="job_title">Job Title</option>
                            <option value="company">Company</option>
                            <option value="salary">Salary</option>
                            <option value="location">Location</option>
                            <option value="interest_level">Interest</option>
                            <option value="date_applied">Date Applied</option>
                            <option value="last_contact">Date Applied</option>
                        </select>
                    </div>
                    <div>
                        View: <span onClick={() => toggleView("tile")}>Tile</span> | <span onClick={() => toggleView("list")}>List</span>
                    </div>
                    <div>
                        Add <button className="opp-header-add" onClick={toggleModal}>+</button>
                    </div>

                </div>
            </div>
        </div>
    )
}