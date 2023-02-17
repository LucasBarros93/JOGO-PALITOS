import { useNavigate } from 'react-router-dom';

import './start.css';

import { Title, Button } from '../../components';
import '../../Styles.css'

function Start() {
  
  const navigate = useNavigate()
  const goto = () => {
    navigate({pathname:"/config"})
  }

  return (
    <div className="App">
      <div className='start'>
        <Title/>
        <Button>Singleplayer</Button>

        <Button onClick={goto}>Multiplayer</Button>
      </div>
    </div>
  );
}

export default Start;