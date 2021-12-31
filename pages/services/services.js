import Layout from "components/layouts/layout-demo";
import Head from "next/head";
import SliderInnerPage from "components/slider-inner-page";
import Ads from "components/ads";
import Strategy from "modules/services/strategy";
import Digital from "modules/services/digital";
import Marketing from "modules/services/marketing";
import Development from "modules/services/development";
import BannerVideo from "modules/demo/banner-video-two";

/**
 * {@inheritdoc}
 * @returns {React.Component}
 */
function Services() {
    return (
        <div id="services_page">
            <Head>
                <title>Dubai Creative Agency React Next js</title>
            </Head>
            <Layout>
                <SliderInnerPage
                    title="our Services"
                    description="Creativity involves breaking out of expected & repeatable
                    patterns in order to look at things in different way than
                    ever before."
                />
                <Strategy />
                <Marketing />
                <Ads />
                <BannerVideo />
                <Ads />
                <Digital />
                <Development />
            </Layout>
        </div>
    );
}

export default Services;
