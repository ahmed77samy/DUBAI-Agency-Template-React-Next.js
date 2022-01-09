import styled, { css } from "styled-components";

export const StrategyItemStyled = styled.div`
    ${({ theme: { colors } }) => css`
        border: 1px solid var(--border);
        padding: 20px;
        height: 100%;
        &:hover {
            ${H5Styled} {
                color: ${colors.primary};
            }
        }
    `}
`;

export const HeaderStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    row-gap: 10px;
`;

export const HrStyled = styled.hr`
    border-color: var(--border);
`;

export const H5Styled = styled.h5`
    margin: 0;
    transition: color 0.3s;
`;
