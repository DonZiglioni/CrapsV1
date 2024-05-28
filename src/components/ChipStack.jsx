import React, { useState, useEffect } from 'react';

import chipWhite from '../assets/ChipWhite.png';
import chipRed from '../assets/ChipRed.png';
import chipGreen from '../assets/ChipGreen.png';
import chipBlack from '../assets/ChipBlack.png';
import chipPurple from '../assets/ChipPurple.png';
import chipYellow from '../assets/ChipYellow.png';

import Chip from './Chip';

import '../components/Table.css'


function ChipStack({ amount }) {
    const [chipStack, setChipStack] = useState([]);
    const [topChip, setTopChip] = useState(chipRed);
    let tempStack = [];


    const colorUp = (betAmount) => {
        let tempAmount = betAmount;

        if (tempAmount >= 1000) {
            tempStack.push([...tempStack, 1000]);
            const remaining = tempAmount - 1000;
            if (remaining > 0) {
                colorUp(remaining);
            }
        } else if (tempAmount >= 500) {
            tempStack.push([...tempStack, 500]);
            const remaining = tempAmount - 500;
            if (remaining > 0) {
                colorUp(remaining);
            }
        } else if (tempAmount >= 100) {
            tempStack.push([...tempStack, 100]);
            const remaining = tempAmount - 100;
            if (remaining > 0) {
                colorUp(remaining);
            }
        } else if (tempAmount >= 25) {
            tempStack.push([...tempStack, 25]);
            const remaining = tempAmount - 25;
            if (remaining > 0) {
                colorUp(remaining);

            }
        } else if (tempAmount >= 5) {
            tempStack.push([...tempStack, 5]);
            const remaining = tempAmount - 5;
            if (remaining > 0) {
                colorUp(remaining);
            }
        } else if (tempAmount >= 1) {
            tempStack.push([...tempStack, 1]);
            const remaining = tempAmount - 1;
            if (remaining > 0) {
                colorUp(remaining);
            }
        }
    }

    useEffect(() => {
        if (amount > 0) {
            colorUp(amount);
            let newStack = [];
            tempStack.forEach(e => {
                newStack.push(e[e.length - 1]);
            });
            setChipStack([...newStack]);
            if (amount < 5) {
                setTopChip(chipWhite);
            } else if (amount >= 5 && amount < 25) {
                setTopChip(chipRed);
            } else if (amount >= 25 && amount < 100) {
                setTopChip(chipGreen);
            } else if (amount >= 100 && amount < 500) {
                setTopChip(chipBlack);
            } else if (amount >= 500 && amount < 1000) {
                setTopChip(chipPurple);
            } else if (amount >= 1000) {
                setTopChip(chipYellow);
            }
        }
    }, [amount]);




    return (
        <>

            <div className='chip-stack' >
                {
                    amount > 0 ?
                        chipStack.map((e, index) => {
                            return <Chip key={index} value={e} level={topChip} />
                        })
                        :
                        null
                }
                {
                    topChip === chipBlack ?
                        <span className='chip-stack-amount-black' >{amount}</span>
                        :
                        <span className='chip-stack-amount' >{amount}</span>
                }

            </div>
        </>
    )
}

export default ChipStack;