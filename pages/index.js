import Layout from "components/elements/layouts/layout-preview";
import Demos from "components/modules/preview/demos";
import Faq from "components/modules/preview/faq";
import Features from "components/modules/preview/features";
import Purchase from "components/modules/preview/purchase";
import Slider from "components/modules/preview/slider";
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
