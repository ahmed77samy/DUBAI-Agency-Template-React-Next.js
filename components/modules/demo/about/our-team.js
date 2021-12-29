import SecHeader from "components/elements/layouts/sec-header";
import Section from "components/elements/layouts/section";
import { Col, Container, Row } from "react-bootstrap";
import TeamItem from "./team-item.js";
import { team_item } from "./items";

/**
 * {@inheritdoc}
 * @returns {React.Component}
 */
function OurTeam(props) {
    // loop for team_item to create TeamItem
    const teamList = team_item.map((item, index) => {
        return (
            <Col xs={12} md={4} key={index}>
                <TeamItem item={item} />
            </Col>
        );
    });

    return (
        <Section {...props} padding>
            <Container className="position-relative">
                {/* header */}
                <SecHeader
                    header="Dubai agency team"
                    message="is fantastic people"
                    layer="team"
                />
                {/* header */}
                <Row className="layout-space">{teamList}</Row>
            </Container>
        </Section>
    );
}

export default OurTeam;
