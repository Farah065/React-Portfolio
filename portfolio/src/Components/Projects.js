import Card from './Card';

const oathbound = ["Oathbound", "Game created using the Unity game engine in 2 days for the Global Game Jam (2023), along with 8 other mentors in the university’s game development club."];
const calc = ["React Calc", "Functional calculator created using React JS for the Meta front-end developer professional certificate on Coursera."];
const tlou = ["The Last of Us: Legacy", "Game created entirely using Java for the university’s object oriented programming course."];
const lemon = ["Little Lemon", "Landing page for the Little Lemon restaurant created using HTML & CSS for the Meta front-end developer professional certificate on Coursera."];

function Projects() {
    return (
        <div id='projects'>
            <div className='card-group'>
                <div>
                    <Card col='col-1' />
                    <Card col='col-1' />
                </div>
                <div>
                    <Card col='col-2' />
                    <Card col='col-2' />
                </div>
            </div>
        </div>
    );
}

export default Projects;