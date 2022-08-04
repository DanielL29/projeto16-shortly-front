import Button from "../../templates/button/Button";
import Input from "../../templates/input/Input";
import { SignWrapper } from "../sign-in/SignStyle";

export default function SignUp() {
    return (
        <SignWrapper>
            <form onSubmit>
                <Input type="text" placeholder="Name" required/>
                <Input type="email" placeholder="E-mail" required/>
                <Input type="password" placeholder="Senha" required />
                <Input type="password" placeholder="Confirmação de Senha" required />
                <Button type="submit">Entrar</Button>
            </form>
        </SignWrapper>
    )
}