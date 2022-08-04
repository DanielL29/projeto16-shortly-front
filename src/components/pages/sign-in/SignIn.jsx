import Button from "../../templates/button/Button";
import Input from "../../templates/input/Input";
import { SignWrapper } from "./SignStyle";

export default function SignIn() {
    return (
        <SignWrapper>
            <form onSubmit>
                <Input type="email" placeholder="E-mail"/>
                <Input type="password" placeholder="Senha" />
                <Button type="submit">Criar Conta</Button>
            </form>
        </SignWrapper>
    )
}