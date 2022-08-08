import styled from 'styled-components'

export const BannerWapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 100px;

    h1 {
        font-weight: 200;
        font-size: 64px;
        margin-top: 15px;
    }

    img {
        width: 102px;
        height: 96px;
    }

    @media screen and (max-width: 850px) {
        margin-top: 150px;

        h1 {
            font-size: 50px;
            margin-top: 0;
        }

        img {
            width: 70px;
            height: 70px;
        }
    }
`