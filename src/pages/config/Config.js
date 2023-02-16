import { Link } from 'react-router-dom';

import './Config.css';

import { Title, Button } from '../../components';
import '../../Styles.css';

function Config() {
    return (
      <div className="App">
        <div className='start'>
          <Title/>
          <form>
            <input className='inputLines' type='text' placeholder="Quantas linhas vão ser?"/>
          </form>
          <Link to="/">
            <Button>Voltar</Button>
          </Link>
          
          <Button>Tutorial</Button>
          
          <Link to="/game">
            <Button>Jogar</Button>
          </Link>
        </div>
      </div>
    );
  }


  export default Config;