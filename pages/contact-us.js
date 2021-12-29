import Ads from "components/elements/layouts/ads";
import Layout from "components/elements/layouts/layout-demo";
import SliderInnerPage from "core/slider-inner-page";
import Contact from "components/modules/demo/contact/contact";
import Map from "components/modules/demo/contact/map";
import Head from "next/head";

/**
 * {@inheritdoc}
 * @returns {React.Component}
 */
function ContactUs() {
    return (
        <div id="contact_us_page">
            <Head>
                <title>Dubai Creative Agency React Next js</title>
            </Head>
            <Layout>
                <SliderInnerPage
                    title="contact us"
                    description="Creativity involves breaking out of expected & repeatable
                    patterns in order to look at things in different way than
                    ever before."
                />
                <Map />
                <Ads />
                <Contact />
            </Layout>
        </div>
    );
}

export default ContactUs;
