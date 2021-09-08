import React from "react"
import "../styles/AnalyticsDashboard.css"

export const AnalyticsDashboard = ({ opportunities }) => {
    return(
        <div className="analytics-dashboard">
            <h2>Analytics</h2>
            <div className="analtyics-container">
                <div className="opp-analytics">
                    <div className="opp-analytics-hero">
                        <h2>Opportunites Tracked:</h2>
                        <h2>{opportunities.length}</h2>
                    </div>
                    <div className="opp-analytics-details">
                        <div className="opp-analytics-detail-block">
                            <h2>Active Opportunities:</h2>
                            <h3>{opportunities.length} / {opportunities.length}</h3>
                        </div>
                        <div className="opp-analytics-detail-block">
                            <h3>Closed Opportunities:</h3>
                            <h3>0 / {opportunities.length}</h3>
                        </div>
                    </div>
                </div>
                <div className="contact-analytics">
                    <h2>Total Contacts</h2>
                    <h2>0</h2>
                    <h3>Outreach</h3>
                    <h3>0</h3>
                </div>
            </div>
        </div>
    )
}