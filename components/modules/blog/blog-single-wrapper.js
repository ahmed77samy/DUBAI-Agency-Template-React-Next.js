import Section from "components/elements/layouts/section";
import { Col, Container, Row } from "react-bootstrap";
import BlogAside from "./blog-aside";
import SingleCommentForm from "./single-comment-form";
import SingleComments from "./single-comments";
import SingleDetails from "./single-details";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function BlogSingleWrapper(props) {
    return (
        <Section {...props} padding>
            <Container>
                <Row className="layout-space">
                    {/* content */}
                    <Col xs={12} lg={8}>
                        <Row noGutters className="layout-space">
                            <Col xs={12}>
                                <SingleDetails />
                            </Col>
                            <Col xs={12}>
                                <SingleComments />
                            </Col>
                            <Col xs={12}>
                                <SingleCommentForm />
                            </Col>
                        </Row>
                    </Col>
                    {/* content */}
                    {/* aside */}
                    <Col xs={12} lg={4}>
                        <BlogAside />
                    </Col>
                    {/* aside */}
                </Row>
            </Container>
        </Section>
    );
}

export default BlogSingleWrapper;
