import DefaultButton from "components/elements/buttons/default-button";
import SecHeader from "components/elements/layouts/sec-header";
import Section from "components/elements/layouts/section";
import BlogItem from "components/modules/blog/blog-item";
import { latest_blog_items } from "components/modules/blog/items";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function Blog(props) {
    // loop for latest_blog_items to create BlogItem
    const blogItems = latest_blog_items.map((item, index) => {
        return (
            <Col
                xs={12}
                md={index + 1 === latest_blog_items.length ? 12 : 6}
                lg={4}
                key={index}>
                <BlogItem item={item} index={index} />
            </Col>
        );
    });

    return (
        <Section {...props} padding={true}>
            <Container>
                {/* header */}
                <SecHeader
                    header="recently blogs"
                    message="What's going on around us"
                    layer="blog"
                />
                {/* header */}
                {/* content */}
                <Row className="layout-space">
                    {blogItems}
                    <Col xs={12}>
                        <Link href="/blog/blog-grid" passHref>
                            <DefaultButton
                                border
                                className="a-reset d-flex w-fit-content mx-auto"
                                as="a">
                                show more
                            </DefaultButton>
                        </Link>
                    </Col>
                </Row>
                {/* content */}
            </Container>
        </Section>
    );
}

export default Blog;
