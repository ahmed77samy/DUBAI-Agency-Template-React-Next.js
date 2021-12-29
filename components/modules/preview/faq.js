import SecHeader from "components/elements/layouts/sec-header";
import Section from "components/elements/layouts/section";
import { Col, Container, Row } from "react-bootstrap";
import MethodItem from "./method-item";
import { method_items } from "./items";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function Faq(props) {
    // loop for method_items to create MethodItem
    const MethodItems = method_items.map((item, index) => {
        return (
            <Col
                key={index}
                xs={12}
                md={index === 2 ? 12 : index <= 2 && 6}
                lg={index <= 2 && 4}>
                <MethodItem item={item} data-num={`0${index + 1}`} />
            </Col>
        );
    });

    return (
        <Section {...props} padding={true}>
            <Container>
                {/* header */}
                <SecHeader
                    header="Frequently Asked Questions"
                    message="the main method"
                    layer="faq"
                    align="left"
                />
                {/* header */}
                {/* content */}
                <Row className="layout-space">{MethodItems}</Row>
                {/* content */}
            </Container>
        </Section>
    );
}

export default Faq;
