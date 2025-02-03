import React from 'react';

const RightPlayer = ({ name, faction, crisis, threat, color }) => {

    if (color === 'blue') {
        return (
            <div style={{background: 'linear-gradient(to right, rgba(0,200,255,0.5), rgba(0,200,255,.9))', width: '300px', clipPath: 'polygon(0px 0px, 100% 0%, 100% 100%, 15% 100%)', paddingRight: '10px', lineHeight: 1}}>
                <div className="row" style={{textAlign:"right", fontWeight: "bold", textTransform: "uppercase", fontSize:"x-large"}}>
                    {faction}
                </div>
                <div className="row" style={{textAlign:"right", paddingBottom: '1px'}}>
                    {crisis} ({threat})
                </div>
                <div className="row" style={{textAlign:"right", fontWeight: "bold", paddingBottom: '3px'}}>
                    {name}
                </div>
            </div>
        );
    } else if (color === 'red') {
        return (
            <div style={{background: 'linear-gradient(to right, rgba(255,0,0,0.5), rgba(255,0,0,.9))', width: '300px', clipPath: 'polygon(0px 0px, 100% 0%, 100% 100%, 15% 100%)', paddingRight: '10px', lineHeight: 1}}>
                <div className="row" style={{textAlign:"right", fontWeight: "bold", textTransform: "uppercase", fontSize:"x-large"}}>
                    {faction}
                </div>
                <div className="row" style={{textAlign:"right", paddingBottom: '1px'}}>
                    {crisis} ({threat})
                </div>
                <div className="row" style={{textAlign:"right", fontWeight: "bold", paddingBottom: '3px'}}>
                    {name}
                </div>
            </div>
        );
    } else {
        return (
            <div style={{background: 'linear-gradient(to right, rgba(165,165,165,0.5), rgba(135,135,135,.9))', width: '300px', clipPath: 'polygon(0px 0px, 100% 0%, 100% 100%, 15% 100%)', paddingRight: '10px', lineHeight: 1}}>
                <div className="row" style={{textAlign:"right", fontWeight: "bold", textTransform: "uppercase", fontSize:"x-large"}}>
                    {faction}
                </div>
                <div className="row" style={{textAlign:"right", paddingBottom: '1px'}}>
                    {crisis} ({threat})
                </div>
                <div className="row" style={{textAlign:"right", fontWeight: "bold", paddingBottom: '3px'}}>
                    {name}
                </div>
            </div>
        );
    }


};

export default RightPlayer;