import SecHeader from "components/layouts/sec-header";
import Section from "components/layouts/section";
import ThreeLines from "components/three-lines";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import WhatAboutItem from "./what-about-item";
import { what_about_item } from "./items";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function WhatAbout(props) {
    // loop for what_about_item to create WhatAboutItem
    const whatAboutLeft = what_about_item.map((item, index) => {
        return Math.floor(what_about_item.length / 2) > index && <WhatAboutItem item={item} key={index} index={index} />;
    });

    // loop for what_about_item to create WhatAboutItem
    const whatAboutRight = what_about_item.map((item, index) => {
        return Math.floor(what_about_item.length / 2) <= index && <WhatAboutItem item={item} key={index} index={index} />;
    });

    return (
        <Section {...props} padding={true}>
            <Container className="position-relative">
                {/* header */}
                <SecHeader header="what about" message="READ ABOUT US" layer="about" />
                {/* header */}
                <ThreeLines x="right" main={true} />
                <ThreeLines y="bottom" main={true} />
                <Row className="layout-space align-items-center">
                    {/* content Left */}
                    <Col xs={12} lg={4}>
                        {whatAboutLeft}
                    </Col>
                    {/* content Left */}
                    {/* image */}
                    <Col xs={12} lg={4}>
                        <Image src="/img/about/5.jpg" alt="about-us" width={700} height={980} objectFit="cover" layout="responsive" placeholder="blur" blurDataURL="/img/bg/loading.WebP" />
                    </Col>
                    {/* image */}
                    {/* content right */}
                    <Col xs={12} lg={4}>
                        {whatAboutRight}
                    </Col>
                    {/* content right */}
                </Row>
            </Container>
        </Section>
    );
}

export default WhatAbout;
