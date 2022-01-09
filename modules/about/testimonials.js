import SecHeader from "components/layouts/sec-header";
import Section from "components/layouts/section";
import { Container } from "react-bootstrap";
import { ControlStyled, ContentStyled, NextButtonStyled, PrevButtonStyled } from "./styled/testimonials-styled";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
import DefaultButton from "components/default-button";
import { ArrowLeftIcon, ArrowRightIcon } from "components/core/icons";
import { testimonial_items } from "./items";
import TestimonialItem from "./testimonial-item";
import { useRef } from "react";

SwiperCore.use([Navigation, Autoplay, EffectFade]);

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function Testimonials(props) {
    const prevRef = useRef(0);
    const nextRef = useRef(0);

    // loop for testimonial_items to create TestimonialItem
    const testimonialItems = testimonial_items.map((item, index) => {
        return <SwiperSlide key={index}>{(PropsSlide) => <TestimonialItem item={item} PropsSlide={PropsSlide} />}</SwiperSlide>;
    });

    return (
        <Section {...props} padding={true}>
            <Container>
                {/* header */}
                <SecHeader header="Feedback our clients." message="Clients See" layer="Testimonials" align="center" />
                {/* header */}
                {/* content */}
                <ContentStyled>
                    {/* Swiper */}
                    <Swiper
                        slidesPerView={1}
                        speed={600}
                        threshold={3}
                        grabCursor
                        effect="fade"
                        fadeEffect={{
                            crossFade: true
                        }}
                        autoplay={{
                            delay: 9000,
                            disableOnInteraction: false
                        }}
                        navigation={{
                            disabledClass: "disabled",
                            prevEl: prevRef.current,
                            nextEl: nextRef.current
                        }}
                        /**
                         * Delay execution for the refs to be defined
                         * Override prevEl & nextEl now that refs are defined
                         * Re-init navigation
                         */
                        onSwiper={(swiper) => {
                            setTimeout(() => {
                                swiper.params.navigation.prevEl = prevRef.current;
                                swiper.params.navigation.nextEl = nextRef.current;
                                swiper.navigation.destroy();
                                swiper.navigation.init();
                                swiper.navigation.update();
                            });
                        }}
                    >
                        {testimonialItems}
                    </Swiper>
                    {/* Swiper */}
                    {/* control */}
                    <ControlStyled>
                        <PrevButtonStyled as={DefaultButton} ref={prevRef} variant="neutral" size="sm" square>
                            <ArrowLeftIcon />
                        </PrevButtonStyled>
                        <NextButtonStyled as={DefaultButton} ref={nextRef} variant="neutral" size="sm" square>
                            <ArrowRightIcon />
                        </NextButtonStyled>
                    </ControlStyled>
                    {/* control */}
                </ContentStyled>
                {/* content */}
            </Container>
        </Section>
    );
}

export default Testimonials;
