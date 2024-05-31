import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import HomeUser from "./components/HomeUser";
import PrivateGame from "./components/PrivateGame";
import PublicGame from "./components/PublicGame";
import PrivateRoutes from './PrivateRoutes';
import { AuthProvider } from '../src/auth/authContext';
import GameBoard from "./components/table/GameBoard";
import Login from "./auth/Login";
import Signup from "./auth/Signup";

function RoutesList() {
    return (
        <AuthProvider>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/public' element={<PublicGame />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />

                <Route element={<PrivateRoutes />} >
                    <Route path='/homeUser' element={<HomeUser />} />
                    <Route path='/userTable/:tableId' element={<PrivateGame />} />
                </Route>
            </Routes>
        </AuthProvider>


    )
}

export default RoutesList