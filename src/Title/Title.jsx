import React from 'react';
import './titleStyles.css';

import Rocket from '../SpaceObjects/Rocket';
import WhiteDwarf from '../SpaceObjects/WhiteDwarf';
import Star from '../SpaceObjects/Star';


function Title() {
    return(
        <div className='titleContainer'>
            <Rocket top={"30%"} left={"50%"}></Rocket>
            <WhiteDwarf top={"10%"} left={"50%"}></WhiteDwarf>
            <Star></Star>
        </div>
    );
}

export default Title;