import { OverlayStyled } from "core/styled/overlay-styled";
import styled, { css } from "styled-components";


export const PlayButtonStyled = styled.button`
    ${({ theme: { colors } }) => css`
        &:after {
            background: ${colors.main};
            transition: 0.3s;
        }
    `}
`;

export const BannerVideoItemStyled = styled.div`
    position: relative;
    cursor: pointer;
    img {
        border-radius: 3px;
    }
    ${OverlayStyled} {
        z-index: 2;
        transition: 0.3s;
    }
    &:hover {
        ${OverlayStyled} {
            background: #00000099;
        }
        ${PlayButtonStyled} {
            &:after {
                opacity: 1;
            }
        }
    }
`;
