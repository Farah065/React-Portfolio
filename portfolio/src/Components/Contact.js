import Avatar from './Images/Avatar.jpg';

function Contact() {
    return (
        <div id='contact'>
            <div className='avatar-border'>
                <img src={Avatar} className='avatar'/>
            </div>
            <div className='intro-text'>
                <h2>Hey! I'm</h2>
                <h1>Contact</h1>
            </div>
        </div>
    );
}

export default Contact;