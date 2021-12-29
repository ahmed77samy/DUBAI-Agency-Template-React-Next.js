import PropTypes from "prop-types";
import { OverlayStyled } from "./styled/overlay-styled";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function Overlay(props) {
    return <OverlayStyled {...props}>{props.children}</OverlayStyled>;
}

// Overlay PropTypes
Overlay.propTypes = {
    bg: PropTypes.string,
};

export default Overlay;
