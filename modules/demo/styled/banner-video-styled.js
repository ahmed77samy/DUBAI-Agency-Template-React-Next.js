import { WrapperStyled as SecHeaderWrapperStyled, ContentStyled } from "components/layouts/styled/sec-header-styled";
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
    ${({ theme: { breakpoints, variables } }) => css`
        max-width: 700px;
        padding: ${variables.mainPadding} 15px;
        background: var(--background);
        margin: auto;
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

export const WrapperPlayStyled = styled.div`
    position: relative;
    z-index: 2;
`;
