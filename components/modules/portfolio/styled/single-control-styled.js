import styled, { css } from "styled-components";

export const ControlStyled = styled.div`
    ${({ theme: { colors } }) => css`
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: space-between;
    `}
`;

export const LinkStyled = styled.a`
    ${({ theme: { colors } }) => css`
        display: flex;
        align-items: center;
        gap: 20px;
        width: fit-content;
        padding: 20px;
        border: 1px solid ${colors.neutral_700}70;
        text-align: center;
        transition: .3s;
        &:hover {
            border-color: transparent;
            background: ${colors.tertiary}
        }
    `}
`;
