import React from 'react';

const RightPlayer = ({ name, faction, crisis, threat, color }) => {

    if (color === 'blue') {
        return (
            <div style={{background: 'linear-gradient(to left, rgba(0,200,255,0.5), rgba(0,200,255,.9))', width: '40%', clipPath: 'polygon(0px 0px, 100% 0%, 85% 100%, 0% 100%)', paddingLeft: '10px', lineHeight: 1}}>
                <div className="row" style={{textAlign:"left", fontWeight: "bolder", textTransform: "uppercase", fontSize:"x-large"}}>
                    {faction}
                </div>
                <div className="row" style={{textAlign:"left", fontStyle: "italic", fontSize: "smaller", paddingBottom: '2px', paddingTop: '2px'}}>
                    {crisis} ({threat})
                </div>
                <div className="row" style={{textAlign:"left", fontWeight: "bold", paddingBottom: '6px'}}>
                    {name}
                </div>
            </div>
        );
    } else if (color === 'red') {
        return (
            <div style={{background: 'linear-gradient(to left, rgba(255,0,0,0.5), rgba(255,0,0,.9))', width: '40%', clipPath: 'polygon(0px 0px, 100% 0%, 85% 100%, 0% 100%)', paddingLeft: '10px', lineHeight: 1}}>
                <div className="row" style={{textAlign:"left", fontWeight: "bolder", textTransform: "uppercase", fontSize:"x-large"}}>
                    {faction}
                </div>
                <div className="row" style={{textAlign:"left", fontStyle: "italic", fontSize: "smaller", paddingBottom: '2px', paddingTop: '2px'}}>
                    {crisis} ({threat})
                </div>
                <div className="row" style={{textAlign:"left", fontWeight: "bold", paddingBottom: '6px'}}>
                    {name}
                </div>
            </div>
        );
    } else {
        return (
            <div style={{background: 'linear-gradient(to left, rgba(165,165,165,0.5), rgba(135,135,135,.9))', width: '40%', clipPath: 'polygon(0px 0px, 100% 0%, 85% 100%, 0% 100%)', paddingLeft: '10px', lineHeight: 1}}>
                <div className="row" style={{textAlign:"left", fontWeight: "bolder", textTransform: "uppercase", fontSize:"x-large"}}>
                    {faction}
                </div>
                <div className="row" style={{textAlign:"left", fontStyle: "italic", fontSize: "smaller", paddingBottom: '2px', paddingTop: '2px'}}>
                    {crisis} ({threat})
                </div>
                <div className="row" style={{textAlign:"left", fontWeight: "bold", paddingBottom: '6px'}}>
                    {name}
                </div>
            </div>
        );
    }


};

export default RightPlayer;