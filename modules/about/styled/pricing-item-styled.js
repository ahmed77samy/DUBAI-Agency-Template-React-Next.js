import styled, { css } from "styled-components";

export const PricingItemStyled = styled.div`
    ${({ theme: { colors } }) => css`
        background: var(--background);
    `}
`;

export const HeaderStyled = styled.div`
    ${({ theme: { colors } }) => css`
        padding: 30px 10px;
        background: var(--border);
    `}
`;

export const BodyStyled = styled.div`
    padding: 30px 10px 40px;
`;

export const UlStyled = styled.ul`
    ${({ theme: { colors } }) => css`
        color: ${colors.text};
        width: fit-content;
        margin: auto;
        display: flex;
        flex-direction: column;
        row-gap: 10px;
    `}
`;

export const HrStyled = styled.hr`
    ${({ theme: { colors } }) => css`
        margin: 30px 0;
        border-color: var(--border);
    `}
`;
