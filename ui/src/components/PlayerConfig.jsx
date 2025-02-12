import React, {useEffect, useState} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import {Box, Button, FormControl, InputLabel, MenuItem, NativeSelect, Select, TextField} from "@mui/material";
import GameStateContext from "../GameStateContext.jsx";

const PlayerConfig = () => {
    const gameState  = React.useContext(GameStateContext);
    const [playerOneName, setplayerOneName] = useState(gameState.playerOne.name);
    const [playerTwoName, setplayerTwoName] = useState(gameState.playerTwo.name);

    const handlePlayerOneName = (event) => {
        setplayerOneName(event.target.value);
    };

    const handlePlayerOneNameBlur = (event) => {
        fetch('/update/one/name', {
            method: 'POST',
            body: event.target.value
        });
    };

    const handlePlayerOneAffiliation = (event) => {
        fetch('/update/one/affiliation', {
            method: 'POST',
            body: event.target.value
        });
    };

    const handlePlayerOneCrisis = (event) => {
        fetch('/update/one/crisis', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: event.target.value
        });
    };

    const handlePlayerTwoName = (event) => {
        setplayerTwoName(event.target.value);
    };

    const handlePlayerTwoNameBlur = (event) => {
        fetch('/update/two/name', {
            method: 'POST',
            body: event.target.value
        });
    };

    const handlePlayerTwoAffiliation = (event) => {
        fetch('/update/two/affiliation', {
            method: 'POST',
            body: event.target.value
        });
    };

    const handlePlayerTwoCrisis = (event) => {
        fetch('/update/two/crisis', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: event.target.value
        });
    };

    const handleThreat = (event) => {
        fetch('/update/threat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: event.target.value
        });
    };

    return (
        <div style={{fontSize:"xx-large", display:"flex", flexDirection:"column", alignItems:"center"}}>
            <div style={{width:"100%"}}>
                <Button size={"large"} variant="contained" href="#menu">
                    Menu
                </Button>
            </div>
            <div style={{width: "50%", marginTop:"10px"}}>
                <FormControl fullWidth>
                    <TextField id="standard-basic" onBlur={handlePlayerOneNameBlur} onChange={handlePlayerOneName} value={playerOneName} defaultValue={gameState.playerOne.name} label="Player 1 Name" variant="standard" />
                </FormControl>
            </div>
            <div style={{width: "50%", marginTop:"20px"}}>
                <FormControl fullWidth>
                    <InputLabel variant="standard" htmlFor="uncontrolled-native">
                        Player 1 Affiliation
                    </InputLabel>
                    <NativeSelect
                        value={gameState.playerOne.affiliation}
                        onChange={handlePlayerOneAffiliation}
                        inputProps={{
                            name: 'affiliation',
                            id: 'uncontrolled-native',
                        }}
                    >
                        <option value={null}></option>
                        <option value={"A-Force"}>A-Force</option>
                        <option value={"Asgard"}>Asgard</option>
                        <option value={"Avengers"}>Avengers</option>
                        <option value={"Black Order"}>Black Order</option>
                        <option value={"Brotherhood of Mutants"}>Brotherhood of Mutants</option>
                        <option value={"Cabal"}>Cabal</option>
                        <option value={"Convocation"}>Convocation</option>
                        <option value={"Criminal Syndicate"}>Criminal Syndicate</option>
                        <option value={"Dark Dimension"}>Dark Dimension</option>
                        <option value={"Defenders"}>Defenders</option>
                        <option value={"Guardians of the Galaxy"}>Guardians of the Galaxy</option>
                        <option value={"Hellfire Club"}>Hellfire Club</option>
                        <option value={"Hydra"}>Hydra</option>
                        <option value={"Inhumans"}>Inhumans</option>
                        <option value={"Legion of the Lost"}>Legion of the Lost</option>
                        <option value={"Midnight Sons"}>Midnight Sons</option>
                        <option value={"New Mutants"}>New Mutants</option>
                        <option value={"Sentinels"}>Sentinels</option>
                        <option value={"Servants of the Apocalypse"}>Servants of the Apocalypse</option>
                        <option value={"Shield"}>Shield</option>
                        <option value={"Spider Foes"}>Spider Foes</option>
                        <option value={"Thralls of Dracula"}>Thralls of Dracula</option>
                        <option value={"Uncanny X-Men"}>Uncanny X-Men</option>
                        <option value={"Wakanda"}>Wakanda</option>
                        <option value={"Weapon X"}>Weapon X</option>
                        <option value={"Web Warriors"}>Web Warriors</option>
                        <option value={"Winter Guard"}>Winter Guard</option>
                        <option value={"X-Force"}>X-Force</option>
                        <option value={"Unaffiliated"}>Unaffiliated</option>
                    </NativeSelect>
                </FormControl>
            </div>
            <div style={{width: "50%", marginTop:"20px"}}>
                <FormControl fullWidth>
                    <InputLabel variant="standard" htmlFor="uncontrolled-native">
                        Player 1 Crisis
                    </InputLabel>
                    <NativeSelect
                        value={JSON.stringify(gameState.playerOne.crisis)}
                        onChange={handlePlayerOneCrisis}
                        inputProps={{
                            name: 'crisis',
                            id: 'uncontrolled-native',
                        }}
                    >
                        <option value={null}></option>
                        <optgroup label="Extracts">
                            <option value={JSON.stringify({name:"Alien Ship Crashes In Downtown!", color:"RED"})}>Alien Ship Crashes In Downtown!</option>
                            <option value={JSON.stringify({name:"Deadly Legacy Virus Cured?", color:"RED"})}>Deadly Legacy Virus Cured?</option>
                            <option value={JSON.stringify({name:"Fear Grips World as \"Worthy\" Terrorize Cities", color:"RED"})}>Fear Grips World as "Worthy" Terrorize Cities</option>
                            <option value={JSON.stringify({name:"Inhumans Deploy Advanced Weaponry", color:"RED"})}>Inhumans Deploy Advanced Weaponry</option>
                            <option value={JSON.stringify({name:"Mutant Extremists Target U.S. Senators!", color:"RED"})}>Mutant Extremists Target U.S. Senators!</option>
                            <option value={JSON.stringify({name:"Paranoia Pummels Populace!", color:"RED"})}>Paranoia Pummels Populace!</option>
                            <option value={JSON.stringify({name:"Research Station Attacked!", color:"RED"})}>Research Station Attacked!</option>
                            <option value={JSON.stringify({name:"Scientific Samples Found in Discovered Universe", color:"RED"})}>Scientific Samples Found in Discovered Universe</option>
                            <option value={JSON.stringify({name:"Ship Security Breached in Royal Rescue", color:"RED"})}>Ship Security Breached in Royal Rescue</option>
                            <option value={JSON.stringify({name:"Skrulls Infiltrate World Leadership", color:"RED"})}>Skrulls Infiltrate World Leadership</option>
                            <option value={JSON.stringify({name:"Spider-Infected Invade Manhattan", color:"RED"})}>Spider-Infected Invade Manhattan</option>
                            <option value={JSON.stringify({name:"Struggle For The Cube Continues", color:"RED"})}>Struggle For The Cube Continues</option>
                            <option value={JSON.stringify({name:"Terrigen Canisters Fuel Doomsday Device", color:"RED"})}>Terrigen Canisters Fuel Doomsday Device</option>
                            <option value={JSON.stringify({name:"The Montesi Formula Found", color:"RED"})}>The Montesi Formula Found</option>
                            <option value={JSON.stringify({name:"Unexpected Guests Crash Royal Wedding", color:"RED"})}>Unexpected Guests Crash Royal Wedding</option>
                        </optgroup>
                        <optgroup label="Secures">
                            <option value={JSON.stringify({name:"Cosmic Invasion! Black Order Descends on Earth", color:"BLUE"})}>Cosmic Invasion! Black Order Descends on Earth</option>
                            <option value={JSON.stringify({name:"Deadline to Destruction", color:"BLUE"})}>Deadline to Destruction</option>
                            <option value={JSON.stringify({name:"Deadly Meteors Mutate Civilians", color:"BLUE"})}>Deadly Meteors Mutate Civilians</option>
                            <option value={JSON.stringify({name:"Demons Downtown! Has Our Comeuppance Come Due?", color:"BLUE"})}>Demons Downtown! Has Our Comeuppance Come Due?</option>
                            <option value={JSON.stringify({name:"Gamma Wave Sweeps Across Midwest", color:"BLUE"})}>Gamma Wave Sweeps Across Midwest</option>
                            <option value={JSON.stringify({name:"Guardians Save Shi`ar Empress in Style", color:"BLUE"})}>Guardians Save Shi`ar Empress in Style</option>
                            <option value={JSON.stringify({name:"Infinity Formula Goes Missing!", color:"BLUE"})}>Infinity Formula Goes Missing!</option>
                            <option value={JSON.stringify({name:"Intrusions Open Across City As Seals Collapse", color:"BLUE"})}>Intrusions Open Across City As Seals Collapse</option>
                            <option value={JSON.stringify({name:"Mayor Fisk Vows to Find Missing Witnesses", color:"BLUE"})}>Mayor Fisk Vows to Find Missing Witnesses</option>
                            <option value={JSON.stringify({name:"Mutant Madman Turns City Into Lethal Amusement Park", color:"BLUE"})}>Mutant Madman Turns City Into Lethal Amusement Park</option>
                            <option value={JSON.stringify({name:"M`Kraan Crystals Gets Heroes Home!", color:"BLUE"})}>M`Kraan Crystals Gets Heroes Home!</option>
                            <option value={JSON.stringify({name:"Portals Overrun City With Spider-People!", color:"BLUE"})}>Portals Overrun City With Spider-People!</option>
                            <option value={JSON.stringify({name:"Riots Spark Over Extremis 3.0", color:"BLUE"})}>Riots Spark Over Extremis 3.0</option>
                            <option value={JSON.stringify({name:"S.W.O.R.D. Establishes Base on Moon's Blue Area", color:"BLUE"})}>S.W.O.R.D. Establishes Base on Moon's Blue Area</option>
                            <option value={JSON.stringify({name:"Strike Team Secures Shield Relay!", color:"BLUE"})}>Strike Team Secures Shield Relay!</option>
                            <option value={JSON.stringify({name:"Super-Powered Scoundrels From Sinister Syndicate", color:"BLUE"})}>Super-Powered Scoundrels From Sinister Syndicate</option>
                            <option value={JSON.stringify({name:"Wedding Party Targeted in Terrible Attack!", color:"BLUE"})}>Wedding Party Targeted in Terrible Attack!</option>
                        </optgroup>
                    </NativeSelect>
                </FormControl>
            </div>
            <div style={{width: "50%", marginTop:"50px"}}>
                <FormControl fullWidth>
                    <TextField id="standard-basic" onBlur={handlePlayerTwoNameBlur} onChange={handlePlayerTwoName} value={playerTwoName} defaultValue={gameState.playerTwo.name} label="Player 2 Name" variant="standard" />
                </FormControl>
            </div>
            <div style={{width: "50%", marginTop:"20px"}}>
                <FormControl fullWidth>
                    <InputLabel variant="standard" htmlFor="uncontrolled-native">
                        Player 2 Affiliation
                    </InputLabel>
                    <NativeSelect
                        value={gameState.playerTwo.affiliation}
                        onChange={handlePlayerTwoAffiliation}
                        inputProps={{
                            name: 'affiliation',
                            id: 'uncontrolled-native',
                        }}
                    >
                        <option value={null}></option>
                        <option value={"A-Force"}>A-Force</option>
                        <option value={"Asgard"}>Asgard</option>
                        <option value={"Avengers"}>Avengers</option>
                        <option value={"Black Order"}>Black Order</option>
                        <option value={"Brotherhood of Mutants"}>Brotherhood of Mutants</option>
                        <option value={"Cabal"}>Cabal</option>
                        <option value={"Convocation"}>Convocation</option>
                        <option value={"Criminal Syndicate"}>Criminal Syndicate</option>
                        <option value={"Dark Dimension"}>Dark Dimension</option>
                        <option value={"Defenders"}>Defenders</option>
                        <option value={"Guardians of the Galaxy"}>Guardians of the Galaxy</option>
                        <option value={"Hellfire Club"}>Hellfire Club</option>
                        <option value={"Hydra"}>Hydra</option>
                        <option value={"Inhumans"}>Inhumans</option>
                        <option value={"Legion of the Lost"}>Legion of the Lost</option>
                        <option value={"Midnight Sons"}>Midnight Sons</option>
                        <option value={"New Mutants"}>New Mutants</option>
                        <option value={"Sentinels"}>Sentinels</option>
                        <option value={"Servants of the Apocalypse"}>Servants of the Apocalypse</option>
                        <option value={"Shield"}>Shield</option>
                        <option value={"Spider Foes"}>Spider Foes</option>
                        <option value={"Thralls of Dracula"}>Thralls of Dracula</option>
                        <option value={"Uncanny X-Men"}>Uncanny X-Men</option>
                        <option value={"Wakanda"}>Wakanda</option>
                        <option value={"Weapon X"}>Weapon X</option>
                        <option value={"Web Warriors"}>Web Warriors</option>
                        <option value={"Winter Guard"}>Winter Guard</option>
                        <option value={"X-Force"}>X-Force</option>
                        <option value={"Unaffiliated"}>Unaffiliated</option>
                    </NativeSelect>
                </FormControl>
            </div>
            <div style={{width: "50%", marginTop:"20px"}}>
                <FormControl fullWidth>
                    <InputLabel variant="standard" htmlFor="uncontrolled-native">
                        Player 2 Crisis
                    </InputLabel>
                    <NativeSelect
                        value={JSON.stringify(gameState.playerTwo.crisis)}
                        onChange={handlePlayerTwoCrisis}
                        inputProps={{
                            name: 'crisis',
                            id: 'uncontrolled-native',
                        }}
                    >
                        <option value={null}></option>
                        <optgroup label="Extracts">
                            <option value={JSON.stringify({name:"Alien Ship Crashes In Downtown!", color:"RED"})}>Alien Ship Crashes In Downtown!</option>
                            <option value={JSON.stringify({name:"Deadly Legacy Virus Cured?", color:"RED"})}>Deadly Legacy Virus Cured?</option>
                            <option value={JSON.stringify({name:"Fear Grips World as \"Worthy\" Terrorize Cities", color:"RED"})}>Fear Grips World as "Worthy" Terrorize Cities</option>
                            <option value={JSON.stringify({name:"Inhumans Deploy Advanced Weaponry", color:"RED"})}>Inhumans Deploy Advanced Weaponry</option>
                            <option value={JSON.stringify({name:"Mutant Extremists Target U.S. Senators!", color:"RED"})}>Mutant Extremists Target U.S. Senators!</option>
                            <option value={JSON.stringify({name:"Paranoia Pummels Populace!", color:"RED"})}>Paranoia Pummels Populace!</option>
                            <option value={JSON.stringify({name:"Research Station Attacked!", color:"RED"})}>Research Station Attacked!</option>
                            <option value={JSON.stringify({name:"Scientific Samples Found in Discovered Universe", color:"RED"})}>Scientific Samples Found in Discovered Universe</option>
                            <option value={JSON.stringify({name:"Ship Security Breached in Royal Rescue", color:"RED"})}>Ship Security Breached in Royal Rescue</option>
                            <option value={JSON.stringify({name:"Skrulls Infiltrate World Leadership", color:"RED"})}>Skrulls Infiltrate World Leadership</option>
                            <option value={JSON.stringify({name:"Spider-Infected Invade Manhattan", color:"RED"})}>Spider-Infected Invade Manhattan</option>
                            <option value={JSON.stringify({name:"Struggle For The Cube Continues", color:"RED"})}>Struggle For The Cube Continues</option>
                            <option value={JSON.stringify({name:"Terrigen Canisters Fuel Doomsday Device", color:"RED"})}>Terrigen Canisters Fuel Doomsday Device</option>
                            <option value={JSON.stringify({name:"The Montesi Formula Found", color:"RED"})}>The Montesi Formula Found</option>
                            <option value={JSON.stringify({name:"Unexpected Guests Crash Royal Wedding", color:"RED"})}>Unexpected Guests Crash Royal Wedding</option>
                        </optgroup>
                        <optgroup label="Secures">
                            <option value={JSON.stringify({name:"Cosmic Invasion! Black Order Descends on Earth", color:"BLUE"})}>Cosmic Invasion! Black Order Descends on Earth</option>
                            <option value={JSON.stringify({name:"Deadline to Destruction", color:"BLUE"})}>Deadline to Destruction</option>
                            <option value={JSON.stringify({name:"Deadly Meteors Mutate Civilians", color:"BLUE"})}>Deadly Meteors Mutate Civilians</option>
                            <option value={JSON.stringify({name:"Demons Downtown! Has Our Comeuppance Come Due?", color:"BLUE"})}>Demons Downtown! Has Our Comeuppance Come Due?</option>
                            <option value={JSON.stringify({name:"Gamma Wave Sweeps Across Midwest", color:"BLUE"})}>Gamma Wave Sweeps Across Midwest</option>
                            <option value={JSON.stringify({name:"Guardians Save Shi`ar Empress in Style", color:"BLUE"})}>Guardians Save Shi`ar Empress in Style</option>
                            <option value={JSON.stringify({name:"Infinity Formula Goes Missing!", color:"BLUE"})}>Infinity Formula Goes Missing!</option>
                            <option value={JSON.stringify({name:"Intrusions Open Across City As Seals Collapse", color:"BLUE"})}>Intrusions Open Across City As Seals Collapse</option>
                            <option value={JSON.stringify({name:"Mayor Fisk Vows to Find Missing Witnesses", color:"BLUE"})}>Mayor Fisk Vows to Find Missing Witnesses</option>
                            <option value={JSON.stringify({name:"Mutant Madman Turns City Into Lethal Amusement Park", color:"BLUE"})}>Mutant Madman Turns City Into Lethal Amusement Park</option>
                            <option value={JSON.stringify({name:"M`Kraan Crystals Gets Heroes Home!", color:"BLUE"})}>M`Kraan Crystals Gets Heroes Home!</option>
                            <option value={JSON.stringify({name:"Portals Overrun City With Spider-People!", color:"BLUE"})}>Portals Overrun City With Spider-People!</option>
                            <option value={JSON.stringify({name:"Riots Spark Over Extremis 3.0", color:"BLUE"})}>Riots Spark Over Extremis 3.0</option>
                            <option value={JSON.stringify({name:"S.W.O.R.D. Establishes Base on Moon's Blue Area", color:"BLUE"})}>S.W.O.R.D. Establishes Base on Moon's Blue Area</option>
                            <option value={JSON.stringify({name:"Strike Team Secures Shield Relay!", color:"BLUE"})}>Strike Team Secures Shield Relay!</option>
                            <option value={JSON.stringify({name:"Super-Powered Scoundrels From Sinister Syndicate", color:"BLUE"})}>Super-Powered Scoundrels From Sinister Syndicate</option>
                            <option value={JSON.stringify({name:"Wedding Party Targeted in Terrible Attack!", color:"BLUE"})}>Wedding Party Targeted in Terrible Attack!</option>
                        </optgroup>
                    </NativeSelect>
                </FormControl>
            </div>
            <div style={{width: "50%", marginTop:"75px"}}>
                <FormControl fullWidth>
                    <InputLabel variant="standard" htmlFor="uncontrolled-native">
                        Threat Level
                    </InputLabel>
                    <NativeSelect
                        value={gameState.threat}
                        onChange={handleThreat}
                        inputProps={{
                            name: 'threat',
                            id: 'uncontrolled-native',
                        }}
                    >
                        <option value={0}>0</option>
                        <option value={15}>15</option>
                        <option value={16}>16</option>
                        <option value={17}>17</option>
                        <option value={18}>18</option>
                        <option value={19}>19</option>
                        <option value={20}>20</option>
                        <option value={21}>21</option>
                        <option value={22}>22</option>
                        <option value={23}>23</option>
                        <option value={24}>24</option>
                    </NativeSelect>
                </FormControl>
            </div>
        </div>
    );

};

export default PlayerConfig;