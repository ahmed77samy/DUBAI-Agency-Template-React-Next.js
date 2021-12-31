import {
    DigitalItemStyled,
    HeaderStyled,
} from "./styled/digital-item-styled";
import PropTypes from "prop-types";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function DigitalItem(props) {
    const { title, Icon, description } = props.item;
    return (
        <DigitalItemStyled {...props}>
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
        </DigitalItemStyled>
    );
}

// DigitalItem PropTypes
DigitalItem.propTypes = {
    item: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        Icon: PropTypes.func.isRequired,
    }),
};

export default DigitalItem;
