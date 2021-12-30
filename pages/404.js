import Layout from "components/layouts/layout-demo";
import NotFound from "modules/404/not-found";
import Head from "next/head";

/**
 * {@inheritdoc}
 * @returns {React.Component}
 */
function NotFound404() {
    return (
        <div id="not_found_page">
            <Head>
                <title>Dubai - Not-Found</title>
            </Head>
            <Layout>
                <NotFound />
            </Layout>
        </div>
    );
}

export default NotFound404;
