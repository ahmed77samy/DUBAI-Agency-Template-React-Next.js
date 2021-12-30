import { DefaultInputStyled } from "components/styled/default-input-styled";
import styled, { css } from "styled-components";

export const FormStyled = styled.form`
    ${({ theme: { breakpoints } }) => css`
        display: flex;
        column-gap: 5px;
        row-gap: 20px;
        flex-direction: column;
        ${DefaultInputStyled} {
            flex-grow: 1;
        }
        ${breakpoints.md} {
            flex-direction: row;
        }
    `}
`;
