import styled, { css } from "styled-components";

export const AsideStyled = styled.aside`
    ${({ theme: { variables } }) => css`
        display: flex;
        flex-direction: column;
        row-gap: ${variables.secondaryPadding};
    `}
`;

export const AsideGroupStyled = styled.div`
    ${({ theme: { colors }, border }) => css`
        border: 1px solid ${colors.neutral_600}70;
        border: ${border ? `1px solid ${colors.neutral_600}70` : "none"};
    `}
`;

export const AsideHeaderStyled = styled.h4`
    ${({ theme: { colors } }) => css`
        border-bottom: 1px solid ${colors.neutral_600}70;
        margin: 0;
        padding: 20px 15px;
        text-transform: uppercase;
        font-weight: 600;
    `}
`;

export const AsideContentStyled = styled.div`
    padding: 20px 15px;
`;
