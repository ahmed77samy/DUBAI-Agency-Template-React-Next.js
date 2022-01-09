import styled, { css } from "styled-components";

export const SectionStyled = styled.section`
    ${({ theme: { colors, variables }, padding, reverseColor }) => css`
        --foreground: ${colors.main};
        --background: ${colors.tertiary};
        --border: ${colors.neutral}20;
        --maincolor: ${colors.white};
        background: var(--foreground);
        position: relative;
        padding: ${padding && variables.mainPadding} 0;
        overflow: hidden;
        ${reverseColor &&
        css`
            --foreground: ${colors.tertiary};
            --background: ${colors.tertiary_2};
        `}
    `}
`;
