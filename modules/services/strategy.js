import SecHeader from "components/layouts/sec-header";
import Section from "components/layouts/section";
import { Col, Container, Row } from "react-bootstrap";
import StrategyItem from "./strategy-item";
import { strategy_items } from "./items";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function Strategy(props) {
    // loop for strategy_items to create StrategyItem
    const strategyItems = strategy_items.map((item, index) => {
        return (
            <Col xs={12} md={6} lg={4} key={index}>
                <StrategyItem item={item} />
            </Col>
        );
    });

    return (
        <Section {...props} padding={true}>
            <Container>
                <Row className="layout-space">
                    <Col xs={12} lg={8}>
                        <SecHeader
                            header="Business Strategy"
                            message="Our Strategy"
                            className="mb-3"
                        />
                        <p className="m-0">
                            Lorem ipsum dolor sit amet consectetur adipiscing
                            elit do eiusmod tempor incididunt ut labore et
                            dolore magna ut enim elit do eiusmod tempor
                            incididunt ut labore et dolore magna ut enim.
                        </p>
                    </Col>
                    {strategyItems}
                </Row>
            </Container>
        </Section>
    );
}

export default Strategy;
