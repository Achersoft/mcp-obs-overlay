import React from 'react';
import PlayerBoard from '../components/PlayerBoard.jsx';
import RoundCounter from "../components/RoundCounter.jsx";
import GameStateContext from "../GameStateContext.jsx";

const PlayerScore = () => {
    const gameState  = React.useContext(GameStateContext);

    if (gameState.playerReversed) {
        return (
            <div className={'fullscreen'}>
                <RoundCounter/>
                <div style={{display: "flex", height: "85%"}}>
                    <PlayerBoard player={"TWO"}></PlayerBoard>
                    <PlayerBoard player={"ONE"}></PlayerBoard>
                </div>
            </div>
        );
    } else {
        return (
            <div className={'fullscreen'}>
                <RoundCounter/>
                <div style={{display: "flex", height: "85%"}}>
                    <PlayerBoard player={"ONE"}></PlayerBoard>
                    <PlayerBoard player={"TWO"}></PlayerBoard>
                </div>
            </div>
        );
    }
};


export default PlayerScore;