import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/Table.css'

function GameMenu({ isPrivate }) {
    const navigate = useNavigate()
    return (
        <div className='game-menu'>
            <button onClick={() => navigate('/')}>Go HOME</button>
            {isPrivate ? <span>PRIVATE</span> : <span>PUBLIC</span>}
        </div>
    )
}

export default GameMenu