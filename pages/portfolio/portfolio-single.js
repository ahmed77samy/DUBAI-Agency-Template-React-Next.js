import Ads from "components/elements/layouts/ads";
import Layout from "components/elements/layouts/layout-demo";
import SliderInnerPage from "components/elements/layouts/slider-inner-page";
import Social from "components/elements/layouts/social";
import PortfolioSingleWrapper from "components/modules/portfolio/portfolio-single-wrapper";
import Head from "next/head";

/**
 * {@inheritdoc}
 * @returns {React.Component}
 */
function Portfolio() {
    return (
        <div id="portfolio_single_page">
            <Head>
                <title>Dubai Creative Agency React Next js</title>
            </Head>
            <Layout>
                <SliderInnerPage
                    title="project title"
                    description="Creativity involves breaking out of expected & repeatable
                    patterns in order to look at things in different way than
                    ever before."
                    bg="/img/portfolio/10.jpg">
                    <Social className="mx-auto mt-4" url="/portfolio/portfolio-single" />
                </SliderInnerPage>
                <Ads />
                <PortfolioSingleWrapper />
            </Layout>
        </div>
    );
}

export default Portfolio;
