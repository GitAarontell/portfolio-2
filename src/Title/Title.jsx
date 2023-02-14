import React from 'react';
import './titleStyles.css';

import Rocket from '../SpaceObjects/Rocket'
import Star from '../SpaceObjects/Star';


function Title() {
    return(
        <div className='titleContainer'>
            <Rocket top={"30%"} left={"50%"}></Rocket>
            <Star top={"10%"} left={"50%"}></Star>
        </div>
    );
}

export default Title;