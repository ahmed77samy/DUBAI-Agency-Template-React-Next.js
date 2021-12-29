import {
    WrapperStyled as SecHeaderWrapperStyled,
    ContentStyled,
} from "components/elements/layouts/styled/sec-header-styled";
import styled, { css } from "styled-components";

export const BannerVideoStyled = styled.div`
    ${({ theme: { breakpoints } }) => css`
        --foreground: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        ${breakpoints.lg} {
            min-height: 100vh;
        }
    `}
`;

export const WrapperStyled = styled.div`
    ${({ theme: { colors, breakpoints, variables } }) => css`
        padding: ${variables.mainPadding} 15px;
        background: ${colors.tertiary}df;
        ${breakpoints.sm} {
            padding: ${variables.mainPadding} 30px;
        }
        ${breakpoints.lg} {
            padding: ${variables.mainPadding} 50px;
        }
        ${ContentStyled} {
            padding: 0;
            margin-left: 0;
            margin-right: 0;
        }
        ${SecHeaderWrapperStyled} {
            &:before {
                content: none;
            }
        }
    `}
`;
