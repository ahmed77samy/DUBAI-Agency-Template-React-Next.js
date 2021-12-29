import { SpanStyled } from "components/elements/layouts/styled/three-lines-styled";
import styled, { css } from "styled-components";

export const BlogItemStyled = styled.div`
    ${({ theme: { colors } }) => css`
        &:hover {
            ${SideTopStyled} {
                ${SpanStyled} {
                    background: ${colors.primary};
                }
                &:before {
                    color: ${colors.primary};
                }
            }
            ${ImgStyled} {
                transform: rotate(10deg) scale(1.3);
            }
        }
    `}
`;

export const HeaderStyled = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SideTopStyled = styled.div`
    ${({ theme: { colors } }) => css`
        position: relative;
        height: 40px;
        flex-shrink: 0;
        overflow: hidden;
        ${SpanStyled} {
            transition: 0.3s;
            background: ${colors.text};
        }
        &:before {
            content: attr(data-title);
            position: absolute;
            top: 0;
            left: 85px;
            font-weight: 600;
            text-transform: uppercase;
            transition: 0.3s;
            color: ${colors.text};
        }
    `}
`;

export const ImgStyled = styled.img`
    border-radius: 3px;
    transition: 0.5s;
    cursor: pointer;
`;

export const ContentStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 25px;
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
