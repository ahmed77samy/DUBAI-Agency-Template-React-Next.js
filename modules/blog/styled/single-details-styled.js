import styled, { css } from "styled-components";

export const BlockquoteStyled = styled.blockquote`
    ${({ theme: { colors } }) => css`
        background: var(--background);
        padding: 20px;
        border-left: 3px solid ${colors.primary};
    `}
`;

export const LinkStyled = styled.a`
    ${({ theme: { colors } }) => css`
        color: ${colors.white};
        transition: 0.3s;
        &:hover {
            color: ${colors.primary};
        }
    `}
`;

export const HrStyled = styled.hr`
    border-color: var(--border);
`;

export const TagsStyled = styled.a`
    ${({ theme: { colors } }) => css`
        color: ${colors.white};
        background: var(--background);
        padding: 5px 10px;
        margin: 5px;
        transition: 0.3s;
        &:hover {
            color: ${colors.primary};
        }
    `}
`;
