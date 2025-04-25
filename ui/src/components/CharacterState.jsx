import React, {useEffect, useState} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import {Autocomplete, Box, Button, FormControl, InputLabel, MenuItem, NativeSelect, Select, Stack, TextField} from "@mui/material";
import items from "./character.json";

const CharacterState = ({character, player}) => {

    const toggleActivated = () => {
        if (player === 'ONE') {
            fetch('/character/one/activated', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: character.id
            });
        }
        if (player === 'TWO') {
            fetch('/character/two/activated', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: character.id
            });
        }
    };

    const toggleExtract = () => {
        if (player === 'ONE') {
            fetch('/character/one/extract', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: character.id
            });
        }
        if (player === 'TWO') {
            fetch('/character/two/extract', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: character.id
            });
        }
    };

    const toggleInjured = () => {
        if (player === 'ONE') {
            fetch('/character/one/injured', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: character.id
            });
        }
        if (player === 'TWO') {
            fetch('/character/two/injured', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: character.id
            });
        }
    };

    const toggleTransform = () => {
        if (player === 'ONE') {
            fetch('/character/one/transform', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: character.id
            });
        }
        if (player === 'TWO') {
            fetch('/character/two/transform', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: character.id
            });
        }
    };

    const takeDamage = () => {
        if (player === 'ONE') {
            fetch('/character/one/damage', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: character.id
            });
        }
        if (player === 'TWO') {
            fetch('/character/two/damage', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: character.id
            });
        }
    };

    const healDamage = () => {
        if (player === 'ONE') {
            fetch('/character/one/heal', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: character.id
            });
        }
        if (player === 'TWO') {
            fetch('/character/two/heal', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: character.id
            });
        }
    };

    const powerUp = () => {
        if (player === 'ONE') {
            fetch('/character/one/power/up', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: character.id
            });
        }
        if (player === 'TWO') {
            fetch('/character/two/power/up', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: character.id
            });
        }
    };

     const powerDown = () => {
         if (player === 'ONE') {
             fetch('/character/one/power/down', {
                 method: 'POST',
                 headers: {
                 'Content-Type': 'application/json',
                 },
                 body: character.id
             });
         }
         if (player === 'TWO') {
             fetch('/character/two/power/down', {
                 method: 'POST',
                 headers: {
                 'Content-Type': 'application/json',
                 },
                 body: character.id
             });
         }
     };

     const takeGruntDamage = (gruntId) => {
         if (player === 'ONE') {
             fetch('/character/one/grunt/damage', {
                 method: 'POST',
                 headers: {
                 'Content-Type': 'application/json',
                 },
                 body: "{\"characterId\": \"" + character.id + "\", \"gruntId\": \"" + gruntId + "\"}"
             });
         }
         if (player === 'TWO') {
             fetch('/character/two/grunt/damage', {
                 method: 'POST',
                 headers: {
                 'Content-Type': 'application/json',
                 },
                 body: "{\"characterId\": \"" + character.id + "\", \"gruntId\": \"" + gruntId + "\"}"
             });
         }
     };

     const healGruntDamage = (gruntId) => {
         if (player === 'ONE') {
             fetch('/character/one/grunt/heal', {
                 method: 'POST',
                 headers: {
                 'Content-Type': 'application/json',
                 },
                 body: "{\"characterId\": \"" + character.id + "\", \"gruntId\": \"" + gruntId + "\"}"
             });
         }
         if (player === 'TWO') {
             fetch('/character/two/grunt/heal', {
                 method: 'POST',
                 headers: {
                 'Content-Type': 'application/json',
                 },
                 body: "{\"characterId\": \"" + character.id + "\", \"gruntId\": \"" + gruntId + "\"}"
             });
         }
     };

     const toggleGruntExtract = (gruntId) => {
         if (player === 'ONE') {
             fetch('/character/one/grunt/extract', {
                 method: 'POST',
                 headers: {
                 'Content-Type': 'application/json',
                 },
                 body: "{\"characterId\": \"" + character.id + "\", \"gruntId\": \"" + gruntId + "\"}"
             });
         }
         if (player === 'TWO') {
             fetch('/character/two/grunt/extract', {
                 method: 'POST',
                 headers: {
                 'Content-Type': 'application/json',
                 },
                 body: "{\"characterId\": \"" + character.id + "\", \"gruntId\": \"" + gruntId + "\"}"
             });
         }
     };

    return (
     <div style={{display:"flex", flexDirection:"column", alignItems:"center", width:"100%"}}>
        <div style={{display:"flex", flexDirection:"column", alignItems:"center", width:"90%", border: "3px solid white", marginLeft:"10px", marginRight:"10px", marginTop:"15px", marginBottom:"20px"}}>
            <div style={{display:"flex", flexDirection:"row", alignItems:"center", width:"100%", justifyContent:"center", border: "3px solid white", fontSize: "x-large"}}>
                {character.name}
            </div>
            <div style={{display:"flex", flexDirection:"row", alignItems:"center", width:"100%", border: "3px solid white"}}>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center", width:"150px", justifyContent:"center"}}>
                    <Button onClick={() => toggleActivated()}  color={character.activated ? "success" : "primary"} size={"large"} variant="contained" style={{padding:"6px", width: "110px", marginTop: "5px", marginBottom: "10px"}}>
                        {character.activated ? "Activated" : "!Activated"}
                    </Button>
                    <Button onClick={() => toggleExtract()}  color={character.hasExtract ? "success" : "primary"} size={"large"} variant="contained" style={{padding:"6px", marginLeft: "5px", marginRight: "5px", width: "110px", marginBottom: "10px"}}>
                        {character.hasExtract ? "Extract" : "!Extract"}
                    </Button>
                    <Button onClick={() => toggleInjured()} size={"large"} variant="contained" color={character.injured ? "error" : "success"} style={{padding:"6px", width: "110px", marginBottom: "10px"}}>
                        {character.injured ? "Injured" : "Healthy"}
                    </Button>
                     <Button onClick={() => toggleTransform()} size={"large"} variant="contained" color={character.transformed ? "success" : "primary"} style={{padding:"6px", width: "110px", marginBottom: "5px"}}>
                        {character.transformed ? "Transform" : "Transform"}
                    </Button>
                </div>
                <div style={{display:"flex", flexDirection:"row", alignItems:"center", width: "calc(100% - 65px)", borderLeft: "6px solid white"}}>
                    <div style={{display:"flex", flexDirection:"column", alignItems:"center", width:"50%", borderRight: "3px solid white"}}>
                        <div style={{width: "100%",
                                    height: "55px",
                                    background: 'rgb(255, 12, 0)',
                                    borderBottom: 0,
                                    padding: 0}} onClick={takeDamage}>
                            <i style={{color:"black", userSelect:"none"}}>+</i>
                        </div>
                        <div style={{
                            width: "100%",
                            height: "85px",
                            display: "flex",
                            justifyContent: "center",
                            lineHeight: 1
                        }}>
                            <span style={{
                                fontSize: "85px",
                                userSelect: "none"
                            }}>{character.currentDamage}</span>
                        </div>
                        <div style={{
                            width: "100%",
                            height: "55px",
                            background: 'rgb(255, 12, 0)',
                            borderTop: 0,
                            padding: 0
                        }} onClick={healDamage}>
                            <i style={{color:"black", userSelect:"none"}}>-</i>
                        </div>
                    </div>
                    <div style={{display:"flex", flexDirection:"column", alignItems:"center", width:"50%", borderLeft: "3px solid white"}}>
                        <div style={{width: "100%",
                                    height: "55px",
                                    background: 'rgb(26, 191, 12)',
                                    borderBottom: 0,
                                    padding: 0}} onClick={powerUp}>
                            <i style={{color:"black", userSelect:"none"}}>+</i>
                        </div>
                        <div style={{
                            width: "100%",
                            height: "85px",
                            display: "flex",
                            justifyContent: "center",
                            lineHeight: 1
                        }}>
                            <span style={{
                                fontSize: "85px",
                                userSelect: "none"
                            }}>{character.currentPower}</span>
                        </div>
                        <div style={{
                            width: "100%",
                            height: "55px",
                            background: 'rgb(26, 191, 12)',
                            borderTop: 0,
                            padding: 0
                        }} onClick={powerDown}>
                            <i style={{color:"black", userSelect:"none"}}>-</i>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        {character.grunts.map((grunt) => (
            <div style={{display:"flex", flexDirection:"column", alignItems:"center", width:"90%", border: "3px solid white", marginLeft:"10px", marginRight:"10px", marginTop:"15px", marginBottom:"20px"}}>
                <div style={{display:"flex", flexDirection:"row", alignItems:"center", width:"100%", justifyContent:"center", border: "3px solid white", fontSize: "x-large"}}>
                    {grunt.name}
                </div>
                <div style={{display:"flex", flexDirection:"row", alignItems:"center", width:"100%", border: "3px solid white"}}>
                    <div style={{display:"flex", flexDirection:"column", alignItems:"center", width:"150px", justifyContent:"center"}}>
                        <Button onClick={() => toggleGruntExtract(grunt.id)}  color={grunt.hasExtract ? "success" : "primary"} size={"large"} variant="contained" style={{padding:"6px", marginLeft: "5px", marginRight: "5px", width: "110px", marginBottom: "10px"}}>
                            {grunt.hasExtract ? "Extract" : "!Extract"}
                        </Button>
                    </div>
                    <div style={{display:"flex", flexDirection:"row", alignItems:"center", width: "calc(100% - 65px)", borderLeft: "6px solid white"}}>
                        <div style={{display:"flex", flexDirection:"column", alignItems:"center", width:"100%", borderRight: "3px solid white"}}>
                            <div style={{width: "100%",
                                        height: "55px",
                                        background: 'rgb(255, 12, 0)',
                                        borderBottom: 0,
                                        padding: 0}} onClick={() => takeGruntDamage(grunt.id)}>
                                <i style={{color:"black", userSelect:"none"}}>+</i>
                            </div>
                            <div style={{
                                width: "100%",
                                height: "85px",
                                display: "flex",
                                justifyContent: "center",
                                lineHeight: 1
                            }}>
                                <span style={{
                                    fontSize: "85px",
                                    userSelect: "none"
                                }}>{grunt.currentDamage}</span>
                            </div>
                            <div style={{
                                width: "100%",
                                height: "55px",
                                background: 'rgb(255, 12, 0)',
                                borderTop: 0,
                                padding: 0
                            }} onClick={() => healGruntDamage(grunt.id)}>
                                <i style={{color:"black", userSelect:"none"}}>-</i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </div>
    );

};

export default CharacterState;