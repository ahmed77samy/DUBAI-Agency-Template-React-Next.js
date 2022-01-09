import { Modal } from "react-bootstrap";
import styled, { css } from "styled-components";
import { SpanStyled } from "./three-lines-styled";

export const ModalStyled = styled(Modal)`
    ${({ theme: { colors, breakpoints } }) => css`
        --foreground: ${colors.main};
        --background: ${colors.tertiary};
        --border: ${colors.neutral}20;
        --maincolor: ${colors.white};
        background: ${colors.neutral}50;
        .modal-content {
            background: ${colors.main};
            border-radius: 3px;
            border: none;
            max-height: calc(100vh - 3.5rem);
            overflow: auto;
        }
        .w-90 {
            max-width: auto;
            ${breakpoints.sm} {
                max-width: 90%;
            }
        }
    `}
`;

export const ModalHeaderStyled = styled(Modal.Header)`
    ${({ theme: { colors, breakpoints } }) => css`
        position: relative;
        padding: 25px 0;
        margin: 0 15px;
        border-color: var(--border);
        &:before {
            content: attr(data-title);
            transform: translateX(50px);
            text-transform: uppercase;
            font-weight: 600;
            color: ${colors.text};
        }
        ${SpanStyled} {
            background: ${colors.primary};
        }
        ${breakpoints.lg} {
            margin: 0 25px;
        }
    `}
`;

export const ModalBodyStyled = styled(Modal.Body)`
    ${({ theme: { breakpoints } }) => css`
        padding: 20px 0;
        margin: 0 15px;
        ${breakpoints.lg} {
            margin: 0 25px;
        }
    `}
`;

export const ModalFooterStyled = styled(Modal.Footer)`
    ${({ theme: { breakpoints } }) => css`
        padding: 20px 0;
        margin: 0 15px;
        ${breakpoints.lg} {
            margin: 0 25px;
        }
    `}
`;
