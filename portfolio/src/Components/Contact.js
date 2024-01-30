import Avatar from './Images/Avatar.jpg';

function Contact() {
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
                    <form>
                        <label>Name</label>
                        <input placeholder='Type here...' required size={50} />
                        <label>Email</label>
                        <input placeholder='Type here...' type='email' required />
                        <label>Type of Enquiry</label>
                        <input />
                        <label>Message</label>
                        <input placeholder='Type here...' required />
                    </form>
                </div>
            </div>
            <p className='copyright'>Farah • © 2024</p>
        </div>
    );
}

export default Contact;