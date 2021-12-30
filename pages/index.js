import Layout from "components/layouts/layout-preview";
import Demos from "modules/preview/demos";
import Faq from "modules/preview/faq";
import Features from "modules/preview/features";
import Purchase from "modules/preview/purchase";
import Slider from "modules/preview/slider";
import Head from "next/head";

/**
 * {@inheritdoc}
 * @returns {React.Component}
 */
function Preview() {
    return (
        <div id="preview_page">
            <Head>
                <title>Dubai - Creative Agency React Next js</title>
            </Head>
            <Layout>
                <Slider id="introduction" />
                <Features id="features" />
                <Demos id="demos" reverseColor />
                <Faq id="faq" />
                <Purchase id="purchase" />
            </Layout>
        </div>
    );
}

export default Preview;
