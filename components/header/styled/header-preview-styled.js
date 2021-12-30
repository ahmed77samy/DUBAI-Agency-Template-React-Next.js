import styled, { css } from "styled-components";

export const HeaderStyled = styled.header`
    ${({ theme: { variables, colors, breakpoints }, scroll }) => css`
        height: ${variables.headerHeight};
        width: 100%;
        display: flex;
        overflow: hidden;
        z-index: 99;
        position: fixed;
        background: ${colors.neutral_900};
        transition: background 0.3s;
        ${breakpoints.lg} {
            border-bottom: 1px solid ${colors.neutral_600}50;
            background: transparent;
            ${scroll === true &&
            css`
                border-color: transparent;
                background: ${colors.neutral_900};
            `}
        }
    `}
`;
