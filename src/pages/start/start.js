import { Link } from 'react-router-dom';

import './start.css';

import { Title, Button } from '../../components';
import '../../Styles.css'

function Start() {
  return (
    <div className="App">
      <div className='start'>
        <Title/>
        <Button>Singleplayer</Button>
        <Link to="/config">
          <Button>Multiplayer</Button>
        </Link>
      </div>
    </div>
  );
}

export default Start;