import GenralStyled from "styles/genral-style";
import { ThemeProvider } from "styled-components";
import MainTheme from "styles/main-theme";
import { PageTransition } from "next-page-transitions";
import DubaiLoadear from "components/elements/layouts/dubai-loader";
import DubaiComponent from "core/dubai-component"

const TIMEOUT = 400;

function Dubai({ Component, pageProps, router }) {
    return (
        <ThemeProvider theme={MainTheme}>
            <GenralStyled />
            <PageTransition
                timeout={TIMEOUT}
                classNames="page-transition"
                loadingComponent={<DubaiLoadear />}
                loadingDelay={100}
                loadingTimeout={{
                    enter: TIMEOUT,
                    exit: 0,
                }}
                loadingClassNames="loading-indicator">
                <DubaiComponent
                    Component={Component}
                    pageProps={pageProps}
                    key={router.route}
                />
            </PageTransition>
        </ThemeProvider>
    );
}

export default Dubai;
