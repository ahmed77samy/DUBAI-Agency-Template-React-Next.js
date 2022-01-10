import GenralStyled from "styles/genral-style";
import { ThemeProvider } from "styled-components";
import MainTheme from "styles/main-theme";
import { PageTransition } from "next-page-transitions";
import DubaiLoadear from "components/dubai-loader";
import DubaiComponent from "components/core/dubai-component";
import Head from "next/head";

const TIMEOUT = 100;

function Dubai({ Component, pageProps, router }) {
    return (
        <>
            <Head>
                <title>Dubai Creative Agency React Next js</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <ThemeProvider theme={MainTheme}>
                <GenralStyled />
                <PageTransition
                    timeout={TIMEOUT}
                    classNames="page-transition"
                    loadingComponent={<DubaiLoadear />}
                    loadingDelay={100}
                    loadingTimeout={{
                        enter: TIMEOUT,
                        exit: 0
                    }}
                    loadingClassNames="loading-indicator"
                >
                    <DubaiComponent Component={Component} pageProps={pageProps} key={router.route} />
                </PageTransition>
            </ThemeProvider>
        </>
    );
}

export default Dubai;
