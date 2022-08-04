import { ButtonWrapper } from "./ButtonStyle";

export default function Button({ children, type }) {
    return (
        <ButtonWrapper type={type}>
            {children}
        </ButtonWrapper>
    )
}