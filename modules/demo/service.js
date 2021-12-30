import SecHeader from "components/layouts/sec-header";
import Section from "components/layouts/section";
import { Col, Container, Row } from "react-bootstrap";
import ServiceItem from "./service-item";
import { service_items } from "./items";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function Service(props) {
    // loop for service_items to create ServiceItem
    const serviceItems = service_items.map((item, index) => {
        return (
            <Col xs={12} md={6} lg={4} key={index}>
                <ServiceItem item={item} />
            </Col>
        );
    });

    return (
        <Section {...props} padding={true}>
            <Container>
                <Row className="layout-space">
                    <Col xs={12} lg={8}>
                        <SecHeader
                            header="uniqe service"
                            message="What we can do for you"
                            className="mb-3"
                        />
                        <p className="m-0">
                            Lorem ipsum dolor sit amet consectetur adipiscing
                            elit do eiusmod tempor incididunt ut labore et
                            dolore magna ut enim elit do eiusmod tempor
                            incididunt ut labore et dolore magna ut enim.
                        </p>
                    </Col>
                    {serviceItems}
                </Row>
            </Container>
        </Section>
    );
}

export default Service;
