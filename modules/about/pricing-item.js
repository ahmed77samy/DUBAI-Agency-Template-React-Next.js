import {
    PricingItemStyled,
    HeaderStyled,
    UlStyled,
    HrStyled,
    BodyStyled,
} from "./styled/pricing-item-styled.js";
import PropTypes from "prop-types";
import DefaultButton from "components/default-button.js";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function PricingItem(props) {
    const { name, description, salary, features } = props.item;

    // loop for features to create list item
    const featuresItems = features.map((item, index) => {
        return <li key={index}>{item}</li>;
    });

    return (
        <PricingItemStyled {...props} padding className="text-center">
            <HeaderStyled>
                <h3 className="text-uppercase font-600">{name}</h3>
                <p className="m-0 font-small text-capitalize">{description}</p>
            </HeaderStyled>
            <BodyStyled>
                <UlStyled className="list-unstyled mb-0">
                    {featuresItems}
                </UlStyled>
                <HrStyled />
                <h4 className="mb-0 font-600">{salary}$</h4>
                <span className="font-small">Per Month</span>
                <DefaultButton size="sm" border className="mx-auto mt-3">
                    purchase
                </DefaultButton>
            </BodyStyled>
        </PricingItemStyled>
    );
}

// SponserItem PropTypes
PricingItem.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        salary: PropTypes.number.isRequired,
        features: PropTypes.array.isRequired,
    }),
};

export default PricingItem;
