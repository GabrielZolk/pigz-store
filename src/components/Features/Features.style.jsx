import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  .imgWrapper {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;

    #pigzpigz {
      margin-top: -65px;
    }
  }

  h4 {
    color: #333333;
    margin-bottom: 80px;
    font-size: 32pt;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
  }

  .box {
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    justify-content: center;
    min-width: 270px;
    min-height: 243px;
    padding: 25px;
    width: fit-content;
    margin: 0 auto;
    margin-bottom: 20px;
    border: 2pt solid transparent;
    border-radius: 80px;
    transition: border-color 0.3s;

    &:hover {
      border-color: #CCCCCC;
    }

    h5 {
      color: #333333;
      margin-top: 32px;
      font-size: 20pt;
      font-weight: 600;
      font-family: 'Poppins', sans-serif;
    }

    span {
      color: #333333;
      margin-top: 8px;
      font-size: 16pt;
      font-family: 'Poppins', sans-serif;
      font-weight: 400;
    }
  }

  p {
    margin-top: 80px;
    color: #333333;
    padding: 0 16px;
    font-size: 32pt;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
  }

  span {
    margin-top: 20px;
    margin-bottom: 36px;
    padding: 0 16px;
    color: #333333;
    font-size: 16pt;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }
`;

