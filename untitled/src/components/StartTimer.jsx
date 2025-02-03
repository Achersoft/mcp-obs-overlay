import React from 'react';
import Countdown from 'react-countdown';

const StartTimer = ({ targetDate }) => {
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a message when the countdown is finished
            return <div>Starting Soon...</div>;
        } else {
            // Render the countdown display
            return (
                <div>
                    {days} days, {hours} hours, {minutes} minutes, {seconds} seconds
                </div>
            );
        }
    };

    return (
        <div>
            <Countdown date={targetDate} renderer={renderer} />
        </div>
    );
};

export default StartTimer;