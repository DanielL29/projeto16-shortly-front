import styled from 'styled-components'

export const InputWrapper = styled.input`
    width: 769px;
    height: 60px;
    background-color: #FFFFFF;
    border: 1px solid rgba(120, 177, 89, 0.25);
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 12px;
    font-weight: 400;
    font-size: 14px;
    color: #9C9C9C;
    box-sizing: border-box;
    padding-left: 20px;
    transition: all 100ms ease-in-out;
    margin-bottom: 25px;

    :focus {
        outline: none;
        border: 2px solid #c9e9b6;
    }

    ::placeholder {
        color: #9C9C9C;
    }
`