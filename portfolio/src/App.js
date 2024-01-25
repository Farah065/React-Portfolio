import './App.css';
//import { useEffect } from 'react';
import { Link } from 'react-scroll';
import {ReactComponent as LinkedinSVG} from './SVGs/Linkedin.svg';
import {ReactComponent as GithubSVG} from './SVGs/Github.svg';
import {ReactComponent as TwitterSVG} from './SVGs/Twitter.svg';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {

  // useEffect(() => {
  //   const nav = document.querySelector(".navbar");
  //   let lastScrollY = window.scrollY;

  //   const handleScroll = () => {
  //     if (lastScrollY < window.scrollY) {
  //       nav.classList.add("nav-hidden");
  //       console.log('hide');
  //     } else {
  //       nav.classList.remove("nav-hidden");
  //       console.log('unhide');
  //     }

  //     lastScrollY = window.scrollY;
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   // Cleanup the event listener when the component is unmounted
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  //   }, []);

  return (
    <div className='app'>
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

      <About />
      <Projects />
      <Contact />

      <div className='socials'>
        <a href='https://www.linkedin.com/in/farah-ahmad-4b899626a/' target='_blank'>
          <LinkedinSVG width={40} height={40} />
        </a>
        <a href='https://github.com/Farah065' target='_blank'>
          <GithubSVG width={40} height={40} />
        </a>
        <a href='https://twitter.com/pixlfar' target='_blank'>
          <TwitterSVG width={40} height={40} />
        </a>
      </div>
    </div>
  );
}

export default App;
