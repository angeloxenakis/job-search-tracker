import React, { useState, useEffect } from "react"
import { OppContainer } from "./OppContainer"
import { Contacts } from "./Contacts"
import { AnalyticsDashboard } from "./AnalyticsDashboard"
import { Footer } from "./Footer"

export const AppContainer = () => {
    const [ opportunities, setOpportunities ] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/opportunities")
        .then(res => res.json())
        .then(opps => setOpportunities(opps))
    }, [])

    const addOpportunity = (newOpp) => {
        setOpportunities([...opportunities, newOpp])
    }

    const updateOpportunity = (updatedOpp) => {
        setOpportunities(opportunities.map(opp => opp.id === updatedOpp.id ? opp = updatedOpp : opp))
    }

    return(
        <div>
            <OppContainer opportunities={opportunities} addOpportunity={addOpportunity} updateOpportunity={updateOpportunity}/>
            <Contacts />
            <AnalyticsDashboard opportunities={opportunities}/>
        </div>
    )
}