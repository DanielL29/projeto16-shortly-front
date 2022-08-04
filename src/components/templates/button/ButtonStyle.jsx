import styled from 'styled-components'

export const ButtonWrapper = styled.button`
    width: 182px;
    height: 60px;
    background-color: #5D9040;
    border-radius: 12px;
    outline: none;
    border: none;
    margin-top: 35px;
    font-weight: 700;
    font-size: 14px;
    color: #fff;
    cursor: pointer;
    transition: all 200ms ease-in-out;
    transform-style: preserve-3d;

    :hover {
        transform: scale(1.05);
    }
`