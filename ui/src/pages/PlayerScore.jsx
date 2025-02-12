import React from 'react';
import PlayerBoard from '../components/PlayerBoard.jsx';
import RoundCounter from "../components/RoundCounter.jsx";

const PlayerScore = () => {
    return (
       <div className={'fullscreen'}>
           <RoundCounter/>
           <div style={{display:"flex", height:"85%"}}>
               <PlayerBoard player={"ONE"}></PlayerBoard>
               <PlayerBoard player={"TWO"}></PlayerBoard>
           </div>
       </div>
    );
};


export default PlayerScore;