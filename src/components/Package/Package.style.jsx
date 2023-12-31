import { styled } from "styled-components";

export const Container = styled.div`
    @media (min-width: 942px) {
        .grid {
            display: grid;
            grid-template-columns: repeat(2, 2fr);
        }
    }

    h3 {
        margin-top: 80px;
        color: #333333;
        font-size: 24px;
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
    }

    p {
        margin-top: 4px;
        color: #666666;
        font-size: 16px;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
    }

    ul {
        margin-top: 20px;
        list-style: none;
        line-height: 30px;
        color: #333333;
        font-size: 14px;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    span {
        display: block;
        margin: 54px 0 0 24px;
        color: #333333;
        font-size: 20px;
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
    }

    button {
        margin-top: 34px;
        padding: 14px 64px;
        border-radius: 50px;
        color: #FFFFFF;
        background: linear-gradient(to right, #FF881F, #FA641E);
        border: none;
        outline: none;
        min-width: 302px;
        font-family: 'Poppins', sans-serif;
        font-size: 16px;
        font-weight: 500;
        box-shadow: 0px 20px 30px -14px #FF881F, 0 0 0 #FA641E; 
    }
`

export const Pack = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
