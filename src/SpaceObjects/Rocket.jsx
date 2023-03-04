import React from 'react';
import './rocketStyles.css';

function Rocket({top, left}) {
    // 1190 is what is used for css vw ratio
    return(
        <div className='rocketContainer' style={{top: `${top}`, left:`${left}`}}>
            <div className='rim'>
                <div className='window'></div>
            </div>
            <div className='jetBurn'></div>
            <div className='speedLineContainer'>
                <div className='speedLines'></div>
                <div className='speedLines'></div>
                <div className='speedLines'></div>
                <div className='speedLines'></div>
            </div>
        </div>
    );
}
/*
    top: -20%;
    right: 50%;

    top: 0%;
    right: -30%;

    top: 60%;
    right: -60%;
*/
export default Rocket;