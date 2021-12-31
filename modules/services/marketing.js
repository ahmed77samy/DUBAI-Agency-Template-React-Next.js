import SecHeader from "components/layouts/sec-header";
import Section from "components/layouts/section";
import { Col, Container, Row } from "react-bootstrap";
import { marketing_items } from "./items";
import MarketingItem from "./marketing-item";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function Marketing(props) {
    // loop for marketing_items to create MarketingItem
    const marketingItems = marketing_items.map((item, index) => {
        return (
            <Col xs={12} lg={4} key={index}>
                <MarketingItem item={item} index={index} />
            </Col>
        );
    });

    return (
        <Section {...props} padding>
            <Container>
                {/* header */}
                <SecHeader
                    header="Digital Marketing"
                    message="Our Marketing"
                />
                {/* header */}
                {/* content */}
                <Row className="layout-space align-items-center" noGutters>{marketingItems}</Row>
                {/* content */}
            </Container>
        </Section>
    );
}

export default Marketing;
