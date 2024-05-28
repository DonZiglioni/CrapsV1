import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/Screens.css';

function Home() {
    const navigate = useNavigate();

    return (
        <>
            <div className='main-container'>
                <h3>This will be a </h3>
                <h1>WELCOME</h1>
                <h3>page...</h3>
                <button onClick={() => navigate('/gameboard')}>Go To Game Board</button>
            </div>
        </>
    )
}

export default Home;