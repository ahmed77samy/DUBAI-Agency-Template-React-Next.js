import Layout from "components/elements/layouts/layout-demo";
import DigitalExperience from "components/modules/demo/about/digital-experience";
import Awards from "components/modules/demo/about/awards";
import Testimonials from "components/modules/demo/testimonials/testimonials";
import Counter from "components/modules/demo/about/counter";
import BannerVideo from "components/modules/demo/banner/banner-video";
import Blog from "components/modules/demo/blog/blog";
import Contact from "components/modules/demo/contact/contact";
import Portfolio from "components/modules/demo/portfolio/portfolio-two";
import Service from "components/modules/demo/service/service-two";
import Slider from "components/modules/demo/slider/slider-youtube";
import Head from "next/head";
import Ads from "components/elements/layouts/ads";

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
                <Service />
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

export default MainDemo3;
