import { SpanStyled as THSpanStyled } from "components/styled/three-lines-styled";
import styled, { css } from "styled-components";

export const AwardItemStyled = styled.div`
    ${({ theme: { colors } }) => css`
        background: var(--background);
        padding: 40px 20px;
        &:hover {
            ${THSpanStyled} {
                background: ${colors.primary};
            }
            ${H5styled} {
                color: ${colors.primary};
            }
        }
    `}
`;

export const HeaderStyled = styled.div`
    ${({ theme: { colors } }) => css`
        position: relative;
        padding-left: 85px;
        ${THSpanStyled} {
            transition: 0.3s;
        }
        &:before {
            content: attr(data-title);
            font-weight: 600;
            text-transform: uppercase;
            transition: 0.3s;
            color: ${colors.text};
        }
    `}
`;

export const H5styled = styled.h5`
    transition: 0.3s;
`;

export const SpanStyled = styled.span`
    ${({ theme: { colors } }) => css`
        display: block;
        background: var(--foreground);
        width: fit-content;
        padding: 0 10px;
        margin-bottom: 10px;
    `}
`;
