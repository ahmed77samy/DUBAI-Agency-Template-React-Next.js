import Layout from "components/layouts/layout-demo";
import Head from "next/head";
import WhatAbout from "modules/about/what-about";
import Subscrib from "modules/about/subscrib";
import OurTeam from "modules/about/our-team";
import Sponser from "modules/about/sponser";
import SliderInnerPage from "components/slider-inner-page";
import Ads from "components/ads";
import Awards from "modules/about/awards";
import Pricing from "modules/about/pricing";
import Development from "modules/services/development";

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
                <Development />
                <WhatAbout />
                <Subscrib />
                <Pricing reverseColor />
                <Ads />
                <OurTeam reverseColor />
                <Sponser />
                <Awards />
            </Layout>
        </div>
    );
}

export default AboutUs;
