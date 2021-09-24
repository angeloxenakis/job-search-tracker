import React from "react"
import "../styles/About.css"

export const About = () => {
    return(
        <>
        <div className="about-page">
            <div className="about-hero">
                <h1>Job Opp Tracker</h1>
                <ul>
                    <li>Keep track your job opportunities</li>
                    <li>Add contacts from your network</li>
                    <li>Log outreach and stay in touch</li>
                    <li>Analytics that inform your search</li>
                </ul>
            </div>
            <div className="about-info">
                <p>The Job Opp Tracker is an application designed to help you keep track of opportunities while searching for your next gig. If you've applied to tons of places, it can be hard to keep track of each one. When a company reaches back out, it can be challenging to remember details about the position. That's where we come in. We provide a place for you to track all of your opportunities regaurdless of which platform you applied on.</p>
            </div>
            <div className="about-features">
                <div className="feature-panel">Opportunities</div>
                <div className="feature-panel">Contacts & Outreach</div>
                <div className="feature-panel"></div>
            </div>
        </div>
        </>
    )
}