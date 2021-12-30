import styled, { css } from "styled-components";

export const NavbarStyled = styled.nav`
    ${({ theme: { colors, variables, breakpoints }, open }) => css`
        display: block;
        position: fixed;
        top: ${variables.headerHeight};
        right: auto;
        left: 100%;
        width: 100%;
        height: calc(100% - ${variables.headerHeight});
        background-color: ${colors.neutral_900};
        transition: transform 0.3s;
        padding-bottom: 15px;
        overflow: auto;
        z-index: 99;
        transform: ${open ? `translateX(-100%)` : `translateX(0)`};
        ${breakpoints.sm} {
            width: 280px;
        }
        ${breakpoints.lg} {
            position: static;
            width: 100%;
            height: 100%;
            right: 0;
            left: auto;
            background: none;
            padding-bottom: 0;
            overflow: visible;
            transform: none;
        }
    `}
`;

export const UlStyled = styled.ul`
    ${({ theme: { breakpoints } }) => css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        column-gap: 5px;
        row-gap: 5px;
        padding: 10px 10px;
        ${breakpoints.lg} {
            flex-direction: row;
            align-items: center;
            height: 100%;
            padding: 0;
        }
    `}
`;

export const LinkStyled = styled.a`
    ${({ theme: { colors, breakpoints } }) => css`
        width: 100%;
        color: inherit;
        text-transform: uppercase;
        font-weight: 600;
        font-size: 14px;
        padding: 10px 20px;
        transition: 0.3s;
        &:hover,
        &.active {
            color: inherit;
            background: ${colors.primary};
        }
        ${breakpoints.lg} {
            padding: 10px 10px;
            width: max-content;
            &:hover,
            &.active {
                color: ${colors.primary};
                background: none;
            }
        }
    `}
`;

export const LiDropStyled = styled.li`
    ${({ theme: { breakpoints, colors }, open }) => css`
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        cursor: pointer;
        ${open === true &&
        css`
            background: ${colors.primary};
            ${DropDownStyled} {
                display: flex;
            }
        `}
        ${breakpoints.lg} {
            flex-direction: row;
            background: inherit;
            &:hover {
                ${DropDownStyled} {
                    opacity: 1;
                    pointer-events: all;
                }
            }
        }
    `}
`;

export const DropDownStyled = styled.ul`
    ${({ theme: { colors, breakpoints } }) => css`
        display: none;
        flex-direction: column;
        row-gap: 5px;
        width: 100%;
        background: ${colors.neutral_900};
        padding: 10px 0;
        padding-left: 25px;
        ${breakpoints.lg} {
            display: flex !important;
            position: absolute;
            top: 100%;
            left: 50%;
            width: auto;
            transform: translateX(-50%);
            padding-left: 0;
            opacity: 0;
            pointer-events: none;
            &:after {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                height: 3px;
                width: 100%;
                pointer-events: none;
                background: ${colors.primary};
            }
        }
        ${LinkStyled} {
            flex-grow: 1;
            padding: 10px 20px;
            &:hover,
            &.active {
                color: inherit;
                background: ${colors.primary};
            }
        }
    `}
`;
