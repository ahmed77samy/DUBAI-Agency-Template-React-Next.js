import Overlay from "core/overlay";
import SecHeader from "components/elements/layouts/sec-header";
import Section from "components/elements/layouts/section";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import BannerVideoItem from "./banner-video-item";
import { banner_video_two } from "./items";
import { WrapperStyled,BannerVideoStyled } from "./styled/banner-video-two-styled";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function BannerVideo(props) {
    // loop for banner_video_two to create BannerVideoItem
    const videoItems = banner_video_two.map((item, index) => {
        return (
            <Col xs={12} md={4} key={index}>
                <BannerVideoItem item={item} />
            </Col>
        );
    });

    return (
        <BannerVideoStyled as={Section} {...props}>
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
                    <p className="mb-5 d-none d-md-block">
                        A system that young people around the world with a club
                        culture and techno enthusiasts feel identified. We
                        generated a simple logo that is the basis for generating
                        a geometric and liquid system. A system that young
                        people around the world with a club culture and techno
                        enthusiasts feel identified. We generated a simple logo
                        that is the basis for generating a geometric and liquid
                        system.
                    </p>
                    <Row className="layout-space">{videoItems}</Row>
                </WrapperStyled>
            </Container>
            {/* content */}
        </BannerVideoStyled>
    );
}

export default BannerVideo;
