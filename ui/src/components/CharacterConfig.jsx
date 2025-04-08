import React, {useEffect, useState} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import {Autocomplete, Box, Button, FormControl, InputLabel, MenuItem, NativeSelect, Select, Stack, TextField} from "@mui/material";
import GameStateContext from "../GameStateContext.jsx";
import items from "./character.json";


const CharacterConfig = () => {
    const gameState  = React.useContext(GameStateContext);
    const [playerOneName, setplayerOneName] = useState(gameState.playerOne.name);
    const [playerTwoName, setplayerTwoName] = useState(gameState.playerTwo.name);

     const handlePlayerOneChange = (event, item, reason) => {
       fetch('/character/one', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item)
        });
     };

     const handlePlayerTwoChange = (event, item, reason) => {
            fetch('/character/two', {
                 method: 'POST',
                 headers: {
                     'Content-Type': 'application/json',
                 },
                 body: JSON.stringify(item)
             });
          };

    return (
        <div style={{fontSize:"xx-large", display:"flex", flexDirection:"column", alignItems:"center"}}>
            <Stack spacing={15} sx={{ width: 700 }}>
            <Button size={"large"} variant="contained" href="#menu">
                                Menu
                            </Button>
                <Autocomplete
                    multiple
                    disableClearable
                    id="tags-standard"
                    options={items}
                    getOptionLabel={(option) => option.name}
                    defaultValue={gameState.playerOneCharacters}
                    onChange={handlePlayerOneChange}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="standard"
                        label="Player 1 Characters"
                        placeholder="Characters"
                      />
                    )}
                />

                <Autocomplete
                    multiple
                    disableClearable
                    id="tags-standard"
                    options={items}
                    getOptionLabel={(option) => option.name}
                    defaultValue={gameState.playerTwoCharacters}
                    onChange={handlePlayerTwoChange}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="standard"
                        label="Player 2 Characters"
                        placeholder="Characters"
                      />
                    )}
                />
            </Stack>
        </div>
    );

};

export default CharacterConfig;