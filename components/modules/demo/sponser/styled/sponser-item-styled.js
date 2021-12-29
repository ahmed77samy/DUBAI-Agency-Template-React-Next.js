import styled, { css } from "styled-components";

export const SponserItemStyled = styled.div`
    ${({ theme: { colors } }) => css`
        border: 1px solid ${colors.neutral_700}70;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 30px 0;
        transition: .3s;
        &:hover {
            border-color: ${colors.neutral_600};
        }
    `}
`;
