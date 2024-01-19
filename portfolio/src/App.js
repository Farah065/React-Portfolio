import './App.css';
import Avatar from './Images/Avatar.jpg';

function App() {
  return (
    <div className='App'>
      <div className='avatarBorder'>
        <img src={Avatar} height={350} className='avatar'/>
      </div>
      <div className='introText'>
        <h2>Hey! I'm</h2>
        <h1>Farah</h1>
      </div>
    </div>
  );
}

export default App;
