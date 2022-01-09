import PropTypes from "prop-types";
import { ThreeLinesStyled, SpanStyled } from "./styled/three-lines-styled";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function ThreeLines({ variant, ...props }) {
    return (
        <ThreeLinesStyled {...props}>
            {Array(3).fill().map((e, i) => (<SpanStyled variant={variant} key={i} />))}
        </ThreeLinesStyled>
    );
}

// ThreeLines PropTypes
ThreeLines.propTypes = {
    x: PropTypes.oneOf(["left", "right", "center"]).isRequired,
    y: PropTypes.oneOf(["top", "bottom", "center"]).isRequired,
    direction: PropTypes.oneOf(["row", "column"]).isRequired,
    variant: PropTypes.oneOf(["light", "primary", "neutral"]).isRequired,
    main: PropTypes.bool.isRequired,
    width: PropTypes.string,
    height: PropTypes.string,
    gap: PropTypes.string
};

// ThreeLines defaultProps
ThreeLines.defaultProps = {
    x: "left",
    y: "top",
    direction: "row",
    variant: "light",
    main: false
};

export default ThreeLines;
