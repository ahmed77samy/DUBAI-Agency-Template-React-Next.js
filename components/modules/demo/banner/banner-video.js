import PlayButton from "components/elements/buttons/play-button";
import SecHeader from "components/elements/layouts/sec-header";
import Section from "components/elements/layouts/section";
import ThreeLines from "components/elements/layouts/three-lines";
import Image from "next/image";
import { Container } from "react-bootstrap";
import {
    BannerVideoStyled,
    WrapperPlayStyled,
    WrapperStyled,
} from "./styled/banner-video-styled";
import { useState } from "react";
import Overlay from "core/overlay";
import DefaultModal from "core/modal";
import ReactPlayer from "react-player/lazy";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function BannerVideo(props) {
    const [toggler, setToggler] = useState(false);
    const [player, setPlayer] = useState({
        url: "https://www.youtube.com/watch?v=xE7vQoN-rXY",
        controls: true,
        playing: false,
        loop: false,
        width: "100%",
        height: "calc(100vh - 3.5rem - 75px - 50px)",
    });

    // toggle the toggler state
    const toggle = () => setToggler(!toggler);

    return (
        <BannerVideoStyled {...props} as={Section}>
            {/* Image */}
            <Image
                src="/img/bg/6.png"
                alt="banner-video"
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                blurDataURL="/img/bg/loading.png"
            />
            {/* Image */}
            <Overlay />
            {/* content */}
            <Container className="p-0 position-relative">
                <WrapperStyled>
                    <SecHeader
                        header="How is your visual identity?"
                        message="view by eyes"
                        layer="video"
                    />
                    <p className="d-none d-md-block">
                        A system that young people around the world with a club
                        culture and techno enthusiasts feel identified. We
                        generated a simple logo that is the basis for generating
                        a geometric and liquid system.
                    </p>
                    <p className="mb-5 d-none d-md-block">
                        A system that young people around the world with a club
                        culture and techno enthusiasts feel identified..
                    </p>
                    <WrapperPlayStyled>
                        <ThreeLines
                            x="left"
                            y="center"
                            className="d-none d-sm-flex"
                        />
                        <PlayButton
                            variant="primary"
                            className="ml-sm-auto"
                            onClick={toggle}
                        />
                    </WrapperPlayStyled>
                    {/* Modal */}
                    <DefaultModal
                        centered
                        size="xl"
                        show={toggler}
                        dialogClassName="w-90"
                        onHide={toggle}>
                        <DefaultModal.Header />
                        <DefaultModal.Body>
                            <ReactPlayer {...player} />
                        </DefaultModal.Body>
                    </DefaultModal>
                    {/* Modal */}
                </WrapperStyled>
            </Container>
            {/* content */}
        </BannerVideoStyled>
    );
}

export default BannerVideo;
