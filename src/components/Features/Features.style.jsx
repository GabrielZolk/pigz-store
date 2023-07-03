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
    margin: 0 auto;
    color: #333333;
    margin-bottom: 80px;
    max-width: 300px;
    font-size: 32px;
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
      margin-top: 14px;
      font-size: 20px;
      font-weight: 600;
      font-family: 'Poppins', sans-serif;
    }

    span {
      color: #333333;
      margin-top: 8px;
      font-size: 16px;
      font-family: 'Poppins', sans-serif;
      font-weight: 400;
    }
  }

  p {
    margin: 80px auto 0;
    color: #333333;
    padding: 0 16px;
    max-width: 350px;
    line-height: 40px;
    font-size: 32px;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
  }

  span {
    margin: 20px auto 36px;
    padding: 0 16px;
    color: #333333;
    max-width: 300px;
    line-height: 24px;
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  @media (min-width: 524px) {
    h4 {
      font-size: 2.4rem;
    }
  }

  @media (min-width: 804px) {
    h4 {
      font-size: 2.9  rem;
      max-width: 380px;
    }

    .box {
      padding: 105px;
      border-radius: 120px;

    h5 {
      font-size: 2rem;
    }

    span {
      font-size: 1.3rem;
    }
  }

  p {
    max-width: 500px;
    line-height: 50px;
    font-size: 2.6rem;
    }

  span {
    max-width: 600px;
    font-size: 2rem;
    line-height: 30px;
    }
  }

  @media (min-width: 1148px) {
    .grid {
      display: grid;
      grid-template-columns: repeat(2, 2fr);
    }
  }
`;

