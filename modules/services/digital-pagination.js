import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { PaginationItemStyled, PaginationStyled, H3Styled, ContentStyled } from "./styled/digital-pagination-styled";
import PropTypes from "prop-types";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
const DigitalPagination = React.forwardRef((props, ref) => {
    const [current, setCurrent] = useState(0);
    const { items, paginationProps } = props;

    // set current and total if existing
    useEffect(() => {
        let isMounted = true;
        if (paginationProps) {
            const { current } = paginationProps;
            if (isMounted) {
                setCurrent(current);
            }
        }
        return () => (isMounted = false);
    }, [paginationProps]);

    // loop for items to create PaginationItem
    const digitalItems = items.map((item, index) => {
        return (
            <PaginationItemStyled as={Col} xs={12} sm={6} lg={3} key={index} isactive={current === index + 1 ? 1 : 0} className="swiper-pagination-bullet">
                <ContentStyled>
                    <item.Icon className="icon" />
                    <H3Styled className="h5">{item.title}</H3Styled>
                </ContentStyled>
            </PaginationItemStyled>
        );
    });

    return (
        <PaginationStyled as={Col} xs={12} ref={ref}>
            <Row className="h-100 layout-space">{digitalItems}</Row>
        </PaginationStyled>
    );
});

// DigitalPagination PropTypes
DigitalPagination.propTypes = {
    items: PropTypes.array.isRequired
};

DigitalPagination.displayName = "DigitalPagination";

export default DigitalPagination;
