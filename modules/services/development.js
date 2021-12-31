import SecHeader from "components/layouts/sec-header";
import Section from "components/layouts/section";
import { Col, Container, Row } from "react-bootstrap";
import { development_items } from "./items";
import DevelopmentItem from "./development-item";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function Development(props) {
    // loop for development_items to create DevelopmentItem
    const developmentItems = development_items.map((item, index) => {
        return (
            <Col xs={12} lg={4} key={index}>
                <DevelopmentItem item={item} index={index} />
            </Col>
        );
    });

    return (
        <Section {...props} padding>
            <Container>
                {/* header */}
                <SecHeader
                    header="Business development"
                    message="Our development"
                />
                {/* header */}
                {/* content */}
                <Row className="layout-space align-items-center">{developmentItems}</Row>
                {/* content */}
            </Container>
        </Section>
    );
}

export default Development;
