import React, {useEffect, useState} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import {Autocomplete, Box, Button, FormControl, InputLabel, MenuItem, NativeSelect, Select, Stack, TextField} from "@mui/material";
import items from "./character.json";

const CharacterState = ({character}) => {
   // console.log(character);

    return (
        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        {character.name}
            <div style={{display:"flex", flexDirection:"row", alignItems:"center", width: "90%"}}>
                <img src={character.image} style={{width:"33%"}}/>
                <div style={{width:"33%"}}>
                    <div style={{
                        width: "100%",
                        height: "3vw",
                        background: 'rgb(243,234,234)',
                        borderTopLeftRadius: "25px",
                        borderTopRightRadius: "25px",
                        borderBottomLeftRadius: "0px",
                        borderBottomRightRadius: "0px",
                        borderBottom: 0,
                        padding: 0}}>
                        <i className="fa fa-solid fa-angle-up" style={{fontSize: "75px", color:"black"}}></i>
                    </div>
                    <div style={{
                        background: 'rgb(85, 85, 85)',
                        width: "100%",
                        height: "4vw",
                        display: "flex",
                        justifyContent: "center",
                        lineHeight: 1
                    }}>
                        <span style={{
                            fontSize: "135px",
                            height: "100px",
                            userSelect: "none"
                        }}>{character.currentDamage}</span>
                    </div>
                    <div style={{
                        width: "100%",
                        height: "3vw",
                        background: 'rgb(243,234,234)',
                        borderTopLeftRadius: "0px",
                        borderTopRightRadius: "0px",
                        borderBottomLeftRadius: "25px",
                        borderBottomRightRadius: "25px",
                        borderTop: 0,
                        padding: 0
                    }} >
                        <i className="fa fa-solid fa-angle-down" style={{fontSize: "75px", color:"black"}}></i>
                    </div>
                </div>
                <div style={{width:"33%"}}>dsfsdff</div>
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
                    padding: 0}}>
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
                    }}>{character.currentDamage}</span>
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
                }} >
                    <i className="fa fa-solid fa-angle-down" style={{fontSize: "75px", color:"black"}}></i>
                </div>

        </div>
    );

};

export default CharacterState;