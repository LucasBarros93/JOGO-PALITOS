import { useNavigate, createSearchParams } from 'react-router-dom';
import { useState } from 'react';

import './Config.css';

import { Title, Button } from '../../components';
import '../../Styles.css';

function Config(props) {

  const navigate = useNavigate()
  const gotoStart = () => {
    navigate({pathname:"/"})
  }

  const gotoGame = () => {
    navigate({
      pathname:"/game",
      search: createSearchParams({
        id: lines
      }).toString()
    })
  }

  const [lines, setLines] = useState()

  return (
    <div className="App">
      <div className='start'>
        <Title/>
        
        <input className='inputLines'
          type='text'
          placeholder="Quantas linhas vão ser?" 
          onChange={(e) => setLines(e.target.value)}/>

        <Button onClick={gotoStart}>Voltar</Button>
        
        <Button>Tutorial</Button>
        
        <Button onClick={gotoGame}>Jogar</Button>
      </div>
    </div>
    );

  }


  export default Config;
  