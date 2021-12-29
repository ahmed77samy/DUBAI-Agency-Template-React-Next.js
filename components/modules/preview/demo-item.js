import PropTypes from "prop-types";
import { useCallback, useEffect, useRef } from "react";
import Link from "next/link";
import {
    ContentItemStyled,
    ContentStyled,
    DemoItemStyled,
    FigureStyled,
    LinkStyled,
} from "./styled/demo-item-styled";
import Image from "next/image";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function DemoItem(props) {
    const { name, img, description, route } = props.item;
    const itemRef = useRef(0);
    const contentRef = useRef(0);

    // set contentRef (top , left) to match event
    const myListener = useCallback((e) => {
        let top = Math.abs(e.offsetY);
        let left = Math.abs(e.offsetX);
        contentRef.current.style.top = `${top}px`;
        contentRef.current.style.left = `${left}px`;
    }, []);

    // add event and remove when did mount component or is show
    useEffect(() => {
        let itemref = itemRef.current
        itemref.addEventListener("mousemove", myListener);
        return () => itemref.removeEventListener("mousemove", myListener);
    }, [myListener]);

    /**
     * {@inheritdoc}
     */
    return (
        <DemoItemStyled {...props} ref={itemRef}>
            {/* Image */}
            <Link href={route} passHref>
                <LinkStyled className="a-reset">
                    <FigureStyled>
                        <Image
                            src={img}
                            alt={name}
                            width={800}
                            height={1080}
                            objectFit="cover"
                            placeholder="blur"
                            blurDataURL="/img/bg/loading.png"
                        />
                    </FigureStyled>
                </LinkStyled>
            </Link>
            {/* Image */}
            {/* content */}
            <ContentStyled className="light-mode" ref={contentRef}>
                <ContentItemStyled className="m-0 text-uppercase font-600">
                    {name}
                </ContentItemStyled>
                <ContentItemStyled
                    as="p"
                    className="m-0 text-capitalize font-italic">
                    {description}
                </ContentItemStyled>
            </ContentStyled>
            {/* content */}
        </DemoItemStyled>
    );
}

// DemoItem PropTypes
DemoItem.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        route: PropTypes.string.isRequired,
    }),
};

export default DemoItem;
