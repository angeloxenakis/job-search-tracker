import React, { useState, useEffect } from "react"
import { oppData } from "./OppData"
import { OppHeader } from "./OppHeader"
import { OppTile } from "./OppTile"
import { NewTile } from "./NewTile"
import { OppRow } from "./OppRow"
import { NewRow } from "./NewRow"
import { OppModal } from "./OppModal"
import { OppDetailsModal } from "./OppDetailsModal"
import { AnalyticsDashboard } from "./AnalyticsDashboard"
import "../styles/OppContainer.css"
import "../styles/OppModal.css"

export const OppContainer = () => {
    const [ opportunityData, setOpportunityData ] = useState(oppData)
    const [ opportunities, setOpportunities ] = useState(oppData)
    const [ view, setView ] = useState("tile")
    const [ modalClass, setModalClass ] = useState("modal-hide")
    const [ detailModalClass, setDetailModalClass ] = useState("modal-hide")
    const [ formValues, setFormValues ] = useState({})
    

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

    const toggleDetailModal = (currentOpp) => {
        setFormValues(currentOpp)
        detailModalClass === "modal-show" ? setDetailModalClass("modal-hide") : setDetailModalClass("modal-show")
    }

    const toggleModal = () => {
        modalClass === "modal-show" ? setModalClass("modal-hide") : setModalClass("modal-show")
        console.log(modalClass)
    }

    const oppTiles = (
        <div className="tile-view">
            {opportunities.map(opportunity => <OppTile key={opportunity.id} opportunity={opportunity}  toggleDetailModal={toggleDetailModal}/>)}
            <NewTile toggleModal={toggleModal}/>
        </div>
    )

    const oppRows = (
        <div className="list-view">
            {opportunities.map(opportunity => <OppRow key={opportunity.id} opportunity={opportunity} toggleDetailModal={toggleDetailModal}/>)}
            <NewRow toggleModal={toggleModal}/>
        </div>
    )

    const filterOpps = (searchTerm) => {
        console.log(searchTerm)
        setOpportunities(opportunityData.filter(opp => opp.job_title.toLowerCase().includes(searchTerm.toLowerCase())))
    }

    const sortOpps = (sortSelection) => {
        console.log(opportunityData.sort((opp1, opp2) => opp1[sortSelection] > opp2[sortSelection] ? 1 : opp1[sortSelection] < opp2[sortSelection] ? -1 : 0))
        setOpportunities(opportunityData.sort((opp1, opp2) => opp1[sortSelection] > opp2[sortSelection] ? 1 : opp1[sortSelection] < opp2[sortSelection] ? -1 : 0))
    }

    const addOpportunity = (newOpp) => {
        setOpportunities([...opportunities, newOpp])
    }

    const updateOpportunity = (updatedOpp) => {
        setOpportunities(opportunities.map(opp => opp.id === updatedOpp.id ? opp = updatedOpp : opp))
        toggleDetailModal(updatedOpp)
    }

    if (view === "tile") {
        return(
            <>
                <OppHeader toggleView={toggleView} filterOpps={filterOpps} sortOpps={sortOpps} toggleModal={toggleModal}/>
                {oppTiles}
                <OppModal modalClass={modalClass} toggleModal={toggleModal} addOpportunity={addOpportunity}/>
                <OppDetailsModal modalClass={detailModalClass} toggleModal={toggleDetailModal} formValues={formValues} setFormValues={setFormValues} updateOpportunity={updateOpportunity}/>
                <AnalyticsDashboard opportunities={opportunities}/>
            </>
        )
    } else if (view === "list") {
        return(
            <>
                <OppHeader toggleView={toggleView} filterOpps={filterOpps} toggleModal={toggleModal}/>
                {oppRows}
                <OppModal modalClass={modalClass} toggleModal={toggleModal} addOpportunity={addOpportunity}/>
                <OppDetailsModal modalClass={detailModalClass} toggleModal={toggleDetailModal} formValues={formValues} setFormValues={setFormValues} updateOpportunity={updateOpportunity}/>
                <AnalyticsDashboard opportunities={opportunities}/>
            </>
        )
    }
}