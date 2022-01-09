import styled, { css } from "styled-components";

export const FooterStyled = styled.footer`
    ${({ theme: { colors } }) => css`
        --foreground: ${colors.main};
        --background: ${colors.tertiary};
        --border: ${colors.neutral}20;
        --maincolor: ${colors.white};
        background: var(--foreground);
        padding: 40px 0;
        hr {
            border-color: var(--border);
        }
    `}
`;

export const WrapperStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: space-between;
    align-items: center;
`;
