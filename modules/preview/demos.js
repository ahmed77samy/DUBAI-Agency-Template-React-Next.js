import SecHeader from "components/layouts/sec-header";
import Section from "components/layouts/section";
import { Col, Container, Row } from "react-bootstrap";
import DemoItem from "./demo-item";
import { demos_items } from "./items";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function Demos(props) {
    // loop for demos_items to create DemoItem
    const DemoList = demos_items.map((item, index) => {
        return (
            <Col xs={12} md={6} lg={4} key={index}>
                <DemoItem item={item} />
            </Col>
        );
    });

    /**
     * {@inheritdoc}
     */
    return (
        <Section {...props} padding={true}>
            <Container>
                {/* header */}
                <SecHeader
                    header="demo pages ."
                    message="17+ demo"
                    layer="demos"
                    align="center"
                />
                {/* header */}
                {/* content */}
                <Row className="layout-space">{DemoList}</Row>
                {/* content */}
            </Container>
        </Section>
    );
}

export default Demos;
