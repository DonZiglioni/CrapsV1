import React from 'react';
import { useNavigate } from 'react-router-dom';

function GameMenu() {
    const navigate = useNavigate()
    return (
        <div className='game-menu'>
            <button onClick={() => navigate('/')}>Go HOME</button>
        </div>
    )
}

export default GameMenu