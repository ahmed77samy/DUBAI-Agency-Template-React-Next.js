import styled, { css } from "styled-components";

export const OptionItemStyled = styled.div`
    display: flex;
    gap: 30px;
    margin-bottom: 50px;
    &:last-of-type {
        margin-bottom: 0;
    }
`;

export const IconStyled = styled.span`
    ${({ theme: { colors } }) => css`
        width: 50px;
        height: 50px;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background: var(--background);
        color: ${colors.white};
        position: relative;
        &:before {
            content: "";
            position: absolute;
            border: 1px solid var(--border);
            inset: -10px;
            border-radius: 50%;
            pointer-events: none;
        }
    `}
`;
