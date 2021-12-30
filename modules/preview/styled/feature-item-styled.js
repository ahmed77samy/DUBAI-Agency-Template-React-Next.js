import styled, { css } from "styled-components";

export const FeatureItemStyled = styled.div`
    ${({ theme: { colors } }) => css`
        border: 1px solid ${colors.neutral_800}70;
        padding: 20px 15px;
        border-radius: 4px;
        display: flex;
        height: 100%;
        transition: 0.3s;
        &:hover {
            background: var(--background);
            border-color: ${colors.neutral_800};
        }
    `}
`;

export const FigureStyled = styled.figure`
    margin-right: 15px;
    flex-shrink: 0;
`;
