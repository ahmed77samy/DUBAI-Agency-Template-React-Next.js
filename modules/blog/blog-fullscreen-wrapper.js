import DefaultButton from "components/default-button";
import Section from "components/layouts/section";
import { blog_items } from "./items";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import BlogItem from "./blog-item";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function BlogFullscreenWrapper(props) {
    const count = 10;
    const [limit, setLimit] = useState(count);

    // loop for blog_items to create BlogItem
    const blogItems = blog_items.map((item, index) => {
        return (
            index < limit && (
                <Col key={index}>
                    <BlogItem item={item} />
                </Col>
            )
        );
    });

    // increase the limit if less than blog_items's length
    const handleClick = () => {
        if (limit + count >= blog_items.length)
            setLimit(blog_items.length);
        else setLimit(limit + count);
    };

    return (
        <Section {...props} padding={true}>
            <Container fluid>
                {/* content */}
                <Row className="layout-space" xs={1} sm={2} md={3} xl={5}>
                    {blogItems}
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <DefaultButton
                            className={`a-reset d-flex w-fit-content mx-auto ${
                                limit >= blog_items.length && "disabled"
                            }`}
                            border
                            onClick={handleClick}>
                            show more
                        </DefaultButton>
                    </Col>
                </Row>
                {/* content */}
            </Container>
        </Section>
    );
}

export default BlogFullscreenWrapper;
