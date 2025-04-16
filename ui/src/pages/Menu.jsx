import React from 'react';
import {Button} from "@mui/material";

const MenuPage = () => {

    function confirmReset() {
        if(window.confirm("Are you sure wou wish to reset the Game State?")) {
            fetch('/config/reset', {
                method: 'GET'
            });
        }
    }

    return (
       <div className={'fullscreen'} style={{background: 'rgb(85, 85, 85)'}}>
           <div style={{width:"100%"}}>
               <Button size={"large"} variant="contained" href="#board">
                   Score Board
               </Button>
           </div>
           <div style={{width:"100%", marginTop:"75px"}}>
               <Button size={"large"} variant="contained" href="#config">
                   Player Config
               </Button>
           </div>
           <div style={{width:"100%", marginTop:"75px"}}>
              <Button size={"large"} variant="contained" href="#characterConfig">
                  Character Config
              </Button>
          </div>
          <div style={{width:"100%", marginTop:"75px"}}>
            <Button size={"large"} variant="contained" href="#character-state">
                Character State Manager
            </Button>
        </div>
          <div style={{width:"100%", marginTop:"75px"}}>
                <Button size={"large"} variant="contained" href="#screenConfig">
                    Screen Config
                </Button>
           </div>
           <div style={{width:"100%", marginTop:"75px"}}>
               <Button size={"large"} variant="contained" color={"error"} onClick={confirmReset}>
                   Game Reset
               </Button>
           </div>
       </div>
    );
};


export default MenuPage;