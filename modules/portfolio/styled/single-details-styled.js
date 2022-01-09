import styled, { css } from "styled-components";

export const DetailsItemStyled = styled.div`
    background: var(--background);
    padding: 20px;
    text-align: center;
`;

export const LinkStyled = styled.a`
    ${({ theme: { colors } }) => css`
        color: ${colors.text};
        transition: color 0.3s;
        &:hover {
            color: ${colors.primary};
        }
    `}
`;
