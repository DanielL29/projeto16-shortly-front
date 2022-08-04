import styled from 'styled-components'

export const RankingWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 73px;

    .ranking-title {
        display: flex;
        align-items: center;
        margin-bottom: 57px;
    }

    h1 {
        font-weight: 700;
        font-size: 36px;
        margin-left: 10px;
    }

    .ranking-scores {
        width: 1017px;
        min-height: 241px;
        background-color: #FFFFFF;
        border: 1px solid rgba(120, 177, 89, 0.25);
        box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
        border-radius: 24px 24px 0px 0px;
        padding: 20px 40px;
        margin-bottom: 82px;
    }

    h2 {
        font-weight: 500;
        font-size: 22px;
        margin-bottom: 13px;
    }

    h3 {
        font-weight: 700;
        font-size: 36px;
    }
`