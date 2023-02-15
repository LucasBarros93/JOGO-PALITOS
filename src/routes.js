import {BrowserRouter,Routes,Route} from 'react-router-dom';

import Start from "./pages/start/start.js"
import Config from './pages/config/Config.js';
import Game from "./pages/game/game.js"

const paths = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path = '/' element={<Start />}/>
                <Route path = '/config' element={<Config />}/>
                <Route path = '/game' element={<Game />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default paths