import React, {useState, useEffect} from "react"
import "../styles/Contacts.css"

export const Contacts = () => {
    const [ contacts, setContacts ] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/contacts")
        .then(res => res.json())
        .then(contactsData => setContacts(contactsData))
    }, [])

    return(
        <div className="contacts-container">
            <div className="contacts-header">
                <h2>Contacts</h2>
            </div>
            <div className="contacts-table">
                <table>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Linked In</th>
                    {contacts.map(contact => {
                        return <tr>
                            <td>{contact.first_name}</td>
                            <td>{contact.last_name}</td>
                            <td>{contact.email}</td>
                            <td>{contact.phone}</td>
                            <td>{contact.linked_in}</td>
                        </tr>
                    })}
                </table>
            </div>
        </div>
    )
}