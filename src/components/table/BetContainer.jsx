import React from 'react';
import '../../components/Table.css';
import ChipStack from '../ChipStack';
import puckOn from '../../assets/puckOn.png'


function BetContainer({ bet, betAmount, value, changeBet, decrease, winner, winAmount, point, rollCount }) {
    const selectedChips = betAmount;
    const isDecreasing = decrease;

    switch (bet) {
        case 'pass':
            if (value <= 0) {
                return (
                    <>
                        <div className='pass' onClick={() => changeBet("pass", selectedChips, isDecreasing, value)}>
                            <span>PASS</span>
                        </div>
                    </>
                )
            } else {
                return (
                    <>
                        <div className='pass' onClick={() => changeBet("pass", selectedChips, isDecreasing, value)}>
                            <span className='bet-print'>PASS</span>
                            <ChipStack amount={value} />
                            {winner ? <ChipStack amount={winAmount} /> : null}
                        </div>
                    </>
                )
            }

        case 'dontpass':
            if (value <= 0) {
                return (
                    <>
                        <div className='dontpass' onClick={() => changeBet("dontpass", selectedChips, isDecreasing, value)}>
                            <span>DON'T PASS</span>
                        </div>
                    </>
                )
            } else {
                return (
                    <>
                        <div className='dontpass' onClick={() => changeBet("dontpass", selectedChips, isDecreasing, value)}>
                            <span>DON'T PASS</span>
                            <ChipStack amount={value} />
                        </div>
                    </>
                );
            }
        case 'come':
            if (value <= 0) {
                return (
                    <>
                        <div className='come' onClick={() => changeBet("come", selectedChips, isDecreasing, value)}>
                            <span>COME</span>
                        </div>
                    </>
                )
            } else {
                return (
                    <>
                        <div className='come' onClick={() => changeBet("come", selectedChips, isDecreasing, value)}>
                            <span>COME</span>
                            <ChipStack amount={value} />
                        </div>
                    </>
                );
            }
        case 'dontcome':
            if (value <= 0) {
                return (
                    <>
                        <div className='dontcome' onClick={() => changeBet("dontcome", selectedChips, isDecreasing, value)}>
                            <span>DON'T COME</span>
                        </div>
                    </>
                )
            } else {
                return (
                    <>
                        <div className='dontcome' onClick={() => changeBet("dontcome", selectedChips, isDecreasing, value)}>
                            <span>DON'T COME</span>
                            <ChipStack amount={value} />
                        </div>
                    </>
                );
            }
        case 'field':
            if (value <= 0) {
                return (
                    <>
                        <div className='field' onClick={() => changeBet("field", selectedChips, isDecreasing, value)}>
                            <span>FIELD</span>
                        </div>
                    </>
                )
            } else {
                return (
                    <>
                        <div className='field' onClick={() => changeBet("field", selectedChips, isDecreasing, value)}>
                            <span>FIELD</span>
                            <ChipStack amount={value} />
                        </div>
                    </>
                );
            }
        case 'world':
            if (value <= 0) {
                return (
                    <>
                        <div className='world' onClick={() => changeBet("world", selectedChips, isDecreasing, value)} >
                            <span>World</span>
                        </div>
                    </>
                )
            } else {
                return (
                    <>
                        <div className='world' onClick={() => changeBet("world", selectedChips, isDecreasing, value)} >
                            <span>World</span>
                            <ChipStack amount={value} />
                        </div>

                    </>
                );
            }
        case 'fire':
            if (value <= 0) {
                return (
                    <>
                        <div className='fire' onClick={() => changeBet("fire", selectedChips, isDecreasing, value)} >
                            <span>Fire</span>
                        </div>
                    </>
                )
            } else {
                return (
                    <>
                        <div className='fire' onClick={() => changeBet("fire", selectedChips, isDecreasing, value)} >
                            <span>Fire</span>
                            <ChipStack amount={value} />
                        </div>

                    </>
                );
            }
        case 'repeater2':
            if (value <= 0) {
                return (
                    <>
                        <div className='repeater2' onClick={() => changeBet("repeater2", selectedChips, isDecreasing, value)} >
                            <span>2</span>
                        </div>
                    </>
                )
            } else {
                return (
                    <>
                        <div className='repeater2' onClick={() => changeBet("repeater2", selectedChips, isDecreasing, value)} >
                            <span>2</span>
                            <ChipStack amount={value} />
                        </div>

                    </>
                );
            }
        case 'repeater3':
            if (value <= 0) {
                return (
                    <>
                        <div className='repeater3' onClick={() => changeBet("repeater3", selectedChips, isDecreasing, value)} >
                            <span>3</span>
                        </div>
                    </>
                )
            } else {
                return (
                    <>
                        <div className='repeater3' onClick={() => changeBet("repeater3", selectedChips, isDecreasing, value)} >
                            <span>3</span>
                            <ChipStack amount={value} />
                        </div>

                    </>
                );
            }
        case 'repeater4':
            if (value <= 0) {
                return (
                    <>
                        <div className='repeater4' onClick={() => changeBet("repeater4", selectedChips, isDecreasing, value)} >
                            <span>4</span>
                        </div>
                    </>
                )
            } else {
                return (
                    <>
                        <div className='repeater4' onClick={() => changeBet("repeater4", selectedChips, isDecreasing, value)} >
                            <span>4</span>
                            <ChipStack amount={value} />
                        </div>

                    </>
                );
            }
        case 'repeater5':
            if (value <= 0) {
                return (
                    <>
                        <div className='repeater5' onClick={() => changeBet("repeater5", selectedChips, isDecreasing, value)} >
                            <span>5</span>
                        </div>
                    </>
                )
            } else {
                return (
                    <>
                        <div className='repeater5' onClick={() => changeBet("repeater5", selectedChips, isDecreasing, value)} >
                            <span>5</span>
                            <ChipStack amount={value} />
                        </div>

                    </>
                );
            }
        case 'repeater6':
            if (value <= 0) {
                return (
                    <>
                        <div className='repeater6' onClick={() => changeBet("repeater6", selectedChips, isDecreasing, value)} >
                            <span>6</span>
                        </div>
                    </>
                )
            } else {
                return (
                    <>
                        <div className='repeater6' onClick={() => changeBet("repeater6", selectedChips, isDecreasing, value)} >
                            <span>6</span>
                            <ChipStack amount={value} />
                        </div>

                    </>
                );
            }
        case 'repeater8':
            if (value <= 0) {
                return (
                    <>
                        <div className='repeater8' onClick={() => changeBet("repeater8", selectedChips, isDecreasing, value)} >
                            <span>8</span>
                        </div>
                    </>
                )
            } else {
                return (
                    <>
                        <div className='repeater8' onClick={() => changeBet("repeater8", selectedChips, isDecreasing, value)} >
                            <span>8</span>
                            <ChipStack amount={value} />
                        </div>

                    </>
                );
            }
        case 'repeater9':
            if (value <= 0) {
                return (
                    <>
                        <div className='repeater9' onClick={() => changeBet("repeater9", selectedChips, isDecreasing, value)} >
                            <span>9</span>
                        </div>
                    </>
                )
            } else {
                return (
                    <>
                        <div className='repeater9' onClick={() => changeBet("repeater9", selectedChips, isDecreasing, value)} >
                            <span>9</span>
                            <ChipStack amount={value} />
                        </div>

                    </>
                );
            }
        case 'repeater10':
            if (value <= 0) {
                return (
                    <>
                        <div className='repeater10' onClick={() => changeBet("repeater10", selectedChips, isDecreasing, value)} >
                            <span>10</span>
                        </div>
                    </>
                )
            } else {
                return (
                    <>
                        <div className='repeater10' onClick={() => changeBet("repeater10", selectedChips, isDecreasing, value)} >
                            <span>10</span>
                            <ChipStack amount={value} />
                        </div>

                    </>
                );
            }
        case 'repeater11':
            if (value <= 0) {
                return (
                    <>
                        <div className='repeater11' onClick={() => changeBet("repeater11", selectedChips, isDecreasing, value)} >
                            <span>11</span>
                        </div>
                    </>
                )
            } else {
                return (
                    <>
                        <div className='repeater11' onClick={() => changeBet("repeater11", selectedChips, isDecreasing, value)} >
                            <span>11</span>
                            <ChipStack amount={value} />
                        </div>

                    </>
                );
            }
        case 'repeater12':
            if (value <= 0) {
                return (
                    <>
                        <div className='repeater12' onClick={() => changeBet("repeater12", selectedChips, isDecreasing, value)} >
                            <span>12</span>
                        </div>
                    </>
                )
            } else {
                return (
                    <>
                        <div className='repeater12' onClick={() => changeBet("repeater12", selectedChips, isDecreasing, value)} >
                            <span>12</span>
                            <ChipStack amount={value} />
                        </div>

                    </>
                );
            }
        case 'pass-odds':
            if (value <= 0) {
                return (
                    <>
                        <div className='pass-odds' onClick={() => changeBet("pass-odds", selectedChips, isDecreasing, value)}>
                            <span>ODDS</span>
                        </div>

                    </>
                )
            } else {
                return (
                    <>
                        <div className='pass-odds' onClick={() => changeBet("pass-odds", selectedChips, isDecreasing, value)}>
                            <span>ODDS</span>
                            <ChipStack amount={value} />
                        </div>

                    </>
                );
            }
        case 'dontpass-odds':
            if (value <= 0) {
                return (
                    <>
                        <div className='dontpass-odds' onClick={() => changeBet("dontpass-odds", selectedChips, isDecreasing, value)}>
                            <span>ODDS</span>
                        </div>

                    </>
                )
            } else {
                return (
                    <>
                        <div className='dontpass-odds' onClick={() => changeBet("dontpass-odds", selectedChips, isDecreasing, value)}>
                            <span>ODDS</span>
                            <ChipStack amount={value} />
                        </div>

                    </>
                );
            }
        case 'anycraps':
            if (value <= 0) {
                return (
                    <>
                        <div className='anycraps' onClick={() => changeBet("anycraps", selectedChips, isDecreasing, value)}>
                            <span>Any Craps</span>
                        </div>

                    </>
                )
            } else {
                return (
                    <>
                        <div className='anycraps' onClick={() => changeBet("anycraps", selectedChips, isDecreasing, value)}>
                            <span>Any Craps</span>
                            <ChipStack amount={value} />
                        </div>

                    </>
                );
            }
        case 'anyseven':
            if (value <= 0) {
                return (
                    <>
                        <div className='anyseven' onClick={() => changeBet("anyseven", selectedChips, isDecreasing, value)}>
                            <span>Any 7</span>
                        </div>

                    </>
                )
            } else {
                return (
                    <>
                        <div className='anyseven' onClick={() => changeBet("anyseven", selectedChips, isDecreasing, value)}>
                            <span>Any 7</span>
                            <ChipStack amount={value} />
                        </div>

                    </>
                );
            }
        case 'two':
            if (value <= 0) {
                return (
                    <>
                        <div className='two' onClick={() => changeBet("two", selectedChips, isDecreasing, value)}>
                            <span>Ace | Ace</span>
                        </div>

                    </>
                )
            } else {
                return (
                    <>
                        <div className='two' onClick={() => changeBet("two", selectedChips, isDecreasing, value)}>
                            <span>Ace | Ace</span>
                            <ChipStack amount={value} />
                        </div>

                    </>
                );
            }
        case 'ace-deuce':
            if (value <= 0) {
                return (
                    <>
                        <div className='ace-deuce' onClick={() => changeBet("three", selectedChips, isDecreasing, value)}>
                            <span>Ace | Two</span>
                        </div>


                    </>
                )
            } else {
                return (
                    <>
                        <div className='ace-deuce' onClick={() => changeBet("three", selectedChips, isDecreasing, value)}>
                            <span>Ace | Two</span>
                            <ChipStack amount={value} />
                        </div>

                    </>
                );
            }
        case 'twelve':
            if (value <= 0) {
                return (
                    <>
                        <div className='twelve' onClick={() => changeBet("twelve", selectedChips, isDecreasing, value)}>
                            <span>Six | Six</span>
                        </div>

                    </>
                )
            } else {
                return (
                    <>
                        <div className='twelve' onClick={() => changeBet("twelve", selectedChips, isDecreasing, value)}>
                            <span>Six | Six</span>
                            <ChipStack amount={value} />
                        </div>

                    </>
                );
            }
        case 'eleven':
            if (value <= 0) {
                return (
                    <>
                        <div className='eleven' onClick={() => changeBet("eleven", selectedChips, isDecreasing, value)}>
                            <span>Five | Six</span>
                        </div>

                    </>
                )
            } else {
                return (
                    <>
                        <div className='eleven' onClick={() => changeBet("eleven", selectedChips, isDecreasing, value)}>
                            <span>Five | Six</span>
                            <ChipStack amount={value} />
                        </div>

                    </>
                );
            }
        case 'hard-4':
            if (value <= 0) {
                return (
                    <>
                        <div className='hard-4' onClick={() => changeBet("hard4", selectedChips, isDecreasing, value)}>
                            <span>HARD 4</span>
                        </div>

                    </>
                )
            } else {
                return (
                    <>
                        <div className='hard-4' onClick={() => changeBet("hard4", selectedChips, isDecreasing, value)}>
                            <span>HARD 4</span>
                            <ChipStack amount={value} />
                        </div>

                    </>
                );
            }
        case 'hard-6':
            if (value <= 0) {
                return (
                    <>
                        <div className='hard-6' onClick={() => changeBet("hard6", selectedChips, isDecreasing, value)}>
                            <span>HARD 6</span>
                        </div>

                    </>
                )
            } else {
                return (
                    <>
                        <div className='hard-6' onClick={() => changeBet("hard6", selectedChips, isDecreasing, value)}>
                            <span>HARD 6</span>
                            <ChipStack amount={value} />
                        </div>

                    </>
                );
            }
        case 'hard-8':
            if (value <= 0) {
                return (
                    <>
                        <div className='hard-8' onClick={() => changeBet("hard8", selectedChips, isDecreasing, value)}>
                            <span>HARD 8</span>
                        </div>

                    </>
                )
            } else {
                return (
                    <>
                        <div className='hard-8' onClick={() => changeBet("hard8", selectedChips, isDecreasing, value)}>
                            <span>HARD 8</span>
                            <ChipStack amount={value} />
                        </div>

                    </>
                );
            }
        case 'hard-10':
            if (value <= 0) {
                return (
                    <>
                        <div className='hard-10' onClick={() => changeBet("hard10", selectedChips, isDecreasing, value)}>
                            <span>HARD 10</span>
                        </div>

                    </>
                )
            } else {
                return (
                    <>
                        <div className='hard-10' onClick={() => changeBet("hard10", selectedChips, isDecreasing, value)}>
                            <span>HARD 10</span>
                            <ChipStack amount={value} />
                        </div>

                    </>
                );
            }
        case 'box-4':
            if (value <= 0) {
                return (
                    <>
                        <div className='box-4' onClick={() => changeBet("box4", selectedChips, isDecreasing, value)}>
                            {point === 4 ? <img src={puckOn} style={{ height: '50px', width: '50px', position: 'absolute' }} /> : null}
                            <span>4</span>
                        </div>

                    </>
                )
            } else {
                return (
                    <>
                        <div className='box-4' onClick={() => changeBet("box4", selectedChips, isDecreasing, value)}>
                            {point === 4 ? <img src={puckOn} style={{ height: '50px', width: '50px', position: 'absolute' }} /> : null}
                            <span>4</span>
                            <ChipStack amount={value} />
                        </div>

                    </>
                );
            }
        case 'box-5':
            if (value <= 0) {
                return (
                    <>
                        <div className='box-5' onClick={() => changeBet("box5", selectedChips, isDecreasing, value)}>
                            {point === 5 ? <img src={puckOn} style={{ height: '50px', width: '50px', position: 'absolute' }} /> : null}
                            <span>5</span>
                        </div>

                    </>
                )
            } else {
                return (
                    <>
                        <div className='box-5' onClick={() => changeBet("box5", selectedChips, isDecreasing, value)}>
                            {point === 5 ? <img src={puckOn} style={{ height: '50px', width: '50px', position: 'absolute' }} /> : null}
                            <span>5</span>
                            <ChipStack amount={value} />
                        </div>

                    </>
                );
            }
        case 'box-6':
            if (value <= 0) {
                return (
                    <>
                        <div className='box-6' onClick={() => changeBet("box6", selectedChips, isDecreasing, value)}>
                            {point === 6 ? <img src={puckOn} style={{ height: '50px', width: '50px', position: 'absolute' }} /> : null}
                            <span>6</span>
                        </div>

                    </>
                )
            } else {
                return (
                    <>
                        <div className='box-6' onClick={() => changeBet("box6", selectedChips, isDecreasing, value)}>
                            {point === 6 ? <img src={puckOn} style={{ height: '50px', width: '50px', position: 'absolute' }} /> : null}
                            <span>6</span>
                            <ChipStack amount={value} />
                        </div>

                    </>
                );
            }
        case 'box-8':
            if (value <= 0) {
                return (
                    <>
                        <div className='box-8' onClick={() => changeBet("box8", selectedChips, isDecreasing, value)}>
                            {point === 8 ? <img src={puckOn} style={{ height: '50px', width: '50px', position: 'absolute' }} /> : null}
                            <span>8</span>
                        </div>

                    </>
                )
            } else {
                return (
                    <>
                        <div className='box-8' onClick={() => changeBet("box8", selectedChips, isDecreasing, value)}>
                            {point === 8 ? <img src={puckOn} style={{ height: '50px', width: '50px', position: 'absolute' }} /> : null}
                            <span>8</span>
                            <ChipStack amount={value} />
                        </div>

                    </>
                );
            }
        case 'box-9':
            if (value <= 0) {
                return (
                    <>
                        <div className='box-9' onClick={() => changeBet("box9", selectedChips, isDecreasing, value)}>
                            {point === 9 ? <img src={puckOn} style={{ height: '50px', width: '50px', position: 'absolute' }} /> : null}
                            <span>9</span>
                        </div>

                    </>
                )
            } else {
                return (
                    <>
                        <div className='box-9' onClick={() => changeBet("box9", selectedChips, isDecreasing, value)}>
                            {point === 9 ? <img src={puckOn} style={{ height: '50px', width: '50px', position: 'absolute' }} /> : null}
                            <span>9</span>
                            <ChipStack amount={value} />
                        </div>

                    </>
                );
            }
        case 'box-10':
            if (value <= 0) {
                return (
                    <>
                        <div className='box-10' onClick={() => changeBet("box10", selectedChips, isDecreasing, value)}>
                            {point === 10 ? <img src={puckOn} style={{ height: '50px', width: '50px', position: 'absolute' }} /> : null}
                            <span>10</span>
                        </div>

                    </>
                )
            } else {
                return (
                    <>
                        <div className='box-10' onClick={() => changeBet("box10", selectedChips, isDecreasing, value)}>
                            {point === 10 ? <img src={puckOn} style={{ height: '50px', width: '50px', position: 'absolute' }} /> : null}
                            <span>10</span>
                            <ChipStack amount={value} />
                        </div>

                    </>
                );
            }
        case 'place-4':
            if (value <= 0) {
                return (
                    <>
                        <div className='place-4' onClick={() => changeBet("place4", selectedChips, isDecreasing, value)}>
                            <span>9</span>

                        </div>
                    </>
                )
            } else {
                return (
                    <>
                        <div className='place-4' onClick={() => changeBet("place4", selectedChips, isDecreasing, value)}>
                            <span>9</span>
                            <ChipStack amount={value} />

                        </div>

                    </>
                );
            }
        case 'place-5':
            if (value <= 0) {
                return (
                    <>
                        <div className='place-5' onClick={() => changeBet("place5", selectedChips, isDecreasing, value)}>
                            <span>9</span>

                        </div>
                    </>
                )
            } else {
                return (
                    <>
                        <div className='place-5' onClick={() => changeBet("place5", selectedChips, isDecreasing, value)}>
                            <span>9</span>
                            <ChipStack amount={value} />

                        </div>

                    </>
                );
            }
        case 'place-6':
            if (value <= 0) {
                return (
                    <>
                        <div className='place-6' onClick={() => changeBet("place6", selectedChips, isDecreasing, value)}>
                            <span>9</span>

                        </div>


                    </>
                )
            } else {
                return (
                    <>
                        <div className='place-6' onClick={() => changeBet("place6", selectedChips, isDecreasing, value)}>
                            <span>9</span>
                            <ChipStack amount={value} />

                        </div>

                    </>
                );
            }
        case 'place-8':
            if (value <= 0) {
                return (
                    <>
                        <div className='place-8' onClick={() => changeBet("place8", selectedChips, isDecreasing, value)}>
                            <span>9</span>

                        </div>
                    </>
                )
            } else {
                return (
                    <>
                        <div className='place-8' onClick={() => changeBet("place8", selectedChips, isDecreasing, value)}>
                            <span>9</span>
                            <ChipStack amount={value} />

                        </div>

                    </>
                );
            }
        case 'place-9':
            if (value <= 0) {
                return (
                    <>
                        <div className='place-9' onClick={() => changeBet("place9", selectedChips, isDecreasing, value)}>
                            <span>9</span>

                        </div>

                    </>
                )
            } else {
                return (
                    <>
                        <div className='place-9' onClick={() => changeBet("place9", selectedChips, isDecreasing, value)}>
                            <span>9</span>
                            <ChipStack amount={value} />

                        </div>

                    </>
                );
            }
        case 'place-10':
            if (value <= 0) {
                return (
                    <>
                        <div className='place-10' onClick={() => changeBet("place10", selectedChips, isDecreasing, value)}>
                            <span>9</span>

                        </div>
                    </>
                )
            } else {
                return (
                    <>
                        <div className='place-10' onClick={() => changeBet("place10", selectedChips, isDecreasing, value)}>
                            <span>9</span>
                            <ChipStack amount={value} />

                        </div>

                    </>
                );
            }
        case 'put-4':
            if (value <= 0) {
                return (
                    <>
                        <div className='put-4' onClick={() => changeBet("put4", selectedChips, isDecreasing, value)}>
                            <span>9</span>

                        </div>

                    </>
                )
            } else {
                return (
                    <>
                        <div className='put-4' onClick={() => changeBet("put4", selectedChips, isDecreasing, value)}>
                            <span>9</span>
                            <ChipStack amount={value} />

                        </div>

                    </>
                );
            }
        case 'put-5':
            if (value <= 0) {
                return (
                    <>
                        <div className='put-5' onClick={() => changeBet("put5", selectedChips, isDecreasing, value)}>
                            <span>9</span>

                        </div>

                    </>
                )
            } else {
                return (
                    <>
                        <div className='put-5' onClick={() => changeBet("put5", selectedChips, isDecreasing, value)}>
                            <span>9</span>
                            <ChipStack amount={value} />

                        </div>

                    </>
                );
            }
        case 'put-6':
            if (value <= 0) {
                return (
                    <>
                        <div className='put-6' onClick={() => changeBet("put6", selectedChips, isDecreasing, value)}>
                            <span>9</span>

                        </div>
                    </>
                )
            } else {
                return (
                    <>
                        <div className='put-6' onClick={() => changeBet("put6", selectedChips, isDecreasing, value)}>
                            <span>9</span>
                            <ChipStack amount={value} />

                        </div>

                    </>
                );
            }
        case 'put-8':
            if (value <= 0) {
                return (
                    <>
                        <div className='put-8' onClick={() => changeBet("put8", selectedChips, isDecreasing, value)}>
                            <span>9</span>

                        </div>

                    </>
                )
            } else {
                return (
                    <>
                        <div className='put-8' onClick={() => changeBet("put8", selectedChips, isDecreasing, value)}>
                            <span>9</span>
                            <ChipStack amount={value} />

                        </div>

                    </>
                );
            }
        case 'put-9':
            if (value <= 0) {
                return (
                    <>
                        <div className='put-9' onClick={() => changeBet("put9", selectedChips, isDecreasing, value)}>
                            <span>9</span>

                        </div>

                    </>
                )
            } else {
                return (
                    <>
                        <div className='put-9' onClick={() => changeBet("put9", selectedChips, isDecreasing, value)}>
                            <span>9</span>
                            <ChipStack amount={value} />

                        </div>

                    </>
                );
            }
        case 'put-10':
            if (value <= 0) {
                return (
                    <>
                        <div className='put-10' onClick={() => changeBet("put10", selectedChips, isDecreasing, value)}>
                            <span>9</span>

                        </div>
                    </>
                )
            } else {
                return (
                    <>
                        <div className='put-10' onClick={() => changeBet("put10", selectedChips, isDecreasing, value)}>
                            <span>9</span>
                            <ChipStack amount={value} />

                        </div>

                    </>
                );
            }
        case 'place-4-odds':
            if (value <= 0) {
                return (
                    <>
                        <div className='place-4-odds' onClick={() => changeBet("place4Odds", selectedChips, isDecreasing, value)}>
                            <span>9</span>


                        </div>
                    </>
                )
            } else {
                return (
                    <>
                        <div className='place-4-odds' onClick={() => changeBet("place4Odds", selectedChips, isDecreasing, value)}>
                            <span>9</span>
                            <ChipStack amount={value} />

                        </div>

                    </>
                );
            }
        case 'place-5-odds':
            if (value <= 0) {
                return (
                    <>
                        <div className='place-5-odds' onClick={() => changeBet("place5Odds", selectedChips, isDecreasing, value)}>
                            <span>9</span>

                        </div>

                    </>
                )
            } else {
                return (
                    <>
                        <div className='place-5-odds' onClick={() => changeBet("place5Odds", selectedChips, isDecreasing, value)}>
                            <span>9</span>
                            <ChipStack amount={value} />

                        </div>

                    </>
                );
            }
        case 'place-6-odds':
            if (value <= 0) {
                return (
                    <>
                        <div className='place-6-odds' onClick={() => changeBet("place6Odds", selectedChips, isDecreasing, value)}>
                            <span>9</span>

                        </div>

                    </>
                )
            } else {
                return (
                    <>
                        <div className='place-6-odds' onClick={() => changeBet("place6Odds", selectedChips, isDecreasing, value)}>
                            <span>9</span>
                            <ChipStack amount={value} />

                        </div>

                    </>
                );
            }
        case 'place-8-odds':
            if (value <= 0) {
                return (
                    <>
                        <div className='place-8-odds' onClick={() => changeBet("place8Odds", selectedChips, isDecreasing, value)}>
                            <span>9</span>

                        </div>

                    </>
                )
            } else {
                return (
                    <>
                        <div className='place-8-odds' onClick={() => changeBet("place8Odds", selectedChips, isDecreasing, value)}>
                            <span>9</span>
                            <ChipStack amount={value} />

                        </div>

                    </>
                );
            }
        case 'place-9-odds':
            if (value <= 0) {
                return (
                    <>
                        <div className='place-9-odds' onClick={() => changeBet("place9Odds", selectedChips, isDecreasing, value)}>
                            <span>9</span>

                        </div>

                    </>
                )
            } else {
                return (
                    <>
                        <div className='place-9-odds' onClick={() => changeBet("place9Odds", selectedChips, isDecreasing, value)}>
                            <span>9</span>
                            <ChipStack amount={value} />

                        </div>

                    </>
                );
            }
        case 'place-10-odds':
            if (value <= 0) {
                return (
                    <>
                        <div className='place-10-odds' onClick={() => changeBet("place10Odds", selectedChips, isDecreasing, value)}>
                            <span>9</span>

                        </div>

                    </>
                )
            } else {
                return (
                    <>
                        <div className='place-10-odds' onClick={() => changeBet("place10Odds", selectedChips, isDecreasing, value)}>
                            <span>9</span>
                            <ChipStack amount={value} />

                        </div>

                    </>
                );
            }
        case 'put-4-odds':
            if (value <= 0) {
                return (
                    <>
                        <div className='put-4-odds' onClick={() => changeBet("put4Odds", selectedChips, isDecreasing, value)}>
                            <span>9</span>

                        </div>

                    </>
                )
            } else {
                return (
                    <>
                        <div className='put-4-odds' onClick={() => changeBet("put4Odds", selectedChips, isDecreasing, value)}>
                            <span>9</span>
                            <ChipStack amount={value} />

                        </div>

                    </>
                );
            }
        case 'put-5-odds':
            if (value <= 0) {
                return (
                    <>
                        <div className='put-5-odds' onClick={() => changeBet("put5Odds", selectedChips, isDecreasing, value)}>
                            <span>9</span>

                        </div>

                    </>
                )
            } else {
                return (
                    <>
                        <div className='put-5-odds' onClick={() => changeBet("put5Odds", selectedChips, isDecreasing, value)}>
                            <span>9</span>
                            <ChipStack amount={value} />

                        </div>

                    </>
                );
            }
        case 'put-6-odds':
            if (value <= 0) {
                return (
                    <>
                        <div className='put-6-odds' onClick={() => changeBet("put6Odds", selectedChips, isDecreasing, value)}>
                            <span>9</span>

                        </div>

                    </>
                )
            } else {
                return (
                    <>
                        <div className='put-6-odds' onClick={() => changeBet("put6Odds", selectedChips, isDecreasing, value)}>
                            <span>9</span>
                            <ChipStack amount={value} />

                        </div>

                    </>
                );
            }
        case 'put-8-odds':
            if (value <= 0) {
                return (
                    <>
                        <div className='put-8-odds' onClick={() => changeBet("put8Odds", selectedChips, isDecreasing, value)}>
                            <span>9</span>

                        </div>

                    </>
                )
            } else {
                return (
                    <>
                        <div className='put-8-odds' onClick={() => changeBet("put8Odds", selectedChips, isDecreasing, value)}>
                            <span>9</span>
                            <ChipStack amount={value} />

                        </div>

                    </>
                );
            }
        case 'put-9-odds':
            if (value <= 0) {
                return (
                    <>
                        <div className='put-9-odds' onClick={() => changeBet("put9Odds", selectedChips, isDecreasing, value)}>
                            <span>9</span>

                        </div>

                    </>
                )
            } else {
                return (
                    <>
                        <div className='put-9-odds' onClick={() => changeBet("put9Odds", selectedChips, isDecreasing, value)}>
                            <span>9</span>
                            <ChipStack amount={value} />

                        </div>

                    </>
                );
            }
        case 'put-10-odds':
            if (value <= 0) {
                return (
                    <>
                        <div className='put-10-odds' onClick={() => changeBet("put10Odds", selectedChips, isDecreasing, value)}>
                            <span>9</span>

                        </div>

                    </>
                )
            } else {
                return (
                    <>
                        <div className='put-10-odds' onClick={() => changeBet("put10Odds", selectedChips, isDecreasing, value)}>
                            <span>9</span>
                            <ChipStack amount={value} />

                        </div>

                    </>
                );
            }
        case 'small':
            if (value <= 0) {
                return (
                    <>
                        <div className='small' onClick={() => changeBet("small", selectedChips, isDecreasing, value)}>
                            <span>S</span>
                        </div>


                    </>
                )
            } else {
                return (
                    <>
                        <div className='small' onClick={() => changeBet("small", selectedChips, isDecreasing, value)}>
                            <span>S</span>
                            <ChipStack amount={value} />
                        </div>

                    </>
                );
            }
        case 'tall':
            if (value <= 0) {
                return (
                    <>
                        <div className='tall' onClick={() => changeBet("tall", selectedChips, isDecreasing, value)}>
                            <span>T</span>
                        </div>


                    </>
                )
            } else {
                return (
                    <>
                        <div className='tall' onClick={() => changeBet("tall", selectedChips, isDecreasing, value)}>
                            <span>T</span>
                            <ChipStack amount={value} />
                        </div>

                    </>
                );
            }
        case 'all':
            if (value <= 0) {
                return (
                    <>
                        <div className='all' onClick={() => changeBet("all", selectedChips, isDecreasing, value)}>
                            <span>ALL</span>
                        </div>

                    </>
                )
            } else {
                return (
                    <>
                        <div className='all' onClick={() => changeBet("all", selectedChips, isDecreasing, value)}>
                            <span>ALL</span>
                            <ChipStack amount={value} />
                        </div>

                    </>
                );
            }
        case 'hop13':
            if (value <= 0) {
                return (
                    <>
                        <div className='hop13' onClick={() => changeBet("hop13", selectedChips, isDecreasing, value)}>
                            <span>1 | 3</span>
                        </div>

                    </>
                )
            } else {
                return (
                    <>
                        <div className='hop13' onClick={() => changeBet("hop13", selectedChips, isDecreasing, value)}>
                            <span>1 | 3</span>
                            <ChipStack amount={value} />
                        </div>

                    </>
                );
            }
        case 'hop22':
            if (value <= 0) {
                return (
                    <>
                        <div className='hop22' onClick={() => changeBet("hop22", selectedChips, isDecreasing, value)}>
                            <span>2 | 2</span>
                        </div>

                    </>
                )
            } else {
                return (
                    <>
                        <div className='hop22' onClick={() => changeBet("hop22", selectedChips, isDecreasing, value)}>
                            <span>2 | 2</span>
                            <ChipStack amount={value} />
                        </div>

                    </>
                );
            }
        case 'hop14':
            if (value <= 0) {
                return (
                    <>
                        <div className='hop14' onClick={() => changeBet("hop14", selectedChips, isDecreasing, value)}>
                            <span>1 | 4</span>
                        </div>

                    </>
                )
            } else {
                return (
                    <>
                        <div className='hop14' onClick={() => changeBet("hop14", selectedChips, isDecreasing, value)}>
                            <span>1 | 4</span>
                            <ChipStack amount={value} />
                        </div>

                    </>
                );
            }
        case 'hop23':
            if (value <= 0) {
                return (
                    <>
                        <div className='hop23' onClick={() => changeBet("hop23", selectedChips, isDecreasing, value)}>
                            <span>2 | 3</span>
                        </div>
                    </>
                )
            } else {
                return (
                    <>
                        <div className='hop23' onClick={() => changeBet("hop23", selectedChips, isDecreasing, value)}>
                            <span>2 | 3</span>
                            <ChipStack amount={value} />
                        </div>

                    </>
                );
            }
        case 'hop15':
            if (value <= 0) {
                return (
                    <>
                        <div className='hop15' onClick={() => changeBet("hop15", selectedChips, isDecreasing, value)}>
                            <span>1 | 5</span>
                        </div>
                    </>
                )
            } else {
                return (
                    <>
                        <div className='hop15' onClick={() => changeBet("hop15", selectedChips, isDecreasing, value)}>
                            <span>1 | 5</span>
                            <ChipStack amount={value} />
                        </div>

                    </>
                );
            }
        case 'hop24':
            if (value <= 0) {
                return (
                    <>
                        <div className='hop24' onClick={() => changeBet("hop24", selectedChips, isDecreasing, value)}>
                            <span>2 | 4</span>
                        </div>
                    </>
                )
            } else {
                return (
                    <>
                        <div className='hop24' onClick={() => changeBet("hop24", selectedChips, isDecreasing, value)}>
                            <span>2 | 4</span>
                            <ChipStack amount={value} />
                        </div>

                    </>
                );
            }
        case 'hop33':
            if (value <= 0) {
                return (
                    <>
                        <div className='hop33' onClick={() => changeBet("hop33", selectedChips, isDecreasing, value)}>
                            <span>3 | 3</span>
                        </div>

                    </>
                )
            } else {
                return (
                    <>
                        <div className='hop33' onClick={() => changeBet("hop33", selectedChips, isDecreasing, value)}>
                            <span>3 | 3</span>
                            <ChipStack amount={value} />
                        </div>

                    </>
                );
            }
        case 'hop44':
            if (value <= 0) {
                return (
                    <>
                        <div className='hop44' onClick={() => changeBet("hop44", selectedChips, isDecreasing, value)}>
                            <span>4 | 4</span>
                        </div>

                    </>
                )
            } else {
                return (
                    <>
                        <div className='hop44' onClick={() => changeBet("hop44", selectedChips, isDecreasing, value)}>
                            <span>4 | 4</span>
                            <ChipStack amount={value} />
                        </div>

                    </>
                );
            }
        case 'hop35':
            if (value <= 0) {
                return (
                    <>
                        <div className='hop35' onClick={() => changeBet("hop35", selectedChips, isDecreasing, value)}>
                            <span>3 | 5</span>
                        </div>

                    </>
                )
            } else {
                return (
                    <>
                        <div className='hop35' onClick={() => changeBet("hop35", selectedChips, isDecreasing, value)}>
                            <span>3 | 5</span>
                            <ChipStack amount={value} />
                        </div>

                    </>
                );
            }
        case 'hop26':
            if (value <= 0) {
                return (
                    <>
                        <div className='hop26' onClick={() => changeBet("hop26", selectedChips, isDecreasing, value)}>
                            <span>2 | 6</span>
                        </div>

                    </>
                )
            } else {
                return (
                    <>
                        <div className='hop26' onClick={() => changeBet("hop26", selectedChips, isDecreasing, value)}>
                            <span>2 | 6</span>
                            <ChipStack amount={value} />
                        </div>

                    </>
                );
            }

        case 'hop36':
            if (value <= 0) {
                return (
                    <>
                        <div className='hop36' onClick={() => changeBet("hop36", selectedChips, isDecreasing, value)}>
                            <span>3 | 6</span>
                        </div>

                    </>
                )
            } else {
                return (
                    <>
                        <div className='hop36' onClick={() => changeBet("hop36", selectedChips, isDecreasing, value)}>
                            <span>3 | 6</span>
                            <ChipStack amount={value} />
                        </div>

                    </>
                );
            }
        case 'hop45':
            if (value <= 0) {
                return (
                    <>
                        <div className='hop45' onClick={() => changeBet("hop45", selectedChips, isDecreasing, value)}>
                            <span>4 | 5</span>
                        </div>


                    </>
                )
            } else {
                return (
                    <>
                        <div className='hop45' onClick={() => changeBet("hop45", selectedChips, isDecreasing, value)}>
                            <span>4 | 5</span>
                            <ChipStack amount={value} />
                        </div>

                    </>
                );
            }
        case 'hop46':
            if (value <= 0) {
                return (
                    <>
                        <div className='hop46' onClick={() => changeBet("hop46", selectedChips, isDecreasing, value)}>
                            <span>4 | 6</span>
                        </div>

                    </>
                )
            } else {
                return (
                    <>
                        <div className='hop46' onClick={() => changeBet("hop46", selectedChips, isDecreasing, value)}>
                            <span>4 | 6</span>
                            <ChipStack amount={value} />
                        </div>

                    </>
                );
            }
        case 'hop55':
            if (value <= 0) {
                return (
                    <>
                        <div className='hop55' onClick={() => changeBet("hop55", selectedChips, isDecreasing, value)}>
                            <span>5 | 5</span>
                        </div>

                    </>
                )
            } else {
                return (
                    <>
                        <div className='hop55' onClick={() => changeBet("hop55", selectedChips, isDecreasing, value)}>
                            <span>5 | 5</span>
                            <ChipStack amount={value} />
                        </div>

                    </>
                );
            }
        case 'hop16':
            if (value <= 0) {
                return (
                    <>
                        <div className='hop16' onClick={() => changeBet("hop16", selectedChips, isDecreasing, value)}>
                            <span>1 | 6</span>
                        </div>


                    </>
                )
            } else {
                return (
                    <>
                        <div className='hop16' onClick={() => changeBet("hop16", selectedChips, isDecreasing, value)}>
                            <span>1 | 6</span>
                            <ChipStack amount={value} />
                        </div>

                    </>
                );
            }
        case 'hop25':
            if (value <= 0) {
                return (
                    <>
                        <div className='hop25' onClick={() => changeBet("hop25", selectedChips, isDecreasing, value)}>
                            <span>2 | 5</span>
                        </div>
                    </>
                )
            } else {
                return (
                    <>
                        <div className='hop25' onClick={() => changeBet("hop25", selectedChips, isDecreasing, value)}>
                            <span>2 | 5</span>
                            <ChipStack amount={value} />
                        </div>

                    </>
                );
            }
        case 'hop34':
            if (value <= 0) {
                return (
                    <>
                        <div className='hop34' onClick={() => changeBet("hop34", selectedChips, isDecreasing, value)}>
                            <span>3 | 4</span>
                        </div>


                    </>
                )
            } else {
                return (
                    <>
                        <div className='hop34' onClick={() => changeBet("hop34", selectedChips, isDecreasing, value)}>
                            <span>3 | 4</span>
                            <ChipStack amount={value} />
                        </div>

                    </>
                );
            }



        default:
            return (
                <>
                    <div className='default'>
                        <span>BetContainer</span>
                    </div>

                </>
            )
    }

}

export default BetContainer