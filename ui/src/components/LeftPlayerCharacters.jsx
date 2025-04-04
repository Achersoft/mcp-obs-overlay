import React from 'react';
import GameStateContext from "../GameStateContext.jsx";
import LeftPlayerCharacter from "./LeftPlayerCharacter.jsx";

const LeftPlayerCharacters = () => {
    const gameState = React.useContext(GameStateContext);

    return (
        <div style={{width: '25%', justifyContent: 'left', placeItems: "left"}}>
            <LeftPlayerCharacter></LeftPlayerCharacter>
        </div>
    );
};

export default LeftPlayerCharacters;