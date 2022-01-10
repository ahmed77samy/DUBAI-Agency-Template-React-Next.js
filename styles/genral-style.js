import { createGlobalStyle, css } from "styled-components";
import "normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

export default createGlobalStyle`
${({ theme: { colors, variables } }) => css`
    ${"" /* general styles */}
    * {
        box-sizing: border-box;
    }
    :root {
        scroll-behavior: smooth;
    }
    body {
        --foreground: ${colors.main};
        --background: ${colors.tertiary};
        --border: ${colors.neutral}20;
        --maincolor: ${colors.white};
        font-size: 16px;
        background: var(--foreground);
        color: var(--maincolor);
        font-family: "Poppins", sans-serif;
    }
    button.active.focus,
    button.active:focus,
    button.focus,
    button:active.focus,
    button:active:focus,
    button:focus {
        outline: none;
        outline-offset: 0;
    }
    button:active {
        -webkit-box-shadow: inherit;
        box-shadow: inherit;
    }
    .disabled {
        pointer-events: none;
        filter: brightness(0.5);
    }
    a.a-reset:focus,
    a.a-reset:hover {
        text-decoration: none;
        outline: none;
    }
    iframe {
        border: 0;
    }
    .layout-space {
        row-gap: ${variables.secondaryPadding};
    }
    figure {
        margin: 0;
    }
    .icon {
        font-size: 20px;
    }
    .scrollable {
        &::-webkit-scrollbar {
            width: 10px;
        }
        &::-webkit-scrollbar-track {
            background: ${colors.tertiary};
        }

        &::-webkit-scrollbar-thumb {
            background: ${colors.primary};
        }

        &::-webkit-scrollbar-thumb:hover {
            background: ${colors.primary_2};
        }
    }
    ${"" /* general styles */}

    ${"" /* Loader styles */}
    .page-transition-enter {
        opacity: 0;
        transform: translate3d(0, 20px, 0);
    }
    .page-transition-enter-active {
        opacity: 1;
        transform: translate3d(0, 0, 0);
        transition: opacity 400ms, transform 400ms;
    }
    .page-transition-exit {
        opacity: 1;
    }
    .page-transition-exit-active {
        opacity: 0;
        transition: opacity 400ms;
    }
    .loading-indicator-appear,
    .loading-indicator-enter {
        opacity: 0;
    }
    .loading-indicator-appear-active,
    .loading-indicator-enter-active {
        opacity: 1;
        transition: opacity 400ms;
    }
    ${"" /* Loader styles */}

    ${"" /* typography */}
    p , span {
        color: ${colors.text};
    }
    .w-min-content {
        width: min-content;
    }
    .w-max-content {
        width: max-content;
    }
    .w-fit-content {
        width: fit-content;
    }
    .light-mode {
        color: ${colors.black};
        p,
        span {
            color: ${colors.neutral};
        }
    }
    .opacity-0 {
        opacity: 0;
    }
    .text-body {
        color: ${colors.text} !important;
    }
    .text-main {
        color: ${colors.main} !important;
    }
    .text-tertiary {
        color: ${colors.tertiary} !important;
    }
    .text-primary {
        color: ${colors.primary} !important;
    }
    .text-black {
        color: ${colors.black} !important;
    }
    .text-white {
        color: ${colors.white} !important;
    }
    .text-neutral {
        color: ${colors.neutral} !important;
    }
    .bg-main {
        background-color: ${colors.main} !important;
    }
    .bg-tertiary {
        background-color: ${colors.tertiary} !important;
    }
    .bg-primary {
        background-color: ${colors.primary} !important;
    }
    .bg-primary_2 {
        background-color: ${colors.primary_2} !important;
    }
    .bg-black {
        background-color: ${colors.black} !important;
    }
    .bg-white {
        background-color: ${colors.white} !important;
    }
    .bg-neutral {
        background-color: ${colors.neutral} !important;
    }
    .font-100 {
        font-weight: 100;
    }
    .font-200 {
        font-weight: 200;
    }
    .font-300 {
        font-weight: 300;
    }
    .font-400 {
        font-weight: 400;
    }
    .font-500 {
        font-weight: 500;
    }
    .font-600 {
        font-weight: 600;
    }
    .font-700 {
        font-weight: 700;
    }
    .font-800 {
        font-weight: 800;
    }
    .font-900 {
        font-weight: 900;
    }
    .font-italic {
        font-style: italic;
    }
    .font-medium {
        font-size: 15px;
    }
    .font-small {
        font-size: 13px;
    }
    ${"" /* typography */}
`}
`;
