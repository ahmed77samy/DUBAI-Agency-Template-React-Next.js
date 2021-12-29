import DefaultButton from "components/elements/buttons/default-button";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import KUTE from "kute.js";
import {
    ContentStyled,
    H1Styled,
    SliderStyled,
    WrapperButtons,
} from "./styled/slider-styled";
import Image from "next/image";
import Overlay from "components/elements/layouts/overlay";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function Slider(props) {
    const btn1Ref = useRef(0);
    const btn2Ref = useRef(0);
    const headerRef = useRef(0);

    // add animations
    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            // btn1 animation
            KUTE.fromTo(
                btn1Ref.current,
                { translateX: -100, opacity: 0 },
                { translateX: 0, opacity: 1 },
                { easing: KUTE.Easing.easingCubicInOut }
            ).start();
            // btn2 animation
            KUTE.fromTo(
                btn2Ref.current,
                { translateX: 100, opacity: 0 },
                { translateX: 0, opacity: 1 },
                { easing: KUTE.Easing.easingCubicInOut }
            ).start();
            // header animation
            KUTE.fromTo(
                headerRef.current,
                { translateY: -10, opacity: 0 },
                { translateX: 0, opacity: 1 },
                { easing: KUTE.Easing.easingCubicInOut }
            ).start();
        }
        return () => (isMounted = false);
    }, []);

    return (
        <SliderStyled {...props}>
            {/* Image */}
            <Image
                src="/img/bg/1.png"
                alt="slider-theme"
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                blurDataURL="/img/bg/loading.png"
            />
            {/* Image */}
            <Overlay />
            {/* content */}
            <ContentStyled as={Container} className="text-center">
                <div className="opacity-0" ref={headerRef}>
                    <span className="text-uppercase font-600">
                        Dubai React template
                    </span>
                    <H1Styled className="text-uppercase font-600">
                        The Best React Template
                    </H1Styled>
                </div>
                <WrapperButtons className="d-flex flex-wrap justify-content-center">
                    <Link href="#demos" passHref>
                        <DefaultButton
                            as="a"
                            className="opacity-0 a-reset"
                            ref={btn1Ref}
                            variant="primary"
                            borderRadius>
                            view demos
                        </DefaultButton>
                    </Link>
                    <Link href="/documentation" passHref>
                        <DefaultButton
                            as="a"
                            className="opacity-0 a-reset"
                            ref={btn2Ref}
                            borderRadius
                            border>
                            documentation
                        </DefaultButton>
                    </Link>
                </WrapperButtons>
            </ContentStyled>
            {/* content */}
        </SliderStyled>
    );
}

export default Slider;
