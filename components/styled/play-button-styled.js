import styled, { css } from "styled-components";

export const PlayButtonStyled = styled.button`
    ${({ theme: { colors } }) => css`
        position: relative;
        &:after {
            content: "";
            position: absolute;
            left: -13px;
            width: calc(100% + 26px);
            height: calc(100% + 26px);
            background-color: ${colors.neutral_700}99;
            border-radius: 50%;
            z-index: -1;
            opacity: 0.5;
        }
    `}
`;
