import { useContext } from "react";
import { HeaderWrapper } from "./HeaderStyle";
import UserContext from '../../../contexts/UserContext'
import { NavLink } from "../../assets/global/GlobalStyles";

export default function Header() {
    const { user } = useContext(UserContext)
    const userLogged = user.name !== undefined

    return (
        <HeaderWrapper>
            <h1>{userLogged ? `Seja bem-vindo(a), ${user.name}` : ''}</h1>
                {userLogged ? (
                    <div>
                        <NavLink to="/home">
                            <h2>Home</h2>
                        </NavLink>
                        <NavLink to="/">
                            <h2>Ranking</h2>
                        </NavLink>
                        <h2>Sair</h2>
                    </div>
                ) : (
                    <div>
                    <NavLink to="/sign-in">
                        <h1>Entrar</h1>
                    </NavLink>
                    <NavLink to="/sign-up">
                        <h2>Cadastre-se</h2>
                    </NavLink>
                </div>
                )}
        </HeaderWrapper>
    )
}