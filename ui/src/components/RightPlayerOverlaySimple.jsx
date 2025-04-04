import React from 'react';
import GameStateContext from "../GameStateContext.jsx";

const RightPlayerOverlaySimple = () => {
    const gameState  = React.useContext(GameStateContext);

    if (gameState.playerTwo.color === 'BLUE') {
        return (
            <div style={{background: 'linear-gradient(to left, rgba(0,200,255,0.5), rgba(0,200,255,.9))', width: '100%', paddingLeft: '10px', lineHeight: 1}}>
                <div className="row" style={{textAlign:"center", fontWeight: "bolder", textTransform: "uppercase", fontSize:"xx-large", top: "25px", margin: "auto", left: "0", right: "0", position: "absolute" }}>
                   {gameState.playerTwo.affiliation}
                </div>
                <div className="row" style={{textAlign:"center", fontWeight: "bold", fontSize:"x-large", top: "100px", margin: "auto", left: "0", right: "0", position: "absolute" }}>
                   {gameState.playerTwo.name}
                </div>
                <div className="row" style={{textAlign:"center", fontStyle: "italic", fontSize: "large", top: "165px", margin: "auto", left: "0", right: "0", position: "absolute" }}>
                    {gameState.playerTwo.crisis.name}-({gameState.threat})
                </div>
                <div className="row" style={{textAlign:"center", fontWeight: "bold", fontSize:"xx-large", top: "215px", margin: "auto", left: "0", right: "0", position: "absolute" }}>
                    VP: {gameState.playerTwo.victoryPoints}
                </div>
                <div className="row" style={{textAlign:"center", fontWeight: "bold", fontSize:"x-large", top: "260px", margin: "auto", left: "0", right: "0", position: "absolute" }}>
                    Round: {gameState.round}
                </div>
            </div>
        );
    } else if (gameState.playerTwo.color === 'RED') {
        return (
            <div style={{background: 'linear-gradient(to left, rgba(255,0,0,0.5), rgba(255,0,0,.9))', width: '100%', paddingLeft: '10px', lineHeight: 1}}>
                <div className="row" style={{textAlign:"center", fontWeight: "bolder", textTransform: "uppercase", fontSize:"xx-large", top: "25px", margin: "auto", left: "0", right: "0", position: "absolute" }}>
                   {gameState.playerTwo.affiliation}
                </div>
                <div className="row" style={{textAlign:"center", fontWeight: "bold", fontSize:"x-large", top: "100px", margin: "auto", left: "0", right: "0", position: "absolute" }}>
                   {gameState.playerTwo.name}
                </div>
                <div className="row" style={{textAlign:"center", fontStyle: "italic", fontSize: "large", top: "165px", margin: "auto", left: "0", right: "0", position: "absolute" }}>
                    {gameState.playerTwo.crisis.name}-({gameState.threat})
                </div>
                <div className="row" style={{textAlign:"center", fontWeight: "bold", fontSize:"xx-large", top: "215px", margin: "auto", left: "0", right: "0", position: "absolute" }}>
                    VP: {gameState.playerTwo.victoryPoints}
                </div>
                <div className="row" style={{textAlign:"center", fontWeight: "bold", fontSize:"x-large", top: "260px", margin: "auto", left: "0", right: "0", position: "absolute" }}>
                    Round: {gameState.round}
                </div>
            </div>
        );
    } else {
        return (
            <div style={{background: 'linear-gradient(to left, rgba(165,165,165,0.5), rgba(135,135,135,.9))', width: '100%', paddingLeft: '10px', lineHeight: 1}}>
                <div className="row" style={{textAlign:"center", fontWeight: "bolder", textTransform: "uppercase", fontSize:"xx-large", top: "25px", margin: "auto", left: "0", right: "0", position: "absolute" }}>
                   {gameState.playerTwo.affiliation}
                </div>
                <div className="row" style={{textAlign:"center", fontWeight: "bold", fontSize:"x-large", top: "100px", margin: "auto", left: "0", right: "0", position: "absolute" }}>
                   {gameState.playerTwo.name}
                </div>
                <div className="row" style={{textAlign:"center", fontStyle: "italic", fontSize: "large", top: "165px", margin: "auto", left: "0", right: "0", position: "absolute" }}>
                    {gameState.playerTwo.crisis.name}-({gameState.threat})
                </div>
                <div className="row" style={{textAlign:"center", fontWeight: "bold", fontSize:"xx-large", top: "215px", margin: "auto", left: "0", right: "0", position: "absolute" }}>
                    VP: {gameState.playerTwo.victoryPoints}
                </div>
                <div className="row" style={{textAlign:"center", fontWeight: "bold", fontSize:"x-large", top: "260px", margin: "auto", left: "0", right: "0", position: "absolute" }}>
                    Round: {gameState.round}
                </div>
            </div>
        );
    }


};

export default RightPlayerOverlaySimple;