import React, {useState, useEffect} from "react"
import "../styles/Contacts.css"

export const Contacts = () => {
    const [ contacts, setContacts ] = useState([])
    const [ contactSortValue, setContactSortValue ] = useState("first_name")
    const [ contactView, setContactView ] = useState("list")
    const [ currentContact, setCurrentContact ] = useState({})

    useEffect(() => {
        fetch("http://localhost:3000/contacts")
        .then(res => res.json())
        .then(contactsData => setContacts(contactsData))
    }, [])

    const toggleContactView = (contact) => {
        setCurrentContact(contact)
        if(contactView === "list") {
            setContactView("details")
        } else if (contactView === "details") {
            setContactView("list")
        }
    }

    const renderContactRows = contacts.sort((con1, con2) => con1[contactSortValue] > con2[contactSortValue] ? 1 : con1[contactSortValue] < con2[contactSortValue] ? -1 : 0).map(contact => {
        return <div className="contact-row" onClick={() => toggleContactView(contact)}>
            <div className="name-cell">{contact.first_name}</div>
            <div className="name-cell">{contact.last_name}</div>
            <div className="co-cell">{contact.company}</div>
            <div className="date-cell">{contact.last_contact}</div>
        </div>
    })

    const displayContactList = (
        <div className="contacts-table">
            <div className="contact-list-header">
                <h3>Contacts List</h3>
                <div className="contacts-tools">
                    <div className="contact-sort">
                        Sort by:
                        <select className="sort" onChange={(e) => setContactSortValue(e.target.value)}>
                            <option value="first_name">First Name</option>
                            <option value="last_name">Last Name</option>
                            <option value="company">Company</option>
                            <option value="last_contact">Last Contact</option>
                        </select>
                    </div>
                    <div className="opp-header-add">
                        Add: <button className="opp-header-add-btn">+</button>
                    </div>
                </div>
            </div>
            <div className="contact-table-header">
                <div className="name-cell">First</div>
                <div className="name-cell">Last</div>
                <div className="co-cell">Company</div>
                <div className="date-cell">Last Contact</div>
            </div>
            <div className="contact-row-container">
                {renderContactRows}
            </div>

        </div>
    )

    const displayContactDetails = (
        <div className="contact-table">
            <button onClick={() => toggleContactView(currentContact)}>Back to List</button>
            <h3>Name: {currentContact.first_name} {currentContact.last_name}</h3>
            <h3>Company: {currentContact.company}</h3>
            <h3>Email: {currentContact.email}</h3>
            <h3>Phone: {currentContact.phone}</h3>
            <h3>Last Contact: {currentContact.last_contact}</h3>
        </div>
    )

    return(
        <div className="contacts-component">
            <div className="contacts-header">
                <h2>Contacts</h2>
            </div>
            <div className="contacts-container">
                {contactView === "list" ? displayContactList : displayContactDetails}
            </div>
        </div>
    )
}