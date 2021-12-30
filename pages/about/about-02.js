import Layout from "components/layouts/layout-demo";
import Head from "next/head";
import Service from "modules/demo/service";
import BannerVideo from "modules/demo/banner-video";
import WhatAbout from "modules/about/what-about";
import Subscrib from "modules/about/subscrib";
import OurTeam from "modules/about/our-team";
import Sponser from "modules/about/sponser";
import SliderInnerPage from "components/slider-inner-page";
import Ads from "components/ads";

/**
 * {@inheritdoc}
 * @returns {React.Component}
 */
function AboutUs() {
    return (
        <div id="about_02_page">
            <Head>
                <title>Dubai Creative Agency React Next js</title>
            </Head>
            <Layout>
                <SliderInnerPage
                    title="about us"
                    description="Creativity involves breaking out of expected & repeatable
                    patterns in order to look at things in different way than
                    ever before."
                />
                <Service />
                <WhatAbout />
                <Subscrib />
                <Ads />
                <BannerVideo />
                <Ads />
                <OurTeam />
                <Sponser />
            </Layout>
        </div>
    );
}

export default AboutUs;
