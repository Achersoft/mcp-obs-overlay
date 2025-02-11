import React from 'react';
import PlayerBoard from '../components/PlayerBoard.jsx';
import RoundCounter from "../components/RoundCounter.jsx";

const PlayerScore = () => {
    return (
       <div className={'fullscreen'}>
           <RoundCounter round={3}/>
           <div style={{display:"flex", height:"85%"}}>
               <PlayerBoard name={"Shaun Reynolds The Man"} color={"BLUE"} crisis={"sdfsdfsd"} score={10}></PlayerBoard>
               <PlayerBoard name={"guy"} color={"RED"} crisis={"sdfsdfsd"} score={10}></PlayerBoard>
           </div>
       </div>
    );
};


export default PlayerScore;