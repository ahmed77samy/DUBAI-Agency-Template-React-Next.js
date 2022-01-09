import styled, { css } from "styled-components";

export const FeatureItemStyled = styled.div`
    border: 1px solid var(--border);
    padding: 20px 15px;
    border-radius: 4px;
    display: flex;
    height: 100%;
    transition: 0.3s;
    &:hover {
        background: var(--background);
        border-color: transparent;
    }
`;

export const FigureStyled = styled.figure`
    margin-right: 15px;
    flex-shrink: 0;
`;
