import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import GameBoard from "./components/table/GameBoard";

function RoutesList() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/gameboard' element={<GameBoard />} />
        </Routes>
    )
}

export default RoutesList