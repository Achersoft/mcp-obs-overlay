import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import GameStateContext from "../GameStateContext.jsx";

const PlayerBoard = ({ player }) => {
    const gameState  = React.useContext(GameStateContext);

    if (player === 'ONE') {
        function handleOneUp() {
            fetch('/update/one/score/up', {
                method: 'POST'
            });
        }
        function handleOneDown() {
            fetch('/update/one/score/down', {
                method: 'POST'
            });
        }
        return (
            <div style={{
                background: gameState.playerOne.color === "BLUE" ? 'rgba(0,200,255)' : 'rgba(255,0,0)',
                width: '50%',
                height: "100%",
                lineHeight: 1,
                display: "flex",
                flexDirection: "column",
                placeItems: "center",
                justifyContent: "center"
            }}>
                <div style={{fontWeight: "bolder", fontSize: "xx-large"}}>
                    {gameState.playerOne.name}
                </div>
                <div style={{fontWeight: "bold", fontSize: "x-large", marginTop: '20px'}}>
                    {gameState.playerOne.crisis.name}
                </div>
                <div style={{marginTop: '25px'}}>
                    <button style={{
                        width: "300px",
                        height: "75px",
                        borderTopLeftRadius: "25px",
                        borderTopRightRadius: "25px",
                        borderBottomLeftRadius: "0px",
                        borderBottomRightRadius: "0px"
                    }} onClick={handleOneUp}>
                        <i className="fa fa-solid fa-angle-up" style={{fontSize: "75px"}}></i>
                    </button>
                </div>
                <div style={{
                    background: 'rgb(85, 85, 85)',
                    width: "300px",
                    height: "200px",
                    display: "flex",
                    justifyContent: "center"
                }}>
                    <span style={{
                        fontSize: "180px",
                        height: "200px",
                        userSelect: "none"
                    }}>{gameState.playerOne.victoryPoints}</span>
                </div>
                <div>
                    <button style={{
                        width: "300px",
                        height: "75px",
                        borderTopLeftRadius: "0px",
                        borderTopRightRadius: "0px",
                        borderBottomLeftRadius: "25px",
                        borderBottomRightRadius: "25px"
                    }} onClick={handleOneDown}>
                        <i className="fa fa-solid fa-angle-down" style={{fontSize: "75px"}}></i>
                    </button>
                </div>
            </div>
        );
    } else {
        function handleTwoUp() {
            fetch('/update/two/score/up', {
                method: 'POST'
            });
        }
        function handleTwoDown() {
            fetch('/update/two/score/down', {
                method: 'POST'
            });
        }
        return (
            <div style={{background: gameState.playerTwo.color === "BLUE" ? 'rgba(0,200,255)' : 'rgba(255,0,0)', width: '50%', height: "100%", lineHeight: 1, display: "flex", flexDirection:"column", placeItems:"center", justifyContent:"center"}}>
                <div style={{fontWeight: "bolder", fontSize:"xx-large"}}>
                    {gameState.playerTwo.name}
                </div>
                <div style={{fontWeight: "bold", fontSize: "x-large", marginTop: '20px'}}>
                    {gameState.playerTwo.crisis.name}
                </div>
                <div style={{marginTop: '25px'}}>
                    <button style={{
                        width: "300px",
                        height: "75px",
                        borderTopLeftRadius: "25px",
                        borderTopRightRadius: "25px",
                        borderBottomLeftRadius: "0px",
                        borderBottomRightRadius: "0px"
                    }} onClick={handleTwoUp}>
                        <i className="fa fa-solid fa-angle-up" style={{fontSize: "75px"}}></i>
                    </button>
                </div>
                <div style={{background: 'rgb(85, 85, 85)', width:"300px", height:"200px", display:"flex", justifyContent:"center"}}>
                    <span style={{fontSize:"180px", height:"200px", userSelect:"none"}}>{gameState.playerTwo.victoryPoints}</span>
                </div>
                <div>
                    <button style={{ width:"300px", height:"75px",
                        borderTopLeftRadius:"0px",
                        borderTopRightRadius:"0px",
                        borderBottomLeftRadius:"25px",
                        borderBottomRightRadius:"25px"}} onClick={handleTwoDown}>
                        <i className="fa fa-solid fa-angle-down" style={{fontSize: "75px"}}></i>
                    </button>
                </div>
            </div>
        );
    }

};

export default PlayerBoard;