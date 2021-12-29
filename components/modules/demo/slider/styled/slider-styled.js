import styled, { css } from "styled-components";

export const SliderStyled = styled.div`
    position: relative;
    overflow: hidden;
`;

export const PrevButtonStyled = styled.div`
    ${({ theme: {breakpoints} }) => css`
        left: 15px;
        ${breakpoints.lg} {
            left: 50px;
        }
    `}
`;

export const NextButtonStyled = styled.div`
    ${({ theme: {breakpoints} }) => css`
        right: 15px;
        ${breakpoints.lg} {
            right: 50px;
        }
    `}
`;

export const ControlStyled = styled.div`
    position: absolute;
    inset: 0;
    ${PrevButtonStyled} , ${NextButtonStyled} {
        position: absolute;
        bottom: 50px;
        z-index: 2;
        cursor: pointer;
        padding: 20px;
        display: flex;
        align-items: center;
    }
`;

