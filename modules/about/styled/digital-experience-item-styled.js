import styled, { css } from "styled-components";

export const ExperienceItemStyled = styled.div`
    margin-bottom: 1.5rem;
    &:last-of-type {
        margin-bottom: 0;
    }
`;

export const SpanStyled = styled.span`
    ${({ theme: { colors } }) => css`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        background: ${colors.primary};
        color: ${colors.white};
        flex-shrink: 0;
        margin-right: 20px;
    `}
`;