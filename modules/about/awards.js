import SecHeader from "components/layouts/sec-header";
import Section from "components/layouts/section";
import { Col, Container, Row } from "react-bootstrap";
import { awards_item } from "./items";
import AwardItem from "./award_item.js";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function Awards(props) {
    // loop for awards_item to create AwardItem
    const awardItems = awards_item.map((item, index) => {
        return (
            <Col xs={12} key={index}>
                <AwardItem item={item} />
            </Col>
        );
    });

    return (
        <Section {...props} padding>
            <Container>
                {/* header */}
                <SecHeader header="Check out my awards" message="Experience" layer="awards" align="center" />
                {/* header */}
                {/* content */}
                <Row className="layout-space">{awardItems}</Row>
                {/* content */}
            </Container>
        </Section>
    );
}

export default Awards;
