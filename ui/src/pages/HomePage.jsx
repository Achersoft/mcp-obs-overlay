import React from 'react';
import StartTimer from '../components/StartTimer.jsx';

const HomePage = () => {
    const targetDate = new Date('2025-01-31T00:00:00'); // Set your target date here

    return (
        <div>
            <h1>Countdown Timer</h1>
            <StartTimer targetDate={targetDate} />
        </div>
    );
};

export default HomePage;