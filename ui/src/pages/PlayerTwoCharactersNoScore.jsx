import React from 'react';
import RightPlayerCharacters from "../components/RightPlayerCharacters.jsx";

const PlayerTwoCharactersNoScore = () => {
    return (
        <div>
            <div className={'right'}>
               <RightPlayerCharacters showScore="false"></RightPlayerCharacters>
            </div>
        </div>
    );
};


export default PlayerTwoCharactersNoScore;