import Ads from "components/elements/layouts/ads";
import Layout from "components/elements/layouts/layout-demo";
import Awards from "components/modules/demo/about/awards";
import OurTeam from "components/modules/demo/about/our-team";
import Subscrib from "components/modules/demo/about/subscrib";
import WhatAbout from "components/modules/demo/about/what-about";
import BannerVideo from "components/modules/demo/banner/banner-video-two";
import Blog from "components/modules/demo/blog/blog";
import Map from "components/modules/demo/contact/map";
import Portfolio from "components/modules/demo/portfolio/portfolio-two";
import Service from "components/modules/demo/service/service-two";
import Slider from "components/modules/demo/slider/slider";
import Head from "next/head";

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
                <Service />
                <WhatAbout />
                <Subscrib />
                <Ads />
                <Portfolio reverseColor />
                <BannerVideo />
                <OurTeam reverseColor />
                <Awards reverseColor />
                <Ads />
                <Blog />
                <Map reverseColor />
            </Layout>
        </div>
    );
}

export default MainDemo2;
