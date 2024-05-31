import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { useAuth } from './authContext';
import logoWhite from '../assets/pyBetsLogoWhite.png';
import '../components/Screens.css'

const Login = () => {
    const navigate = useNavigate();
    const { user, handleUserLogin } = useAuth();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [formErrors, setFormErrors] = useState([]);

    useEffect(() => {
        if (user) {
            navigate("/homeUser");
        }
    }, [])

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(l => ({ ...l, [name]: value }));
    }
    console.log(formData);
    return (
        <div className='login-container'>
            <img src={logoWhite} style={{ height: '40%', width: 'auto', position: 'absolute', top: 0, paddingTop: '20px' }} />
            <form
                className='login-form'
                onSubmit={(e) => { handleUserLogin(e, formData) }}>

                <input
                    className='input'
                    type="email"
                    id="email"
                    name='email'
                    placeholder="Enter email"
                    autoComplete={''}
                    value={formData.email}
                    onChange={handleChange}>
                </input><br></br>
                <input
                    className='input'
                    type="password"
                    id="password"
                    name='password'
                    placeholder="Enter Password"
                    autoComplete={''}
                    value={formData.password}
                    onChange={handleChange}>
                </input><br></br>
                <button className='button' type="submit">Login</button>
                <p className='PYBText'>Don't have an account?  Click <a onClick={() => navigate('/signup')}>HERE</a> to sign up!</p>
            </form>
        </div>
    )
}

export default Login