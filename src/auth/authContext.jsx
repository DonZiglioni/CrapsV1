import { createContext, useState, useEffect, useContext } from "react";
import { account } from "../appwriteConfig";
import { useNavigate } from "react-router-dom";
import { ID } from 'appwrite';
import { databases, DATABASE_ID, COLLECTION_ID_TABLES } from '../appwriteConfig';

const authContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const [userPrefs, setUserPrefs] = useState(null)

    useEffect(() => {
        getUserOnLoad()
    }, [])

    const getUserOnLoad = async () => {
        try {
            const userData = await account.get();
            setUser(userData);
            const userPref = await account.getPrefs();
            setUserPrefs(userPref);
        } catch (error) {
            console.log(error);
        }
        setLoading(false)
    }

    const handleUserLogin = async (e, credentials) => {
        e.preventDefault()
        try {
            const res = await account.createEmailPasswordSession(credentials.email, credentials.password);
            console.log("LOGGING IN", res);
            const userData = await account.get();
            setUser(userData);
            const userPref = await account.getPrefs();
            setUserPrefs(userPref);
            navigate("/homeUser");
        } catch (error) {
            console.log(error);
        }
    }

    const handleUserLogout = async () => {
        try {
            await account.deleteSession('current');
            setUser(null);
            setUserPrefs(null);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }

    const handleUserSignup = async (e, credentials) => {
        e.preventDefault()

        if (credentials.password !== credentials.passwordDub) {
            alert("Passwords Do Not Match")
            return;
        }
        try {
            const res = await account.create(ID.unique(), credentials.email, credentials.password, credentials.username);
            console.log("CREATED", res);
            await account.createEmailPasswordSession(credentials.email, credentials.password);
            const userData = await account.get();
            setUser(userData);
            const promise = await account.updatePrefs({ bankroll: 25000 });
            console.log("EDITED", promise);
            setUserPrefs(promise);
            navigate("/homeUser");
        } catch (error) {
            console.log(error);
        }
    }

    const contextData = {
        user,
        handleUserLogin,
        handleUserLogout,
        handleUserSignup,
        userPrefs,
    }
    return (
        <authContext.Provider value={contextData}>
            {loading ? <p>Loading...</p> : children}
        </authContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(authContext)
}

export default authContext