import React from 'react';
import PlayerBoard from '../components/PlayerBoard.jsx';
import RoundCounter from "../components/RoundCounter.jsx";
import PlayerConfig from "../components/PlayerConfig.jsx";

const PlayerScore = () => {
    return (
       <div className={'fullscreen'} style={{background: 'rgb(85, 85, 85)'}}>
           <PlayerConfig name={"bob"}/>
       </div>
    );
};


export default PlayerScore;