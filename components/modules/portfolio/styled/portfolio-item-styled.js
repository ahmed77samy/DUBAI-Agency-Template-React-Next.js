import {
    SocialStyled,
    ShareStyled,
} from "components/elements/layouts/styled/social-styled";
import { SpanStyled } from "components/elements/layouts/styled/three-lines-styled";
import styled, { css } from "styled-components";

export const PortfolioItemStyled = styled.div`
    ${({ theme: { colors } }) => css`
        &:hover {
            ${SideLeftStyled} {
                ${SpanStyled} {
                    background: ${colors.primary};
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
    position: relative;
`;

export const SideLeftStyled = styled.div`
    ${({ theme: { colors } }) => css`
        position: relative;
        width: 45px;
        flex-shrink: 0;
        overflow: hidden;
        ${SpanStyled} {
            transition: 0.3s;
            background: ${colors.text};
        }
        ${SocialStyled} {
            position: absolute;
            left: 0;
            top: 0;
            ${ShareStyled} {
                width: 33px;
                height: 33px;
                font-size: 12px;
            }
        }
    `}
`;

export const ImgStyled = styled.img`
    transition: 0.5s;
    border-radius: 3px;
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
