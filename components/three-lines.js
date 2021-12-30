import PropTypes from "prop-types";
import { ThreeLinesStyled, SpanStyled } from "./styled/three-lines-styled";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function ThreeLines(props) {
    return (
        <ThreeLinesStyled {...props}>
            {Array(3).fill().map((e, i) => (<SpanStyled key={i} />))}
        </ThreeLinesStyled>
    );
}

// ThreeLines PropTypes
ThreeLines.propTypes = {
    x: PropTypes.oneOf(["left", "right", "center"]).isRequired,
    y: PropTypes.oneOf(["top", "bottom", "center"]).isRequired,
    direction: PropTypes.oneOf(["row", "column"]).isRequired,
    main: PropTypes.bool.isRequired,
    width: PropTypes.string,
    height: PropTypes.string,
    gap: PropTypes.string,
};

// ThreeLines defaultProps
ThreeLines.defaultProps = {
    x: "left",
    y: "top",
    direction: "row",
    main: false,
};

export default ThreeLines;
