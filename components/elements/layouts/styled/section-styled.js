import styled, { css } from "styled-components";

export const SectionStyled = styled.section`
    ${({ theme: { colors, variables }, padding, reverseColor }) => css`
        --foreground: ${colors.main};
        --background: ${colors.tertiary};
        background: var(--foreground);
        position: relative;
        padding: ${padding && variables.mainPadding} 0;
        overflow: hidden;
        ${reverseColor &&
        css`
            --foreground: ${colors.tertiary};
            --background: ${colors.main};
        `}
    `}
`;
