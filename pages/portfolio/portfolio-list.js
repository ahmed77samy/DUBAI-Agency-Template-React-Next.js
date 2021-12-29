import Layout from "components/elements/layouts/layout-demo";
import Head from "next/head";
import PortfolioListWrapper from "components/modules/portfolio/portfolio-list-wrapper";
import SliderInnerPage from "components/elements/layouts/slider-inner-page";
import Ads from "components/elements/layouts/ads";

/**
 * {@inheritdoc}
 * @returns {React.Component}
 */
function Portfolio() {
    return (
        <div id="portfolio_list_page">
            <Head>
                <title>Dubai Creative Agency React Next js</title>
            </Head>
            <Layout>
                <SliderInnerPage
                    title="amazing portfolio"
                    description="Creativity involves breaking out of expected & repeatable
                    patterns in order to look at things in different way than
                    ever before."
                />
                <Ads />
                <PortfolioListWrapper />
            </Layout>
        </div>
    );
}

export default Portfolio;
