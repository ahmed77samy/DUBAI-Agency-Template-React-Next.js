import styled, { css } from "styled-components";

export const FactItemStyled = styled.div`
    ${({ theme: { colors } }) => css`
        background: ${colors.tertiary};
        text-align: center;
        padding: 20px;
    `}
`;

export const IconStyled = styled.i`
    display: block;
    font-size: 30px;
    margin-bottom: 15px;
    margin-left: auto;
    margin-right: auto;
`;
