import React, { useEffect, useState } from "react";
import {
    PaginationStyled,
    WrapperStyled,
    SpanStyled,
} from "./styled/slider-pagination-styled";
import PropTypes from "prop-types";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
const SliderPagination = React.forwardRef((props, ref) => {
    const { paginationProps } = props;
    const [total, setTotal] = useState(0);
    const [current, setCurrent] = useState(0);

    // set current and total if existing
    useEffect(() => {
        let isMounted = true;
        if (paginationProps) {
            const { total, current } = paginationProps;
            if (isMounted) {
                setTotal(total);
                setCurrent(current);
            }
        }
        return () => (isMounted = false);
    }, [paginationProps]);

    return (
        <WrapperStyled {...props}>
            <SpanStyled>0{current}</SpanStyled>
            <PaginationStyled ref={ref}></PaginationStyled>
            <SpanStyled>0{total}</SpanStyled>
        </WrapperStyled>
    );
});

// SliderPagination PropTypes
SliderPagination.propTypes = {
    paginationProps: PropTypes.object.isRequired,
};

SliderPagination.displayName = "SliderPagination";

export default SliderPagination;
