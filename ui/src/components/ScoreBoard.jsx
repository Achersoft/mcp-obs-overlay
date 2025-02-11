import React from 'react';
import GameStateContext from "../GameStateContext.jsx";

const ScoreBoard = () => {
    const gameState  = React.useContext(GameStateContext);

    if (gameState.playerOne.color === 'BLUE') {
        return (
            <div style={{background: 'rgba(215,215,215,.9)', width: '10%', lineHeight: 1, display: "flex", justifyContent: "center", placeItems:"center"}}>
                <div className="row" style={{textAlign:"right", fontWeight: "bold", textTransform: "uppercase", fontSize:"xx-large"}}>
                    <span style={{color:"rgb(1,168,223)"}}>{gameState.playerOne.name} </span>
                    <span style={{color:"darkslategray"}}>VP </span>
                    <span style={{color:"rgba(255,0,0)", paddingLeft:"1px"}}>{rightPlayer} </span>
                </div>
            </div>
        );
    } else {
        return (
            <div style={{background: 'rgba(215,215,215,.9)', width: '10%', lineHeight: 1, display: "flex", justifyContent: "center", placeItems:"center"}}>
                <div className="row" style={{textAlign:"right", fontWeight: "bold", textTransform: "uppercase", fontSize:"xx-large"}}>
                    <span style={{color:"rgba(255,0,0)"}}>{leftPlayer} </span>
                    <span style={{color:"darkslategray"}}>VP </span>
                    <span style={{color:"rgb(1,168,223)", paddingLeft:"1px"}}>{rightPlayer} </span>
                </div>
            </div>
        );
    }

};

export default ScoreBoard;