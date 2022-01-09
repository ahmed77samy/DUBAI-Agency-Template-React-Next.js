import { Container } from "react-bootstrap";
import Section from "./layouts/section";
import { AdsStyled } from "./styled/ads-styled";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function Ads(props) {
    return (
        <AdsStyled as={Section} {...props} padding>
            <Container>
                <h2 className="text-uppercase font-600 text-center m-0">ads</h2>
            </Container>
        </AdsStyled>
    );
}

export default Ads;
