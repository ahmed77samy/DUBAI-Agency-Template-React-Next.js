import styled, { css } from "styled-components";

export const NavbarStyled = styled.nav`
    ${({ theme: { colors, variables, breakpoints }, open }) => css`
        display: block;
        position: fixed;
        width: 100%;
        background-color: ${colors.neutral_900};
        height: calc(100% - ${variables.headerHeight});
        right: 0;
        transform: translateX(100%);
        top: ${variables.headerHeight};
        transition: transform 0.3s;
        z-index: 99;
        ${breakpoints.sm} {
            width: 280px;
        }
        ${breakpoints.lg} {
            background: none;
            position: static;
            width: auto;
            transform: none;
            max-width: none;
        }
        transform: ${open ? `translateX(0)` : `translateX(100%)`};
    `}
`;

export const UlStyled = styled.ul`
    ${({ theme: { breakpoints } }) => css`
        display: flex;
        justify-content: flex-end;
        column-gap: 5px;
        row-gap: 5px;
        flex-direction: column;
        padding: 10px 10px;
        ${breakpoints.lg} {
            flex-direction: row;
            padding: 0;
        }
    `}
`;

export const LiStyled = styled.li`
    ${({ theme: { colors } }) => css`
        &:hover,
        &.active {
            ${LinkStyled} {
                background: ${colors.primary};
                color: inherit;
            }
        }
    `}
`;

export const LinkStyled = styled.a`
    ${({ theme: { breakpoints } }) => css`
        color: inherit;
        display: block;
        text-transform: uppercase;
        font-weight: 600;
        padding: 10px 20px;
        transition: 0.3s;
        font-size: 14px;
        ${breakpoints.lg} {
            width: max-content;
        }
    `}
`;
