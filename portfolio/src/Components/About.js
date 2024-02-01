import Avatar from './Images/Avatar.jpg';

function About() {
    return (
        <div id='about'>
            <div className='avatar-border'>
                <img src={Avatar} className='avatar'/>
            </div>
            <div className='intro-text'>
                <h2>Hey! I'm</h2>
                <h1>Farah</h1>
                <p>Third year <span className='highlight'>engineering</span> student. <br />
                    Aspiring <span className='highlight'>game developer</span>.</p>
            </div>
        </div>
    );
}

export default About;