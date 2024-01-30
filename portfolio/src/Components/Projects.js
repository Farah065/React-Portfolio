import Card from './Card';
import calcImg from './Images/Calc.png';
import lemonImg from './Images/Lemon.png';
import oathboundImg from './Images/Oathbound.png';
import tlouImg from './Images/TLOU.png';

const oathbound = ["Oathbound", "Game created using the Unity game engine in 2 days for the Global Game Jam (2023), along with 8 other mentors in the university’s game development club."];
const calc = ["React Calc", "Functional calculator created using React JS for the Meta front-end developer professional certificate on Coursera."];
const tlou = ["The Last of Us: Legacy", "Game created entirely using Java for the university’s object oriented programming course."];
const lemon = ["Little Lemon", "Landing page for the Little Lemon restaurant created using HTML & CSS for the Meta front-end developer professional certificate on Coursera."];

function Projects() {
    return (
        <div id='projects'>
            <div className='card-group'>
                <div>
                    <Card col='col-1' title={oathbound[0]} desc={oathbound[1]} img={oathboundImg}/>
                    <Card col='col-1' title={tlou[0]} desc={tlou[1]} img={tlouImg}/>
                </div>
                <div>
                    <Card col='col-2' title={calc[0]} desc={calc[1]} img={calcImg}/>
                    <Card col='col-2' title={lemon[0]} desc={lemon[1]} img={lemonImg}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;