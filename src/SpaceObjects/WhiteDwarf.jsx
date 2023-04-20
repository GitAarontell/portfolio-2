import React from 'react';
import './whiteDwarfStyles.css'

function WhiteDwarf({top, left}) {
    return (
        <div className='whiteDwarf' style={{top: `${top}`, left:`${left}`}}>
        </div>
    );
}

export default WhiteDwarf;