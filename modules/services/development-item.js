import { DevelopmentItemStyled , H5Styled } from "./styled/development-item-styled.js";
import PropTypes from "prop-types";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function DevelopmentItem(props) {
    const { title, description } = props.item;
    return (
        <DevelopmentItemStyled {...props} data-number={`0${props.index + 1}`}>
            <H5Styled className="font-600 text-capitalize">{title}</H5Styled>
            <p className="m-0">{description}</p>
        </DevelopmentItemStyled>
    );
}

// DevelopmentItem PropTypes
DevelopmentItem.propTypes = {
    item: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }),
    index: PropTypes.number.isRequired,
};

export default DevelopmentItem;
