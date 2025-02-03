import React from 'react';

const ScoreBoard = ({ leftPlayer, rightPlayer }) => {
    return (
        <div style={{background: 'rgba(215,215,215,.9)', width: '15%', lineHeight: 1}}>
            <div className="row" style={{textAlign:"right", fontWeight: "bolder", textTransform: "uppercase", fontSize:"x-large"}}>
                {leftPlayer} VP {rightPlayer}
            </div>
        </div>
    );
};

export default ScoreBoard;