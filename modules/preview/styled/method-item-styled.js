import styled, { css } from "styled-components";

export const MethodItemStyled = styled.div`
    ${({ theme: { colors } }) => css`
        position: relative;
        border: 1px solid ${colors.neutral_800}70;
        padding: 20px 15px;
        border-radius: 4px;
        height: 100%;
        transition: border 0.3s;
        &::after {
            content: attr(data-num);
            position: absolute;
            top: 0;
            right: 15px;
            font-size: 45px;
            font-weight: 600;
            color: ${colors.neutral_400}10;
            z-index: 2;
            pointer-events: none;
            transition: color 0.3s;
        }
        hr {
            border-color: ${colors.neutral_800}50;
        }
        &:hover {
            border-color: ${colors.neutral_800};
            &::after {
                color: ${colors.primary};
            }
        }
    `}
`;
