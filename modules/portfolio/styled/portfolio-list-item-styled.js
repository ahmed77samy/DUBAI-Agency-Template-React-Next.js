import { SpanStyled } from "components/styled/three-lines-styled";
import styled, { css } from "styled-components";

export const PortfolioItemStyled = styled.div`
    ${({ theme: { colors, breakpoints } }) => css`
        position: relative;
        ${breakpoints.md} {
            padding-bottom: 40px;
        }
        &:hover {
            ${SideTopStyled} {
                ${SpanStyled} {
                    background: ${colors.primary};
                }
                &:before {
                    color: ${colors.primary};
                }
            }
        }
    `}
`;

export const MaskStyled = styled.div`
    ${({ theme: { colors, breakpoints } }) => css`
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        width: 100%;
        ${breakpoints.md} {
            background: var(--background);
            width: calc(90%);
        }
    `}
`;

export const ImgStyled = styled.img`
    border-radius: 3px;
    cursor: pointer;
    transition: 0.5s;
    &:hover {
        transform: rotate(10deg) scale(1.3);
    }
`;

export const SideTopStyled = styled.div`
    ${({ theme: { colors } }) => css`
        position: relative;
        height: 40px;
        overflow: hidden;
        ${SpanStyled} {
            transition: 0.3s;
            background: ${colors.text};
        }
        &:before {
            content: attr(data-title);
            position: absolute;
            top: 50%;
            left: 70px;
            font-weight: 600;
            text-transform: uppercase;
            transition: 0.3s;
            color: ${colors.text};
            transform: translateY(-50%)
        }
    `}
`;

export const LinkStyled = styled.a`
    ${({ theme: { colors } }) => css`
        color: inherit;
        transition: 0.3s;
        &:hover {
            color: ${colors.primary};
        }
    `}
`;

export const H5Styled = styled.h5`
    ${({ theme: { colors } }) => css`
        color: ${colors.white};
        transition: 0.3s;
        &:hover {
            color: ${colors.primary};
        }
    `}
`;
