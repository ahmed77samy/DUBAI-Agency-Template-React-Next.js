import ThreeLines from "components/elements/layouts/three-lines";
import Image from "next/image";
import Link from "next/link";
import {
    PortfolioItemStyled,
    ImgStyled,
    H5Styled,
    LinkStyled,
    SideTopStyled,
    MaskStyled,
} from "./styled/portfolio-list-item-styled.js";
import PropTypes from "prop-types";
import Social from "components/elements/layouts/social";
import { Col, Row } from "react-bootstrap";
import { Fragment, useState } from "react";
import PortfolioModal from "./portfolio-modal.js";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function PortfolioItem(props) {
    const { img, name, description, category } = props.item;
    const [toggler, setToggler] = useState(false);

    // toggle the toggler state
    const toggle = () => setToggler(!toggler);

    // loop for category to create links
    const categoryItems = category?.map((item, index) => {
        return (
            <Fragment key={index}>
                <Link href="/portfolio/portfolio-list" passHref>
                    <LinkStyled
                        className={`a-reset text-capitalize ${
                            index > 0 ? "mx-1" : "mr-1"
                        }`}>
                        {item}
                    </LinkStyled>
                </Link>
                {index + 1 !== category.length && ","}
            </Fragment>
        );
    });

    return (
        <PortfolioItemStyled {...props}>
            <MaskStyled />
            <Row>
                <Col xs={12}>
                    <SideTopStyled data-title="dubai work">
                        <ThreeLines y="center" width="12px" height="18px" gap="8px" />
                    </SideTopStyled>
                </Col>
            </Row>
            <Row className="layout-space align-items-center">
                {/* image */}
                <Col xs={12} md={3}>
                    <ImgStyled
                        as={Image}
                        src={img}
                        alt={name}
                        width={738}
                        height={1000}
                        objectFit="cover"
                        placeholder="blur"
                        layout="responsive"
                        blurDataURL="/img/bg/loading.png"
                        onClick={toggle}
                    />
                    {/* Modal */}
                    <PortfolioModal
                        centered
                        size="xl"
                        item={props.item}
                        show={toggler}
                        onHide={toggle}
                    />
                    {/* Modal */}
                </Col>
                {/* image */}
                {/* content */}
                <Col xs={12} md={9}>
                    <span className="font-small">{categoryItems}</span>
                    <Link href="/portfolio/portfolio-single">
                        <a className="a-reset d-flex w-fit-content">
                            <H5Styled className="text-capitalize mb-4">
                                {name}
                            </H5Styled>
                        </a>
                    </Link>
                    <p className="mb-4">{description}</p>
                    <Social url="/portfolio/portfolio-single" />
                </Col>
                {/* content */}
            </Row>
        </PortfolioItemStyled>
    );
}

// PortfolioItem PropTypes
PortfolioItem.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        category: PropTypes.array,
    }),
};

export default PortfolioItem;
