import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import './game.css'

import { Title, Button } from '../../components';
import '../../Styles.css'


function Game(props) {
 
  function createLines(lines){
    const tab =[]
    
    for (let i = 1; i <= lines; i++) {
      var line = []
      for (let j = 1; j <= i; j++) {
        line.push(<button key={j} className='buttonGame'> | </button>)
      }
      tab.push(<div key={i}>{line}</div>)
    }

    return <>{tab}</>
  }

  const [player, setPlayer] = useState("Player 1")
  const pass = () => {player === 'Player 1' ? setPlayer("Player 2") : setPlayer("Player 1")}

  const [searchParams] = useSearchParams()

  return (
    <div className="App">
      <div className='start'>
        <Title/>
        <p>{player}</p>

        {createLines(searchParams.get("id"))}

        <Button onClick={pass}>Passar</Button>

      </div>
    </div>
    );
  }
  
  export default Game;