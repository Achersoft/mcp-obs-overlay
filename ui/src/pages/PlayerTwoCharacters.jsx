import React from 'react';
import RightPlayerCharacters from "../components/RightPlayerCharacters.jsx";

const PlayerTwoCharacters = () => {
    return (
        <div>
            <div className={'right'}>
               <RightPlayerCharacters showScore="true"></RightPlayerCharacters>
            </div>
        </div>
    );
};


export default PlayerTwoCharacters;