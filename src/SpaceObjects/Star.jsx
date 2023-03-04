import React from 'react';
import './starstyles.css'

function Star({top, left}) {
    return (
        <div className='starContainer' style={{top: `${top}`, left:`${left}`}}>
            <div className="star2"></div>
        </div>
    );
}

export default Star;