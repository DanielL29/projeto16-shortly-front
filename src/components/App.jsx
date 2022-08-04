import Header from "./templates/header/Header";
import { BrowserRouter } from 'react-router-dom'
import Router from "./Router";
import Banner from "./templates/banner/Banner";

export default function App() {
    return (
        <div>
            <Header />
            <Banner />
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </div>
    );
}
