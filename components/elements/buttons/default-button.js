import PropTypes from "prop-types";
import React from "react";
import { DefaultButtonStyled } from "./styled/default-button-styled";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
const DefaultButton = React.forwardRef((props, ref) => {
    return (
        <DefaultButtonStyled ref={ref} {...props}>
            {props.children}
        </DefaultButtonStyled>
    );
});

// DefaultButton PropTypes
DefaultButton.propTypes = {
    size: PropTypes.oneOf(["md", "sm", "lg"]).isRequired,
    variant: PropTypes.oneOf(["light", "primary", "dark", "neutral"])
        .isRequired,
    border: PropTypes.bool,
    borderRadius: PropTypes.bool,
    square: PropTypes.bool,
};

// DefaultButton defaultProps
DefaultButton.defaultProps = {
    size: "md",
    variant: "light",
    border: false,
    borderRadius: false,
    square: false,
};

DefaultButton.displayName = 'DefaultButton';

export default DefaultButton;
