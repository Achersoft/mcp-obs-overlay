import React from 'react';
import dazedLogo from '/dazed.png'
import koLogo from '/ko.png'
import activatedLogo from '/activated.png'
import tagLogo from '/tag-clean.png'

const LeftPlayerCharacter = ({boxWidth, gruntPadding, character}) => {

    return (
        <div style={{width: `${boxWidth}px`, justifyContent: 'left', placeItems: "left", marginLeft:"5px", marginTop:"10px"}}>
            <div style={{ border:character.hasExtract ? "6px solid greenyellow": "none"}}>
                <div style={{display:"flex", border: "4px solid black"}}>
                    <div style={{width:"25%", borderRight: "2px solid black", position: "relative", background: "white"}}>
                        <img src={character.image} style={{width:"100%", height:"100%", position: "relative"}}/>
                        <img src={activatedLogo} style={{width:"100%", height:"100%", opacity:".8", display: character.activated ? "" : "none", position:"absolute", top: "0", left:"0"}}/>
                        <img src={dazedLogo} style={{width:"100%", height:"100%", opacity:".8", display: character.dazed ? "" : "none", position:"absolute", top: "0", left:"0"}}/>
                        <img src={koLogo} style={{width:"100%", height:"100%", opacity:".7", display: character.ko ? "" : "none", position:"absolute", top: "0", left:"0"}}/>
                    </div>
                    <div style={{width:"75%"}}>
                        <div style={{height:"calc(50% - 5px)", background:'rgb(62,62,62)', border:character.injured ? "3px solid rgb(234, 16, 16)" : "3px solid rgb(230,220,7)", position: "relative"}}>
                            <div style={{width:`${character.percentHealth}%`, height: "100%", background:character.injured ? 'rgb(216, 12, 12)' : 'rgb(220,209,2)'}}></div>
                            <span style={{width:"100%", height: "100%", fontWeight: "bolder", fontSize: "1.8vw",
                                color:"white", position: "absolute", top:0, left:0}}>{character.currentDamage}/{character.maxHealth}</span>
                        </div>
                        <div style={{height:"calc(50% - 4px)", background:'rgb(62,62,62)', border: "3px solid rgb(39,227,13)", position: "relative"}}>
                            <div style={{width:`${character.percentPower}%`, height: "100%", background:'rgb(37,200,14)'}}></div>
                            <span style={{width:"100%", height: "100%", fontWeight: "bolder", fontSize: "1.8vw",
                                color:"white", position: "absolute", top:0, left:0}}>{character.currentPower}/{character.maxPower}</span>
                        </div>
                    </div>
                </div>
            </div>

             {character.grunts.map((grunt) => (
                <div style={{width:"75%", paddingTop:"5px", paddingLeft:`${gruntPadding}px`,display: character.showGrunts ? "inherit" : "none"}}>
                    <div style={{border:grunt.hasExtract ? "6px solid greenyellow": "none"}}>
                        <div style={{display:"flex", border: "4px solid black"}}>
                            <div style={{width:"15%", borderRight: "2px solid black", background: "white"}}>
                                <img src={grunt.image} style={{width:"100%", height:"100%"}}/>
                            </div>
                            <div style={{width:"85%"}}>
                                <div style={{height:"calc(100% - 5px)", background:'rgb(62,62,62)', border:"3px solid rgb(230,220,7)", position: "relative"}}>
                                    <div style={{width:`${grunt.percentHealth}%`, height: "100%", background:'rgb(220,209,2)'}}></div>
                                    <span style={{width:"100%", height: "100%", fontWeight: "bolder", fontSize: "1.8vw",
                                        color:"white", position: "absolute", top:0, left:0}}>{grunt.currentDamage}/{grunt.maxHealth}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default LeftPlayerCharacter;