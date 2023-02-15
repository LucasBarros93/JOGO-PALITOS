import './game.css'

function Game() {
    return (
      <div className="App">
        <div className='start'>
          <div class='titleBox'>
            <h1 class='title title1'>Jogo dos Palitos</h1>
            <h1 class='title title2'>Jogo dos Palitos</h1>
          </div>
          <p>Player 1</p>
          <div className="line line1">
            <button className='buttonGame'>|</button>
          </div>
          <div className="line line2">
            <button className='buttonGame'>|</button>
            <button className='buttonGame'>|</button>
          </div>
          <button className='buttonPlayer'>Passar</button>

        </div>
      </div>
    );
  }
  
  export default Game;