import styled, { css } from "styled-components";

export const OverlayStyled = styled.div`
    ${({ bg }) => css`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: ${bg || '#00000099'};
    `}
`;
