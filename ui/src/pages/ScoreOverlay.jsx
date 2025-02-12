import React from 'react';
import LeftPlayer from '../components/LeftPlayer.jsx';
import RightPlayer from "../components/RightPlayer.jsx";
import ScoreBoard from "../components/ScoreBoard.jsx";

const ScoreOverlay = () => {
    return (
        <div>
            <div className={'top'}>
               <LeftPlayer></LeftPlayer>
               <ScoreBoard></ScoreBoard>
               <RightPlayer></RightPlayer>
            </div>
        </div>
    );
};


export default ScoreOverlay;