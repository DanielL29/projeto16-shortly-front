import { Routes, Route, Navigate } from "react-router-dom";
import Ranking from './pages/ranking/Ranking';
import SignIn from './pages/sign-in/SignIn';
import SignUp from "./pages/sign-up/SignUp";
import Home from './pages/home/Home';
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

export default function Router() {
    const { user } = useContext(UserContext)
    const userLogged = user.token !== undefined

    return (
        <Routes>
            <Route path="/" element={<Ranking />} />
            <Route path={userLogged ? "*" : "/sign-in"} element={userLogged ? <Navigate to="/home" replace /> : <SignIn />} />
            <Route path={userLogged ? "*" : "/sign-up"} element={userLogged ? <Navigate to="/home" replace /> : <SignUp />} />
            <Route path={userLogged ? "/home" : "*"} element={userLogged ? <Home /> : <Navigate to="/sign-in" replace />} />
        </Routes>
    )
}