import { styled } from "styled-components";

export const Container = styled.div`
    h3 {
        color: #333333;
        text-align: center;
        margin-bottom: 40px;
        font-size: 24pt;
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
    }

    .support-info {
        padding: 0 40px;
            h4 {
            margin-top: 80px;
            text-align: center;
            color: #333333;
            font-size: 32pt;
            font-family: 'Poppins', sans-serif;
            font-weight: 700;
        }

        p {
            padding: 0 30px;
            margin: 20px 0 40px 0;
            text-align: center;
            color: #333333;
            font-size: 16pt;
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
    border-radius: 80px;

    p {
        padding: 40px 40px 85px 40px;
        color: #FFFFFF;
        text-align: center;
        font-size: 15pt;
        font-family: 'Poppins', sans-serif;
        font-weight: 300;
    }

    div {
        display: flex;
        justify-content: center;
    }
`;