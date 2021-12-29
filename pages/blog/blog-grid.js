import Layout from "components/elements/layouts/layout-demo";
import Head from "next/head";
import BlogGridWrapper from "components/modules/blog/blog-grid-wrapper";
import SliderInnerPage from "core/slider-inner-page";
import Ads from "components/elements/layouts/ads";

/**
 * {@inheritdoc}
 * @returns {React.Component}
 */
function Blog() {
    return (
        <div id="blog_grid_page">
            <Head>
                <title>Dubai Creative Agency React Next js</title>
            </Head>
            <Layout>
                <SliderInnerPage
                    title="our community"
                    description="Creativity involves breaking out of expected & repeatable
                    patterns in order to look at things in different way than
                    ever before."
                />
                <Ads />
                <BlogGridWrapper />
            </Layout>
        </div>
    );
}

export default Blog;
