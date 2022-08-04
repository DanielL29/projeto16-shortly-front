import Header from "./templates/header/Header";
import { BrowserRouter } from 'react-router-dom'
import Router from "./Router";
import Banner from "./templates/banner/Banner";
import { GlobalStyle } from './assets/global/GlobalStyles'
import { UserProvider } from './../contexts/UserContext';

export default function App() {
    return (
        <UserProvider>
            <GlobalStyle />
            <BrowserRouter>
                <Header />
                <Banner />
                <Router />
            </BrowserRouter>
        </UserProvider>
    );
}
