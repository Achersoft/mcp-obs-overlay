import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

const PlayerConfig = ({ name, color, crisis, score }) => {

    const handleBlur = () => {
        // Perform the REST API call here
        fetch('/update/one/name"', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Add any other headers required by your API
            },
            body: name,//JSON.stringify({ data: inputValue }), // Send the input value as data
        })
            .catch(error => {
                // Handle errors
                console.error('API Error:', error);
            });
    };

    return (
        <div style={{fontSize:"xx-large", display:"flex", flexDirection:"column"}}>
            <label>
                Player 1 Name: <input type="text" defaultValue={name} onBlur={handleBlur} style={{fontSize:"xx-large"}} />
            </label>
            <label>
                Player 1 Name: <input name="myInput" style={{fontSize:"xx-large"}} />
            </label>
            <hr />
            <label>
                Checkbox: <input type="checkbox" name="myCheckbox" />
            </label>
            <hr />
            <input name="myInput" />
        </div>
    );

};

export default PlayerConfig;