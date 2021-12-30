import SecHeader from "components/layouts/sec-header";
import Section from "components/layouts/section";
import ThreeLines from "components/three-lines";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import ExperienceItem from "./digital-experience-item";
import { digital_experience_item } from "./items";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function DigitalExperience(props) {
    // loop for digital_experience_item to create ExperienceItem
    const experienceItems = digital_experience_item.map(
        (item, index) => {
            return (
                <ExperienceItem item={item} key={index} index={index} />
            );
        }
    );

    return (
        <Section {...props} padding={true}>
            <Container className="position-relative">
                <ThreeLines main={true} />
                <ThreeLines x="right" y="bottom" main={true} />
                <Row className="layout-space align-items-center">
                    {/* image */}
                    <Col xs={12} lg={5}>
                        <Image
                            src="/img/about/1.jpg"
                            alt="about-us"
                            width={500}
                            height={700}
                            objectFit="cover"
                            placeholder="blur"
                            layout="responsive"
                            blurDataURL="/img/bg/loading.WebP"
                        />
                    </Col>
                    {/* image */}
                    {/* content */}
                    <Col xs={12} lg={7}>
                        <SecHeader
                            header="digital experience"
                            message="info for us"
                            layer="experience"
                        />
                        <p className="mb-5">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry s standard dummy text ever since the 1500s.
                        </p>
                        {experienceItems}
                    </Col>
                    {/* content */}
                </Row>
            </Container>
        </Section>
    );
}

export default DigitalExperience;
