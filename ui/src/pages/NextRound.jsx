import React from 'react';
import StartTimer from '../components/StartTimer.jsx';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const NextRound = () => {
    const targetDate = new Date('2025-01-31T00:00:00'); // Set your target date here
    const slideImages = [
        {
            url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
            caption: 'Slide 1'
        },
        {
            url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
            caption: 'Slide 2'
        },
        {
            url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
            caption: 'Slide 3'
        },
    ];
    const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        height: '400px'
    };

    return (
        <div>
            <div className="slide-container">
                <Slide arrows={false}>
                    {slideImages.map((slideImage, index)=> (
                        <div key={index}>
                            <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>

                            </div>
                        </div>
                    ))}
                </Slide>
            </div>
            <h1>Next Round</h1>
            <StartTimer targetDate={targetDate} />
        </div>
    );
};

export default NextRound;