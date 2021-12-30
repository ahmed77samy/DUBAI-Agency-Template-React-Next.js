import PropTypes from "prop-types";
import { MethodItemStyled } from "./styled/method-item-styled";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function MethodItem(props) {
    const { method, description } = props.item;
    return (
        <MethodItemStyled {...props}>
            <h4 className="text-uppercase font-600">{method}</h4>
            <hr />
            <p className="m-0">{description}</p>
        </MethodItemStyled>
    );
}

// MethodItem PropTypes
MethodItem.propTypes = {
    item: PropTypes.shape({
        method: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }),
};

export default MethodItem;
