import styled, { css } from "styled-components";

export const ToogleIconStyled = styled.div`
    ${({ theme: { colors } }) => css`
        border: 1px solid ${colors.neutral_700};
        width: 45px;
        height: 45px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: auto;
        cursor: pointer;
        transition: 0.3s;
        &:hover {
            background-color: ${colors.neutral_700};
            border-color: transparent;
        }
        .icon {
            pointer-events: none;
        }
    `}
`;