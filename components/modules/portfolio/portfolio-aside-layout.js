import Section from "components/elements/layouts/section";
import { Col, Container, Row } from "react-bootstrap";
import PortfolioAsideWrapper from "./portfolio-aside-wrapper.js";
import PortfolioAside from "./portfolio-aside.js";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function PortfolioAsideLayout(props) {
    return (
        <Section {...props} padding={true}>
            <Container>
                <Row className="layout-space">
                    <Col xs={12} lg={8}>
                        <PortfolioAsideWrapper />
                    </Col>
                    <Col xs={12} lg={4}>
                        <PortfolioAside />
                    </Col>
                </Row>
            </Container>
        </Section>
    );
}

export default PortfolioAsideLayout;
