import styled, { css } from "styled-components";

export const AdsStyled = styled.div`
    ${({ theme: { colors } }) => css`
        background: repeating-linear-gradient(-45deg, ${colors.tertiary} 0, ${colors.tertiary} 2px, transparent 0, transparent 8px) ${colors.main};
    `}
`;