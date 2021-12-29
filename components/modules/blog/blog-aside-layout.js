import Section from "components/elements/layouts/section";
import { Col, Container, Row } from "react-bootstrap";
import BlogAsideWrapper from "./Blog-aside-wrapper.js";
import BlogAside from "./blog-aside.js";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function BlogAsideLayout(props) {
    return (
        <Section {...props} padding={true}>
            <Container>
                <Row className="layout-space">
                    <Col xs={12} lg={8}>
                        <BlogAsideWrapper />
                    </Col>
                    <Col xs={12} lg={4}>
                        <BlogAside />
                    </Col>
                </Row>
            </Container>
        </Section>
    );
}

export default BlogAsideLayout;
