import styled, { css } from "styled-components";

export const FooterStyled = styled.footer`
    ${({ theme: { colors } }) => css`
        --foreground: ${colors.tertiary};
        --background: ${colors.main};
        background: var(--foreground);
        padding: 40px 0;
        text-align: center;
    `}
`;
