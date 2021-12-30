import PlayButton from "components/play-button";
import DefaultModal from "components/modal";
import Overlay from "components/overlay";
import Image from "next/image";
import PropTypes from "prop-types";
import { useState } from "react";
import {
    BannerVideoItemStyled,
    PlayButtonStyled,
} from "./styled/banner-video-item-styled";
import ReactPlayer from "react-player/lazy";
import {
    SoundCloudIcon,
    VimeoIcon,
    YoutubeIcon,
} from "components/core/icons";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function BannerVideoItem(props) {
    const { video, img, type } = props.item;
    const [toggler, setToggler] = useState(false);
    const [player, setPlayer] = useState({
        url: video,
        controls: true,
        playing: false,
        loop: false,
        width: "100%",
        height:
            type === "soundcloud"
                ? "50vh"
                : "calc(100vh - 3.5rem - 75px - 50px)",
    });

    // toggle the toggler state
    const toggle = () => setToggler(!toggler);

    return (
        <BannerVideoItemStyled onClick={toggle}>
            <Image
                src={img}
                alt="dubai-video"
                width={640}
                height={360}
                objectFit="cover"
                placeholder="blur"
                layout="responsive"
                blurDataURL="/img/bg/loading.WebP"
            />
            <Overlay
                bg="transparent"
                className="d-flex align-items-center justify-content-center">
                <PlayButtonStyled
                    as={PlayButton}
                    icon={
                        type === "soundcloud"
                            ? SoundCloudIcon
                            : type === "youtube"
                            ? YoutubeIcon
                            : type === "vimeo" && VimeoIcon
                    }
                    size="sm"
                />
            </Overlay>
            {/* Modal */}
            <DefaultModal
                centered
                show={toggler}
                dialogClassName={type === "soundcloud" ? "" : "w-90"}
                size="xl"
                onHide={toggle}>
                <DefaultModal.Header />
                <DefaultModal.Body>
                    <ReactPlayer {...player} />
                </DefaultModal.Body>
            </DefaultModal>
            {/* Modal */}
        </BannerVideoItemStyled>
    );
}

// BannerVideoItem PropTypes
BannerVideoItem.propTypes = {
    item: PropTypes.shape({
        video: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        type: PropTypes.oneOf(["youtube", "vimeo", "soundcloud"]).isRequired,
    }),
};

export default BannerVideoItem;
