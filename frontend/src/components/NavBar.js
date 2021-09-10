import React from "react"
import "../styles/NavBar.css"

export const NavBar = () => {
    return(
        <div className="nav-bar">
            <div className="nav-bar-block">
                <a href="/"><h1>Job Opp Tracker</h1></a>
            </div>
            <div className="nav-bar-tools">
                <div>About</div>
                <div>Settings</div>
                <div>Login</div>
            </div>
        </div>
    )
}