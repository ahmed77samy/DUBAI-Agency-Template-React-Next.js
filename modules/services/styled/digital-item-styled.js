import styled, { css } from "styled-components";

export const DigitalItemStyled = styled.div`
    ${({ theme: { breakpoints } }) => css`
        background: var(--background);
        padding: 50px 15px;
        ${breakpoints.md} {
            padding: 80px 30px;
        }
    `}
`;

export const HeaderStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    row-gap: 10px;
    margin-bottom: 40px;
`;
