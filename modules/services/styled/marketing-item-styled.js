import styled, { css } from "styled-components";

export const MarketingItemStyled = styled.div`
    ${({ theme: { colors, breakpoints }, increase }) => css`
        border: 1px solid var(--border);
        padding: 20px 15px;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 25px;
        ${breakpoints.lg} {
            padding: 30px 20px;
            margin: 0 5px;
            ${increase &&
            css`
                padding-top: 50px;
                padding-bottom: 50px;
            `}
        }
        &:hover {
            ${H5Styled} , ${IconStyled} {
                color: ${colors.primary};
            }
        }
    `}
`;

export const IconStyled = styled.i`
    font-size: 40px;
    transition: color 0.3s;
`;

export const H5Styled = styled.h5`
    transition: color 0.3s;
`;
