import {
    SliderStyled,
    ControlStyled,
    PrevButtonStyled,
    NextButtonStyled,
} from "./styled/slider-styled";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Parallax, Pagination } from "swiper";
import { slider_demo_items } from "./items";
import SliderItem from "./slider-item";
import SliderPagination from "./slider-pagination";
import { ArrowLeftIcon, ArrowRightIcon } from "components/core/icons";
import { useRef, useState } from "react";

SwiperCore.use([Navigation, Parallax, Autoplay, Pagination]);

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function Slider(props) {
    const paginationRef = useRef(0);
    const [paginationProps, setPaginationProps] = useState({});
    const prevRef = useRef(0);
    const nextRef = useRef(0);

    // loop for slider_demo_items to create SliderItem
    const slideItems = slider_demo_items.map((item, index) => {
        return (
            <SwiperSlide key={index}>
                {(PropsSlide) => (
                    <SliderItem item={item} index={index} PropsSlide={PropsSlide} />
                )}
            </SwiperSlide>
        );
    });

    // set pagination Props to swiper props
    const updateActive = (swiper) => {
        setPaginationProps({
            current: swiper.activeIndex + 1,
            total: swiper.slides.length,
        });
    };

    return (
        <SliderStyled {...props}>
            <Swiper
                slidesPerView={1}
                className="h-100"
                parallax={true}
                speed={1600}
                threshold={10}
                grabCursor
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                }}
                navigation={{
                    disabledClass: "disabled",
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                pagination={{
                    clickable: true,
                    el: paginationRef.current,
                    type: "progressbar",
                }}
                onActiveIndexChange={updateActive}
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
                        swiper.params.pagination.el = paginationRef.current;
                        swiper.pagination.destroy();
                        swiper.pagination.init();
                        swiper.pagination.render();
                        swiper.pagination.update();
                        updateActive(swiper);
                    });
                }}>
                {slideItems}
                {/* control */}
                <ControlStyled>
                    <PrevButtonStyled ref={prevRef}>
                        <ArrowLeftIcon className="mr-lg-3" />
                        <span className="font-small d-none d-lg-block text-white">
                            Prev Slide
                        </span>
                    </PrevButtonStyled>
                    <NextButtonStyled ref={nextRef}>
                        <span className="font-small d-none d-lg-block text-white">
                            Next Slide
                        </span>
                        <ArrowRightIcon className="ml-lg-3" />
                    </NextButtonStyled>
                    <SliderPagination
                        ref={paginationRef}
                        paginationProps={paginationProps}
                        className="d-none d-sm-flex"
                    />
                </ControlStyled>
                {/* control */}
            </Swiper>
        </SliderStyled>
    );
}

export default Slider;
