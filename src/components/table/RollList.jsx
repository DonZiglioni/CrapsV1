import React from 'react';
import red1 from '../../assets/OneRed.png';
import red2 from '../../assets/TwoRed.png';
import red3 from '../../assets/ThreeRed.png';
import red4 from '../../assets/FourRed.png';
import red5 from '../../assets/FiveRed.png';
import red6 from '../../assets/SixRed.png';
import blue1 from '../../assets/One.png';
import blue2 from '../../assets/Two.png';
import blue3 from '../../assets/Three.png';
import blue4 from '../../assets/Four.png';
import blue5 from '../../assets/Five.png';
import blue6 from '../../assets/Six.png';


function RollList({ rollList }) {

    const getDieLImage = (dieL) => {
        switch (dieL) {
            case 1:
                return blue1;
                break;
            case 2:
                return blue2;
                break;
            case 3:
                return blue3;
                break;
            case 4:
                return blue4;
                break;
            case 5:
                return blue5;
                break;
            case 6:
                return blue6;
                break;
            default:
                break;
        }
    }

    const getDieRImage = (dieR) => {
        switch (dieR) {
            case 1:
                return red1;
                break;
            case 2:
                return red2;
                break;
            case 3:
                return red3;
                break;
            case 4:
                return red4;
                break;
            case 5:
                return red5;
                break;
            case 6:
                return red6;
                break;
            default:
                break;
        }
    }


    return (
        <div className='main-container'>
            <ol className='roll-list-container'>
                {
                    rollList.map((e, index) => {
                        let leftImage = getDieLImage(e[0]);
                        let rightImage = getDieRImage(e[1]);
                        return (
                            <li key={index}>
                                <div className='roll-item'>
                                    <img className='left-die' src={leftImage} style={{ height: '25px', width: '25px' }} />
                                    <img className='left-die' src={rightImage} style={{ height: '25px', width: '25px' }} />
                                    <span>{e[2]}</span>
                                </div>
                            </li>
                        )
                    })
                }
            </ol>
        </div>
    )
}

export default RollList