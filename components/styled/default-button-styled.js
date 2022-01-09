import styled, { css } from "styled-components";

export const DefaultButtonStyled = styled.button`
    ${({ theme, size, variant, border, borderRadius, square }) => css`
        position: relative;
        background: var(--btnforground);
        color: var(--btncolor);
        border: 2px solid transparent;
        width: max-content;
        text-transform: uppercase;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 500;
        transition: background 0.3s , color 0.3s , border 0.3s;
        ${
            borderRadius === true ?  css`border-radius: 50px;` : square === true ? css`border-radius: 0;` : css`border-radius: 2px;`
        }
        &:hover,
        &.active {
            background: transparent;
            color: var(--btnforground);
            border-color: var(--btnhover);
        }
        &:active {
            border-color: var(--btnforground);
        }
        ${variant === "primary" ? css`
            --btnforground: ${theme.colors.primary};
            --btnhover: ${theme.colors.primary_2};
            --btncolor: ${theme.colors.white};
        `
        : variant === "neutral" ? css`
            --btnforground: var(--background);
            --btnhover: var(--border);
            --btncolor: var(--maincolor);
            color: var(--maincolor) !important;
        `
        : variant === "light" && css`
            --btnforground: ${theme.colors.white};
            --btnhover: ${theme.colors.neutral};
            --btncolor: ${theme.colors.black};
        `}
        ${size === "sm" ? css`
            padding: 0 ${theme.sizes.padding_sm};
            height: ${theme.sizes.height_sm};
            font-size: 13px;
            ${square === true && css`
                padding: 0;
                height: calc(${theme.sizes.padding_sm} * 2);
                width: calc(${theme.sizes.padding_sm} * 2);
            `}
        `
        : size === "lg" ? css`
            padding: 0 ${theme.sizes.padding_lg};
            height: ${theme.sizes.height_lg};
            ${square === true && css`
                padding: 0;
                height: calc(${theme.sizes.padding_lg} * 2);
                width: calc(${theme.sizes.padding_lg} * 2);
            `}
        `
        : size === "md" && css`
            padding: 0 ${theme.sizes.padding_md};
            height: ${theme.sizes.height_md};
            ${square === true && css`
                padding: 0;
                height: calc(${theme.sizes.padding_md} * 2);
                width: calc(${theme.sizes.padding_md} * 2);
            `}
        `}
    ${border &&
        css`
            color: var(--btnforground);
            background: transparent;
            border: 2px solid var(--btnhover);
            &:hover,
            &.active,
            &:active {
                color: var(--btncolor);
                border-color: transparent;
            }
            &:hover,
            &.active {
                background: var(--btnforground);
            }
            &:active {
                background: var(--btnhover);
            }
        `}
    `}
`;
