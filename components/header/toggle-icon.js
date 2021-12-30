import { BarsIcon, TimesIcon } from "../core/icons";
import PropTypes from "prop-types";
import { ToogleIconStyled } from "./styled/toogle-icon-styled";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function ToogleIcon(props) {
    return (
        <ToogleIconStyled {...props}>
            {props.open ? (
                <TimesIcon className="icon" />
            ) : (
                <BarsIcon className="icon" />
            )}
        </ToogleIconStyled>
    );
}

// ToogleIcon PropTypes
ToogleIcon.propTypes = {
    open: PropTypes.bool.isRequired,
};

// ToogleIcon defaultProps
ToogleIcon.defaultProps = {
    open: false
};

export default ToogleIcon;
