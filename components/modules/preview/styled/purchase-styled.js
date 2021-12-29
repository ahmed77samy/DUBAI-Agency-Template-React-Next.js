import styled, { css } from "styled-components";

export const FigureStyled = styled.figure`
    ${({ theme: { breakpoints, variables } }) => css`
        margin-bottom: ${variables.mainPadding};
        img {
            min-height: 500px;
            object-fit: cover;
            ${breakpoints.xl} {
                min-height: auto;
            }
        }
    `}
`;
