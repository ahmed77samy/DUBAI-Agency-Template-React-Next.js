import styled, { css } from "styled-components";

export const PaginationStyled = styled.div`
    bottom: 0;
`;

export const PaginationItemStyled = styled.span`
    ${({ theme: { colors }, isactive }) => css`
        opacity: 1;
        background: transparent;
        height: auto;
        width: auto;
        border-radius: 0;
        display: block;
        ${isactive &&
        css`
            ${ContentStyled} {
                border-color: ${colors.neutral_700}70;
                background: transparent;
                .icon {
                    color: ${colors.primary};
                }
            }
        `}
    `}
`;

export const ContentStyled = styled.div`
    ${({ theme: { colors, breakpoints } }) => css`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 35px 20px;
        max-height: 300px;
        row-gap: 25px;
        height: 100%;
        border: 1px solid transparent;
        background: ${colors.tertiary};
        cursor: pointer;
        transition: 0.3s;
        .icon {
            transition: 0.3s;
            font-size: 20px;
            ${breakpoints.md} {
                font-size: 30px;
            }
            ${breakpoints.lg} {
                align-self: flex-end;
            }
        }
    `}
`;

export const H3Styled = styled.h3`
    ${({ theme: { breakpoints } }) => css`
        text-transform: uppercase;
        font-weight: 600;
        width: min-content;
        margin: 0;
        font-size: 0.9rem;
        ${breakpoints.md} {
            font-size: 1.25rem;
        }
    `}
`;
