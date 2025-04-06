import React from 'react';
import LeftPlayerCharacters from "../components/LeftPlayerCharacters.jsx";

const PlayerOneCharacters = () => {
    return (
        <div>
            <div className={'left'}>
               <LeftPlayerCharacters showScore="true"></LeftPlayerCharacters>
            </div>
        </div>
    );
};


export default PlayerOneCharacters;