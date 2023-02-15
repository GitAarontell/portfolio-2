import React from 'react';
import './rocketStyles.css';

function Rocket({top, left}) {
    return(
        <div className='rocketContainer' style={{top: `${top}`, left:`${left}`}}>
            <div className='rim'>
                <div className='window'></div>
            </div>
            <div className='jetBurn'></div>
            <div></div>
        </div>
    );
}

export default Rocket;