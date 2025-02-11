import React from 'react';

const newJsonObject = {
    playerOne: {
        name: null,
        affiliation: null,
        color: null,
        crisis: null
    },
    playerTwo: {
        name: null,
        affiliation: null,
        color: null,
        crisis: null
    },
    threat: 0,
    round: 0
};

const GameStateContext = React.createContext(newJsonObject);

export default GameStateContext;
