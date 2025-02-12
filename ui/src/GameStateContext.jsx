import React from 'react';

const newJsonObject = {
    playerOne: {
        name: null,
        affiliation: null,
        color: null,
        crisis: null,
        victoryPoints: 0
    },
    playerTwo: {
        name: null,
        affiliation: null,
        color: null,
        crisis: null,
        victoryPoints: 0
    },
    threat: 0,
    round: 1
};

const GameStateContext = React.createContext(newJsonObject);

export default GameStateContext;
