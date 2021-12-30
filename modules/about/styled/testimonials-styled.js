import { DefaultButtonStyled } from "components/styled/default-button-styled";
import styled, { css } from "styled-components";

export const ContentStyled = styled.div`
    ${({ theme: { breakpoints } }) => css`
        position: relative;
        padding: 0;
        ${breakpoints.lg} {
            padding: 0 120px;
        }
    `}
`;

export const ControlStyled = styled.div`
    ${({ theme: { breakpoints } }) => css`
        display: flex;
        margin-top: 30px;
        justify-content: center;
        gap: 30px;
        ${DefaultButtonStyled} {
            position: static;
        }
        ${breakpoints.lg} {
            margin-top: 0;
            ${DefaultButtonStyled} {
                position: absolute;
                transform: translateY(-50%);
                top: 50%;
            }
        }
    `}
`;

export const PrevButtonStyled = styled.button`
    left: 20px;
`;

export const NextButtonStyled = styled.button`
    right: 20px;
`;
