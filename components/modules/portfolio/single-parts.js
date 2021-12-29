import Section from "components/elements/layouts/section";
import ThreeLines from "components/elements/layouts/three-lines";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import { parts_items } from "./items";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function SingleParts(props) {
    // loop for parts_items to create part item
    const partsItems = parts_items.map((img, index) => {
        return (
            <Col xs={12} md={6} lg={4} key={index} className="p-1">
                <Image
                    src={img}
                    alt="portfolio"
                    width={750}
                    height={500}
                    objectFit="cover"
                    layout="responsive"
                    placeholder="blur"
                    blurDataURL="/img/bg/loading.png"
                />
            </Col>
        );
    });

    return (
        <Section {...props} padding>
            <Container className="position-relative">
                <ThreeLines main x="right" />
                <ThreeLines main y="bottom" />
                <Row noGutters>{partsItems}</Row>
            </Container>
        </Section>
    );
}

export default SingleParts;
