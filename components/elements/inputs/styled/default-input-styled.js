import styled, { css } from "styled-components";

export const DefaultInputStyled = styled.input`
    ${({ theme: { colors, sizes }, size, border, as }) => css`
        border: ${border ? `1px solid ${colors.neutral_600}50` : "none"};
        outline: none;
        background: ${border ? "transparent" : `${colors.neutral_600}50`};
        color: ${colors.white};
        padding: 0 15px;
        transition: 0.3s;
        ${size === "sm"
            ? css`
                  height: ${sizes.height_sm};
                  font-size: 14px;
                  line-height: 14px;
              `
            : size === "md"
            ? css`
                  height: ${sizes.height_md};
                  font-size: 15px;
                  line-height: 15px;
                  padding: 0 20px;
              `
            : size === "lg" &&
              css`
                  height: ${sizes.height_lg};
                  font-size: 16px;
                  line-height: 16px;
                  padding: 0 25px;
              `}

        &::placeholder {
            color: ${colors.text};
        }
        ${as === "textarea" &&
        css`
            padding: 15px;
            min-height: 150px;
        `}
    `}
`;
