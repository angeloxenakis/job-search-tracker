import React, { useState } from "react"

export const OppModal = ({modalClass, toggleModal, addOpportunity}) => {

    const [ formValues, setFormValues ] = useState({
        job_title: "",
        company: "",
        description: "",
        salary: "",
        location: "",
        interest_level: "",
        data_applied: "",
        last_contact: ""
    })

    const handleFormInput = (e) => {
        formValues[e.target.name] = e.target.value
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch("http://localhost:3000/opportunities", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formValues)
        })
        .then(res => res.json())
        .then(newOpp => addOpportunity(newOpp))

        e.target.reset()
        toggleModal()
    }

    return(
        <>
            <div className={modalClass}>
                <div className="modal-content">
                    <span className="close" onClick={toggleModal}>&times;</span>
                    <form onSubmit={handleSubmit}>
                        Job Title: <input type="text" name="job_title" onChange={(e) => handleFormInput(e)}/><br/><br/>
                        Company: <input type="text" name="company" onChange={(e) => handleFormInput(e)}/><br/><br/>
                        Description: <input type="text" name="description" onChange={(e) => handleFormInput(e)}/><br/><br/>
                        Salary: <input type="text" name="salary" onChange={(e) => handleFormInput(e)}/><br/><br/>
                        Location: <input type="text" name="location" onChange={(e) => handleFormInput(e)}/><br/><br/>
                        Interest: <input type="text" name="interest_level" onChange={(e) => handleFormInput(e)}/><br/><br/>
                        Date Applied: <input type="text" name="date_applied" onChange={(e) => handleFormInput(e)}/><br/><br/>
                        Last Contact: <input type="text" name="last_contact" onChange={(e) => handleFormInput(e)}/><br/><br/>
                        <input type="submit" />
                    </form>
                </div>
            </div>
        </>
    )
}