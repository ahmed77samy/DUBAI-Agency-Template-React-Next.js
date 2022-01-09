import ThreeLines from "components/three-lines";
import Image from "next/image";
import Link from "next/link";
import { PortfolioItemStyled, SideLeftStyled, HeaderStyled, ContentStyled, ImgStyled, H5Styled } from "./styled/portfolio-item-styled";
import PropTypes from "prop-types";
import Social from "components/social";
import { useState } from "react";
import PortfolioModal from "./portfolio-modal";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function PortfolioItem(props) {
    const { img, name } = props.item;
    const [toggler, setToggler] = useState(false);

    // toggle the toggler state
    const toggle = () => setToggler(!toggler);
    return (
        <PortfolioItemStyled {...props}>
            {/* header */}
            <HeaderStyled>
                <SideLeftStyled>
                    <ThreeLines variant="neutral" direction="column" y="bottom" x="left" width="30px" height="13px" gap="10px" />
                    <Social direction="column" type="primary" url="/portfolio/portfolio-single" />
                </SideLeftStyled>
                <ImgStyled as={Image} src={img} alt={name} width={738} height={1000} objectFit="cover" placeholder="blur" blurDataURL="/img/bg/loading.WebP" onClick={toggle} />
                {/* Modal */}
                <PortfolioModal centered size="xl" item={props.item} show={toggler} onHide={toggle} />
                {/* Modal */}
            </HeaderStyled>
            {/* header */}
            {/* content */}
            <ContentStyled>
                <Link href="/portfolio/portfolio-single">
                    <a className="a-reset">
                        <H5Styled className="text-capitalize mb-0">{name}</H5Styled>
                    </a>
                </Link>
            </ContentStyled>
            {/* content */}
        </PortfolioItemStyled>
    );
}

// PortfolioItem PropTypes
PortfolioItem.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired
    })
};

export default PortfolioItem;
