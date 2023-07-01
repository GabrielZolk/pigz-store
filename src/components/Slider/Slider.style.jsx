import { styled } from "styled-components";

export const Container = styled.div`
    h3 {
        color: #333333;
        text-align: center;
        margin-bottom: 40px;
        font-size: 24px;
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
    }

    .support-info {
        padding: 0 40px;
            h4 {
                margin: 80px auto 0;
                text-align: center;
                color: #333333;
                max-width: 300px;
                line-height: 38px;
                font-size: 30px;
                font-family: 'Poppins', sans-serif;
                font-weight: 700;
        }

        p {
            padding: 0 20px;
            margin: 20px 0 40px 0;
            text-align: center;
            max-width: 330px;
            line-height: 23px;
            color: #333333;
            font-size: 16px;
            font-family: 'Poppins', sans-serif;
            font-weight: 500;
        }
    }
`;

export const DefaultSlider = styled.div`
       padding: 0 16px;
`;

export const SliderContent = styled.div`
    background: linear-gradient(to top, #FF881F, #FA641E);
    border-radius: 70px;

    p {
        padding: 40px 40px 50px 40px;
        color: #FFFFFF;
        text-align: center;
        font-size: 15px;
        font-family: 'Poppins', sans-serif;
        font-weight: 200;
        line-height: 20px;
    }

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto; 
        overflow: hidden; 
    }
`;