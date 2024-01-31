import React, {useState} from 'react';
import {ReactComponent as ArrowDown} from './SVGs/ArrowDown.svg';
import {ReactComponent as ArrowUp} from './SVGs/ArrowUp.svg';

function Dropdown(props) {
    const [open, setOpen] = useState(false);

    const handleOpen = (e) => {
        e.preventDefault();
        setOpen(!open);
        if(open){
            var enqInput = document.querySelector(".enq");
            if(props.value === "Select one..."){
                enqInput.classList.add("invalid");
                props.setEnqEmpty(true);
            }
        }
    };

    const handleMenuOne = (e) => {
        e.preventDefault();
        props.handler("Freelancing");
        setOpen(false);
        var enqInput = document.querySelector(".enq");
        enqInput.classList.remove("invalid");
        props.setEnqEmpty(false);
    };
    const handleMenuTwo = (e) => {
        e.preventDefault();
        props.handler("Job Opportunity");
        setOpen(false);
        var enqInput = document.querySelector(".enq");
        enqInput.classList.remove("invalid");
        props.setEnqEmpty(false);
    };
    const handleMenuThree = (e) => {
        e.preventDefault();
        props.handler("Project collaboration");
        setOpen(false);
        var enqInput = document.querySelector(".enq");
        enqInput.classList.remove("invalid");
        props.setEnqEmpty(false);
    };
    const handleMenuFour = (e) => {
        e.preventDefault();
        props.handler("Bug report");
        setOpen(false);
        var enqInput = document.querySelector(".enq");
        enqInput.classList.remove("invalid");
        props.setEnqEmpty(false);
    };

    const handleMenuFive = (e) => {
        e.preventDefault();
        props.handler("Other");
        setOpen(false);
        var enqInput = document.querySelector(".enq");
        enqInput.classList.remove("invalid");
        props.setEnqEmpty(false);
    };

    return (
    <div className='dropdown'>
        {!open && <ArrowDown className='arrow' onClick={handleOpen} />}
        {open && <ArrowUp className='arrow' onClick={handleOpen} />}
        <button className='dropdown-btn enq' onClick={handleOpen} style={{color: props.value==="Select one..." ? '#757575' :'#2A2A2C'}}>{props.value}</button>
        {open ? (
            <ul className="menu">
                <li className="menu-item">
                    <button onClick={handleMenuOne}>Freelancing</button>
                </li>
                <li className="menu-item">
                    <button onClick={handleMenuTwo}>Job opportunity</button>
                </li>
                <li className="menu-item">
                    <button onClick={handleMenuThree}>Project collaboration</button>
                </li>
                <li className="menu-item">
                    <button onClick={handleMenuFour}>Bug report</button>
                </li>
                <li className="menu-item">
                    <button onClick={handleMenuFive}>Other</button>
                </li>
            </ul>
        ) : null}
    </div>
    );
}

export default Dropdown;