import Layout from "components/elements/layouts/layout-demo";
import DigitalExperience from "components/modules/demo/about/digital-experience";
import Counter from "components/modules/demo/about/counter";
import Head from "next/head";
import Testimonials from "components/modules/demo/testimonials/testimonials";
import Service from "components/modules/demo/service/service-two";
import BannerVideo from "components/modules/demo/banner/banner-video-two";
import Awards from "components/modules/demo/about/awards";
import SliderInnerPage from "components/elements/layouts/slider-inner-page";
import Ads from "components/elements/layouts/ads";

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
