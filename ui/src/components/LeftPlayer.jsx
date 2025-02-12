import React from 'react';
import GameStateContext from "../GameStateContext.jsx";

const LeftPlayer = () => {
    const gameState  = React.useContext(GameStateContext);

    if (gameState.playerOne.color === 'BLUE') {
        return (
            <div style={{background: 'linear-gradient(to right, rgba(0,200,255,0.5), rgba(0,200,255,.9))', width: '35%', clipPath: 'polygon(0px 0px, 100% 0%, 100% 100%, 15% 100%)', paddingRight: '10px', lineHeight: 1}}>
                <div className="row" style={{textAlign:"right", fontWeight: "bolder", textTransform: "uppercase", fontSize:"x-large"}}>
                    {gameState.playerOne.affiliation}
                </div>
                <div className="row" style={{textAlign:"right", fontStyle: "italic", fontSize: "smaller", paddingBottom: '2px', paddingTop: '2px'}}>
                    {gameState.playerOne.crisis} ({gameState.threat})
                </div>
                <div className="row" style={{textAlign:"right", fontWeight: "bold", paddingBottom: '6px'}}>
                    {gameState.playerOne.name}
                </div>
            </div>
        );
    } else if (gameState.playerOne.color === 'RED') {
        return (
            <div style={{background: 'linear-gradient(to right, rgba(255,0,0,0.5), rgba(255,0,0,.9))', width: '35%', clipPath: 'polygon(0px 0px, 100% 0%, 100% 100%, 15% 100%)', paddingRight: '10px', lineHeight: 1}}>
                <div className="row" style={{textAlign:"right", fontWeight: "bolder", textTransform: "uppercase", fontSize:"x-large"}}>
                    {gameState.playerOne.affiliation}
                </div>
                <div className="row" style={{textAlign:"right", fontStyle: "italic", fontSize: "smaller", paddingBottom: '2px', paddingTop: '2px'}}>
                    {gameState.playerOne.crisis} ({gameState.threat})
                </div>
                <div className="row" style={{textAlign:"right", fontWeight: "bold", paddingBottom: '6px'}}>
                    {gameState.playerOne.name}
                </div>
            </div>
        );
    } else {
        return (
            <div style={{background: 'linear-gradient(to right, rgba(165,165,165,0.5), rgba(135,135,135,.9))', width: '35%', clipPath: 'polygon(0px 0px, 100% 0%, 100% 100%, 15% 100%)', paddingRight: '10px', lineHeight: 1}}>
                <div className="row" style={{textAlign:"right", fontWeight: "bolder", textTransform: "uppercase", fontSize:"x-large"}}>
                    {gameState.playerOne.affiliation}
                </div>
                <div className="row" style={{textAlign:"right", fontStyle: "italic", fontSize: "smaller", paddingBottom: '2px', paddingTop: '2px'}}>
                    {gameState.playerOne.crisis} ({gameState.threat})
                </div>
                <div className="row" style={{textAlign:"right", fontWeight: "bold", paddingBottom: '6px'}}>
                    {gameState.playerOne.name}
                </div>
            </div>
        );
    }
};

export default LeftPlayer;