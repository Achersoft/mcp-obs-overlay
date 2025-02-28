import React from 'react';
import viteLogo from '/vite.svg'

const LeftPlayerCharacter = (character) => {

    return (
        <div style={{display:"flex", border: "2px solid black", marginLeft:"5px"}}>
            <div style={{width:"25%", borderRight: "2px solid black"}}>
                <img src={viteLogo} style={{width:"100%", height:"100%"}}/>
            </div>
            <div style={{width:"75%"}}>
                <div style={{height:"calc(50% - 5px)", background:'rgb(62,62,62)', border: "3px solid rgb(230,220,7)", position: "relative"}}>
                    <div style={{width:"70%", height: "100%", background:'rgb(220,209,2)'}}></div>
                    <span style={{width:"100%", height: "100%", fontWeight: "bolder", fontSize: "1.8vw",
                        color:"white", position: "absolute", top:0, left:0}}>7/10</span>
                </div>
                <div style={{height:"calc(50% - 4px)", background:'rgb(62,62,62)', border: "3px solid rgb(39,227,13)", position: "relative"}}>
                    <div style={{width:"30%", height: "100%", background:'rgb(37,200,14)'}}></div>
                    <span style={{width:"100%", height: "100%", fontWeight: "bolder", fontSize: "1.8vw",
                        color:"white", position: "absolute", top:0, left:0}}>3/10</span>
                </div>


            </div>
        </div>
    );
};

export default LeftPlayerCharacter;