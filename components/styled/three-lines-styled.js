import styled, { css } from "styled-components";

export const ThreeLinesStyled = styled.div`
    ${({ theme: { variables }, x, y, width, height, gap, direction, main }) => css`
        pointer-events: none;
        position: absolute;
        z-index: 10;
        display: flex;
        gap: ${gap || `20px`};
        ${SpanStyled} {
            ${direction === "row"
                ? css`
                      width: ${width || `25px`};
                      height: ${height || `40px`};
                  `
                : direction === "column" &&
                  css`
                      width: ${width || `40px`};
                      height: ${height || `25px`};
                  `}
        }
        ${direction === "row"
            ? css`
                  flex-direction: row;
                  transform: skewX(-35deg);
                  transform-origin: ${x === "left"
                      ? "bottom"
                      : x === "center"
                      ? "center"
                      : x === "right" && "top"};
              `
            : direction === "column" &&
              css`
                  flex-direction: column;
                  transform: skewY(-35deg);
                  transform-origin: ${y === "top"
                      ? "right"
                      : y === "center"
                      ? "center"
                      : y === "bottom" && "left"};
              `}
        ${x === "left"
            ? css`
                  left: ${main ? `15px` : "0"};
              `
            : x === "center"
            ? css`
                  left: 50%;
                  transform: ${direction === "row"
                      ? y === "center"
                          ? "translate(-50%, -50%) skewX(-35deg)"
                          : "translateX(-50%) skewX(-35deg)"
                      : y === "center"
                      ? "translate(-50%, -50%) skewY(-35deg)"
                      : "translateX(-50%) skewY(-35deg)"};
              `
            : x === "right" &&
              css`
                  right: ${main ? `15px` : "0"};
              `}
        ${y === "top"
            ? css`
                  top: ${main ? `-${variables.mainPadding}` : "0"};
              `
            : y === "center"
            ? css`
                  top: 50%;
                  transform: ${direction === "row"
                      ? x === "center"
                          ? "translate(-50%, -50%) skewX(-35deg)"
                          : "translateY(-50%) skewX(-35deg)"
                      : x === "center"
                      ? "translate(-50%, -50%) skewY(-35deg)"
                      : "translateY(-50%) skewY(-35deg)"};
              `
            : y === "bottom" &&
              css`
                  bottom: ${main ? `-${variables.mainPadding}` : "0"};
              `}
    `}
`;

export const SpanStyled = styled.span`
    ${({ theme: { colors } }) => css`
        background: ${colors.white};
    `}
`;
