import { WhatAboutItemStyled, SpanStyled } from "./styled/what-about-item-styled";
import PropTypes from "prop-types";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function WhatAboutItem(props) {
    const { title, description } = props.item;
    return (
        <WhatAboutItemStyled {...props}>
            <div className="d-flex">
                <SpanStyled>{props.index + 1}</SpanStyled>
                <div>
                    <h5 className="mb-2 text-uppercase">{title}</h5>
                    <p className="m-0">{description}</p>
                </div>
            </div>
        </WhatAboutItemStyled>
    );
}

// WhatAboutItem PropTypes
WhatAboutItem.propTypes = {
    item: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    }),
    index: PropTypes.number.isRequired
};

export default WhatAboutItem;
