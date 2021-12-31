import {
    StrategyItemStyled,
    H5Styled,
    HeaderStyled,
    HrStyled,
} from "./styled/strategy-item-styled";
import PropTypes from "prop-types";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function StrategyItem(props) {
    const { title, description } = props.item;
    return (
        <StrategyItemStyled {...props}>
            <HeaderStyled>
                <H5Styled className="text-uppercase">{title}</H5Styled>
            </HeaderStyled>
            <HrStyled />
            <p className="m-0">{description}</p>
        </StrategyItemStyled>
    );
}

// StrategyItem PropTypes
StrategyItem.propTypes = {
    item: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }),
};

export default StrategyItem;
