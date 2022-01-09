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
        font-size: 16px;
        background: ${colors.main};
        color: ${colors.white};
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
    .text-secondary {
        color: ${colors.secondary} !important;
    }
    .text-black {
        color: ${colors.black} !important;
    }
    .text-white {
        color: ${colors.white} !important;
    }
    .text-neutral_50 {
        color: ${colors.neutral_50} !important;
    }
    .text-neutral_100 {
        color: ${colors.neutral_100} !important;
    }
    .text-neutral_200 {
        color: ${colors.neutral_200} !important;
    }
    .text-neutral_300 {
        color: ${colors.neutral_300} !important;
    }
    .text-neutral_400 {
        color: ${colors.neutral_400} !important;
    }
    .text-neutral_500 {
        color: ${colors.neutral_500} !important;
    }
    .text-neutral_600 {
        color: ${colors.neutral_600} !important;
    }
    .text-neutral_700 {
        color: ${colors.neutral_700} !important;
    }
    .text-neutral_800 {
        color: ${colors.neutral_800} !important;
    }
    .text-neutral_900 {
        color: ${colors.neutral_900} !important;
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
    .bg-secondary {
        background-color: ${colors.secondary} !important;
    }
    .bg-secondary_2 {
        background-color: ${colors.secondary_2} !important;
    }
    .bg-black {
        background-color: ${colors.black} !important;
    }
    .bg-white {
        background-color: ${colors.white} !important;
    }
    .bg-neutral_50 {
        background-color: ${colors.neutral_50} !important;
    }
    .bg-neutral_100 {
        background-color: ${colors.neutral_100} !important;
    }
    .bg-neutral_200 {
        background-color: ${colors.neutral_200} !important;
    }
    .bg-neutral_300 {
        background-color: ${colors.neutral_300} !important;
    }
    .bg-neutral_400 {
        background-color: ${colors.neutral_400} !important;
    }
    .bg-neutral_500 {
        background-color: ${colors.neutral_500} !important;
    }
    .bg-neutral_600 {
        background-color: ${colors.neutral_600} !important;
    }
    .bg-neutral_700 {
        background-color: ${colors.neutral_700} !important;
    }
    .bg-neutral_800 {
        background-color: ${colors.neutral_800} !important;
    }
    .bg-neutral_900 {
        background-color: ${colors.neutral_900} !important;
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
