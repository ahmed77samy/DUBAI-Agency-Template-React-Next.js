import styled, { css } from "styled-components";

export const SliderStyled = styled.div`
    position: relative;
    overflow: hidden;
    height: 100vh;
`;

export const WrapperStyled = styled.div`
    position: absolute;
    bottom: 0;
`;

export const ContentStyled = styled.div`
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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

export const H1Styled = styled.h1`
    ${({ theme: { colors, breakpoints } }) => css`
        text-transform: uppercase;
        color: ${colors.primary};
        font-size: 2.5rem;
        ${breakpoints.lg} {
            font-size: 3.8rem;
        }
    `}
`;
