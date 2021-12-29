import { OverlayStyled } from "core/styled/overlay-styled";
import styled, { css } from "styled-components";

export const TeamItemStyled = styled.div`
    padding-top: 12px;
    position: relative;
    &:hover {
        ${OverlayStyled} {
            opacity: 1;
        }
    }
`;

export const WrapperImage = styled.div`
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    ${OverlayStyled} {
        height: 200px;
        bottom: 0;
        top: auto;
        opacity: 0;
        display: flex;
        align-items: flex-end;
        background: linear-gradient(to top, #000000, #000000f7, #000000b3, #00000057, transparent);
        padding: 15px;
        transition: .3s;
    }
`;

export const H6Styled = styled.h6`
    ${({ theme: { colors } }) => css`
        transition: 0.3s;
        cursor: pointer;
        width: fit-content;
        &:hover {
            color: ${colors.primary};
        }
    `}
`;
