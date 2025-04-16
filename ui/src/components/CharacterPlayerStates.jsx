import React, {useEffect, useState} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import {Autocomplete, Box, Button, FormControl, InputLabel, MenuItem, NativeSelect, Select, Stack, TextField} from "@mui/material";
import GameStateContext from "../GameStateContext.jsx";
import CharacterState from "./CharacterState.jsx";

const CharacterPlayerStates = () => {
    const gameState  = React.useContext(GameStateContext);

    return (
        <div>
            <div style={{fontSize:"xx-large", display:"flex", flexDirection:"column", alignItems:"center"}}>
                <Stack spacing={15} sx={{ width: 700 }}>
                    <Button size={"large"} variant="contained" href="#menu">
                        Menu
                    </Button>
                </Stack>
            </div>
            <div style={{fontSize:"xx-large", display:"flex", flexDirection:"row", alignItems:"center", marginTop:"30px"}}>
                <div style={{ width:"50%"}}>
                    <span>Player 1 Characters</span>
                     {gameState.playerOneCharacters.map((character) => (
                        <CharacterState character={character}></CharacterState>
                     ))}


                </div>
                <div style={{ width:"50%"}}>
                        <Button size={"large"} variant="contained" href="#menu">
                            Menu
                        </Button>

                </div>
            </div>
        </div>
    );

};

export default CharacterPlayerStates;