import React from 'react';
import GameStateContext from "../GameStateContext.jsx";

const LeftPlayerOverlaySimple = () => {
    const gameState  = React.useContext(GameStateContext);
    var backgroundState = 'linear-gradient(to top, rgba(165,165,165,0.5), rgba(135,135,135,.9))';

    if (gameState.playerOne.color === 'BLUE') {
        backgroundState = 'linear-gradient(to top, rgba(0,125,255,0.5), rgba(0,125,255,.9))';
    } else if (gameState.playerOne.color === 'RED') {
        backgroundState = 'linear-gradient(to top, rgba(255,0,0,0.5), rgba(255,0,0,.9))';
    }

    return (
        <div style={{background: `${backgroundState}`, width: '100%', paddingRight: '10px', lineHeight: 1}}>
            <div className="row" style={{textAlign:"center", fontWeight: "bolder", textTransform: "uppercase", fontSize:"xx-large", top: "25px", margin: "auto", left: "0", right: "0", position: "absolute" }}>
               {gameState.playerOne.affiliation}
            </div>
            <div className="row" style={{textAlign:"center", fontWeight: "bold", fontSize:"x-large", top: "100px", margin: "auto", left: "0", right: "0", position: "absolute" }}>
               {gameState.playerOne.name}
            </div>
            <div className="row" style={{textAlign:"center", fontStyle: "italic", fontSize: "large", top: "165px", margin: "auto", left: "0", right: "0", position: "absolute" }}>
                {gameState.playerOne.crisis.name}-({gameState.threat})
            </div>
            <div className="row" style={{textAlign:"center", fontWeight: "bold", fontSize:"xx-large", top: "215px", margin: "auto", left: "0", right: "0", position: "absolute" }}>
                VP: {gameState.playerOne.victoryPoints}
            </div>
            <div className="row" style={{textAlign:"center", fontWeight: "bold", fontSize:"x-large", top: "260px", margin: "auto", left: "0", right: "0", position: "absolute" }}>
                Round: {gameState.round}
            </div>
        </div>
    );
};

export default LeftPlayerOverlaySimple;