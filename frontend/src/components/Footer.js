import React from "react"
import { Link } from "react-router-dom"
import "../styles/Footer.css"

export const Footer = () => {
    return(
        <div className="footer-component">
            <div className="footer-container">
                <div>
                    <h1>Job Opp</h1>
                    <h1>Tracker</h1>
                </div>
                <div className="footer-menu">
                    <div className="footer-link"><Link to="/login">Login</Link></div>
                    <div className="footer-link"><Link to="/setting">Settings</Link></div>
                    <div className="footer-link"><Link to="/about">About</Link></div>
                    <div className="footer-link">Contact</div>
                    <div className="footer-link">Blog</div>
                </div>
            </div>
            <div className="foot-note">
                This application was created by <a href="https://www.angeloxenakis.com">Angelo Xenakis</a> with React.js & Ruby on Rails
            </div>
        </div>
    )
}