import { ButtonWrapper } from "./ButtonStyle";

export default function Button({ children, type, disabled, onClick }) {
    return (
        <ButtonWrapper type={type} disabled={disabled} onClick={() => onClick()}>
            {children}
        </ButtonWrapper>
    )
}