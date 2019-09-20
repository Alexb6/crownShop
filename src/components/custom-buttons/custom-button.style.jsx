import styled, { css } from 'styled-components';

const buttonStyles = css`
    background-color: black;
    color: white;
    border: none;
  
    &:hover {
        background-color: white;
        color: black;
        outline: 1px solid black;
        outline-offset: -1px;
    }
`;

const invertedButtonStyles = css`
    background-color: white;
    color: black;
    outline: 1px solid black;
    outline-offset: -1px;          

    &:hover {
        background-color: black;
        color: white;
        outline: none;  
    }
`;

const googleSignInStyles = css`
    background-color: #4e8cf0;
    color: white;
    outline: none;
    border: none;

    &:hover {
        background-color: #1f74fd;
    }
`;

const getButtonStyles = props => {
    if (props.isGoogleSignIn) {
        return googleSignInStyles;
    }

    return props.inverted ? invertedButtonStyles : buttonStyles;
}

export const CustomButtonContainer = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 20px;
    font-size: 15px;    
    text-transform: uppercase;
    font-family: Lato, sans-serif;
    font-weight: bolder;
    cursor: pointer;
    display: flex;
    justify-content: center;
    ${getButtonStyles}
`;