import React from 'react';
import PlayerConfig from "../components/PlayerConfig.jsx";
import CssBaseline from "@mui/material/CssBaseline";
import {createTheme, ThemeProvider} from "@mui/material";

const PlayerScore = () => {

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    })

    return (
       <div className={'fullscreen'} style={{background: 'rgb(85, 85, 85)'}}>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <PlayerConfig/>
            </ThemeProvider>
       </div>
    );
};

export default PlayerScore;