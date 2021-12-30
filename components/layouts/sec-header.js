import PropTypes from "prop-types";
import { ContentStyled, LayerStyled, SecHeaderStyled, WrapperStyled } from "./styled/sec-header-styled";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function SecHeader(props) {
    return (
        <SecHeaderStyled {...props}>
            <WrapperStyled>
                <ContentStyled>
                    {props.message && (
                        <span className="text-uppercase text-primary">
                            {props.message}
                        </span>
                    )}
                    {props.header && (
                        <h2 className="text-uppercase h1 font-600 m-0">{props.header}</h2>
                    )}
                </ContentStyled>
            </WrapperStyled>
            {props.layer && <LayerStyled>{props.layer}</LayerStyled>}
        </SecHeaderStyled>
    );
}

// SecHeader PropTypes
SecHeader.propTypes = {
    header: PropTypes.string.isRequired,
    message: PropTypes.string,
    layer: PropTypes.string,
    align: PropTypes.oneOf(["left", "right", "center"]),
};

// SecHeader defaultProps
SecHeader.defaultProps = {
    align: "left",
};

export default SecHeader;
