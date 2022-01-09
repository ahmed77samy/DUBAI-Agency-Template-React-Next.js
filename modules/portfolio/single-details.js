import Section from "components/layouts/section";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import { DetailsItemStyled, LinkStyled } from "./styled/single-details-styled";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function SingleDetails(props) {
    return (
        <Section {...props} padding>
            <Container>
                <Row className="layout-space align-items-center">
                    {/* client */}
                    <Col xs={12} md={6} lg={3}>
                        <DetailsItemStyled>
                            <h5 className="text-uppercase font-600">client</h5>
                            <span className="text-capitalize">ThemeForest</span>
                        </DetailsItemStyled>
                    </Col>
                    {/* client */}
                    {/* category */}
                    <Col xs={12} md={6} lg={3}>
                        <DetailsItemStyled>
                            <h5 className="text-uppercase font-600">category</h5>
                            <span className="text-capitalize">brand , photography</span>
                        </DetailsItemStyled>
                    </Col>
                    {/* category */}
                    {/* date */}
                    <Col xs={12} md={6} lg={3}>
                        <DetailsItemStyled>
                            <h5 className="text-uppercase font-600">date</h5>
                            <span className="text-capitalize">MAY 6, 2021</span>
                        </DetailsItemStyled>
                    </Col>
                    {/* date */}
                    {/* project link */}
                    <Col xs={12} md={6} lg={3}>
                        <DetailsItemStyled>
                            <h5 className="text-uppercase font-600">project link</h5>
                            <Link href="/portfolio/portfolio-single" passHref>
                                <LinkStyled className="a-reset">www.project.com</LinkStyled>
                            </Link>
                        </DetailsItemStyled>
                    </Col>
                    {/* project link */}
                    <Col xs={12}>
                        <p className="m-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.</p>
                    </Col>
                </Row>
            </Container>
        </Section>
    );
}

export default SingleDetails;
