import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
import { Fragment, useState } from "react";
import PortfolioModal from "../portfolio/portfolio-modal";
import {
    AsideWorkItemStyled,
    H6Styled,
    LinkCatStyled,
    ImageStyled,
} from "./styled/blog-aside-styled";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function AsideWorkItem(props) {
    const { img, name, category } = props.item;
    const [toggler, setToggler] = useState(false);

    // toggle the toggler state
    const toggle = () => setToggler(!toggler);

    // loop for category to create links
    const categoryItems = category?.map((item, index) => {
        return (
            <Fragment key={index}>
                <Link href="/portfolio/portfolio-list" passHref>
                    <LinkCatStyled
                        className={`a-reset text-capitalize ${
                            index > 0 ? "mx-1" : "mr-1"
                        }`}>
                        {item}
                    </LinkCatStyled>
                </Link>
                {index + 1 !== category.length && ","}
            </Fragment>
        );
    });

    return (
        <AsideWorkItemStyled {...props}>
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
            <PortfolioModal
                centered
                size="xl"
                item={props.item}
                show={toggler}
                onHide={toggle}
            />
            <div>
                <Link href="/portfolio/portfolio-single">
                    <a className="a-reset">
                        <H6Styled className="font-medium text-capitalize mb-0">
                            {name}
                        </H6Styled>
                    </a>
                </Link>
                <span className="font-small">{categoryItems}</span>
            </div>
        </AsideWorkItemStyled>
    );
}

// AsideWorkItem PropTypes
AsideWorkItem.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
    }),
};

export default AsideWorkItem;
