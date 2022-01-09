import Layout from "components/layouts/layout-demo";
import Head from "next/head";
import SliderInnerPage from "components/slider-inner-page";
import Ads from "components/ads";
import Social from "components/social";
import ServiceDetailsWrapper from "modules/services/service-details-wrapper";

/**
 * {@inheritdoc}
 * @returns {React.Component}
 */
function ServiceDetails() {
    return (
        <div id="service_details_page">
            <Head>
                <title>Dubai Creative Agency React Next js</title>
            </Head>
            <Layout>
                <SliderInnerPage
                    title="digital Marketing"
                    description="Creativity involves breaking out of expected & repeatable
                    patterns in order to look at things in different way than
                    ever before."
                    bg="/img/bg/11.png">
                    <Social
                        className="mx-auto mt-4"
                        url="/services/service-details"
                    />
                </SliderInnerPage>
                <Ads />
                <ServiceDetailsWrapper />
            </Layout>
        </div>
    );
}

export default ServiceDetails;
