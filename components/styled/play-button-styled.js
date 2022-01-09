import styled from "styled-components";

export const PlayButtonStyled = styled.button`
    position: relative;
    &:after {
        content: "";
        position: absolute;
        left: -13px;
        width: calc(100% + 26px);
        height: calc(100% + 26px);
        background-color: var(--border);
        border-radius: 50%;
        z-index: -1;
    }
`;
