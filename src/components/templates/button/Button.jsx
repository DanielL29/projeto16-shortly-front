import { ButtonWrapper } from "./ButtonStyle";

export default function Button({ children, type, disabled, createUrl }) {
    return (
        <ButtonWrapper type={type} disabled={disabled} onClick={createUrl}>
            {children}
        </ButtonWrapper>
    )
}