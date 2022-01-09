import { OverlayStyled } from "components/styled/overlay-styled";
import styled, { css } from "styled-components";

export const BannerVideoItemStyled = styled.div`
    ${() => css`
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
        }
    `}
`;

export const PlayButtonStyled = styled.button`
    &:after {
        background: var(--background);
        transition: 0.3s;
    }
`;
