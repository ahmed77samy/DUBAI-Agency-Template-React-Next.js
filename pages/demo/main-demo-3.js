import Layout from "components/layouts/layout-demo";
import DigitalExperience from "modules/about/digital-experience";
import Awards from "modules/about/awards";
import Counter from "modules/about/counter";
import BannerVideo from "modules/demo/banner-video";
import Blog from "modules/demo/blog";
import Contact from "modules/contact-us/contact";
import Portfolio from "modules/demo/portfolio-two";
import Slider from "modules/demo/slider-youtube";
import Head from "next/head";
import Ads from "components/ads";
import Development from "modules/services/development";

/**
 * {@inheritdoc}
 * @returns {React.Component}
 */
function MainDemo3() {
    return (
        <div id="main_demo_3_page">
            <Head>
                <title>Dubai Creative Agency React Next js</title>
            </Head>
            <Layout>
                <Slider />
                <Development />
                <DigitalExperience />
                <Counter />
                <Ads />
                <Portfolio reverseColor />
                <BannerVideo />
                <Awards reverseColor />
                <Ads />
                <Blog />
                <Contact reverseColor />
            </Layout>
        </div>
    );
}

export default MainDemo3;
