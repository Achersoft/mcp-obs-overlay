import React, {useEffect, useState} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import {Autocomplete, Box, Button, FormControl, InputLabel, MenuItem, NativeSelect, Select, Stack, TextField} from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import GameStateContext from "../GameStateContext.jsx";
import items from "./character.json";
import dayjs from 'dayjs';


const ScreenConfig = () => {
    const gameState  = React.useContext(GameStateContext);
    const [characterWidth, setCharacterWidth] = useState(gameState.characterWidth);
    const [characterOffset, setCharacterOffset] = useState(gameState.characterOffset);
    const [gruntPadding, setGruntPadding] = useState(gameState.gruntPadding);

     const handleSetTimer = (newValue) => {
       fetch('/screen/timer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newValue)
        });
     };

     const handleCharacterWidth = (event) => {
         setCharacterWidth(event.target.value);
     };

     const handleCharacterWidthBlur = (event) => {
         fetch('/screen/character/width', {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json',
             },
             body: JSON.stringify(event.target.value)
         });
     };

     const handleCharacterOffset = (event) => {
          setCharacterOffset(event.target.value);
      };

      const handleCharacterOffsetBlur = (event) => {
          fetch('/screen/character/offset', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(event.target.value)
          });
      };

    const handleGruntPadding = (event) => {
         setGruntPadding(event.target.value);
     };

     const handleGruntPaddingBlur = (event) => {
         fetch('/screen/grunt/padding', {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json',
             },
             body: JSON.stringify(event.target.value)
         });
     };

    return (
        <div style={{fontSize:"xx-large", display:"flex", flexDirection:"column", alignItems:"center"}}>
            <Stack spacing={5} sx={{ width: 700 }}>
                <Button size={"large"} variant="contained" href="#menu">
                    Menu
                </Button>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker
                      label="Controlled picker"
                      value={dayjs(gameState.countdownDate)}
                      onChange={(newValue) => handleSetTimer(newValue)}
                    />
                </LocalizationProvider>

                <TextField onBlur={handleCharacterWidthBlur} onChange={handleCharacterWidth} value={characterWidth} defaultValue={gameState.characterWidth} label="Character Width" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />

                <TextField onBlur={handleCharacterOffsetBlur} onChange={handleCharacterOffset} value={characterOffset} defaultValue={gameState.characterOffset} label="Character Offset" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />

                <TextField onBlur={handleGruntPaddingBlur} onChange={handleGruntPadding} value={gruntPadding} defaultValue={gameState.gruntPadding} label="Grunt Padding" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />

            </Stack>
        </div>
    );

};

export default ScreenConfig;