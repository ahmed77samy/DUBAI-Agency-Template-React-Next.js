import Layout from "components/layouts/layout-demo";
import Head from "next/head";
import BlogAsideLayout from "modules/blog/blog-aside-layout";
import SliderInnerPage from "components/slider-inner-page";
import Ads from "components/ads";

/**
 * {@inheritdoc}
 * @returns {React.Component}
 */
function Blog() {
    return (
        <div id="blog_aside_page">
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
                <Ads reverseColor />
                <BlogAsideLayout reverseColor />
            </Layout>
        </div>
    );
}

export default Blog;
