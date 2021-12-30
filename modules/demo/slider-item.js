import Image from "next/image";
import Link from "next/link";
import {
    ContentStyled,
    SliderItemStyled,
    H2Styled,
    H3Styled,
    PStyled,
    LinkStyled,
} from "./styled/slider-item-styled";
import KUTE from "kute.js";
import PropTypes from "prop-types";
import DefaultButton from "components/default-button";
import { Fragment, useEffect, useRef } from "react";
import Overlay from "components/overlay";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function SliderItem(props) {
    const { title, img, description, category } = props.item;
    const { isActive } = props.PropsSlide;
    const spRef = useRef(0);
    const h2Ref = useRef(0);
    const h3Ref = useRef(0);
    const pRef = useRef(0);
    const buttonRef = useRef(0);

    // loop for category to create links
    const categoryItems = category?.map((item, index) => {
        return (
            <Fragment key={index}>
                <Link href="/portfolio/portfolio-grid" passHref>
                    <LinkStyled className="a-reset mx-1">{item}</LinkStyled>
                </Link>
                {index + 1 !== category.length && ","}
            </Fragment>
        );
    });

    // animations
    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            if (isActive) {
                // spRef, h2Ref, buttonRef animation
                KUTE.allFromTo(
                    [spRef.current, h2Ref.current],
                    { translateY: -50, opacity: 0 },
                    { translateY: 0, opacity: 1 },
                    { easing: KUTE.Easing.easingCubicInOut, delay: 1600 }
                ).start();
                // buttonRef, pRef animation
                KUTE.allFromTo(
                    [buttonRef.current, pRef.current],
                    { translateY: 50, opacity: 0 },
                    { translateY: 0, opacity: 1 },
                    { easing: KUTE.Easing.easingCubicInOut, delay: 1600 }
                ).start();
                // h3Ref animation
                KUTE.fromTo(
                    h3Ref.current,
                    { opacity: 0 },
                    { opacity: 1 },
                    { easing: KUTE.Easing.easingCubicInOut, delay: 1600 }
                ).start();
            } else {
                // reset animation
                KUTE.allTo(
                    [
                        spRef.current,
                        pRef.current,
                        buttonRef.current,
                        h2Ref.current,
                        h3Ref.current,
                    ],
                    { translateX: 0, opacity: 0 },
                    { easing: KUTE.Easing.easingCubicInOut }
                ).start();
            }
        }
        return () => (isMounted = false);
    }, [isActive]);

    return (
        <SliderItemStyled>
            {/* Image */}
            <Image
                src={img}
                alt="slider"
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                blurDataURL="/img/bg/loading.WebP"
                data-swiper-parallax="900"
                data-swiper-parallax-duration="1500"
            />
            {/* Image */}
            <Overlay />
            {/* content */}
            <ContentStyled>
                <span
                    className="opacity-0 font-small text-capitalize text-neutral_200 mb-1"
                    ref={spRef}>
                    {categoryItems}
                </span>
                <H2Styled
                    className="opacity-0 text-center h1 font-500 m-0"
                    ref={h2Ref}>
                    {title}
                </H2Styled>
                <H3Styled
                    as={props.index === 0 && "h1"}
                    className="opacity-0 text-center h1 font-700 mb-3"
                    ref={h3Ref}>
                    DUBAI.
                </H3Styled>
                <PStyled
                    className="opacity-0 mb-4 text-center text-neutral_200"
                    ref={pRef}>
                    {description}
                </PStyled>
                <Link href="/portfolio/portfolio-single" passHref>
                    <DefaultButton
                        as="a"
                        className="a-reset opacity-0"
                        variant="primary"
                        borderRadius
                        ref={buttonRef}>
                        view case
                    </DefaultButton>
                </Link>
            </ContentStyled>
            {/* content */}
        </SliderItemStyled>
    );
}

// SliderItem PropTypes
SliderItem.propTypes = {
    item: PropTypes.shape({
        img: PropTypes.string.isRequired,
        title: PropTypes.string,
        description: PropTypes.string,
        category: PropTypes.array,
    }),
    index: PropTypes.number.isRequired,
};

export default SliderItem;
