import React from "react"

export const OppModal = ({modalClass, toggleModal}) => {
    return(
        <>
            <div className={modalClass}>
                <div className="modal-content">
                    <span className="close" onClick={toggleModal}>&times;</span>
                    <p>Some text in the Modal..</p>
                </div>
            </div>
        </>
    )
}