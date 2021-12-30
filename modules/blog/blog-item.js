import ThreeLines from "components/three-lines";
import Image from "next/image";
import Link from "next/link";
import {
    BlogItemStyled,
    SideTopStyled,
    HeaderStyled,
    ContentStyled,
    ImgStyled,
    H5Styled,
} from "./styled/blog-item-styled";
import PropTypes from "prop-types";
import Social from "components/social";
import { useState } from "react";
import BlogModal from "./blog-modal";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function BlogItem(props) {
    const { img, name, description } = props.item;
    const [toggler, setToggler] = useState(false);

    // toggle the toggler state
    const toggle = () => setToggler(!toggler);

    return (
        <BlogItemStyled {...props}>
            {/* header */}
            <HeaderStyled>
                <SideTopStyled data-title="dubai article">
                    <ThreeLines width="15px" height="20px" gap="10px" />
                </SideTopStyled>
                <ImgStyled
                    as={Image}
                    src={img}
                    alt={name}
                    width={640}
                    height={426}
                    objectFit="cover"
                    placeholder="blur"
                    blurDataURL="/img/bg/loading.WebP"
                    onClick={toggle}
                />
                {/* Modal */}
                <BlogModal
                    centered
                    size="xl"
                    item={props.item}
                    show={toggler}
                    onHide={toggle}
                />
                {/* Modal */}
            </HeaderStyled>
            {/* header */}
            {/* content */}
            <ContentStyled>
                <Link href="/blog/blog-single">
                    <a className="a-reset">
                        <H5Styled className="text-capitalize mb-3">
                            {name}
                        </H5Styled>
                    </a>
                </Link>
                <p>{description}</p>
                <Social url="/blog/blog-single" />
            </ContentStyled>
            {/* content */}
        </BlogItemStyled>
    );
}

// BlogItem PropTypes
BlogItem.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }),
};

export default BlogItem;
