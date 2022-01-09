import styled, { css } from "styled-components";

export const ConuterItemStyled = styled.div`
    background: var(--background);
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const H2Styled = styled.h2`
    ${({ theme: { breakpoints } }) => css`
        font-size: 3em;
        ${breakpoints.md} {
            font-size: 4em;
        }
        &:after {
            content: "+";
        }
    `}
`;
export const H6Styled = styled.h6`
    ${({ theme: { colors } }) => css`
        color: ${colors.text};
    `}
`;
