import styled from "styled-components";

export const ControlStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
`;

export const LinkStyled = styled.a`
    display: flex;
    align-items: center;
    gap: 20px;
    width: fit-content;
    padding: 20px;
    border: 1px solid var(--border);
    text-align: center;
    transition: 0.3s;
    &:hover {
        border-color: transparent;
        background: var(--background);
    }
`;
