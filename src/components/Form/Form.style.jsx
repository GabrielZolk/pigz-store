import { styled } from "styled-components";

export const Container = styled.div`
  background: linear-gradient(to right, #FF881F, #FA641E);
  padding: 32px 16px;
`;

export const TopContent = styled.div`
    margin-bottom: 100px;
    display: flex;
    justify-content: left;
    align-items: center;

    .top-wrapper {
        position: relative;
        max-width: 80%;
        z-index: 1;
    }

        img {
            position: absolute;
            right: 0px;
            top: 90px;
            z-index: 0;
        }

        p {
            color: white;
            margin: 0 0 30px 0;
            text-align: left;
            font-size: 40pt;
            font-family: 'Poppins', sans-serif;
            font-weight: 700;
        }

        span {
            color: white;
            font-family: 'Poppins', sans-serif;
            font-size: 16pt;
            font-weight: 400;
        }
  
    
`;

export const BottomContent = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 104px;

    .bottom-wrapper {
        max-width: 600px;
        padding: 32px 24px 24px;
        background-color: white;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        align-items: left;
    }

    h5 {
        color: #333333;
        margin-bottom: 8px;
        text-align: center;
        font-size: 28pt;
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
    }

    p {
        color: #333333;
        margin-bottom: 24px;
        text-align: center;
        font-family: 'Poppins', sans-serif;
        font-size: 13pt;
        font-weight: 400;
    }

    form {

        
        .inputBox   {
            text-align: left;
            font-family: 'Poppins', sans-serif;

            label {
                display: block;
                margin: 20px 0 6px 0;
                color: #333333;
                font-weight: 500;
                font-size: 12pt;
            }

            input {
                padding: 16px;
                width: 100%;
                border-radius: 16px;
                border: 1px solid #999999;
                outline: none;
            }

            input::placeholder {
                color: #CCCCCC;
                font-weight: 400;
                font-size: 14pt;
            } 
        }

    }

    span {
        margin: 20px 0 40px 0;
        color: #666666;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        font-size: 13pt;
    }

    button {
        padding: 16px;
        border-radius: 16px;
        color: #FFFFFF;
        background-color: #FA641E;
        border: none;
        outline: none;
        font-family: 'Poppins', sans-serif;
        font-size: 16pt;
        font-weight: 500;
    }
`;


