import styled, { css } from "styled-components";

export const SocialStyled = styled.div`
    ${({ theme: { colors }, direction, type }) => css`
        display: flex;
        flex-direction: ${direction === "row"
            ? `row`
            : direction === "column" && `column`};
        gap: 10px;
        width: max-content;
        ${LinkStyled} {
            &:hover {
                color: var(--color);
                ${type === "light"
                    ? css`
                          --background: ${colors.white};
                          --border: transparent;
                          --color: ${colors.black};
                      `
                    : type === "dark"
                    ? css`
                          --background: ${colors.black};
                          --border: transparent;
                          --color: ${colors.white};
                      `
                    : type === "primary"
                    ? css`
                          --background: ${colors.primary};
                          --border: transparent;
                          --color: ${colors.white};
                      `
                    : type === "neutral" &&
                      css`
                          --background: ${colors.neutral_400}50;
                          --border: transparent;
                          --color: ${colors.white};
                      `}
            }
        }
    `}
`;
export const LinkStyled = styled.a`
    ${({ theme: { colors } }) => css`
        --background: transparent;
        --border: ${colors.neutral_600}70;
        --color: ${colors.white};
        background: var(--background);
        border: 1px solid var(--border);
        transition: 0.3s;
        color: var(--color);
    `}
`;

export const ShareStyled = styled.span`
    ${({ theme: { colors } }) => css`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        color: inherit;
        text-transform: uppercase;
        font-weight: 600;
    `}
`;
