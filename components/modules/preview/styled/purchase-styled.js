import styled, { css } from "styled-components";

export const FigureStyled = styled.figure`
    ${({ theme: { colors, breakpoints, variables } }) => css`
        position: relative;
        margin-bottom: ${variables.mainPadding};
        background: ${colors.neutral_300};
        img {
            min-height: 500px;
            object-fit: cover;
            ${breakpoints.xl} {
                min-height: auto;
            }
        }

        &:after {
            content: "";
            position: absolute;
            inset: 0;
            background: linear-gradient(
                to top,
                ${colors.main} 0%,
                ${colors.main} 10%,
                ${colors.main}20 100%,
                ${colors.main}10 100%
            );
        }
    `}
`;
