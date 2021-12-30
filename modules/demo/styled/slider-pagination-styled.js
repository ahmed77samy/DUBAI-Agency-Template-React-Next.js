import styled, { css } from "styled-components";

export const WrapperStyled = styled.div`
    position: absolute;
    left: 50%;
    bottom: 50px;
    transform: translateX(-50%);
    padding: 20px;
    z-index: 2;
    display: flex;
    gap: 15px;
    align-items: center;
    pointer-events: none;
`;

export const SpanStyled = styled.span`
    ${({ theme: { colors } }) => css`
        color: ${colors.white};
    `}
`;

export const PaginationStyled = styled.div`
    ${({ theme: { colors } }) => css`
        width: 100px !important;
        position: relative !important;
        border-radius: 4px;
        overflow: hidden;
        border-color: red;
        span {
            background: ${colors.white} !important;
        }
    `}
`;
