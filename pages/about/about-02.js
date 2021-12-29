import Layout from "components/elements/layouts/layout-demo";
import Head from "next/head";
import Service from "components/modules/demo/service/service";
import BannerVideo from "components/modules/demo/banner/banner-video";
import WhatAbout from "components/modules/demo/about/what-about";
import Subscrib from "components/modules/demo/about/subscrib";
import OurTeam from "components/modules/demo/about/our-team";
import Sponser from "components/modules/demo/sponser/sponser";
import SliderInnerPage from "core/slider-inner-page";
import Ads from "components/elements/layouts/ads";

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
