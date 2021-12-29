import styled, { css } from "styled-components";

export const SliderInnerPageStyled = styled.div`
    ${({ theme: { colors }, bg }) => css`
        background-color: ${colors.main};
        background: url(${bg}) fixed center;
        background-size: cover;
        position: relative;
        min-height: 70vh;
        display: flex;
        align-items: center;
        justify-content: center;
        &:after {
            content: "";
            position: absolute;
            inset: 0;
            background: linear-gradient(
                to top,
                ${colors.main} 0%,
                ${colors.main}80 100%,
                ${colors.main}50 100%
            );
        }
    `}
`;

export const ContentStyled = styled.div`
    ${({ theme: { variables } }) => css`
        position: relative;
        padding: 0 15px 0;
        text-align: center;
        z-index: 3;
        padding-bottom: ${variables.mainPadding};
        padding-top: ${variables.mainPadding};
    `}
`;

export const H1Styled = styled.h1`
    ${({ theme: { breakpoints } }) => css`
        text-transform: uppercase;
        font-size: 2.5rem;
        font-weight: 600;
        ${breakpoints.lg} {
            font-size: 3.8rem;
        }
    `}
`;

export const PStyled = styled.p`
    max-width: 700px;
    margin: 0;
`;
