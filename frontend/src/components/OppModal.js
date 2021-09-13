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
                    <div className="modal-header">
                        <h2>Add Opportunity</h2>
                        <span className="close" onClick={toggleModal}>&times;</span>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit} className="modal-form">
                            <div className="modal-block">
                                <span>Job Title: <input type="text" name="job_title" className="bi-input" onChange={(e) => handleFormInput(e)}/></span>
                                <span>Company: <input type="text" name="company" className="bi-input" onChange={(e) => handleFormInput(e)}/></span>
                            </div>
                            <div>
                                Description: <textarea name="description" className="large-input" onChange={(e) => handleFormInput(e)}></textarea>
                            </div>
                            <div className="modal-block">
                                Salary: <input type="text" name="salary" className="tri-input" onChange={(e) => handleFormInput(e)}/>
                                Location: <input type="text" name="location" className="tri-input"  onChange={(e) => handleFormInput(e)}/>
                                Interest: <input type="text" name="interest_level" className="tri-input"  onChange={(e) => handleFormInput(e)}/>
                            </div>
                            <div className="modal-block">
                                Date Applied: <input type="text" name="date_applied" onChange={(e) => handleFormInput(e)}/>
                                Last Contact: <input type="text" name="last_contact" onChange={(e) => handleFormInput(e)}/>
                            </div>
                            <input type="submit" />
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button>Cancel</button>
                        <button>Create</button>
                    </div>

                </div>
            </div>
        </>
    )
}