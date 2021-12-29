import {
    SliderStyled,
    ContentStyled,
    H2Styled,
    H1Styled,
    WrapperStyled,
} from "./styled/slider-background-styled.js";
import ReactPlayer from "react-player/lazy";
import Overlay from "core/overlay.js";
import { useCallback, useEffect, useRef, useState } from "react";
import DefaultButton from "components/elements/buttons/default-button.js";
import Link from "next/link";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function Slider(props) {
    const sliderRef = useRef(0);
    const WrapperRef = useRef(0);
    const [player, setPlayer] = useState({
        url: "https://vimeo.com/119039021",
        muted: true,
        playing: true,
        loop: true,
        width: "100%",
        height: "100%",
    });

    // Set width and height to 100% and wrap the player in a fixed aspect ratio box to get a responsive player
    const fitContent = useCallback(() => {
        if (WrapperRef.current) {
            const width = document.documentElement.clientWidth;
            const height = document.documentElement.clientHeight;
            const ratio = 16 / 9;
            if (width / ratio < height) {
                let ratio_x = Math.ceil(height * ratio);
                WrapperRef.current.style.width = ratio_x + "px";
                WrapperRef.current.style.height = height + "px";
                WrapperRef.current.style.left = (width - ratio_x) / 2 + "px";
            } else {
                let ratio_y = Math.ceil(width / ratio);
                WrapperRef.current.style.width = width + "px";
                WrapperRef.current.style.height = ratio_y + "px";
                WrapperRef.current.style.left = 0;
            }
        }
    }, []);

    // if the slider in th viewport play
    //  pause if without viewport
    const pauseOutViewport = useCallback(() => {
        if (sliderRef.current) {
            /**
             * absolute position of player element
             * @returns {Boolean}
             */
            function isInView() {
                var rect = sliderRef.current.getBoundingClientRect();
                return !(
                    rect.top > document.documentElement.clientHeight - 300 ||
                    rect.bottom - 300 < 0
                ); // visible?
            }
            if (isInView()) {
                if (player.playing === false)
                    setPlayer({ ...player, playing: true }); // play if not playing
            } else {
                if (player.playing === true)
                    setPlayer({ ...player, playing: false }); // pause if playing
            }
        }
    }, [player]);

    useEffect(() => {
        document.addEventListener("scroll", pauseOutViewport);
        const resizeObserver = new ResizeObserver(fitContent);
        resizeObserver.observe(document.documentElement);
        return () => {
            document.removeEventListener("scroll", pauseOutViewport);
            resizeObserver.unobserve(document.documentElement);
        };
    }, [fitContent, pauseOutViewport]);

    return (
        <SliderStyled ref={sliderRef} {...props}>
            {/* Player */}
            <WrapperStyled ref={WrapperRef}>
                <ReactPlayer {...player} />
            </WrapperStyled>
            {/* Player */}
            <Overlay />
            {/* content */}
            <ContentStyled>
                <H2Styled className="text-center h1 font-500 m-0">
                    welcome in
                </H2Styled>
                <H1Styled className="text-center h1 font-700 mb-4">
                    Dubai.
                </H1Styled>
                <Link href={player.url} passHref>
                    <DefaultButton
                        as="a"
                        className="a-reset"
                        target="_blank"
                        borderRadius
                        size="sm">
                        show in vimeo
                    </DefaultButton>
                </Link>
            </ContentStyled>
            {/* content */}
        </SliderStyled>
    );
}

export default Slider;
