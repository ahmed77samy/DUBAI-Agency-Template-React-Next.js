import Section from "components/layouts/section";
import { Col, Container, Row } from "react-bootstrap";
import { digital_items } from "./items";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, EffectCards } from "swiper";
import { useRef, useState } from "react";
import DigitalPagination from "./digital-pagination";
import SecHeader from "components/layouts/sec-header";
import DigitalItem from "./digital-item";

SwiperCore.use([Pagination, EffectCards]);

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function Digital(props) {
    const paginationRef = useRef(0);
    const [paginationProps, setPaginationProps] = useState(null);

    // loop for digital_items to create DigitalItem
    const digitalItems = digital_items.map((item, index) => {
        return (
            <SwiperSlide key={index}>
                <DigitalItem item={item} />
            </SwiperSlide>
        );
    });

    /**
     * change active class to digital Pagination
     * @param {object} swiper
     * @param {number} current
     */
    const updateActive = (swiper, current, total) => {
        setPaginationProps({ swiper, current, total });
    };

    return (
        <Section {...props} padding={true}>
            <Container>
                {/* header */}
                <SecHeader
                    header="we are digital agency"
                    message="Our agency"
                    layer="agency"
                />
                {/* header */}
                {/* content */}
                <Row className="layout-space">
                    {/* Pagination */}
                    <DigitalPagination
                        ref={paginationRef}
                        items={digital_items}
                        paginationProps={paginationProps}
                    />
                    {/* Pagination */}
                    {/* Swiper */}
                    <Col xs={12}>
                        <Swiper
                            slidesPerView={1}
                            speed={600}
                            threshold={3}
                            grabCursor
                            effect="cards"
                            pagination={{
                                clickable: true,
                                el: paginationRef.current,
                                type: "custom",
                                renderCustom: updateActive,
                            }}
                            /**
                             * Delay execution for the refs to be defined
                             * Override prevEl & nextEl now that refs are defined
                             * Re-init navigation
                             */
                            onSwiper={(swiper) => {
                                setTimeout(() => {
                                    swiper.params.pagination.el =
                                        paginationRef.current;
                                    swiper.pagination.destroy();
                                    swiper.pagination.init();
                                    swiper.pagination.render();
                                    swiper.pagination.update();
                                });
                            }}>
                            {digitalItems}
                        </Swiper>
                    </Col>
                    {/* Swiper */}
                </Row>
                {/* content */}
            </Container>
        </Section>
    );
}

export default Digital;
