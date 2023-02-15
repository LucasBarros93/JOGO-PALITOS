import './start.css';
import { Link } from 'react-router-dom';

function Start() {
  return (
    <div className="App">
      <div className='start'>
        <div class='titleBox'>
          <h1 class='title title1'>Jogo dos Palitos</h1>
          <h1 class='title title2'>Jogo dos Palitos</h1>
        </div>
        <button className='buttonPlayer'>Singleplayer</button>
        <Link to="/config">
          <button className='buttonPlayer'>Multiplayer</button>
        </Link>
      </div>
    </div>
  );
}

export default Start;