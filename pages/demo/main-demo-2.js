import Ads from "components/ads";
import Layout from "components/layouts/layout-demo";
import OurTeam from "modules/about/our-team";
import Subscrib from "modules/about/subscrib";
import WhatAbout from "modules/about/what-about";
import BannerVideo from "modules/demo/banner-video-two";
import Blog from "modules/demo/blog";
import Map from "modules/contact-us/map";
import Portfolio from "modules/demo/portfolio-two";
import DigitalAgency from "modules/services/digital";
import Slider from "modules/demo/slider";
import Head from "next/head";
import Development from "modules/services/development";

/**
 * {@inheritdoc}
 * @returns {React.Component}
 */
function MainDemo2() {
    return (
        <div id="main_demo_2_page">
            <Head>
                <title>Dubai Creative Agency React Next js</title>
            </Head>
            <Layout>
                <Slider />
                <DigitalAgency />
                <WhatAbout />
                <Subscrib />
                <Ads />
                <Portfolio reverseColor />
                <BannerVideo />
                <OurTeam reverseColor />
                <Development reverseColor />
                <Ads />
                <Blog />
                <Map reverseColor />
            </Layout>
        </div>
    );
}

export default MainDemo2;
