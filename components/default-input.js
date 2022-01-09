import PropTypes from "prop-types";
import React from "react";
import { DefaultInputStyled } from "./styled/default-input-styled";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
const DefaultInput = React.forwardRef((props, ref) => {
    return (
        <DefaultInputStyled ref={ref} {...props}>
            {props.children}
        </DefaultInputStyled>
    );
});

// DefaultInput PropTypes
DefaultInput.propTypes = {
    size: PropTypes.oneOf(["md", "sm", "lg"]).isRequired,
    border: PropTypes.bool
};

// DefaultInput defaultProps
DefaultInput.defaultProps = {
    size: "md",
    border: false
};

DefaultInput.displayName = "DefaultInput";

export default DefaultInput;
