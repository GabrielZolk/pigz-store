import { styled } from "styled-components";

export const Container = styled.div`
    .contact {
        margin-top: 97px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Poppins', sans-serif;
        font-size: 16px;
        font-weight: 500;   
        

        img {
            margin: 0 7px 0 19px;
        }
    }

    .footer-content {
        margin-top: 120px;
        padding: 0 16px;

        p {
            color: #676767;
            margin-top: 8px;
            font-weight: 400;
            font-family: 'Poppins', sans-serif;
            font-size: 11px;
        }

        span {
            color: #676767;
            margin-top: 24px;
            display: block;
            font-weight: 600;
            font-family: 'Poppins', sans-serif;
            font-size: 16px;
        }

        .download {
            img {
                margin: 16px 10px 0 0;
            }
        }

        h4 {
            color: #676767;
            margin-top: 64px;
            display: block;
            font-weight: 600;
            font-family: 'Poppins', sans-serif;
            font-size: 16px;
        }

        #about {
            margin-top: 14px;
            list-style: none;
            color: #676767;
            line-height: 40px;
            font-weight: 400;
            font-family: 'Poppins', sans-serif;
            font-size: 14px;
        }

        .contact-us {
            margin-top: 64px;
            .contact-icon {
                display: flex;
                align-items: center;
                margin-bottom: 24px;

                p {
                    color: #676767;
                    margin-left: 15px;
                    font-weight: 600;
                    font-family: 'Poppins', sans-serif;
                    font-size: 16px;  
                }
            }

            p {
                color: #676767;
                font-size: 14px;
                font-weight: 400;
                font-family: 'Poppins', sans-serif;
            }

            #tel {
                color: #676767;
                margin-top: 24px;
                font-size: 14px;
                font-weight: 400;
                font-family: 'Poppins', sans-serif;
            }
        }

        .socials {
            border-bottom: 1px solid gray;

                img {
                   margin: 16px 15px 80px 0;
                }
            }

        #terms {
            ul {
                margin-top: 14px;
                list-style: none;
                display: flex;
                color: #666666;
                font-size: 12px;
                font-weight: 400;
                font-family: 'Poppins', sans-serif;

                li {
                    margin-right: 20px;
                }
            }
        }

        #cr {
            display: flex;
            align-items: end;
            margin-top: 16px;

            p {
                color: #676767;
                max-width: 300px;
                font-size: 10px;
                font-weight: 400;
                font-family: 'Poppins', sans-serif;
            }
        }
    }

    #bar {
        background-color: #FF671F;
        width: 100vw;
        height: 5px;
        margin-top: 24px;
    }
`;