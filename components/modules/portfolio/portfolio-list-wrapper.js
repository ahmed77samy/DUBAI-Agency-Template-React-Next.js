import DefaultButton from "components/elements/buttons/default-button";
import Section from "components/elements/layouts/section";
import { portfolio_two_items } from "./items";
import PortfolioItem from "./portfolio-list-item";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function PortfolioListWrapper(props) {
    const count = 3;
    const [limit, setLimit] = useState(count);

    // loop for portfolio__items to create PortfolioItem
    const portfolioItems = portfolio_two_items.map((item, index) => {
        return (
            index < limit && (
                <Col xs={12} key={index}>
                    <PortfolioItem item={item} />
                </Col>
            )
        );
    });

    // increase the limit if less than portfolio_two_items's length
    const handleClick = () => {
        if (limit + count >= portfolio_two_items.length)
            setLimit(portfolio_two_items.length);
        else setLimit(limit + count);
    };

    return (
        <Section {...props} padding={true}>
            <Container>
                {/* content */}
                <Row className="layout-space">
                    {portfolioItems}
                    <Col xs={12}>
                        <DefaultButton
                            className={`a-reset d-flex w-fit-content mx-auto ${
                                limit >= portfolio_two_items.length && "disabled"
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

export default PortfolioListWrapper;
