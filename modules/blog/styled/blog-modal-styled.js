import styled, { css } from "styled-components";

export const H5Styled = styled.h5`
    ${({ theme: { colors } }) => css`
        color: ${colors.white};
        transition: 0.3s;
        &:hover {
            color: ${colors.primary};
        }
    `}
`;

export const ContentStyled = styled.div`
    ${({ theme: { breakpoints } }) => css`
        ${breakpoints.lg} {
            position: absolute;
            right: 0;
            overflow-y: scroll;
            height: calc(100% - 40px);
        }
    `}
`;