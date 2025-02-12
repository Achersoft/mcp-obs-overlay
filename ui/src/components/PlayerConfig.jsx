import React, {useEffect, useState} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import {Box, FormControl, InputLabel, MenuItem, NativeSelect, Select, TextField} from "@mui/material";
import GameStateContext from "../GameStateContext.jsx";

const PlayerConfig = ({ name, color, crisis, score }) => {
    const gameState  = React.useContext(GameStateContext);



    const handleBlur = () => {
        // Perform the REST API call here
        fetch('/update/one/name"', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Add any other headers required by your API
            },
            body: name,//JSON.stringify({ data: inputValue }), // Send the input value as data
        })
            .catch(error => {
                // Handle errors
                console.error('API Error:', error);
            });
    };

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };


    return (
        <div style={{fontSize:"xx-large", display:"flex", flexDirection:"column", alignItems:"center"}}>
            <div style={{width: "50%"}}>
                <FormControl fullWidth>
                    <TextField id="standard-basic" value={gameState.playerOne.name} label="Player 1 Name" variant="standard" />
                </FormControl>
            </div>
            <div style={{width: "50%", marginTop:"20px"}}>
                <FormControl fullWidth>
                    <InputLabel variant="standard" htmlFor="uncontrolled-native">
                        Player 1 Affiliation
                    </InputLabel>
                    <NativeSelect
                        value={gameState.playerOne.affiliation}
                        defaultValue={"UNAFFILIATED"}
                        inputProps={{
                            name: 'affiliation',
                            id: 'uncontrolled-native',
                        }}
                    >
                        <option value={"A-FORCE"}>A-Force</option>
                        <option value={"ASGARD"}>Asgard</option>
                        <option value={"AVENGERS"}>Avengers</option>
                        <option value={"BLACK_ORDER"}>Black Order</option>
                        <option value={"BOM"}>Brotherhood of Mutants</option>
                        <option value={"CABAL"}>Cabal</option>
                        <option value={"CONVOCATION"}>Convocation</option>
                        <option value={"CRIMINAL_SYNDICATE"}>Criminal Syndicate</option>
                        <option value={"DARK_DIMENSION"}>Dark Dimension</option>
                        <option value={"DEFENDERS"}>Defenders</option>
                        <option value={"GUARDIANS"}>Guardians of the Galaxy</option>
                        <option value={"HELLFIRE"}>Hellfire Club</option>
                        <option value={"HYDRA"}>Hydra</option>
                        <option value={"INHUMANS"}>Inhumans</option>
                        <option value={"LOL"}>Legion of the Lost</option>
                        <option value={"MIDNIGHT_SONS"}>Midnight Sons</option>
                        <option value={"NEW_MUTANTS"}>New Mutants</option>
                        <option value={"SENTINELS"}>Sentinels</option>
                        <option value={"SOTA"}>Servants of the Apocalypse</option>
                        <option value={"SHIELD"}>Shield</option>
                        <option value={"SPIDER_FOES"}>Spider Foes</option>
                        <option value={"DRACULA"}>Thralls of Dracula</option>
                        <option value={"XMEN"}>Uncanny X-Men</option>
                        <option value={"WAKANDA"}>Wakanda</option>
                        <option value={"WEAPON_X"}>Weapon X</option>
                        <option value={"WEB_WARRIORS"}>Web Warriors</option>
                        <option value={"WINTER_GUARD"}>Winter Guard</option>
                        <option value={"X_FORCE"}>X-Force</option>
                        <option value={"UNAFFILIATED"}>Unaffiliated</option>
                    </NativeSelect>
                </FormControl>
            </div>
            <div style={{width: "50%", marginTop:"20px"}}>
                <FormControl fullWidth>
                    <InputLabel variant="standard" htmlFor="uncontrolled-native">
                        Player 1 Crisis
                    </InputLabel>
                    <NativeSelect
                        defaultValue={30}
                        inputProps={{
                            name: 'age',
                            id: 'uncontrolled-native',
                        }}
                    >
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                    </NativeSelect>
                </FormControl>
            </div>
        </div>
    );

};

export default PlayerConfig;