import Section from "components/layouts/section";
import { Col, Container, Row } from "react-bootstrap";
import ConuterItem from "./conuter-item";
import { counter_item } from "./items";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function Counter(props) {
    // loop for counter_item to create ConuterItem
    const counterItems = counter_item.map((item, index) => {
        return (
            <Col xs={12} lg={4} key={index}>
                <ConuterItem item={item} />
            </Col>
        )
    });

    return (
        <Section {...props} padding={true}>
            <Container>
                <Row className="layout-space">
                    {counterItems}
                </Row>
            </Container>
        </Section>
    );
}

export default Counter;
