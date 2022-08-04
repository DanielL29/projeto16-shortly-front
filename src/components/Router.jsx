import { Routes, Route } from "react-router-dom";
import Ranking from './pages/ranking/Ranking';
import SignIn from './pages/sign-in/SignIn';
import SignUp from "./pages/sign-up/SignUp";
import Home from './pages/home/Home';

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Ranking />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/home" element={<Home />} />
        </Routes>
    )
}