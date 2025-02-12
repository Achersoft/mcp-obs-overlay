import React from 'react';

const newJsonObject = {
    playerOne: {
        name: null,
        affiliation: null,
        color: null,
        crisis: {
            name: null,
            color: "GREY"
        },
        victoryPoints: 0
    },
    playerTwo: {
        name: null,
        affiliation: null,
        color: null,
        crisis: {
            name: null,
            color: "GREY"
        },
        victoryPoints: 0
    },
    threat: 0,
    round: 1,
    playerReversed: false,
    overlayReversed: false
};

const GameStateContext = React.createContext(newJsonObject);

export default GameStateContext;
