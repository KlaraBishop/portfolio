import React, { useState } from 'react';
import './contact-form.css'

function ContactForm() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [message, setMessage] = useState("")

    return (
        <form className="contact-form">
            <h2 className="contact-header">Contact Me</h2>
            <div className="form-row">
                <label htmlFor="firstName"></label>
                <input type="text" name="firstName" placeholder="First name" value={firstName} onChange={ e => setFirstName(e.target.value)} />

                <label htmlFor="lastName"></label>
                <input type="text" name="lastName" placeholder="Last name" value={lastName} onChange={ e => setLastName(e.target.value)} />
            </div>
            <div className="form-row">
                <label htmlFor="email"></label>
                <input type="text" name="email" placeholder="Email" value={email} onChange={ e => setEmail(e.target.value)} />

                <label htmlFor="phoneNumber"></label>
                <input type="text" name="phoneNumber" placeholder="Phone number" value={phoneNumber} onChange={ e => setPhoneNumber(e.target.value)} />
            </div>

            <label htmlFor="message"></label>
            <textarea name="Message" value={message} placeholder="Message" cols="50" rows="10" onChange={ e => setMessage(e.target.value)}></textarea>

            <button id="contact-submit">Submit</button>
        </form>
     );
}

export default ContactForm