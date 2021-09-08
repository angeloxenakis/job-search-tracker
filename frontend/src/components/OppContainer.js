import React, { useState, useEffect } from "react"
import { oppData } from "./OppData"
import { OppHeader } from "./OppHeader"
import { OppTile } from "./OppTile"
import { NewTile } from "./NewTile"
import { OppRow } from "./OppRow"
import { NewRow } from "./NewRow"
import { OppModal } from "./OppModal"
import { AnalyticsDashboard } from "./AnalyticsDashboard"
import "../styles/OppContainer.css"
import "../styles/OppModal.css"

export const OppContainer = () => {
    const [ opportunityData, setOpportunityData ] = useState(oppData)
    const [ opportunities, setOpportunities ] = useState(oppData)
    const [ view, setView ] = useState("tile")
    const [ modalClass, setModalClass ] = useState("modal-hide")

    useEffect(() => {
        fetch("http://localhost:3000/opportunities")
        .then(res => res.json())
        .then(opps => {
            setOpportunityData(opps)
            setOpportunities(opps)
        })
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

    const filterOpps = (searchTerm) => {
        console.log(searchTerm)
        setOpportunities(opportunityData.filter(opp => opp.job_title.toLowerCase().includes(searchTerm.toLowerCase())))
    }

    const sortOpps = (sortSelection) => {
        console.log(sortSelection)
    }

    const toggleModal = () => {
        modalClass === "modal-show" ? setModalClass("modal-hide") : setModalClass("modal-show")
        console.log(modalClass)
    }

    const addOpportunity = (newOpp) => {
        setOpportunities([...opportunities, newOpp])
    }

    if (view === "tile") {
        return(
            <>
                <OppHeader toggleView={toggleView} filterOpps={filterOpps} sortOpps={sortOpps}/>
                <div className="tile-view">
                    {oppTiles}
                    <NewTile toggleModal={toggleModal}/>
                </div>
                <OppModal modalClass={modalClass} toggleModal={toggleModal} addOpportunity={addOpportunity}/>
                <AnalyticsDashboard opportunities={opportunities}/>
            </>
        )
    } else if (view === "list") {
        return(
            <>
                <OppHeader toggleView={toggleView} filterOpps={filterOpps}/>
                <div className="list-view">
                    {oppRows}
                    <NewRow toggleModal={toggleModal}/>
                </div>
                <OppModal modalClass={modalClass} toggleModal={toggleModal}/>
                <AnalyticsDashboard opportunities={opportunities}/>
            </>
        )
    }
}