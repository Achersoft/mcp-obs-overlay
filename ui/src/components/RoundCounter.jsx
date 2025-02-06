import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'font-awesome/css/font-awesome.min.css';

const RoundCounter = ({ round }) => {
    return (
        <div style={{background: 'rgb(85, 85, 85)', width: '100%', height: "15%", lineHeight: 1, display: "flex", flexDirection:"row", placeItems:"center", justifyContent:"center"}}>
            <div>
                <button style={{
                    width: "50px",
                    height: "50px",

                }}>
                    <i className="fa fa-solid fa-angle-left" style={{fontSize: "35px"}}></i>
                </button>
            </div>
            <div style={{fontWeight: "bolder", fontSize:"xxx-large",marginLeft:"20px"}}>
                Round: {round}
            </div>
            <div style={{marginLeft:"20px"}}>
                <button style={{
                    width: "50px",
                    height: "50px",

                }}>
                    <i className="fa fa-solid fa-angle-right" style={{fontSize: "35px"}}></i>
                </button>
            </div>

        </div>
    );
};

export default RoundCounter;