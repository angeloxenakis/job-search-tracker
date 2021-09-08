import React from "react"
import "../styles/NavBar.css"

export const NavBar = () => {
    return(
        <div className="nav-bar">
            <div className="nav-bar-block">
                <h1>Job Search Tracker</h1>
            </div>
            <div className="nav-bar-block">
                <a href="/">Login </a>
                or
                <a href="/"> Signup</a>
            </div>
        </div>
    )
}