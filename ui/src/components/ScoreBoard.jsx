import React from 'react';
import GameStateContext from "../GameStateContext.jsx";

const ScoreBoard = () => {
    const gameState  = React.useContext(GameStateContext);

    return (
        <div style={{background: 'rgba(215,215,215,.9)', width: '10%', lineHeight: 1, display: "flex", flexDirection:"column", justifyContent: "center", placeItems:"center"}}>
            <div style={{display:"flex", width:"100%", textAlign:"center", fontWeight: "bold", textTransform: "uppercase", fontSize:"xx-large"}}>
                <div style={{width:"33%"}}>
                    <span style={{color: gameState.playerOne.color === 'BLUE' ? "rgb(1,168,223)" : "rgba(255,0,0)"}}>{gameState.playerOne.victoryPoints} </span>
                </div>
                <div style={{width:"34%"}}>
                    <span style={{color:"darkslategray"}}>VP </span>
                </div>
                <div style={{width:"33%"}}>
                    <span style={{color: gameState.playerTwo.color === 'BLUE' ? "rgb(1,168,223)" : "rgba(255,0,0)"}}>{gameState.playerTwo.victoryPoints} </span>
                </div>
            </div>
            <div style={{display:"flex", justifyContent:"center", alignContent:"center", width:"100%", textAlign:"center", fontWeight: "bold", fontSize:"x-large"}}>
                <span style={{color:"darkslategray"}}>Round: {gameState.round} </span>
            </div>
        </div>
    );
};

export default ScoreBoard;