import React, { useState } from "react"

export const OppModal = ({modalClass, toggleModal, addOpportunity}) => {

    const [ formValues, setFormValues ] = useState({job_title: "", company: "", description: "", salary: "", location: "", interest_level: "", date_applied: "", last_contact: ""})

    const handleFormInput = (e) => {
        setFormValues({...formValues, [e.target.name]: e.target.value})
    }

    const resetForm = () => {
        setFormValues({job_title: "", company: "", description: "", salary: "", location: "", interest_level: "", date_applied: "", last_contact: ""})
    }

    const handleSubmit = () => {
        fetch("http://localhost:3000/opportunities", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formValues)
        })
        .then(res => res.json())
        .then(newOpp => addOpportunity(newOpp))

        resetForm()
        toggleModal()
    }

    return(
        <>
            <div className={modalClass}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h2>Add Opportunity</h2>
                        <span className="close" onClick={toggleModal}>&times;</span>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit} className="modal-form">
                            <div className="modal-block">
                                <span>Job Title: <input type="text" name="job_title" value={formValues.job_title} className="bi-input" onChange={(e) => handleFormInput(e)}/></span>
                                <span>Company: <input type="text" name="company" value={formValues.company} className="bi-input" onChange={(e) => handleFormInput(e)}/></span>
                            </div>
                            <div>
                                Description: <textarea name="description" value={formValues.description} className="large-input" onChange={(e) => handleFormInput(e)}></textarea>
                            </div>
                            <div className="modal-block">
                                <span>Salary: <input type="text" name="salary" value={formValues.salary} className="tri-input" onChange={(e) => handleFormInput(e)}/></span>
                                <span>Location: <input type="text" name="location" value={formValues.location} className="tri-input"  onChange={(e) => handleFormInput(e)}/></span>
                                <span>Interest: <input type="text" name="interest_level" value={formValues.interest_level} className="tri-input"  onChange={(e) => handleFormInput(e)}/></span>
                            </div>
                            <div className="modal-block">
                                <span>Date Applied: <input type="text" name="date_applied" value={formValues.date_applied} className="bi-input" onChange={(e) => handleFormInput(e)}/></span>
                                <span>Last Contact: <input type="text" name="last_contact" value={formValues.last_contact} className="bi-input" onChange={(e) => handleFormInput(e)}/></span>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button onClick={toggleModal} className="cancel-btn">Cancel</button>
                        <button onClick={handleSubmit}className="create-btn">Create</button>
                    </div>
                </div>
            </div>
        </>
    )
}