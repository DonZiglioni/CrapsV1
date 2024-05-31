import React, { useState, useEffect } from 'react';
import '../components/Table.css'

function MultiplayerBox({ players, shooters, isPrivate }) {
    const [toggleRanks, setToggleRanks] = useState(true);
    const [toggleShooters, setToggleShooters] = useState(false);
    console.log(players);

    const sortPlayers = () => {
        console.log('Sorting by bankroll...');
    }

    useEffect(() => {
        sortPlayers();
    }, [])



    return (
        <div className='multiplayer-box'>
            {isPrivate ?
                <>
                    <div className='mp-tabs'>
                        <div className='mp-tab' onClick={() => {
                            setToggleRanks(!toggleRanks);
                            setToggleShooters(!toggleShooters);
                        }}>
                            {toggleRanks ? <span className='mp-tab-selected'>Ranks</span> : <span>Ranks</span>}
                        </div>
                        <div className='mp-tab' onClick={() => {
                            setToggleRanks(!toggleRanks);
                            setToggleShooters(!toggleShooters);
                        }}>
                            {toggleShooters ? <span className='mp-tab-selected'>Shooters</span> : <span>Shooters</span>}
                        </div>
                    </div>
                    <div className='mp-list'>
                        {
                            toggleRanks ?
                                <div className='rank-list'>
                                    <ol>
                                        {players.map((e, index) => {
                                            return <li key={index} className='player-rank'>
                                                <span>{e.username}</span>
                                                <span>{e.bankroll}</span>
                                            </li>
                                        })}
                                    </ol>

                                </div>
                                :
                                <div className='shooters-list'>
                                    Shooters
                                </div>
                        }
                    </div>
                </>
                :
                null}
        </div>
    )
}

export default MultiplayerBox