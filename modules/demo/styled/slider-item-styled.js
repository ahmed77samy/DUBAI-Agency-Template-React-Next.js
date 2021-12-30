import { DefaultButtonStyled } from "components/styled/default-button-styled";
import styled, { css } from "styled-components";

export const SliderItemStyled = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
`;

export const ContentStyled = styled.div`
    ${({ theme: { colors, variables } }) => css`
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: calc(${variables.headerHeight} + 20px) 15px calc(64px + 20px);
        min-height: 100vh;
        ${DefaultButtonStyled} {
            &:hover {
                color: ${colors.white};
            }
        }
    `}
`;

export const LinkStyled = styled.a`
    ${({ theme: { colors } }) => css`
        color: inherit;
        cursor: pointer;
        transition: 0.3s;
        &:hover {
            color: ${colors.primary};
        }
    `}
`;

export const H2Styled = styled.h2`
    ${({ theme: { breakpoints } }) => css`
        text-transform: uppercase;
        font-size: 2.5rem;
        ${breakpoints.lg} {
            font-size: 3.8rem;
        }
    `}
`;

export const H3Styled = styled.h3`
    ${({ theme: { colors, breakpoints } }) => css`
        text-transform: uppercase;
        color: ${colors.primary};
        font-size: 2.5rem;
        ${breakpoints.lg} {
            font-size: 3.8rem;
        }
    `}
`;

export const PStyled = styled.p`
    max-width: 600px;
`;
