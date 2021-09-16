import React from "react"

export const OppDetailsModal = ({modalClass, toggleModal, updateOpportunity, setFormValues, formValues}) => {
    const handleFormInput = (e) => {
        setFormValues({...formValues, [e.target.name]: e.target.value})
        console.log(formValues)
    }

    const handleSubmit = () => {
        console.log(formValues)
        fetch(`http://localhost:3000/opportunities/${formValues.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formValues)
        })
        .then(res => res.json())
        .then(udpatedOpp => updateOpportunity(udpatedOpp))
    }
    
    return(
        <>
            <div className={modalClass}>
            <div className="modal-content">
                    <div className="modal-header">
                        <h2>Edit Opportunity</h2>
                        <span className="close" onClick={toggleModal}>&times;</span>
                    </div>
                    <div className="modal-body">
                        <form  className="modal-form">
                            <div className="modal-container">
                                <div className="modal-hero">
                                    <div className="modal-row">
                                        <span>Job Title: <br></br><input type="text" name="job_title" value={formValues.job_title} className="bi-input" onChange={(e) => handleFormInput(e)}/></span>
                                        <span>Company: <br></br><input type="text" name="company" value={formValues.company} className="bi-input" onChange={(e) => handleFormInput(e)}/></span>
                                    </div>
                                    <div>
                                        Description: <br></br><textarea name="description" value={formValues.description} className="large-input" onChange={(e) => handleFormInput(e)}></textarea>
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
                        <button onClick={toggleModal} className="cancel-btn">Cancel</button>
                        <button onClick={handleSubmit} className="create-btn">Save</button>
                    </div>
                </div>
            </div>
        </>
    )
}