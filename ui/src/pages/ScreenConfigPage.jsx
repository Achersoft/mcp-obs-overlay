import React from 'react';
import ScreenConfig from "../components/ScreenConfig.jsx";
import CssBaseline from "@mui/material/CssBaseline";
import {createTheme, ThemeProvider} from "@mui/material";

const ScreenConfigPage = () => {

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    })

    return (
       <div className={'fullscreen'} style={{background: 'rgb(85, 85, 85)'}}>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <ScreenConfig/>
            </ThemeProvider>
       </div>
    );
};

export default ScreenConfigPage;