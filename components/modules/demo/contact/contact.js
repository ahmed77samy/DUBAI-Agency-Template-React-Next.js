import DefaultButton from "components/elements/buttons/default-button";
import { SendIcon } from "components/elements/icons/icons";
import DefaultInput from "components/elements/inputs/default-input";
import SecHeader from "components/elements/layouts/sec-header";
import Section from "components/elements/layouts/section";
import { Col, Container, Row } from "react-bootstrap";
import {
    FormStyled,
    GroupStyled,
    H5Styled,
} from "./styled/contact-styled";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function Contact(props) {
    return (
        <Section {...props} padding={true}>
            <Container>
                {/* header */}
                <SecHeader header="Let's Talk!" message="contact us" />
                {/* header */}
                {/* content */}
                <Row className="layout-space">
                    {/* contact */}
                    <Col xs={12} lg={5}>
                        <GroupStyled>
                            <H5Styled>my contacts</H5Styled>
                            <p className="m-0">
                                Contrary to popular belief, Lorem Ipsum is not
                                simply random text. It has roots in a piece of
                                classical Latin literature from 45 BC, making it
                                over 2000 years old.
                            </p>
                        </GroupStyled>
                        <GroupStyled>
                            <H5Styled>address</H5Styled>
                            <p className="m-0">
                                18 Elhosary Street, Kafr El-Dawwar, Beheira
                                Governorate, Egypt.
                            </p>
                        </GroupStyled>
                        <GroupStyled>
                            <H5Styled>Phone</H5Styled>
                            <p className="m-0">0-123-456-789</p>
                            <p className="m-0">0-123-456-789</p>
                        </GroupStyled>
                        <GroupStyled>
                            <H5Styled>email</H5Styled>
                            <p className="m-0">Sample@gmail.com</p>
                        </GroupStyled>
                    </Col>
                    {/* contact */}
                    {/* form */}
                    <Col xs={12} lg={7}>
                        <H5Styled>Quick Contact Form</H5Styled>
                        <p className="mb-5">
                            We’d love to build something great together.
                        </p>
                        <FormStyled>
                            <DefaultInput
                                required
                                type="text"
                                size="sm"
                                placeholder="Your Name *"
                            />
                            <DefaultInput
                                required
                                type="email"
                                size="sm"
                                placeholder="Your Email Address *"
                            />
                            <DefaultInput
                                required
                                as="textarea"
                                size="sm"
                                placeholder="Type Your Message Here *"
                            />
                            <DefaultButton border size="sm">
                                <SendIcon className="mr-3" />
                                send
                            </DefaultButton>
                        </FormStyled>
                    </Col>
                    {/* form */}
                </Row>
                {/* content */}
            </Container>
        </Section>
    );
}

export default Contact;
