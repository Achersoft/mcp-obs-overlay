import React, {useState, useEffect, useReducer, useContext} from 'react';
import GameStateContext from './GameStateContext.jsx';
import { Client } from '@stomp/stompjs';

const GameStateProvider = ({ children }) => {
    const [gameState, setGameState] = useState({
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
    });

    useEffect(() => {
        fetch('/config/state')
            .then(response => response.json())
            .then(responseData => {
                setGameState(responseData);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);


    useEffect(() => {
        const client = new Client({
            brokerURL: 'ws://' + window.location.host + '/ws',
            reconnectDelay: 5000,
            onConnect: () => {
                console.log('Connected to WebSocket');
                client.subscribe('/topic/public', (response) => {
                    setGameState(JSON.parse(response.body));
                });
            },
            onStompError: (frame) => {
                console.error('Broker reported error: ' + frame.headers['message']);
                console.error('Additional details: ' + frame.body);
            },
        });

        client.activate();

        return () => {
            client.deactivate();
        };
    }, []);

    return (
        <GameStateContext.Provider value={ gameState }>
            {children}
        </GameStateContext.Provider>
    );
};

export default GameStateProvider;