import React from 'react';
import GameStateContext from "../GameStateContext.jsx";
import RightPlayerCharacter from "./RightPlayerCharacter.jsx";

const RightPlayerCharacters = ({showScore}) => {
    const gameState = React.useContext(GameStateContext);
    var backgroundState = 'linear-gradient(to top, rgba(165,165,165,0.5), rgba(135,135,135,.9))';

    if (gameState.playerTwo.color === 'BLUE') {
        backgroundState = 'linear-gradient(to top, rgba(0,125,255,0.5), rgba(0,125,255,.9))';
    } else if (gameState.playerTwo.color === 'RED') {
        backgroundState = 'linear-gradient(to top, rgba(255,0,0,0.5), rgba(255,0,0,.9))';
    }

    if (gameState.playerOneCharacters !== null) {
        if (showScore === "true") {
            return (
                <div style={{background: `${backgroundState}`, width: `${gameState.characterWidth}px`, paddingLeft: '10px', lineHeight: 1}}>
                    <div style={{height: `${gameState.characterOffset}px`}}>
                        <div style={{textAlign:"center", fontWeight: "bolder", textTransform: "uppercase", fontSize: "2.3vw", marginTop:"5px" }}>
                            {gameState.playerTwo.affiliation}
                        </div>
                        <div style={{textAlign:"center", fontWeight: "bold", fontSize: "1.8vw", marginTop: "7px"}}>
                            {gameState.playerTwo.name}
                        </div>
                        <div style={{textAlign:"center", fontStyle: "italic", fontSize: "1.8vw", marginTop: "7px"}}>
                            {gameState.playerTwo.crisis.name}-({gameState.threat})
                        </div>
                    </div>
                    {gameState.playerTwoCharacters.map((character) => (
                        <RightPlayerCharacter key={character.name} boxWidth={gameState.characterWidth} gruntPadding={gameState.gruntPadding} character={character}></RightPlayerCharacter>
                    ))}
                </div>
            );
        } else {
            return (
                <div style={{width: `${gameState.characterWidth}px`, paddingLeft: '10px', lineHeight: 1}}>
                    {gameState.playerTwoCharacters.map((character) => (
                        <RightPlayerCharacter key={character.name} boxWidth={gameState.characterWidth} gruntPadding={gameState.gruntPadding} character={character}></RightPlayerCharacter>
                    ))}
                </div>
            );
        }
    } else {
        if (showScore === "true") {
            return (
                <div style={{background: `${backgroundState}`, width: `${gameState.characterWidth}px`, paddingLeft: '10px', lineHeight: 1}}>
                    <div style={{height: `${gameState.characterOffset}px`}}>
                        <div style={{textAlign:"center", fontWeight: "bolder", textTransform: "uppercase", fontSize: "2.3vw", marginTop:"5px" }}>
                            {gameState.playerTwo.affiliation}
                        </div>
                        <div style={{textAlign:"center", fontWeight: "bold", fontSize: "1.8vw", marginTop: "7px"}}>
                            {gameState.playerTwo.name}
                        </div>
                        <div style={{textAlign:"center", fontStyle: "italic", fontSize: "1.8vw", marginTop: "7px"}}>
                            {gameState.playerTwo.crisis.name}-({gameState.threat})
                        </div>
                    </div>
                </div>
            );
        } else {
            return (<div></div>);
        }
    }
};

export default RightPlayerCharacters;