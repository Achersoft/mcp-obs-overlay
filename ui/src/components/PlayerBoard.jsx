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
                lineHeight: 0,
                display: "flex",
                flexDirection: "column",
                placeItems: "center",
                justifyContent: "center"
            }}>
                <div style={{fontWeight: "bolder", fontSize: "xx-large", margin:"10px"}}>
                    {gameState.playerOne.name}
                </div>
                <div style={{fontWeight: "bold", fontSize: "large", margin: '20px'}}>
                    {gameState.playerOne.crisis.name}
                </div>
                <div style={{marginTop: '25px',
                    width: "250px",
                    height: "75px",
                    background: 'rgb(243,234,234)',
                    borderTopLeftRadius: "25px",
                    borderTopRightRadius: "25px",
                    borderBottomLeftRadius: "0px",
                    borderBottomRightRadius: "0px",
                    borderBottom: 0,
                    padding: 0}} onClick={handleOneUp}>
                    <i className="fa fa-solid fa-angle-up" style={{fontSize: "75px", color:"black"}}></i>
                </div>
                <div style={{
                    background: 'rgb(85, 85, 85)',
                    width: "250px",
                    height: "150px",
                    display: "flex",
                    justifyContent: "center",
                    lineHeight: 1
                }}>
                    <span style={{
                        fontSize: "135px",
                        height: "150px",
                        userSelect: "none"
                    }}>{gameState.playerOne.victoryPoints}</span>
                </div>
                <div style={{
                    width: "250px",
                    height: "75px",
                    background: 'rgb(243,234,234)',
                    borderTopLeftRadius: "0px",
                    borderTopRightRadius: "0px",
                    borderBottomLeftRadius: "25px",
                    borderBottomRightRadius: "25px",
                    borderTop: 0,
                    padding: 0
                }} onClick={handleOneDown}>
                    <i className="fa fa-solid fa-angle-down" style={{fontSize: "75px", color:"black"}}></i>
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
            <div style={{background: gameState.playerTwo.color === "BLUE" ? 'rgba(0,200,255)' : 'rgba(255,0,0)', width: '50%', height: "100%", lineHeight: 0, display: "flex", flexDirection:"column", placeItems:"center", justifyContent:"center"}}>
                <div style={{fontWeight: "bolder", fontSize:"x-large", margin:"10px"}}>
                    {gameState.playerTwo.name}
                </div>
                <div style={{fontWeight: "bold", fontSize: "large", margin: '20px'}}>
                    {gameState.playerTwo.crisis.name}
                </div>
                <div style={{
                    marginTop: '25px',
                    width: "250px",
                    height: "75px",
                    background: 'rgb(243,234,234)',
                    borderTopLeftRadius: "25px",
                    borderTopRightRadius: "25px",
                    borderBottomLeftRadius: "0px",
                    borderBottomRightRadius: "0px",
                    borderBottom: 0,
                    padding: 0
                }} onClick={handleTwoUp}>
                    <i className="fa fa-solid fa-angle-up" style={{fontSize: "75px", color: "black"}}></i>
                </div>
                <div style={{background: 'rgb(85, 85, 85)', width:"250px", height:"150px", display:"flex", justifyContent:"center", lineHeight: 1}}>
                    <span style={{fontSize:"135px", height:"150px", userSelect:"none"}}>{gameState.playerTwo.victoryPoints}</span>
                </div>
                <div style={{
                    width:"250px",
                    height:"75px",
                    background: 'rgb(243,234,234)',
                    borderTopLeftRadius:"0px",
                    borderTopRightRadius:"0px",
                    borderBottomLeftRadius:"25px",
                    borderBottomRightRadius:"25px",
                    borderTop: 0,
                    padding: 0
                }} onClick={handleTwoDown}>
                    <i className="fa fa-solid fa-angle-down" style={{fontSize: "75px", color: "black"}}></i>
                </div>
            </div>
        );
    }

};

export default PlayerBoard;