import './App.css';
import {ReactComponent as LinkedinSVG} from './SVGs/Linkedin.svg';
import {ReactComponent as GithubSVG} from './SVGs/Github.svg';
import {ReactComponent as TwitterSVG} from './SVGs/Twitter.svg';
import About from './Components/About';

function App() {
  return (
    <div className='App'>
      <About />
      <div className='socials'>
        <a href='https://www.linkedin.com/in/farah-ahmad-4b899626a/' target='_blank'>
          <LinkedinSVG />
        </a>
        <a href='https://github.com/Farah065' target='_blank'>
          <GithubSVG />
        </a>
        <a href='https://twitter.com/pixlfar' target='_blank'>
          <TwitterSVG />
        </a>
      </div>
    </div>
  );
}

export default App;
