import DefaultButton from "components/elements/buttons/default-button";
import Section from "components/elements/layouts/section";
import Image from "next/image";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import { FigureStyled } from "./styled/purchase-styled";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function Purchase(props) {
    return (
        <Section {...props} padding={true}>
            {/* img */}
            <Container fluid>
                <FigureStyled>
                    <Image
                        src="/img/bg/1.png"
                        alt="purchase-theme"
                        width={2089}
                        height={669}
                        objectFit="cover"
                        placeholder="blur"
                        blurDataURL="/img/bg/loading.png"
                    />
                </FigureStyled>
            </Container>
            {/* img */}
            {/* content */}
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} md={7} className="text-center">
                        <p className="lead">You are at the right step now</p>
                        <h2 className="mb-4 h1 text-uppercase font-600">
                            Purchase The template and Make Your Life Easier.
                        </h2>
                        <Link
                            href="https://themeforest.net/user/themezas"
                            passHref>
                            <DefaultButton
                                as="a"
                                variant="primary"
                                target="_blank"
                                borderRadius
                                className="a-reset mx-auto">
                                Purchase now
                            </DefaultButton>
                        </Link>
                    </Col>
                </Row>
            </Container>
            {/* content */}
        </Section>
    );
}

export default Purchase;
