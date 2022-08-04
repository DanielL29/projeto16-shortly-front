import { useState } from "react";
import { handleObjectState } from "../../../functions/global";
import Button from "../../templates/button/Button";
import Input from "../../templates/input/Input";
import { SignWrapper } from "../sign-in/SignStyle";
import { Watch } from "react-loader-spinner";
import { signUp } from "../../../functions/signUp";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
    const [register, setRegister] = useState({ name: '', email: '', password: '', confirmPassword: '' })
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    console.log(register)

    return (
        <SignWrapper>
            <form onSubmit={(e) => signUp(e, register, setLoading, navigate)}>
                <Input type="text" placeholder="Name" name="name" 
                    onChange={(e) => handleObjectState(e, register, setRegister)} 
                    disabled={loading} required
                />
                <Input type="email" placeholder="E-mail" name="email" 
                    onChange={(e) => handleObjectState(e, register, setRegister)} 
                    disabled={loading} required
                />
                <Input type="password" placeholder="Senha" name="password" 
                    onChange={(e) => handleObjectState(e, register, setRegister)} 
                    disabled={loading} required
                />
                <Input type="password" placeholder="Confirmação de Senha" name="confirmPassword" 
                    onChange={(e) => handleObjectState(e, register, setRegister)} 
                    disabled={loading} required
                />
                <Button type="submit" disabled={loading}>
                    {loading ? 
                        <Watch height="40" width="40" radius="48" color="#fff" /> : 
                        'Criar Conta'
                    }
                </Button>
            </form>
        </SignWrapper>
    )
}