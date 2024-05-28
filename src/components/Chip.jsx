import React from 'react';
import chipWhite from '../assets/ChipWhite.png';
import chipRed from '../assets/ChipRed.png';
import chipGreen from '../assets/ChipGreen.png';
import chipBlack from '../assets/ChipBlack.png';
import chipPurple from '../assets/ChipPurple.png';
import chipYellow from '../assets/ChipYellow.png';

import '../components/Table.css';

function Chip({ value, level }) {
    // let topChip;
    // console.log(value);
    // switch (value) {
    //     case 1:
    //         topChip = chipWhite;
    //         break;
    //     case 5:
    //         topChip = chipRed;
    //         break;
    //     case 25:
    //         topChip = chipGreen;
    //         break;
    //     case 100:
    //         topChip = chipBlack;
    //         break;
    //     case 500:
    //         topChip = chipPurple;
    //         break;
    //     case 1000:
    //         topChip = chipYellow;
    //         break;
    //     default:
    //         break;
    // }

    // const getRandomInt = () => {
    //     return Math.floor(Math.random() * 5)
    // }



    return (
        <div className='chip-stack' >
            <img src={level} className='chip' style={{
                // margin: `${getRandomInt()}px ${getRandomInt()}px ${getRandomInt()}px ${getRandomInt()}px` 
            }} />
        </div>
    )
}

export default Chip