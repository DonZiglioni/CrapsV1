import React from 'react';
import red1 from '../assets/OneRed.png'
import red2 from '../assets/TwoRed.png'
import red3 from '../assets/ThreeRed.png'
import red4 from '../assets/FourRed.png'
import red5 from '../assets/FiveRed.png'
import red6 from '../assets/SixRed.png'
import blue1 from '../assets/One.png'
import blue2 from '../assets/Two.png'
import blue3 from '../assets/Three.png'
import blue4 from '../assets/Four.png'
import blue5 from '../assets/Five.png'
import blue6 from '../assets/Six.png'

function Bubble({ left, right, rollDice, startDice, stopDice, rollTimer }) {
    let leftImage;
    let rightImage;

    switch (left) {
        case 1:
            leftImage = blue1;
            break;
        case 2:
            leftImage = blue2;
            break;
        case 3:
            leftImage = blue3;
            break;
        case 4:
            leftImage = blue4;
            break;
        case 5:
            leftImage = blue5;
            break;
        case 6:
            leftImage = blue6;
            break;
        default:
            break;
    }
    switch (right) {
        case 1:
            rightImage = red1;
            break;
        case 2:
            rightImage = red2;
            break;
        case 3:
            rightImage = red3;
            break;
        case 4:
            rightImage = red4;
            break;
        case 5:
            rightImage = red5;
            break;
        case 6:
            rightImage = red6;
            break;
        default:
            break;
    }

    return (
        <div className='bubble-container'>
            <div className='dice-container'>
                <img className='left-die' src={leftImage} style={{ height: '50px', width: '50px' }} />
                <img className='left-die' src={rightImage} style={{ height: '50px', width: '50px' }} />
            </div>
            <span>{rollTimer}</span>
            <button onClick={() => rollDice()}>ROLL</button>
            <button onClick={() => startDice()}>START</button>
            <button onClick={() => stopDice()}>STOP</button>
        </div>
    )
}

export default Bubble