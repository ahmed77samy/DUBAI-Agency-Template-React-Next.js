import styled, { css } from "styled-components";

export const CommentItemStyled = styled.div`
    ${({ theme: { breakpoints } }) => css`
        display: flex;
        align-items: flex-start;
        gap: 15px;
        flex-direction: column;
        ${breakpoints.md} {
            flex-direction: row;
        }
        span {
            flex-shrink: 0;
            border-radius: 50%;
        }
    `}
`;

export const LinkStyled = styled.a`
    ${({ theme: { colors } }) => css`
        display: block;
        color: ${colors.white};
        transition: 0.3s;
        text-transform: uppercase;
        margin-bottom: 5px;
        width: fit-content;
        font-weight: 600;
        &:hover {
            color: ${colors.primary};
        }
    `}
`;
