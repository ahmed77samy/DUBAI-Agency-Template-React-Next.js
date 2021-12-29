import styled, { css } from "styled-components";

export const DefaultButtonStyled = styled.button`
    ${({ theme, size, variant, border, borderRadius, square }) => css`
        position: relative;
        background: var(--forground);
        color: var(--color);
        border: 2px solid transparent;
        width: max-content;
        text-transform: uppercase;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 500;
        transition: background 0.3s , color 0.3s , border 0.3s;
        ${
            borderRadius === true ? 
            css`
                border-radius: 50px;
            `
            : 
            square === true ? 
            css`
                border-radius: 0;
            `
            :
            css`
                border-radius: 2px;
            `
        }
        &:hover,
        &.active {
            background: transparent;
            color: var(--forground);
            border-color: var(--hover);
        }
        &:active {
            border-color: var(--forground);
        }
        ${variant === "primary" ? css`
            --forground: ${theme.colors.primary};
            --hover: ${theme.colors.primary_2};
            --color: ${theme.colors.white};
        `
        : variant === "dark" ? css`
            --forground: ${theme.colors.black};
            --hover: ${theme.colors.neutral_200};
            --color: ${theme.colors.white};
        `
        : variant === "neutral" ? css`
            --forground: ${theme.colors.neutral_50}70;
            --hover: ${theme.colors.neutral_400};
            --color: ${theme.colors.white};
        `
        : variant === "light" && css`
            --forground: ${theme.colors.white};
            --hover: ${theme.colors.neutral_400};
            --color: ${theme.colors.black};
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
            color: var(--forground);
            background: transparent;
            border: 2px solid var(--hover);
            &:hover,
            &.active,
            &:active {
                color: var(--color);
                border-color: transparent;
            }
            &:hover,
            &.active {
                background: var(--forground);
            }
            &:active {
                background: var(--hover);
            }
        `}
    `}
`;
