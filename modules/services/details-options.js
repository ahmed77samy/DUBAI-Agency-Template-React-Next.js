import SecHeader from "components/layouts/sec-header";
import Section from "components/layouts/section";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import { options_items } from "./items";
import OptionItem from "./option-item";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function DetailsOptions(props) {
    // loop for options_items to create OptionItem
    const optionsList = options_items.map((item, index) => {
        return <OptionItem item={item} key={index} />;
    });

    return (
        <Section {...props} padding>
            <Container>
                {/* header */}
                <SecHeader header="creative options" message="our services" align="center" />
                {/* header */}
                {/* content */}
                <Row className="layout-space align-items-center">
                    <Col xs={12} lg={6}>
                        {optionsList}
                    </Col>
                    <Col xs={12} lg={6}>
                        <Image src="/img/services/1.jpg" alt="service" width={640} height={480} objectFit="cover" placeholder="blur" blurDataURL="/img/bg/loading.WebP" />
                    </Col>
                </Row>
                {/* content */}
            </Container>
        </Section>
    );
}

export default DetailsOptions;
