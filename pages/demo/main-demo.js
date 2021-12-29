import Layout from "components/elements/layouts/layout-demo";
import Service from "components/modules/demo/service/service";
import DigitalExperience from "components/modules/demo/about/digital-experience";
import Counter from "components/modules/demo/about/counter";
import Slider from "components/modules/demo/slider/slider";
import Head from "next/head";
import Portfolio from "components/modules/demo/portfolio/portfolio";
import BannerVideo from "components/modules/demo/banner/banner-video";
import Testimonials from "components/modules/demo/testimonials/testimonials";
import Blog from "components/modules/demo/blog/blog";
import Sponser from "components/modules/demo/sponser/sponser";
import Contact from "components/modules/demo/contact/contact";
import Ads from "components/elements/layouts/ads";

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
