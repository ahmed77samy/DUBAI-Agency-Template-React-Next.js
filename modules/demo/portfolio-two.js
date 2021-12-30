import DefaultButton from "components/default-button";
import SecHeader from "components/layouts/sec-header";
import Section from "components/layouts/section";
import { latest_portfolio_two_items } from "modules/portfolio/items";
import PortfolioItem from "modules/portfolio/portfolio-list-item";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function Portfolio(props) {
    // loop for portfolio__items to create PortfolioItem
    const portfolioItems = latest_portfolio_two_items.map((item, index) => {
        return (
            <Col xs={12} key={index}>
                <PortfolioItem item={item} />
            </Col>
        );
    });

    return (
        <Section {...props} padding={true}>
            <Container>
                {/* header */}
                <SecHeader
                    header="latest porfolio"
                    message="amazing works"
                    layer="portfolio"
                />
                {/* header */}
                {/* content */}
                <Row className="layout-space">
                    {portfolioItems}
                    <Col xs={12}>
                        <Link href="/portfolio/portfolio-list" passHref>
                            <DefaultButton
                                as="a"
                                className="a-reset d-flex w-fit-content mx-auto"
                                border>
                                show more
                            </DefaultButton>
                        </Link>
                    </Col>
                </Row>
                {/* content */}
            </Container>
        </Section>
    );
}

export default Portfolio;
