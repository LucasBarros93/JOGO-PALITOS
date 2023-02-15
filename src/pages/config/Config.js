import './Config.css';
import { Link } from 'react-router-dom';

function Config() {
    return (
      <div className="App">
        <div className='start'>
          <div class='titleBox'>
            <h1 class='title title1'>Jogo dos Palitos</h1>
            <h1 class='title title2'>Jogo dos Palitos</h1>
          </div>
          <form>
            <input className='inputLines' type='text' placeholder="Quantas linhas vão ser?"/>
          </form>
          <Link to="/">
            <button className='buttonPlayer'>Voltar</button>
          </Link>
          
          <button className='buttonPlayer'>Tutorial</button>
          
          <Link to="/game">
            <button className='buttonPlayer'>Jogar</button>
          </Link>
        </div>
      </div>
    );
  }


  export default Config;