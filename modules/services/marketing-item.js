import { MarketingItemStyled , IconStyled , H5Styled } from "./styled/marketing-item-styled";
import PropTypes from "prop-types";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function MarketingItem(props) {
    const { Icon, title, description } = props.item;
    return (
        <MarketingItemStyled
            {...props}
            increase={props.index + 1 === 2 && true}>
            <IconStyled as={Icon} />
            <H5Styled className="text-capitalize font-600">{title}</H5Styled>
            <p className="m-0">{description}</p>
        </MarketingItemStyled>
    );
}

// MarketingItem PropTypes
MarketingItem.propTypes = {
    item: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        Icon: PropTypes.func.isRequired,
    }),
    index: PropTypes.number.isRequired,
};

export default MarketingItem;
