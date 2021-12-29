import styled, { css, keyframes } from "styled-components";
import { ThreeLinesStyled } from "../../components/elements/layouts/styled/three-lines-styled";

export const LoaderStyled = styled.div`
    ${() => css`
        position: relative;
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        ${ThreeLinesStyled} {
            position: static;
            opacity: 0;
            animation: ${DubaiAnimate} 1.5s linear infinite;
        }
    `}
`;

const DubaiAnimate = keyframes`
    0% ,100% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
`;
