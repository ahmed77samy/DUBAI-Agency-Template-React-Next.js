import Pricing from "modules/about/pricing";
import DetailsOptions from "./details-options";

/**
 * {@inheritdoc}
 * @returns {React.Component}
 */
function ServiceDetailsWrapper() {
    return (
        <>
            <DetailsOptions />
            <Pricing reverseColor />
        </>
    );
}

export default ServiceDetailsWrapper;
