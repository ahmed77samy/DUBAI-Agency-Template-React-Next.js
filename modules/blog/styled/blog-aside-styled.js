import styled, { css } from "styled-components";

export const AsideWorksStyled = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 15px;
`;

export const AsideWorkItemStyled = styled.div`
    display: flex;
    column-gap: 15px;
    align-items: flex-start;
    align-items: center;
`;

export const H6Styled = styled.h6`
    ${({ theme: { colors } }) => css`
        color: ${colors.white};
        transition: color 0.3s;
        &:hover {
            color: ${colors.primary};
        }
    `}
`;

export const LinkStyled = styled.a`
    ${({ theme: { colors } }) => css`
        color: ${colors.white};
        transition: color 0.3s;
        &:hover {
            color: ${colors.primary};
        }
    `}
`;

export const LinkCatStyled = styled.a`
    ${({ theme: { colors } }) => css`
        color: ${colors.text};
        transition: color 0.3s;
        &:hover {
            color: ${colors.primary};
        }
    `}
`;

export const ImageStyled = styled.img`
    cursor: pointer;
`;
