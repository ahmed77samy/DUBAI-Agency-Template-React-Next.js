import DefaultButton from "components/default-button";
import { blog_items } from "./items";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import BlogItem from "./blog-item";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function BlogAsideWrapper() {
    const count = 6;
    const [limit, setLimit] = useState(count);

    // loop for blog_items to create BlogItem
    const blogItems = blog_items.map((item, index) => {
        return (
            index < limit && (
                <Col xs={12} md={6} key={index}>
                    <BlogItem item={item} />
                </Col>
            )
        );
    });

    // increase the limit if less than blog_items's length
    const handleClick = () => {
        if (limit + count >= blog_items.length) setLimit(blog_items.length);
        else setLimit(limit + count);
    };

    return (
        <Row className="layout-space">
            {blogItems}
            <Col xs={12}>
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
    );
}

export default BlogAsideWrapper;
