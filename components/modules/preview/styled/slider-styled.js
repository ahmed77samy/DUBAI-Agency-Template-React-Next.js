import styled, { css } from "styled-components";

export const SliderStyled = styled.div`
    position: relative;
    ${({ theme: { colors } }) => css`
        background: ${colors.neutral_300};
    `}
`;

export const ContentStyled = styled.div`
    ${({ theme: { variables } }) => css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        row-gap: 25px;
        min-height: 100vh;
        padding: calc(${variables.headerHeight} + 20px) 15px 20px;
    `}
`;

export const H1Styled = styled.h1`
    ${({ theme: { breakpoints } }) => css`
        font-size: 2.5em;
        ${breakpoints.lg} {
            font-size: 3.5em;
        }
    `}
`;

export const WrapperButtons = styled.div`
    column-gap: 25px;
    row-gap: 25px;
`;
