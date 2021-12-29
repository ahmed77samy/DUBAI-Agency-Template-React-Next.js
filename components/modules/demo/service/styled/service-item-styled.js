import styled, { css } from "styled-components";

export const ServiceItemStyled = styled.div`
    ${({ theme: { colors } }) => css`
        border: 1px solid ${colors.neutral_700}70;
        padding: 20px;
        height: 100%;
        &:hover {
            ${IconStyled} , ${H5Styled} {
                color: ${colors.primary};
            }
        }
    `}
`;

export const HeaderStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    row-gap: 10px;
`;

export const HrStyled = styled.hr`
    ${({ theme: { colors } }) => css`
        border-color: ${colors.neutral_700}50;
    `}
`;

export const IconStyled = styled.i`
    font-size: 30px;
    margin-right: 10px;
    transition: color 0.3s;
`;

export const H5Styled = styled.h5`
    width: min-content;
    margin: 0;
    transition: color 0.3s;
`;
