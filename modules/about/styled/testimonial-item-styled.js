import styled, { css } from "styled-components";

export const TestimonialItemStyled = styled.div`
    position: relative;
    background: var(--background);
    padding: 25px;
`;

export const IconStyled = styled.i`
    position: absolute;
    top: 25px;
    right: 25px;
    font-size: 2rem;
    color: var(--maincolor);
`;

export const HeaderStyled = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 5px;
`;

export const ImageStyled = styled.div`
    flex-shrink: 0;
    img {
        border-radius: 50%;
        margin: 4px;
    }
`;
