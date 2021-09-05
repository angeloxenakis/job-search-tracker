import React from "react"
import "../styles/NavBar.css"

export const NavBar = () => {
    return(
        <div className="nav-bar">
            <div className="nav-bar-block">
                <h3>Job Search Tracker</h3>
            </div>
            <div className="nav-bar-block">
                <a href="/">Login </a>
                or
                <a href="/"> Signup</a>
            </div>
        </div>
    )
}