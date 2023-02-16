import { Link } from 'react-router-dom';
import { useState } from 'react';

import './Config.css';

import { Title, Button } from '../../components';
import '../../Styles.css';

function Config() {
  const [lines, setLines] = useState()

  function getLines(){
    console.log(lines)
  }

  return (
    <div className="App">
      <div className='start'>
        <Title/>
        
        <input className='inputLines'
          type='text'
          placeholder="Quantas linhas vão ser?" 
          onChange={(e) => setLines(e.target.value)}/>

        <Link to="/">
          <Button>Voltar</Button>
        </Link>
        
        <Button>Tutorial</Button>
        
        <Link to="/game">
          <Button onClick={getLines}>Jogar</Button>
        </Link>
      </div>
    </div>
    );
  }


  export default Config;