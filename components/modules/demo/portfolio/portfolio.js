import DefaultButton from "components/elements/buttons/default-button";
import SecHeader from "components/elements/layouts/sec-header";
import Section from "components/elements/layouts/section";
import { latest_portfolio_items } from "components/modules/portfolio/items";
import PortfolioItem from "components/modules/portfolio/portfolio-item";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function Portfolio(props) {
    // loop for portfolio__items to create PortfolioItem
    const portfolioItems = latest_portfolio_items.map((item, index) => {
        return (
            <Col xs={12} md={6} lg={4} key={index}>
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
                    align="center"
                />
                {/* header */}
                {/* content */}
                <Row className="layout-space">
                    {portfolioItems}
                    <Col xs={12}>
                        <Link href="/portfolio/portfolio-grid" passHref>
                            <DefaultButton
                                className="a-reset d-flex w-fit-content mx-auto"
                                as="a"
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
