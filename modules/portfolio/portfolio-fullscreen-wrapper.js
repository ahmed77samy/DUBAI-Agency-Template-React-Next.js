import DefaultButton from "components/default-button";
import Section from "components/layouts/section";
import { portfolio_items } from "./items";
import PortfolioItem from "./portfolio-item";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function PortfolioFullscreenWrapper(props) {
    const count = 10;
    const [limit, setLimit] = useState(count);

    // loop for portfolio__items to create PortfolioItem
    const portfolioItems = portfolio_items.map((item, index) => {
        return (
            index < limit && (
                <Col key={index}>
                    <PortfolioItem item={item} />
                </Col>
            )
        );
    });

    // increase the limit if less than portfolio_items's length
    const handleClick = () => {
        if (limit + count >= portfolio_items.length)
            setLimit(portfolio_items.length);
        else setLimit(limit + count);
    };

    return (
        <Section {...props} padding={true}>
            <Container fluid>
                {/* content */}
                <Row className="layout-space" xs={1} sm={2} md={3} xl={5}>
                    {portfolioItems}
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <DefaultButton
                            className={`a-reset d-flex w-fit-content mx-auto ${
                                limit >= portfolio_items.length && "disabled"
                            }`}
                            border
                            onClick={handleClick}>
                            show more
                        </DefaultButton>
                    </Col>
                </Row>
                {/* content */}
            </Container>
        </Section>
    );
}

export default PortfolioFullscreenWrapper;
