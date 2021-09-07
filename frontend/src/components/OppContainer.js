import React, { useState, useEffect } from "react"
import { oppData } from "./OppData"
import { OppHeader } from "./OppHeader"
import { OppTile } from "./OppTile"
import { NewTile } from "./NewTile"
import { OppRow } from "./OppRow"
import { NewRow } from "./NewRow"
import "../styles/OppContainer.css"

export const OppContainer = () => {
    const [ opportunities, setOpportunities ] = useState(oppData)
    const [ view, setView ] = useState("list")

    useEffect(() => {
        fetch("http://localhost:3000/opportunities")
        .then(res => res.json())
        .then(opps => setOpportunities(opps))
    }, [])

    const toggleView = (viewSelection) => {
        setView(viewSelection)
    } 

    const oppTiles = (
        opportunities.map(opportunity => <OppTile opportunity={opportunity} key={opportunity.id}/>)
    )

    const oppRows = (
        opportunities.map(opportunity => <OppRow opportunity={opportunity} key={opportunity.id}/>)
    )

    const addOpportunity = () => {
        setOpportunities([
            ...opportunities, 
            {
                company: "Apple",
                job_title: "Backend Engineer",
                description: "Ballin' out in Apple",
                salary: "170k",
                location: "Austin, Tx",
                interest_level: "High",
                date_applied: "08/23/21",
                last_contact: "09/01/21"
            }
        ])
    }

    if (view === "tile") {
        return(
            <>
                <OppHeader toggleView={toggleView}/>
                <div className="tile-view">
                    {oppTiles}
                    <NewTile addOpportunity={addOpportunity}/>
                </div>
            </>
        )
    } else if (view === "list") {
        return(
            <>
                <OppHeader toggleView={toggleView} />
                <div className="list-view">
                    {oppRows}
                    <NewRow addOpportunity={addOpportunity}/>
                </div>
            </>
        )
    }
}