import Layout from "components/layouts/layout-demo";
import Head from "next/head";
import PortfolioAsideLayout from "modules/portfolio/portfolio-aside-layout";
import SliderInnerPage from "components/slider-inner-page";
import Ads from "components/ads";

/**
 * {@inheritdoc}
 * @returns {React.Component}
 */
function Portfolio() {
    return (
        <div id="portfolio_aside_page">
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
                <Ads reverseColor />
                <PortfolioAsideLayout reverseColor />
            </Layout>
        </div>
    );
}

export default Portfolio;
