import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
import { useState } from "react";
import BlogModal from "../blog/blog-modal";
import {
    AsidePostItemStyled,
    H6Styled,
    ImageStyled,
} from "./styled/portfolio-aside-styled";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function AsidePostItem(props) {
    const { img, name, date } = props.item;
    const [toggler, setToggler] = useState(false);

    // toggle the toggler state
    const toggle = () => setToggler(!toggler);
    return (
        <AsidePostItemStyled {...props}>
            <ImageStyled
                as={Image}
                src={img}
                alt={name}
                width={100}
                height={100}
                objectFit="cover"
                placeholder="blur"
                blurDataURL="/img/bg/loading.png"
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
            <div>
                <Link href="/blog/blog-single">
                    <a className="a-reset">
                        <H6Styled className="font-medium text-capitalize mb-0">
                            {name}
                        </H6Styled>
                    </a>
                </Link>
                <span className="font-small">{date}</span>
            </div>
        </AsidePostItemStyled>
    );
}

// AsidePostItem PropTypes
AsidePostItem.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
    }),
};

export default AsidePostItem;
