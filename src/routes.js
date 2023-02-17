import {BrowserRouter,Routes,Route} from 'react-router-dom';

import Start from "./pages/start/start.js"
import Config from './pages/config/Config.js';
import Game from "./pages/game/game.js"

const paths = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path = '/' element={<Start />}/>
                <Route exact path = '/config' element={<Config/>}/>
                <Route exact path = '/game' element={<Game />} />
            </Routes>
        </BrowserRouter>
    )
}

export default paths