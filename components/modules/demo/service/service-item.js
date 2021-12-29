import {
    ServiceItemStyled,
    H5Styled,
    IconStyled,
    HeaderStyled,
    HrStyled,
} from "./styled/service-item-styled";
import PropTypes from "prop-types";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function ServiceItem(props) {
    const { title, Icon, description } = props.item;
    return (
        <ServiceItemStyled {...props}>
            <HeaderStyled>
                <H5Styled className="text-uppercase">{title}</H5Styled>
                <IconStyled as={Icon} />
            </HeaderStyled>
            <HrStyled />
            <p className="m-0">{description}</p>
        </ServiceItemStyled>
    );
}

// ServiceItem PropTypes
ServiceItem.propTypes = {
    item: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        Icon: PropTypes.func.isRequired,
    }),
};

export default ServiceItem;
