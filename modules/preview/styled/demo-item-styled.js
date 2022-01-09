import styled, { css } from "styled-components";

export const DemoItemStyled = styled.div`
    ${({ theme: { colors } }) => css`
        position: relative;
        background: ${colors.neutral}cc;
        border-radius: 4px;
        pointer-events: none;
        &:hover {
            ${FigureStyled} {
                top: -10px;
            }
            ${ContentStyled} {
                opacity: 1;
            }
        }
    `}
`;

export const LinkStyled = styled.a`
    overflow: hidden;
    padding: 20px;
    position: relative;
    display: block;
    pointer-events: all;
    &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        background: var(--foreground);
        width: 100%;
        height: 80%;
        transform: skewY(55deg);
        transform-origin: top right;
    }
`;

export const FigureStyled = styled.figure`
    position: relative;
    z-index: 2;
    pointer-events: none;
    top: 0;
    transition: 0.3s;
    img {
        border-radius: 4px;
        pointer-events: none;
    }
`;

export const ContentStyled = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 3;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.3s;
`;

export const ContentItemStyled = styled.h6`
    ${({ theme: { colors } }) => css`
        width: max-content;
        background: ${colors.white};
        padding: 5px 15px;
    `}
`;
