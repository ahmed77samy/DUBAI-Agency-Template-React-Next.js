import Layout from "components/layouts/layout-demo";
import Service from "modules/demo/service";
import DigitalExperience from "modules/about/digital-experience";
import Counter from "modules/about/counter";
import Slider from "modules/demo/slider";
import Head from "next/head";
import Portfolio from "modules/demo/portfolio";
import BannerVideo from "modules/demo/banner-video";
import Testimonials from "modules/about/testimonials";
import Blog from "modules/demo/blog";
import Sponser from "modules/about/sponser";
import Contact from "modules/contact-us/contact";
import Ads from "components/ads";

/**
 * {@inheritdoc}
 * @returns {React.Component}
 */
function MainDemo() {
    return (
        <div id="main_demo_page">
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
                <Sponser reverseColor />
                <Ads />
                <Blog />
                <Contact reverseColor />
            </Layout>
        </div>
    );
}

export default MainDemo;
