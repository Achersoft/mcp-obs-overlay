import React from 'react';
import GameStateContext from "../GameStateContext.jsx";
import CountdownTimer from "../components/CountdownTimer.jsx";

const WhiteTimer = () => {
    const gameState = React.useContext(GameStateContext);

    return (
        <div style={{color:"white", fontSize:"25vh", fontWeight:"bold"}}>
            <CountdownTimer targetDate={gameState.countdownDate} />
        </div>
    );
};

export default WhiteTimer;