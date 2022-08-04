import { ButtonWrapper } from "./ButtonStyle";

export default function Button({ children, type, disabled }) {
    return (
        <ButtonWrapper type={type} disabled={disabled}>
            {children}
        </ButtonWrapper>
    )
}