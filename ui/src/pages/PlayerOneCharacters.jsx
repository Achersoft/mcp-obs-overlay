import React from 'react';
import LeftPlayerCharacters from "../components/LeftPlayerCharacters.jsx";

const PlayerOneCharacters = () => {
    return (
        <div>
            <div className={'topLeft'}>
               <LeftPlayerCharacters></LeftPlayerCharacters>
            </div>
        </div>
    );
};


export default PlayerOneCharacters;