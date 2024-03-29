import Ads from "components/ads";
import Layout from "components/layouts/layout-demo";
import SliderInnerPage from "components/slider-inner-page";
import Social from "components/social";
import BlogSingleWrapper from "modules/blog/blog-single-wrapper";
import Head from "next/head";

/**
 * {@inheritdoc}
 * @returns {React.Component}
 */
function Blog() {
    return (
        <div id="blog_single_page">
            <Head>
                <title>Dubai Creative Agency React Next js</title>
            </Head>
            <Layout>
                <SliderInnerPage
                    title="article title"
                    description="Creativity involves breaking out of expected & repeatable
                    patterns in order to look at things in different way than
                    ever before."
                    bg="/img/blog/4.jpg"
                >
                    <Social className="mx-auto mt-4" url="/blog/blog-single" />
                </SliderInnerPage>
                <Ads />
                <BlogSingleWrapper />
            </Layout>
        </div>
    );
}

export default Blog;
