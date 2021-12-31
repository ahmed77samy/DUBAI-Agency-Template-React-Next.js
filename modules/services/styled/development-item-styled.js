import styled, { css } from "styled-components";

export const DevelopmentItemStyled = styled.div`
    ${({ theme: { colors, breakpoints } }) => css`
        position: relative;
        text-align: center;
        border: 1px solid ${colors.neutral_700}70;
        padding: 20px 15px;
        ${breakpoints.lg} {
            padding: 30px 20px;
        }
        &:hover {
            ${H5Styled} {
                color: ${colors.primary};
            }
        }
        &:before {
            content: attr(data-number);
            font-size: 36px;
            color: ${colors.primary};
            font-weight: 600;
        }
    `}
`;

export const H5Styled = styled.h5`
    transition: color 0.3s;
`;
