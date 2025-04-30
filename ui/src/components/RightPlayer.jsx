import React from 'react';
import GameStateContext from "../GameStateContext.jsx";

const RightPlayer = () => {
    const gameState  = React.useContext(GameStateContext);

    if (gameState.playerTwo.color === 'BLUE') {
        return (
            <div style={{background: 'linear-gradient(to left, rgba(0,200,255,1), rgba(0,125,200,1))', width: '35%', clipPath: 'polygon(0px 0px, 100% 0%, 85% 100%, 0% 100%)', paddingLeft: '10px', lineHeight: 1}}>
                <div className="row" style={{textAlign:"left", fontWeight: "bolder", fontSize:"x-large"}}>
                    {gameState.playerTwo.affiliation}
                </div>
                <div className="row" style={{textAlign:"left", fontStyle: "italic", fontSize: "smaller", paddingBottom: '2px', paddingTop: '2px'}}>
                    {gameState.playerTwo.crisis.name} ({gameState.threat})
                </div>
                <div className="row" style={{textAlign:"left", fontWeight: "bold", paddingBottom: '6px'}}>
                    {gameState.playerTwo.name}
                </div>
            </div>
        );
    } else if (gameState.playerTwo.color === 'RED') {
        return (
            <div style={{background: 'linear-gradient(to left, rgba(255,146,146,1), rgba(255,0,0,1))', width: '35%', clipPath: 'polygon(0px 0px, 100% 0%, 85% 100%, 0% 100%)', paddingLeft: '10px', lineHeight: 1}}>
                <div className="row" style={{textAlign:"left", fontWeight: "bolder", fontSize:"x-large"}}>
                    {gameState.playerTwo.affiliation}
                </div>
                <div className="row" style={{textAlign:"left", fontStyle: "italic", fontSize: "smaller", paddingBottom: '2px', paddingTop: '2px'}}>
                    {gameState.playerTwo.crisis.name} ({gameState.threat})
                </div>
                <div className="row" style={{textAlign:"left", fontWeight: "bold", paddingBottom: '6px'}}>
                    {gameState.playerTwo.name}
                </div>
            </div>
        );
    } else {
        return (
            <div style={{background: 'linear-gradient(to left, rgba(165,165,165,1), rgba(135,135,135,1))', width: '35%', clipPath: 'polygon(0px 0px, 100% 0%, 85% 100%, 0% 100%)', paddingLeft: '10px', lineHeight: 1}}>
                <div className="row" style={{textAlign:"left", fontWeight: "bolder", textTransform: "uppercase", fontSize:"x-large"}}>
                    {gameState.playerTwo.affiliation}
                </div>
                <div className="row" style={{textAlign:"left", fontStyle: "italic", fontSize: "smaller", paddingBottom: '2px', paddingTop: '2px'}}>
                    {gameState.playerTwo.crisis.name} ({gameState.threat})
                </div>
                <div className="row" style={{textAlign:"left", fontWeight: "bold", paddingBottom: '6px'}}>
                    {gameState.playerTwo.name}
                </div>
            </div>
        );
    }


};

export default RightPlayer;