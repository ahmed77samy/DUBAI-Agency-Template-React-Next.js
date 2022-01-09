import Layout from "components/layouts/layout-demo";
import BannerVideo from "modules/demo/banner-video-two";
import Blog from "modules/demo/blog";
import Portfolio from "modules/demo/portfolio";
import Slider from "modules/demo/slider-viemo";
import Head from "next/head";
import Ads from "components/ads";
import Marketing from "modules/services/marketing";
import WhatAbout from "modules/about/what-about";
import Subscrib from "modules/about/subscrib";
import Sponser from "modules/about/sponser";
import Map from "modules/contact-us/map";

/**
 * {@inheritdoc}
 * @returns {React.Component}
 */
function MainDemo4() {
    return (
        <div id="main_demo_4_page">
            <Head>
                <title>Dubai Creative Agency React Next js</title>
            </Head>
            <Layout>
                <Slider />
                <Marketing />
                <WhatAbout />
                <Subscrib />
                <Ads />
                <Portfolio reverseColor />
                <BannerVideo reverseColor />
                <Sponser reverseColor />
                <Ads />
                <Blog />
                <Map reverseColor />
            </Layout>
        </div>
    );
}

export default MainDemo4;
