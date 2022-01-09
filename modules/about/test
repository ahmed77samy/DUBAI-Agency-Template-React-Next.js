import SecHeader from "components/layouts/sec-header";
import Section from "components/layouts/section";
import { Col, Container, Row } from "react-bootstrap";
import { pricing_item } from "./items";
import PricingItem from "./pricing-item.js";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function Pricing(props) {
    // loop for pricing_item to create PricingItem
    const pricingList = pricing_item.map((item, index) => {
        return (
            <Col xs={12} md={6} lg={4} key={index}>
                <PricingItem item={item} />
            </Col>
        );
    });

    return (
        <Section {...props} padding>
            <Container>
                {/* header */}
                <SecHeader
                    header="pricing plans"
                    message="plans"
                    layer="pricing"
                />
                {/* header */}
                <Row className="layout-space align-items-center justify-content-center">
                    {pricingList}
                </Row>
            </Container>
        </Section>
    );
}

export default Pricing;
