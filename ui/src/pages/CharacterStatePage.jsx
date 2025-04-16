import React from 'react';
import CharacterPlayerStates from "../components/CharacterPlayerStates.jsx";
import CssBaseline from "@mui/material/CssBaseline";
import {createTheme, ThemeProvider} from "@mui/material";

const CharacterConfigPage = () => {

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    })

    return (
       <div className={'fullscreen'} style={{background: 'rgb(85, 85, 85)'}}>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <CharacterPlayerStates/>
            </ThemeProvider>
       </div>
    );
};

export default CharacterConfigPage;