import Avatar from './Images/Avatar.jpg';

function Projects() {
    return (
        <div id='projects'>
            <div className='avatar-border'>
                <img src={Avatar} className='avatar'/>
            </div>
            <div className='intro-text'>
                <h2>Hey! I'm</h2>
                <h1>Projects</h1>
            </div>
        </div>
    );
}

export default Projects;