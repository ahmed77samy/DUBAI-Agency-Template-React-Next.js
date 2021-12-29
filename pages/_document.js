import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="icon" href="/favicon.ico" />
                    <meta
                        name="description"
                        content="Generated by create next app"
                    />
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
                    />
                    <link
                        rel="stylesheet"
                        href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
