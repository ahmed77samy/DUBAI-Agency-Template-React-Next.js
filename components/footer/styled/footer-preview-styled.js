import styled, { css } from "styled-components";

export const FooterStyled = styled.footer`
    ${({ theme: { colors } }) => css`
        --foreground: ${colors.tertiary};
        --background: ${colors.tertiary_2};
        --border: ${colors.neutral}20;
        --maincolor: ${colors.white};
        background: var(--foreground);
        padding: 40px 0;
        text-align: center;
    `}
`;
