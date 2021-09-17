import React from "react"
import "../styles/OppHeader.css"

export const OppHeader = ({ toggleView, toggleModal, setSearchTerm, setSortValue }) => {

    const handleSearchInput = (e) => {
        setSearchTerm(e.target.value)
    }


    return(
        <div>
            <div className="opp-header">
                <h2>Opportunities</h2>
                <div className="opp-header-tools">
                    <div className="opp-header-search">
                        Search: <input type="text" placeholder="Title, Company, or Location" className="search" onChange={(e) => handleSearchInput(e)}></input>
                    </div>
                    <div className="opp-header-sort">
                        Sort by:
                        <select className="sort"onChange={(e) => setSortValue(e.target.value)}>
                            <option value="created_at">Date Created</option>
                            <option value="job_title">Job Title</option>
                            <option value="company">Company</option>
                            <option value="salary">Salary</option>
                            <option value="location">Location</option>
                            <option value="interest_level">Interest</option>
                            <option value="date_applied">Date Applied</option>
                            <option value="last_contact">Last Contact</option>
                        </select>
                    </div>
                    <div className="opp-header-view">
                        View: <span className="view-option" onClick={() => toggleView("tile")}>Tile</span> | <span className="view-option" onClick={() => toggleView("list")}>List</span>
                    </div>
                    <div className="opp-header-add">
                        Add: <button className="opp-header-add-btn" onClick={toggleModal}>+</button>
                    </div>

                </div>
            </div>
        </div>
    )
}