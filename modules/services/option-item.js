import PropTypes from "prop-types";
import { OptionItemStyled , IconStyled } from "./styled/option-item-styled";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function OptionItem(props) {
    const { title, Icon, description } = props.item;
    return (
        <OptionItemStyled {...props}>
            <IconStyled>
                <Icon className="icon" />
            </IconStyled>
            <div>
                <h5 className="text-capitalize">{title}</h5>
                <p className="m-0">{description}</p>
            </div>
        </OptionItemStyled>
    );
}


// OptionItem PropTypes
OptionItem.propTypes = {
    item: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        Icon: PropTypes.func.isRequired,
    }),
};

export default OptionItem;
