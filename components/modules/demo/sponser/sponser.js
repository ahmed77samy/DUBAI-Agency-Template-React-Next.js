import SecHeader from "components/elements/layouts/sec-header";
import Section from "components/elements/layouts/section";
import { Col, Container, Row } from "react-bootstrap";
import SponserItem from "./sponser-item";
import { sponser_item } from "./items";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function Sponser(props) {
    // loop for sponser_item to create SponserItem
    const sponserItems = sponser_item.map((item, index) => {
        return (
            <Col xs={12} sm={6} md={4} key={index}>
                <SponserItem item={item} />
            </Col>
        )
    });

    return (
        <Section {...props} padding={true}>
            <Container>
                <Row className="layout-space align-items-center">
                    <Col xs={{span: 12, order: 2}} lg={{span: 6, order: 1}}>
                        <Row className="layout-space">{sponserItems}</Row>
                    </Col>
                    <Col xs={{span: 12, order: 1}} lg={{span: 6, order: 2}}>
                        <SecHeader
                            header="our sponsers."
                            message="Clients See"
                            className="m-0"
                            align="center"
                        />
                    </Col>
                </Row>
            </Container>
        </Section>
    );
}

export default Sponser;
