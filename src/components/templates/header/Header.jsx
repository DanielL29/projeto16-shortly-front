import { useContext } from "react";
import { HeaderWrapper } from "./HeaderStyle";
import UserContext from '../../../contexts/UserContext'
import { NavLink } from "../../assets/global/GlobalStyles";
import { logout } from "../../../functions/global";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const { user, setUser } = useContext(UserContext)
    const navigate = useNavigate()
    const userLogged = user.name !== undefined

    return (
        <HeaderWrapper>
            <h1 className="welcome">{userLogged ? `Seja bem-vindo(a), ${user.name}` : ''}</h1>
                {userLogged ? (
                    <div>
                        <NavLink to="/home">
                            <h2>Home</h2>
                        </NavLink>
                        <NavLink to="/">
                            <h2>Ranking</h2>
                        </NavLink>
                        <h2 className="logout" onClick={() => logout(setUser, navigate)}>Sair</h2>
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