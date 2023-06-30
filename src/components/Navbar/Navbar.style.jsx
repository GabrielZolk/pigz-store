import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 16px;
`

export const Logo = styled.img`

`;

export const NavButton = styled.button`
    font-family: 'Poppins';
    color: white;
    background: linear-gradient(to right, #FF881F, #FA641E);
    border: none;
    border-radius: 20px;
    padding: 6px 24px;
    
    p {
        box-shadow: 0 8px 24px #FF881F, 0 0 0 #FA641E;
    }
`;