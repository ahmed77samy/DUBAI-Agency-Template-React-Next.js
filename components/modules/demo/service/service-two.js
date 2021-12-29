import Section from "components/elements/layouts/section";
import { Col, Container, Row } from "react-bootstrap";
import ServiceItem from "./service-two-item";
import { service_items } from "./items";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, EffectCards } from "swiper";
import { useRef, useState } from "react";
import ServicePagination from "./service-two-pagination";
import SecHeader from "components/elements/layouts/sec-header";

SwiperCore.use([Pagination, EffectCards]);

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function Service(props) {
    const paginationRef = useRef(0);
    const [paginationProps, setPaginationProps] = useState(null);

    // loop for service_items to create ServiceItem
    const serviceItems = service_items.map((item, index) => {
        return (
            <SwiperSlide key={index}>
                <ServiceItem item={item} />
            </SwiperSlide>
        );
    });

    /**
     * change active class to Service Pagination
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
                    message="What we can do for you"
                    layer="service"
                />
                {/* header */}
                {/* content */}
                <Row className="layout-space">
                    {/* Pagination */}
                    <ServicePagination
                        ref={paginationRef}
                        items={service_items}
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
                            {serviceItems}
                        </Swiper>
                    </Col>
                    {/* Swiper */}
                </Row>
                {/* content */}
            </Container>
        </Section>
    );
}

export default Service;
