import {
    ServiceItemStyled,
    HeaderStyled,
} from "./styled/service-two-item-styled";
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
            {/* header */}
            <HeaderStyled>
                <Icon className="icon mr-3 text-primary" />
                <h4 className="h3 text-uppercase font-600 m-0">{title}</h4>
            </HeaderStyled>
            {/* header */}
            {/* content */}
            <p>
                Lorem ipsum is simply dummy text of the printing and
                typesetting. Lorem Ipsum has been the industry standard dummy.
                Lorem Ipsum has been the industry standard dummy. Lorem ipsum is
                simply dummy text of the printing and typesetting. Lorem Ipsum
                has been the industry standard dummy. Lorem Ipsum has been the
                industry standard dummy.
            </p>
            <p className="m-0">{description}</p>
            {/* content */}
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
