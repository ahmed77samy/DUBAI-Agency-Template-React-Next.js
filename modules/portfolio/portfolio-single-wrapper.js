import SingleControl from "./single-control";
import SingleDetails from "./single-details";
import SingleFacts from "./single-facts";
import SingleParts from "./single-parts";

/**
 * {@inheritdoc}
 * @returns {React.Component}
 */
function PortfolioSingleWrapper() {
    return (
        <>
            <SingleDetails />
            <SingleParts />
            <SingleFacts />
            <SingleControl />
        </>
    );
}

export default PortfolioSingleWrapper;
