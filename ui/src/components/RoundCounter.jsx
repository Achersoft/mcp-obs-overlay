import React, {useContext} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import GameStateContext from "../GameStateContext.jsx";
import {Button} from "@mui/material";
import SyncIcon from '@mui/icons-material/Sync';

const RoundCounter = () => {
    const gameState  = React.useContext(GameStateContext);

    function handleLeft() {
        fetch('http://localhost:8080/update/round/down', {
            method: 'POST'
        });
    }

    function handleRight() {
        fetch('http://localhost:8080/update/round/up', {
            method: 'POST'
        });
    }

    function handlePlayerReverse() {
        fetch('http://localhost:8080/update/player/reverse', {
            method: 'POST'
        });
    }

    return (
        <div style={{background: 'rgb(85, 85, 85)', width: '100%', height: "15%", lineHeight: 1, display: "flex", flexDirection:"row", placeItems:"center", justifyContent:"center"}}>
            <div style={{display:"flex", width:"30%"}}>
                <div style={{marginLeft:"15px"}}>
                    <Button size={"large"} variant="contained" href="#menu">
                        Menu
                    </Button>
                </div>
            </div>
            <div style={{display:"flex", width:"40%", justifyContent:"center"}}>
                <div>
                    <button style={{
                        width: "50px",
                        height: "50px",
                    }} onClick={handleLeft}>
                        <i className="fa fa-solid fa-angle-left" style={{fontSize: "35px"}}></i>
                    </button>
                </div>
                <div style={{fontWeight: "bolder", fontSize:"xxx-large",marginLeft:"20px"}}>
                    Round: {gameState.round}
                </div>
                <div style={{marginLeft:"20px"}}>
                    <button style={{
                        width: "50px",
                        height: "50px",

                    }} onClick={handleRight}>
                        <i className="fa fa-solid fa-angle-right" style={{fontSize: "35px"}}></i>
                    </button>
                </div>
            </div>
            <div style={{display:"flex", width:"30%", justifyContent:"right"}}>
                <div style={{marginRight:"15px"}}>
                    <Button size={"large"} variant="outlined" onClick={handlePlayerReverse} startIcon={<SyncIcon />}>
                        Reverse
                    </Button>
                </div>
            </div>

        </div>
    );
};

export default RoundCounter;