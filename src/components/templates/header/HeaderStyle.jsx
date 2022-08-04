import styled from 'styled-components'

export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px 60px 20px 50px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    z-index: 1;
    background-color: #fff;

    h1, h2 {
        font-size: 14px;
        font-weight: 400;
        margin-right: 25px;
        cursor: pointer;
        transition: all 200ms ease-in-out;
    }

    h1:hover, h2:hover {
        font-size: 16px;
    }

    h1 {
        color: #5D9040;

    }

    h2 {
        color: #9C9C9C;
    }

    div {
        display: flex;
    }
`