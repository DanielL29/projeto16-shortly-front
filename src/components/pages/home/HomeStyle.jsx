import styled from 'styled-components'

export const HomeWrapper = styled.div`
    margin: 0 auto;
    margin-top: 138px;
    width: 1020px;

    .short-url {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 59px;
    }

    .short-url > input, .short-url > button {
        margin: 0;
    }

    .urls {
        display: flex;
        flex-direction: column;
    }

    .without-shorten {
        display: flex;
        justify-content: center;
    }
`

export const ShortenCardWrapper = styled.div`
    display: flex;
    margin-bottom: 42px;
    
    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        box-sizing: border-box;
        width: 890px;
        height: 60px;
        background-color: #80CC74;
        box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
        border-radius: 12px 0px 0px 12px;
        padding-left: 21px;
        padding-right: 94px;
        font-weight: 400;
        font-size: 14px;
        color: #fff;
    }

    button {
        width: 130px;
        height: 60px;
        background-color: #fff;
        box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
        border-radius: 0px 12px 12px 0px;
        outline: none;
        border: 1px solid rgba(120, 177, 89, 0.25);
        cursor: pointer;
    }

    .trash {
        width: 22px;
        height: 26px;
        color: #EA4F4F;
        transition: all 200ms ease-in-out;
    }

    .trash:hover {
        transform: scale(1.1);
    }

    p:nth-child(1), p:nth-child(2) {
        cursor: pointer;
    }

    p:nth-child(1):hover, p:nth-child(2):hover {
        text-decoration: underline;
    }
`