import DefaultModal from "components/modal";
import Social from "components/social";
import Image from "next/image";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import SingleParts from "./single-parts";
import {
    H5Styled,
    ContentStyled,
    LinkStyled,
} from "./styled/portfolio-modal-styled";
import PropTypes from "prop-types"

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function PortfolioModal({ item, ...props }) {
    const { description, img, name, id } = item;
    return (
        <DefaultModal {...props}>
            <DefaultModal.Header />
            <DefaultModal.Body>
                <Container>
                    <Row className="layout-space align-items-center">
                        {/* Image */}
                        <Col xs={12} lg={6}>
                            <Image
                                src={img}
                                alt={name}
                                width={738}
                                height={1000}
                                objectFit="cover"
                                placeholder="blur"
                                layout="responsive"
                                blurDataURL="/img/bg/loading.WebP"
                            />
                        </Col>
                        {/* Image */}
                        {/* content */}
                        <ContentStyled
                            as={Col}
                            xs={12}
                            lg={6}
                            className="scrollable">
                            <span>CODE : {id}</span>
                            <Link href="/portfolio/portfolio-single">
                                <a className="a-reset">
                                    <H5Styled className="text-capitalize mt-1">
                                        {name}
                                    </H5Styled>
                                </a>
                            </Link>
                            <div className="font-small">
                                <Link href="/portfolio/portfolio-grid" passHref><LinkStyled className="a-reset">Business</LinkStyled></Link> <span> , </span>
                                <Link href="/portfolio/portfolio-grid" passHref><LinkStyled className="a-reset">Agency</LinkStyled></Link> <span> , </span>
                                <Link href="/portfolio/portfolio-grid" passHref><LinkStyled className="a-reset">Digital</LinkStyled></Link> <span> , </span>
                                <Link href="/portfolio/portfolio-grid" passHref><LinkStyled className="a-reset">Technology</LinkStyled></Link> <span> , </span>
                                <Link href="/portfolio/portfolio-grid" passHref><LinkStyled className="a-reset">Parallax</LinkStyled></Link> <span> , </span>
                                <Link href="/portfolio/portfolio-grid" passHref><LinkStyled className="a-reset">Innovative</LinkStyled></Link> <span> , </span>
                                <Link href="/portfolio/portfolio-grid" passHref><LinkStyled className="a-reset">Professional</LinkStyled></Link> <span> , </span>
                                <Link href="/portfolio/portfolio-grid" passHref><LinkStyled className="a-reset">Experience</LinkStyled></Link>
                            </div>
                            <SingleParts className="my-5" />
                            <p className="mb-0">{description}</p>
                            <Social className="my-4" url="/portfolio/portfolio-single" />
                        </ContentStyled>
                        {/* content */}
                    </Row>
                </Container>
            </DefaultModal.Body>
        </DefaultModal>
    );
}

// PortfolioModal PropTypes
PortfolioModal.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
    }),
};

export default PortfolioModal;
