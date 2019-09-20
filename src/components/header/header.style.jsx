import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const OptionContainerStyles = css`
    padding: 10px 15px;
    text-decoration: none;
    color: black;
    cursor: pointer;
`;

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 15px;
`;

export const OptionsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-family: 'Alegreya Sans SC', sans-serif;
    font-size: 22px;
    font-weight: 700;
`;

export const OptionLink = styled(Link)`
    ${OptionContainerStyles}
`;

// export const OptionDiv = styled.div`
//     ${OptionContainerStyles}
// `;