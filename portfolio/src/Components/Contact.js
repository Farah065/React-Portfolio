import React, {useState} from 'react';
import Dropdown from './Dropdown';

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [enq, setEnq] = useState("Select one...");
    const [msg, setMsg] = useState("");

    const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    const [nameEmpty, setNameEmpty] = useState(false);
    const [emailEmpty, setEmailEmpty] = useState(false);
    const [emailInvalid, setEmailInvalid] = useState(false);
    const [enqEmpty, setEnqEmpty] = useState(false);
    const [msgEmpty, setMsgEmpty] = useState(false);

    const nameChange = (e) => {
        setName(e.target.value);
        var nameInput = document.querySelector(".name");
        nameInput.classList.remove("invalid");
        setNameEmpty(false);
    }
    const emailChange = (e) => {
        setEmail(e.target.value);
        var emailInput = document.querySelector(".email");
        emailInput.classList.remove("invalid");
        setEmailEmpty(false);
        setEmailInvalid(false);
    }
    const enqChange = (s) => {
        setEnq(s);
        setEnqEmpty(false);
    }
    const msgChange = (e) => {
        setMsg(e.target.value);
        var msgInput = document.querySelector(".msg");
        msgInput.classList.remove("invalid");
        setMsgEmpty(false);
    }

    const handleSubmit = (e) => {
		e.preventDefault();
		setName("");
        setEmail("");
        setEnq("Select one...");
        setMsg("");
	}

    const unfocusName = () => {
        var nameInput = document.querySelector(".name");
        if (!name) {
            nameInput.classList.add("invalid");
            setNameEmpty(true);
        }
    }

    const unfocusEmail = () => {
        var emailInput = document.querySelector(".email");
        if (!email) {
            emailInput.classList.add("invalid");
            setEmailEmpty(true);
        }
        else if(!email.match(isValidEmail)){
            emailInput.classList.add("invalid");
            setEmailInvalid(true);
        }
    }

    const unfocusMsg = () => {
        var msgInput = document.querySelector(".msg");
        if (!msg) {
            msgInput.classList.add("invalid");
            setMsgEmpty(true);
        }
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
                            <label className='required'>Name</label>
                            <input className='input name' placeholder='Type here...' value={name} onChange={nameChange} onBlur={unfocusName} required maxLength={50} />
                            {nameEmpty && <p>This field is required</p>}
                            <label className='required'>Email</label>
                            <input className='input email' placeholder='Type here...' value={email} onChange={emailChange} onBlur={unfocusEmail} type='email' required />
                            {emailEmpty && <p>This field is required</p>}
                            {emailInvalid && <p>Invalid email</p>}
                            <label className='required'>Type of enquiry</label>
                            <Dropdown enqEmpty={enqEmpty} setEnqEmpty={setEnqEmpty} value={enq} handler={enqChange}/>
                            {enqEmpty && <p>This field is required</p>}
                            <label className='required'>Message</label>
                            <textarea className='input msg' placeholder='Type here...' value={msg} onChange={msgChange} onBlur={unfocusMsg} required />
                            {msgEmpty && <p>This field is required</p>}
                        </form>
                        <button className='submit-btn' disabled={!name || !email || emailInvalid || enq === "Select one..." || !msg} type="submit" onClick={handleSubmit}>
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