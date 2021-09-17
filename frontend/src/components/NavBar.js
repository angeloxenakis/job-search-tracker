import React from "react"
import "../styles/NavBar.css"
import { Link } from "react-router-dom"

export const NavBar = () => {
    return(
        <div className="nav-bar">
            <div className="nav-bar-block">
                <Link to="/"><h1>Job Opp Tracker</h1></Link>
            </div>
            <div className="nav-bar-tools">
                <Link to="/about">About</Link>
                <div>Settings</div>
                <Link to="/login">Login</Link>
            </div>
        </div>
    )
}