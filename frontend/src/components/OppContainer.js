import React, { useState, useEffect } from "react"
import { oppData } from "./OppData"
import { OppHeader } from "./OppHeader"
import { OppTile } from "./OppTile"
import { NewTile } from "./NewTile"
import { OppRow } from "./OppRow"
import { NewRow } from "./NewRow"
import { OppModal } from "./OppModal"
import "../styles/OppContainer.css"
import "../styles/OppModal.css"

export const OppContainer = () => {
    const [ opportunities, setOpportunities ] = useState(oppData)
    const [ view, setView ] = useState("tile")
    const [modalClass, setModalClass] = useState("modal-hide")

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

    const toggleModal = () => {
        modalClass === "modal-show" ? setModalClass("modal-hide") : setModalClass("modal-show")
        console.log(modalClass)
    }

    const addOpportunity = () => {
        // fetch("http://localhost:3000/opportunities", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //         "Accept": "applicaiton/json"
        //     },
        //     body: JSON.stringify({
        //         company: "",
        //         job_title: "",
        //         description: "",
        //         salary: "",
        //         location: "",
        //         interest_level: "",
        //         date_applied: "",
        //         last_contact: ""
        //     })
        // })
        // .then(res => res.json())
        // .then(newOpportunity => setOpportunities([...opportunities, newOpportunity]))
    }

    if (view === "tile") {
        return(
            <>
                <OppHeader toggleView={toggleView}/>
                <div className="tile-view">
                    {oppTiles}
                    <NewTile toggleModal={toggleModal}/>
                </div>
                <OppModal modalClass={modalClass} toggleModal={toggleModal}/>
            </>
        )
    } else if (view === "list") {
        return(
            <>
                <OppHeader toggleView={toggleView} />
                <div className="list-view">
                    {oppRows}
                    <NewRow toggleModal={toggleModal}/>
                </div>
                <OppModal modalClass={modalClass} toggleModal={toggleModal}/>
            </>
        )
    }
}