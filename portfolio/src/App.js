import './App.css';
import { useEffect } from 'react';
import { Link } from 'react-scroll';
import {ReactComponent as LinkedinSVG} from './Components/SVGs/Linkedin.svg';
import {ReactComponent as GithubSVG} from './Components/SVGs/Github.svg';
import {ReactComponent as TwitterSVG} from './Components/SVGs/Twitter.svg';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {

  useEffect(() => {
    const nav = document.querySelector(".navbar-container");
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (lastScrollY < window.scrollY) {
        nav.classList.add("nav-hidden");
      } else {
        nav.classList.remove("nav-hidden");
      }

      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    }, []);

  return (
    <div className='app'>
      <div className='navbar-container'>
        <ul className='navbar'>
          <li className='nav-item'>
            <Link to="about" spy={true} smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className='nav-item'>
            <Link to="projects" spy={true} smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li className='nav-item'>
            <Link to="contact" spy={true} smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <About />
      <Projects />
      <Contact />

      <div className='socials'>
        <a href='https://www.linkedin.com/in/farah-ahmad-4b899626a/' target='_blank' rel='noreferrer'>
          <LinkedinSVG id='linkedin' width={40} height={40} />
        </a>
        <a href='https://github.com/Farah065' target='_blank' rel='noreferrer'>
          <GithubSVG id='github' width={40} height={40} />
        </a>
        <a href='https://twitter.com/pixlfar' target='_blank' rel='noreferrer'>
          <TwitterSVG id='twitter' width={40} height={40} />
        </a>
      </div>
    </div>
  );
}

export default App;
