import styled from "styled-components";

export const FooterStyled = styled.footer`
    background: var(--foreground);
    padding: 40px 0;
    hr {
        border-color: var(--border);
    }
`;

export const WrapperStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: space-between;
    align-items: center;
`;
