import React from 'react';
import LeftPlayerCharacters from "../components/LeftPlayerCharacters.jsx";

const PlayerOneCharactersNoScore = () => {
    return (
        <div>
            <div className={'left'}>
               <LeftPlayerCharacters showScore="false"></LeftPlayerCharacters>
            </div>
        </div>
    );
};


export default PlayerOneCharactersNoScore;