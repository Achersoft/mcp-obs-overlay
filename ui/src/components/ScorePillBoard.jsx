import React from 'react';
import GameStateContext from "../GameStateContext.jsx";

const ScorePillBoard = () => {
    const gameState  = React.useContext(GameStateContext);

    return (
        <div style={{lineHeight: 1, display: "flex", flexDirection:"row", justifyContent: "center", placeItems:"center"}}>
           <div style={{background: gameState.playerOne.color === 'BLUE' ? "rgba(0,125,255,.9)" : "rgba(255,0,0,.9)", border: "5px solid black", borderRadius: "60px", width:"100px", height: "36px", textAlign:"center", fontWeight: "bold", textTransform: "uppercase", fontSize:"32px", marginRight: "-25px", zIndex: "-1"}}>
               <span>{gameState.playerOne.victoryPoints} </span>
           </div>
           <div style={{background: 'rgba(215,215,215)', border: "5px solid black", borderRadius: "60px", width:"60px", height: "60px", textAlign:"center", fontWeight: "bold", textTransform: "uppercase", fontSize:"54px"}}>
               <span style={{color:"darkslategray"}}>{gameState.round}</span>
           </div>
           <div style={{background: gameState.playerTwo.color === 'BLUE' ? "rgba(0,125,255,.9)" : "rgba(255,0,0,.9)", border: "5px solid black", borderRadius: "60px", width:"100px", height: "36px", textAlign:"center", fontWeight: "bold", textTransform: "uppercase", fontSize:"32px", marginLeft: "-25px", zIndex: "-1"}}>
               <span>{gameState.playerTwo.victoryPoints} </span>
           </div>
        </div>
    );
};

export default ScorePillBoard;