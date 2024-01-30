import React, {useState} from 'react';
import Dropdown from './Dropdown';

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [enq, setEnq] = useState("Select one...");
    const [msg, setMsg] = useState("");

    const nameChange = (e) => {
        setName(e.target.value);
    }
    const emailChange = (e) => {
        setEmail(e.target.value);
    }
    const enqChange = (s) => {
        setEnq(s);
    }
    const msgChange = (e) => {
        setMsg(e.target.value);
    }

    const handleSubmit = (e) => {
		e.preventDefault();
		setName("");
        setEmail("");
        setEnq("Select one...");
        setMsg("");
	}

    return (
        <div id='contact'>
            <div className='contact-text'>
                <div>
                    <h1>Get </h1>
                    <h2>in</h2>
                </div>
                <div>
                    <h1 className='push-right'>Touch</h1>
                </div>
            </div>
            <div className='form-outline'>
                <div className='form-container'>
                    <div className='form-contents'>
                        <form>
                            <label>Name</label>
                            <input placeholder='Type here...' value={name} onChange={nameChange} required size={50} />
                            <label>Email</label>
                            <input placeholder='Type here...' value={email} onChange={emailChange} type='email' required />
                            <label>Type of Enquiry</label>
                            <Dropdown value={enq} handler={enqChange}/>
                            <label>Message</label>
                            <input placeholder='Type here...' value={msg} onChange={msgChange} required />
                        </form>
                        <button className='submit-btn' disabled={!name || !email || enq === "Select one..." || !msg} type="submit" onClick={handleSubmit}>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
            <p className='copyright'>Farah • © 2024</p>
        </div>
    );
}

export default Contact;