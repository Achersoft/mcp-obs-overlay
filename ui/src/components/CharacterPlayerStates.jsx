import React, {useEffect, useState} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import {Autocomplete, Box, Button, FormControl, InputLabel, MenuItem, NativeSelect, Select, Stack, TextField} from "@mui/material";
import GameStateContext from "../GameStateContext.jsx";
import CharacterState from "./CharacterState.jsx";

const CharacterPlayerStates = () => {
    const gameState  = React.useContext(GameStateContext);

    const cleanupAndPower = () => {
        if (confirm("Are You sure you want to run cleanup?") == true) {
            fetch('/character/cleanup', {
                method: 'POST'
            });
        }
    };

    return (
        <div>
            <div style={{fontSize:"xx-large", display:"flex", flexDirection:"column", alignItems:"center", marginTop: "5px"}}>
                <Stack spacing={5} sx={{ width: 700 }}>
                    <Button size={"large"} variant="contained" href="#menu">
                        Menu
                    </Button>
                    <Button size={"large"} variant="contained" onClick={() => cleanupAndPower()} >
                        Cleanup And Power
                    </Button>
                </Stack>
            </div>
            <div style={{fontSize:"xx-large", display:"flex", flexDirection:"row", marginTop:"30px"}}>
                <div style={{ width:"50%"}}>
                    <span>Player 1 Characters</span>
                     {gameState.playerOneCharacters.map((character) => (
                        <CharacterState character={character} player="ONE"></CharacterState>
                     ))}
                </div>
                <div style={{ width:"50%"}}>
                    <span>Player 2 Characters</span>
                    {gameState.playerTwoCharacters.map((character) => (
                        <CharacterState character={character} player="TWO"></CharacterState>
                    ))}
                </div>
            </div>
        </div>
    );

};

export default CharacterPlayerStates;