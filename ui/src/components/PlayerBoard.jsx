import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import GameStateContext from "../GameStateContext.jsx";

const PlayerBoard = ({ name, color, crisis, score }) => {
    const gameState  = React.useContext(GameStateContext);

    return (
        <div style={{background: color === "BLUE" ? 'rgba(0,200,255)' : 'rgba(255,0,0)', width: '50%', height: "100%", lineHeight: 1, display: "flex", flexDirection:"column", placeItems:"center", justifyContent:"center"}}>
            <div style={{fontWeight: "bolder", fontSize:"xx-large"}}>
                {gameState.playerOne.name}
            </div>
            <div style={{fontWeight: "bold", fontSize: "x-large", marginTop: '20px'}}>
                {crisis}
            </div>
            <div style={{marginTop: '25px'}}>
                <button style={{
                    width: "300px",
                    height: "75px",
                    borderTopLeftRadius: "25px",
                    borderTopRightRadius: "25px",
                    borderBottomLeftRadius: "0px",
                    borderBottomRightRadius: "0px"
                }}>
                    <i className="fa fa-solid fa-angle-up" style={{fontSize: "75px"}}></i>
                </button>
            </div>
            <div style={{background: 'rgb(85, 85, 85)', width:"300px", height:"200px", display:"flex", justifyContent:"center"}}>
                <span style={{fontSize:"180px", height:"200px", userSelect:"none"}}>{score}</span>
            </div>
            <div>
                <button style={{ width:"300px", height:"75px", borderTopLeftRadius:"0px", borderTopRightRadius:"0px", borderBottomLeftRadius:"25px", borderBottomRightRadius:"25px"}}>
                    <i className="fa fa-solid fa-angle-down" style={{fontSize: "75px"}}></i>
                </button>
            </div>
        </div>
    );

};

export default PlayerBoard;