import styled, { css } from "styled-components";

export const SocialStyled = styled.div`
    ${({ theme: { colors }, direction, type }) => css`
        display: flex;
        flex-direction: ${direction === "row" ? `row` : direction === "column" && `column`};
        gap: 10px;
        width: max-content;
        ${LinkStyled} {
            &:hover {
                color: var(--maincolor);
                ${type === "light"
                    ? css`
                          background: ${colors.white};
                          --border: transparent;
                          --maincolor: ${colors.black};
                      `
                    : type === "primary"
                    ? css`
                          background: ${colors.primary};
                          --border: transparent;
                          --maincolor: ${colors.white};
                      `
                    : type === "neutral" &&
                      css`
                          background: var(--background);
                          --border: transparent;
                          --maincolor: var(--maincolor);
                      `}
            }
        }
    `}
`;
export const LinkStyled = styled.a`
    background: transparent;
    border: 1px solid var(--border);
    transition: 0.3s;
    color: var(--maincolor);
`;

export const ShareStyled = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    color: inherit;
    text-transform: uppercase;
    font-weight: 600;
`;
