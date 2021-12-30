import styled, { css } from "styled-components";

export const SecHeaderStyled = styled.div`
    ${({ theme: { variables, breakpoints }, align }) => css`
        margin-bottom: ${variables.secondaryPadding};
        ${ContentStyled} {
            ${align === "center"
                ? css`
                      margin: auto !important;
                      text-align: center;
                  `
                : align === "right"
                ? css`
                      margin-left: auto !important;
                      text-align: right;
                  `
                : align === "left" &&
                  css`
                      margin-right: auto !important;
                      text-align: left;
                  `}
            ${breakpoints.lg} {
                padding: 0 20px;
                ${align === "right"
                    ? css`
                          margin-right: 40px;
                      `
                    : align === "left" &&
                      css`
                          margin-left: 40px;
                      `}
            }
        }
    `}
`;

export const WrapperStyled = styled.div`
    z-index: 2;
    position: relative;
    ${({ theme: { colors, breakpoints } }) => css`
        ${breakpoints.lg} {
            &::before {
                content: "";
                position: absolute;
                z-index: -1;
                top: 50%;
                left: 0;
                width: 100%;
                height: 1px;
                background: ${colors.neutral_600}70;
            }
        }
    `}
`;
export const ContentStyled = styled.div`
    background: var(--foreground);
    width: fit-content;
`;

export const LayerStyled = styled.h3`
    ${({ theme: { colors } }) => css`
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 90px;
        font-weight: 800;
        color: ${colors.neutral_400}10;
        z-index: 2;
        pointer-events: none;
        text-transform: uppercase;
        margin: 0;
    `}
`;
