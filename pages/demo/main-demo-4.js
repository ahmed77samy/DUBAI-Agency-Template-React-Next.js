import Layout from "components/layouts/layout-demo";
import DigitalExperience from "modules/about/digital-experience";
import Awards from "modules/about/awards";
import Testimonials from "modules/about/testimonials";
import Counter from "modules/about/counter";
import BannerVideo from "modules/demo/banner-video";
import Blog from "modules/demo/blog";
import Contact from "modules/contact-us/contact";
import Portfolio from "modules/demo/portfolio-two";
import DigitalAgency from "modules/services/digital";
import Slider from "modules/demo/slider-viemo";
import Head from "next/head";
import Ads from "components/ads";

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
                <DigitalAgency />
                <DigitalExperience />
                <Counter />
                <Ads />
                <Portfolio reverseColor />
                <BannerVideo />
                <Testimonials reverseColor />
                <Awards reverseColor />
                <Ads />
                <Blog />
                <Contact reverseColor />
            </Layout>
        </div>
    );
}

export default MainDemo4;
