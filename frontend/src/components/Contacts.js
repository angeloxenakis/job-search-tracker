import React, {useState, useEffect} from "react"
import "../styles/Contacts.css"

export const Contacts = () => {
    const [ contacts, setContacts ] = useState([])
    const [ contactSortValue, setContactSortValue ] = useState("first_name")

    useEffect(() => {
        fetch("http://localhost:3000/contacts")
        .then(res => res.json())
        .then(contactsData => setContacts(contactsData))
    }, [])


    const displayContacts = contacts.sort((con1, con2) => con1[contactSortValue] > con2[contactSortValue] ? 1 : con1[contactSortValue] < con2[contactSortValue] ? -1 : 0).map(contact => {
        return <tr>
            <td>{contact.first_name}</td>
            <td>{contact.last_name}</td>
            <td>{contact.company}</td>
            <td>{contact.last_contact}</td>
        </tr>
    })


    return(
        <div className="contacts-component">
            <div className="contacts-header">
                <h2>Contacts</h2>
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
            <div className="contacts-container">
                <div className="contacts-table">
                    <table>
                        <th>First</th>
                        <th>Last</th>
                        <th>Company</th>
                        <th>Last Contact</th>
                        {displayContacts}
                    </table>
                </div>
            </div>
        </div>
    )
}