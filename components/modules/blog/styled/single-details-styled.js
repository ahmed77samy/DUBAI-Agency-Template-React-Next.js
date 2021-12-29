import styled, { css } from "styled-components";

export const BlockquoteStyled = styled.blockquote`
    ${({ theme: { colors } }) => css`
        background: ${colors.tertiary};
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
    ${({ theme: { colors } }) => css`
        border-color: ${colors.neutral_600}70;
    `}
`;

export const TagsStyled = styled.a`
    ${({ theme: { colors } }) => css`
        color: ${colors.white};
        background: ${colors.tertiary};
        padding: 5px 10px;
        margin: 5px;
        transition: 0.3s;
        &:hover {
            color: ${colors.primary};
        }
    `}
`;
