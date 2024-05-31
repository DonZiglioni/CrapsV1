import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/authContext";
import logoWhite from '../assets/pyBetsLogoWhite.png';
import '../components/Screens.css'

const Signup = () => {
    const { handleUserSignup } = useAuth();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        passwordDub: "",
    });
    const [formErrors, setFormErrors] = useState([]);


    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(data => ({ ...data, [name]: value }));
    }
    return (
        <div className="signup-container">
            <img src={logoWhite} style={{ height: '40%', width: 'auto', position: 'absolute', top: 0, paddingTop: '20px' }} />

            <form className='signup-form' onSubmit={(e) => handleUserSignup(e, formData)}>
                <input
                    className="input"
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Enter Username"
                    onChange={handleChange}
                    autoComplete={''}>
                </input><br></br>
                <input
                    className="input"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter Email"
                    onChange={handleChange}
                    autoComplete={''}>
                </input><br></br>
                <input
                    className="input"
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter Password"
                    onChange={handleChange}
                    autoComplete={''}>
                </input><br></br>
                <input
                    className="input"
                    type="password"
                    id="passwordDub"
                    name="passwordDub"
                    placeholder="Confirm Password"
                    onChange={handleChange}
                    autoComplete={''}>
                </input><br></br>
                <div className="row">
                    <span className="back-button" onClick={() => navigate('/')}>Go Back</span>
                    <button className='button' type="submit">Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default Signup