import Layout from "components/layouts/layout-demo";
import DigitalExperience from "modules/about/digital-experience";
import Counter from "modules/about/counter";
import Head from "next/head";
import Testimonials from "modules/about/testimonials";
import Service from "modules/demo/service-two";
import BannerVideo from "modules/demo/banner-video-two";
import Awards from "modules/about/awards";
import SliderInnerPage from "components/slider-inner-page";
import Ads from "components/ads";

/**
 * {@inheritdoc}
 * @returns {React.Component}
 */
function AboutUs() {
    return (
        <div id="about_01_page">
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
                <DigitalExperience />
                <Counter />
                <Ads />
                <BannerVideo />
                <Ads />
                <Testimonials />
                <Awards />
            </Layout>
        </div>
    );
}

export default AboutUs;
