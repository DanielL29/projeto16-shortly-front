import styled from 'styled-components'

export const SignWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    margin-top: 130px;
    margin-bottom: 35px;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media screen and (max-width: 850px) {
        form {
            width: 90%;
        }
    } 
`