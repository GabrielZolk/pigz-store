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

  .slider-navigation {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }

  .slider-bar {
    width: 88px;
    height: 4px;
    margin: 0 5px;
    background-color: #EEEEEE;
    border-radius: 4px;
    cursor: pointer;
  }

  .slider-bar.active {
    background-color: #FA641E;
  }

  .slider-wrapper {
    position: relative;
    height: 500px;
    overflow: hidden;
  }

  .slider {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    pointer-events: none;
  }

  .slider.active {
    opacity: 1;
    pointer-events: initial;
  }

  .support-info {
    padding: 0 40px;

    h4 {
      margin: 50px auto 0;
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
      margin: 20px 0 10px 0;
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
