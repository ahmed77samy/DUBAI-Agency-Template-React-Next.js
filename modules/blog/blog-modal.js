import DefaultModal from "components/modal";
import Image from "next/image";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import {
    H5Styled,
    ContentStyled,
} from "./styled/blog-modal-styled";
import PropTypes from "prop-types";
import SingleDetails from "./single-details";
import Social from "components/social";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function BlogModal({ item, ...props }) {
    const { img, name, id } = item;
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
                                width={640}
                                height={640}
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
                            <Link href="/blog/blog-single">
                                <a className="a-reset">
                                    <H5Styled className="text-capitalize mt-1 mb-4">
                                        {name}
                                    </H5Styled>
                                </a>
                            </Link>
                            <SingleDetails />
                            <Social className="my-4" url="/blog/blog-single" />
                        </ContentStyled>
                        {/* content */}
                    </Row>
                </Container>
            </DefaultModal.Body>
        </DefaultModal>
    );
}

// BlogModal PropTypes
BlogModal.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
    }),
};

export default BlogModal;
