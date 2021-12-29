import styled, { css } from "styled-components";

export const TestimonialItemStyled = styled.div`
    ${({ theme: { colors } }) => css`
        position: relative;
        background: ${colors.neutral_500}10;
        padding: 25px;
    `}
`;

export const IconStyled = styled.i`
    ${({ theme: { colors } }) => css`
        position: absolute;
        top: 25px;
        right: 25px;
        font-size: 2rem;
        color: ${colors.white};
    `}
`;

export const HeaderStyled = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 5px;
`;

export const ImageStyled = styled.div`
    ${({ theme: { colors } }) => css`
        flex-shrink: 0;
        img {
            border-radius: 50%;
            margin: 4px;
            border: 2px solid ${colors.neutral_300} !important;
        }
    `}
`;
