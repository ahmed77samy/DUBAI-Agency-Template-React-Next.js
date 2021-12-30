import SecHeader from "components/layouts/sec-header";
import Section from "components/layouts/section";
import { useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import FeatureItem from "./feature-item";
import { features_items } from "./items";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function Features(props) {
    const featureRef = useRef(0);
    // loop for features_items to create FeatureItem
    const FeatList = features_items.map((item, index) => {
        return (
            <Col xs={12} md={6} lg={4} key={index}>
                <FeatureItem item={item} />
            </Col>
        );
    });

    return (
        <Section {...props} padding={true} ref={featureRef}>
            <Container>
                {/* header */}
                <SecHeader
                    header="why you should choose"
                    message="9 reasons"
                    layer="features"
                    align="left"
                />
                {/* header */}
                {/* content */}
                <Row className="layout-space">{FeatList}</Row>
                {/* content */}
            </Container>
        </Section>
    );
}

export default Features;
