import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logoWhite from '../assets/pyBetsLogoWhite.png';
import { useAuth } from '../auth/authContext';
import '../components/Screens.css';

function Home() {
    const navigate = useNavigate();
    const { user, handleUserLogout } = useAuth();
    useEffect(() => {
        if (user) {
            navigate('/homeUser')
        }
    }, [])
    return (
        <div className=''>
            <div className='welcome-container'>
                <img src={logoWhite} style={{ height: '200px', width: 'auto' }} />
                <div className='welcome-menu'>
                    <button onClick={() => navigate('/public')}>Play Now!</button>
                    <div className='unauthorized'>
                        <button disabled>Create Table</button>
                        <button onClick={() => navigate('/login')}>Login / Signup</button>
                        <button disabled>Join Table</button>
                        <button onClick={() => navigate('/login')}>Login / Signup</button>
                    </div>
                    <button disabled onClick={() => navigate('/gameboard')}>Go To Game Board</button>
                </div>
            </div>
        </div>
    )
}

export default Home;