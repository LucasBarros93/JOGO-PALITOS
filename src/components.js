import React from "react";

import './Styles.css'

function Title (props){
    return(
        <div className='titleBox'>
            <h1 className='title title1'>Jogo dos Palitos</h1>
            <h1 className='title title2'>Jogo dos Palitos</h1>
        </div>
    )
}

function Button (props){
    return(
        <button className='buttonPlayer' onClick={props.onClick}>{props.children}</button>
    )
}

export {Title, Button}