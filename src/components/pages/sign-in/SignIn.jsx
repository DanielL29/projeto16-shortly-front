import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleObjectState } from "../../../functions/global";
import { signIn } from "../../../functions/signIn";
import Button from "../../templates/button/Button";
import Input from "../../templates/input/Input";
import { SignWrapper } from "./SignStyle";
import { Watch } from 'react-loader-spinner';
import UserContext from '../../../contexts/UserContext'

export default function SignIn() {
    const [login, setLogin] = useState({ email: '', password: '' })
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const { setUser } = useContext(UserContext)

    return (
        <SignWrapper>
            <form onSubmit={(e) => signIn(e, login, setLoading, navigate, setUser)}>
                <Input type="email" placeholder="E-mail" name="email"
                    onChange={(e) => handleObjectState(e, login, setLogin)} 
                    disabled={loading} required
                />
                <Input type="password" placeholder="Senha" name="password" 
                    onChange={(e) => handleObjectState(e, login, setLogin)} 
                    disabled={loading} required
                />
                <Button type="submit" disabled={loading}>
                    {loading ? 
                        <Watch height="40" width="40" radius="48" color="#fff" /> : 
                        'Entrar'
                    }
                </Button>
            </form>
        </SignWrapper>
    )
}