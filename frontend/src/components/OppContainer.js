import React, { useState, useEffect } from "react"
import { OppHeader } from "./OppHeader"
import { OppTile } from "./OppTile"
import { NewTile } from "./NewTile"
import { OppRow } from "./OppRow"
import { NewRow } from "./NewRow"
import { OppModal } from "./OppModal"
import { OppDetailsModal } from "./OppDetailsModal"
import { Contacts } from "./Contacts"
import { AnalyticsDashboard } from "./AnalyticsDashboard"
import "../styles/OppContainer.css"
import "../styles/OppModal.css"

export const OppContainer = ({ opportunities, addOpportunity, updateOpportunity }) => {
    const [ searchTerm, setSearchTerm ] = useState("")
    const [ sortValue, setSortValue ] = useState("created_at")
    const [ view, setView ] = useState("tile")
    const [ modalClass, setModalClass ] = useState("modal-hide")
    const [ detailModalClass, setDetailModalClass ] = useState("modal-hide")
    const [ formValues, setFormValues ] = useState({})

    const toggleView = (viewSelection) => {
        setView(viewSelection)
    } 

    const toggleDetailModal = () => {
        detailModalClass === "modal-show" ? setDetailModalClass("modal-hide") : setDetailModalClass("modal-show")
    }

    const selectOpp = (currentOpp) => {
        setFormValues(currentOpp)
        toggleDetailModal()
    }

    const toggleModal = () => {
        modalClass === "modal-show" ? setModalClass("modal-hide") : setModalClass("modal-show")
        console.log(modalClass)
    }

    const renderOppotunities = () => {
        const sortedOpps = opportunities.sort((opp1, opp2) => opp1[sortValue] > opp2[sortValue] ? 1 : opp1[sortValue] < opp2[sortValue] ? -1 : 0)
        const filteredOpps = sortedOpps.filter(opp => opp.job_title.toLowerCase().includes(searchTerm.toLowerCase()) || opp.company.toLowerCase().includes(searchTerm.toLowerCase()) || opp.location.toLowerCase().includes(searchTerm.toLowerCase()))

        if (view === "tile") {
            return <div className="tile-view">
                {filteredOpps.map(opportunity => <OppTile key={opportunity.id} opportunity={opportunity}  selectOpp={selectOpp}/>)}
                <NewTile toggleModal={toggleModal}/>
            </div>  
        } else if (view === "list") {
            return <div className="list-view">
                {opportunities.map(opportunity => <OppRow key={opportunity.id} opportunity={opportunity} selectOpp={selectOpp}/>)}
                <NewRow toggleModal={toggleModal}/>
            </div>
        }
    }

    return(
        <>
            <OppHeader toggleView={toggleView} toggleModal={toggleModal} setSearchTerm={setSearchTerm} setSortValue={setSortValue}/>
            {renderOppotunities()}
            <OppModal modalClass={modalClass} toggleModal={toggleModal} addOpportunity={addOpportunity}/>
            <OppDetailsModal modalClass={detailModalClass} toggleModal={toggleDetailModal} formValues={formValues} setFormValues={setFormValues} updateOpportunity={updateOpportunity}/>
        </>
    )
}