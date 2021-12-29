import DefaultButton from "components/elements/buttons/default-button";
import DefaultInput from "components/elements/inputs/default-input";
import Section from "components/elements/layouts/section";
import { Container } from "react-bootstrap";
import { FormStyled } from "./styled/subscrib-styled";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function Subscrib(props) {
    return (
        <Section {...props} padding={true}>
            <Container>
                <FormStyled>
                    <DefaultInput
                        required
                        type="email"
                        size="lg"
                        border
                        placeholder="Your Email Address"
                    />
                    <DefaultButton size="lg" variant="primary">
                        subscrib now
                    </DefaultButton>
                </FormStyled>
            </Container>
        </Section>
    );
}

export default Subscrib;
