import SecHeader from "components/layouts/sec-header";
import Section from "components/layouts/section";
import { Col, Container, Row } from "react-bootstrap";
import { facts_items } from "./items";
import { IconStyled, FactItemStyled } from "./styled/single-facts-styled";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function SingleFacts(props) {
    // loop for facts_items to create fact item
    const factsItems = facts_items.map((item, index) => {
        return (
            <Col xs={12} sm={6} lg={3} key={index}>
                <FactItemStyled>
                    <IconStyled as={item.Icon} />
                    <h6 className="font-small text-neutral_400 text-capitalize">
                        {item.fact}
                    </h6>
                </FactItemStyled>
            </Col>
        );
    });

    return (
        <Section {...props} padding>
            <Container>
                {/* header */}
                <SecHeader
                    header="some facts"
                    message="Facts to look at"
                    layer="facts"
                />
                {/* header */}
                {/* content */}
                <Row className="layout-space">{factsItems}</Row>
                {/* content */}
            </Container>
        </Section>
    );
}

export default SingleFacts;
