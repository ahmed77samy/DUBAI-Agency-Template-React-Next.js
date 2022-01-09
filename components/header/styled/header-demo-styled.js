import styled, { css } from "styled-components";

export const HeaderStyled = styled.header`
    ${({ theme: { variables, colors, breakpoints }, scroll }) => css`
        --foreground: ${colors.tertiary};
        --background: ${colors.tertiary2};
        --border: ${colors.neutral}20;
        --maincolor: ${colors.white};
        height: ${variables.headerHeight};
        width: 100%;
        display: flex;
        z-index: 99;
        position: fixed;
        background: var(--foreground);
        transition: background 0.3s;
        ${breakpoints.lg} {
            border-bottom: 1px solid var(--border);
            background: transparent;
            ${scroll === true &&
            css`
                border-color: transparent;
                background: var(--foreground);
            `}
        }
    `}
`;
