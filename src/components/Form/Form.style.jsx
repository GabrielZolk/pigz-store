import { styled } from "styled-components";

export const Container = styled.div`
  background: linear-gradient(to top, #FF881F, #FA641E);
  padding: 32px 16px;
`;

export const TopContent = styled.div`
    margin-bottom: 40px;
    display: flex;
    justify-content: left;
    align-items: center;

    .top-wrapper {
        position: relative;
        z-index: 1;
    }

        #burguer {
            position: absolute;
            right: 0px;
            top: 70px;
            z-index: 0;
            width: 170px;
            margin: 0 auto; 
            overflow: hidden;

            img {
                width: 260px;
            }
        }

        p {
            color: white;
            margin: 0 0 30px 0;
            text-align: left;
            max-width: 80%;
            line-height: 50px;
            font-size: 40px;
            font-family: 'Poppins', sans-serif;
            font-weight: 700;
        }

        span {
            color: white;
            text-align: left;
            font-family: 'Poppins', sans-serif;
            font-size: 16px;
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
        border-radius: 30px;
        display: flex;
        flex-direction: column;
        align-items: left;
    }

    h5 {
        color: #333333;
        margin-bottom: 6px;
        text-align: left;
        font-size: 28px;
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
    }

    p {
        color: #333333;
        margin-bottom: 6px;
        text-align: left;
        font-family: 'Poppins', sans-serif;
        font-size: 13px;
        font-weight: 400;
    }

    form {

        
        .inputBox   {
            text-align: left;
            font-family: 'Poppins', sans-serif;
            display: flex;
            flex-direction: column;
            width: 100%;
            position: relative;

            #country {
                position: absolute;
                top: 45px;
                display: flex;
                align-items: center;
                width: 100px;
                height: 46px;
                border-radius: 16px;
                margin-left: 1px;
                background-color: #F0F0F0;
                color: #9F9F9F;
                font-size: 14px;
                font-weight: 300;
                font-family: 'Poppins', sans-serif;
                
                img {
                    width: 24px;
                    margin: 0 8px 0 12px;
                }
            }

            .inputContainer {
                display: flex;
                width: 100%;
            }

            #stateContainer, #numberContainer {
                width: 35%;
                margin-right: 15px;
            }

            #cityContainer, #complementContainer {
                width: 65%;
            }

            label {
                display: block;
                margin: 20px 0 6px 0;
                color: #333333;
                font-weight: 500;
                font-size: 12px;
            }

            input {
                padding: 16px;
                width: 100%;
                border-radius: 16px;
                border: 1px solid #999999;
                outline: none;
            }

            select {
                padding: 15px;
                width: 100%;
                border-radius: 16px;
                border: 1px solid #999999;
                outline: none;
                color: #CCCCCC;
            }

            input::placeholder {
                color: #CCCCCC;
                font-weight: 400;
                font-size: 14px;
            } 

            #tel::placeholder {
                padding-left: 100px;
            } 
        }

    }

    span {
        margin: 20px 0 40px 0;
        color: #666666;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        font-size: 13px;
    }

    button {
        padding: 12px;
        border-radius: 16px;
        color: #FFFFFF;
        background-color: #FA641E;
        border: none;
        outline: none;
        font-family: 'Poppins', sans-serif;
        font-size: 16px;
        font-weight: 500;
        cursor: pointer;
    }

    #button-2 {
        margin-top: 30px;
        cursor: pointer;
    }

    #button-3 {
        margin-top: 80px;
        cursor: pointer;
    }
`;


