import './game.css'

import { Title, Button } from '../../components';
import '../../Styles.css'


function Game() {
    return (
      <div className="App">
        <div className='start'>
          <Title/>
          <p>Player 1</p>
          <div className="line line1">
            <button className='buttonGame'>|</button>
          </div>
          <div className="line line2">
            <button className='buttonGame'>|</button>
            <button className='buttonGame'>|</button>
          </div>
          <Button>Passar</Button>

        </div>
      </div>
    );
  }
  
  export default Game;