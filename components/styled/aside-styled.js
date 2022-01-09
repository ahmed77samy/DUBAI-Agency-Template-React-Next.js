import styled, { css } from "styled-components";

export const AsideStyled = styled.aside`
    ${({ theme: { variables } }) => css`
        display: flex;
        flex-direction: column;
        row-gap: ${variables.secondaryPadding};
    `}
`;

export const AsideGroupStyled = styled.div`
    ${({ border }) => css`
        border: 1px solid var(--border);
        border: ${border ? `1px solid var(--border)` : "none"};
    `}
`;

export const AsideHeaderStyled = styled.h4`
    border-bottom: 1px solid var(--border);
    margin: 0;
    padding: 20px 15px;
    text-transform: uppercase;
    font-weight: 600;
`;

export const AsideContentStyled = styled.div`
    padding: 20px 15px;
`;
