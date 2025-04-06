import React from 'react';
import ScorePillBoard from "../components/ScorePillBoard.jsx";

const ScorePillOverlay = () => {
    return (
        <div>
            <div className={'top'}>
               <ScorePillBoard></ScorePillBoard>
            </div>
        </div>
    );
};


export default ScorePillOverlay;