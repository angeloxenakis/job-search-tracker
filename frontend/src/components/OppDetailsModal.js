import React, { useState } from "react"

export const OppDetailsModal = ({modalClass, toggleModal, selectedOpp}) => {

    const [ formValues, setFormValues ] = useState({job_title: "", company: "", description: "", salary: "", location: "", interest_level: "", date_applied: "", last_contact: ""})

    const handleFormInput = (e) => {
        setFormValues({...formValues, [e.target.name]: e.target.value})
    }

    const resetForm = () => {
        setFormValues({job_title: "", company: "", description: "", salary: "", location: "", interest_level: "", date_applied: "", last_contact: ""})
    }

    return(
        <>
            <div className={modalClass}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h2>Opportunity Details</h2>
                        <span className="close" onClick={toggleModal}>&times;</span>
                    </div>
                    <div className="modal-body">
                        <form className="modal-form">
                            <div className="modal-container">
                                <div className="modal-hero">
                                    <div className="modal-row">
                                        <span>Job Title: <br></br><div className="bi-field">{selectedOpp.job_title}</div> </span>
                                        <span>Company: <br></br><div className="bi-field">{selectedOpp.company}</div> </span>
                                    </div>
                                    <div>
                                        Description: <br></br><div className="large-field">Yo</div>
                                    </div>  
                                </div>
                                <div className="modal-column">
                                    <div className="modal-col-input">Salary: <input type="text" name="salary" value={formValues.salary} className="tri-input" onChange={(e) => handleFormInput(e)}/></div>
                                    <div className="modal-col-input">Location: <input type="text" name="location" value={formValues.location} className="tri-input"  onChange={(e) => handleFormInput(e)}/></div>
                                    <div className="modal-col-input">Interest: <input type="text" name="interest_level" value={formValues.interest_level} className="tri-input"  onChange={(e) => handleFormInput(e)}/></div>
                                </div>
                            </div>
                            
                            <div className="modal-block">
                                <span>Date Applied: <input type="text" name="date_applied" value={formValues.date_applied} className="bi-input" onChange={(e) => handleFormInput(e)}/></span>
                                <span>Last Contact: <input type="text" name="last_contact" value={formValues.last_contact} className="bi-input" onChange={(e) => handleFormInput(e)}/></span>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button onClick={toggleModal} className="cancel-btn">Close</button>
                        <button className="create-btn">Edit</button>
                    </div>
                </div>
            </div>
        </>
    )
}