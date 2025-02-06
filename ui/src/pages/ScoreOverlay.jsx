import React from 'react';
import LeftPlayer from '../components/LeftPlayer.jsx';
import RightPlayer from "../components/RightPlayer.jsx";
import ScoreBoard from "../components/ScoreBoard.jsx";

const ScoreOverlay = () => {
    return (
       <div className={'top'}>
           <LeftPlayer name={'Some other random guy'} faction={'Cabal'} crisis={'Alien Ship Crashes'} threat={18} color={'red'}></LeftPlayer>

           <ScoreBoard leftPlayer={'11'} rightPlayer={'4'}></ScoreBoard>

           <RightPlayer name={'Bitch Tits Bob'} faction={'Asgard'} crisis={'Deamons Downtown'} threat={18} color={'blue'}></RightPlayer>

       </div>
    );
};


export default ScoreOverlay;