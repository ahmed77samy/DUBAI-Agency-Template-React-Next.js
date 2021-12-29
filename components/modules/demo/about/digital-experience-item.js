import { ExperienceItemStyled, SpanStyled } from "./styled/digital-experience-item-styled";
import PropTypes from "prop-types";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function ExperienceItem(props) {
    const { title, description } = props.item;
    return (
        <ExperienceItemStyled {...props}>
            <div className="d-flex">
                <SpanStyled>{props.index + 1}</SpanStyled>
                <div>
                    <h5 className="mb-2 text-uppercase">{title}</h5>
                    <p className="m-0">{description}</p>
                </div>
            </div>
        </ExperienceItemStyled>
    );
}

// ExperienceItem PropTypes
ExperienceItem.propTypes = {
    item: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }),
    index: PropTypes.number.isRequired,
};

export default ExperienceItem;
