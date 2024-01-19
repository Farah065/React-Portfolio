import Avatar from './Images/Avatar.jpg';

function About() {
    return (
        <div>
            <div className='avatarBorder'>
                <img src={Avatar} className='avatar'/>
            </div>
            <div className='introText'>
                <h2>Hey! I'm</h2>
                <h1>Farah</h1>
            </div>
        </div>
    );
}

export default About;